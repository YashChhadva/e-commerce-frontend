import React , {useEffect,useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import ProductsList from "./Sections/ProductsList.js";
// import Filters from './Sections/Filters';
import {getProducts , getCategories , getFilteredProducts} from '../../apifunctions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "../../components/CustomButtons/Button.js";
import checkboxstyles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";
import { prices } from "./fixedprices";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";



const dashboardRoutes = [];

const useStyles2 = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'400px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const useStyles = makeStyles(styles);
const usecheckboxstyles = makeStyles(checkboxstyles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [products, setProductsByArrival] = useState([]);
  const [categories,setCategories] = useState([]);
  const [checked, setCheked] = useState([]);
  const classes3 = useStyles2();
  const classes2 = usecheckboxstyles();
  const [selectedEnabled, setSelectedEnabled] = React.useState(prices[0].name);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(false);
  const [size, setSize] = useState(0);

  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
});

const loadFilteredResults = newFilters => {
  // console.log(newFilters);
  getFilteredProducts(skip, limit, newFilters).then(data => {
      if (data.error) {
          console.log(data.error)
      } else {
          // setFilteredResults(data.data);
          setProductsByArrival(data.data);
          setSize(data.size);
          setSkip(0);
      }
  });
};


const loadMore = () => {
  let toSkip = skip + limit;
  // console.log(newFilters);
  getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
      if (data.error) {
          setError(data.error);
      } else {
          setProductsByArrival([...products, ...data.data]);
          setSize(data.size);
          setSkip(toSkip);
      }
  });
};


const loadMoreButton = () => {
  return (
      size > 0 &&
      size >= limit && (
          <Button color = 'primary' onClick={loadMore}>
              Load more
          </Button>
      )
  );
};

const handleFilters = (filters, filterBy) => {
  // console.log("SHOP", filters, filterBy);
  const newFilters = { ...myFilters };
  newFilters.filters[filterBy] = filters;

  if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
  }
  // loadFilteredResults(myFilters.filters);
  setMyFilters(newFilters);
  console.log(myFilters)
};

const handlePrice = value => {
  const data = prices;
  let array = [];

  for (let key in data) {
      if (data[key]._id === parseInt(value)) {
          array = data[key].array;
      }
  }
  return array;
};

  // const [products] = useState(mockData);
  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
        console.log(data);
        if (data.error) {
            console.log(data.error);
        } else {
            setProductsByArrival(data);
        }
    });
};

const handleChange = name => event => {
  handleFilters(event.target.value , "price");
  // setValue(event.target.value);
  setSelectedEnabled(name);
};

const handleToggle = c => () => {
  // return the first index or -1
  const currentCategoryId = checked.indexOf(c);
  const newCheckedCategoryId = [...checked];
  // if currently checked was not already in checked state > push
  // else pull/take off
  if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
  } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
  }

  setCheked(newCheckedCategoryId);
  // console.log(newCheckedCategoryId);
  handleFilters(newCheckedCategoryId , "category");
};

const [open, setOpen] = React.useState(false);
  // const [checkedA, setCheckedA] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    loadFilteredResults(myFilters.filters);
    setOpen(false);
  };

useEffect(() => {
  loadProductsByArrival();
  // loadProductsBySell();
  init();
}, []);

const init = () => {
  getCategories().then(data => {
      if (data.error) {
          console.log(data.error)
      } else {
          setCategories(data);
        //   formData.set('shipping' , true);
      }
  });
};

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="E-stores"
        rightLinks={<HeaderLinks {...props}/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <div className={classes.container}>
          <h2 style={{textAlign:'center', color:'black' , margin:'auto'}}>All The Products Are Displayed Here</h2>
          <h4 style={{textAlign:'center' , width:'60%' , color:'#999' , margin:'auto'}}>You can even use the filters to search for your desired product</h4>
        <div>
                                <Button onClick={handleClickOpen} fullWidth color='google' size='lg'>Filters</Button>
                                <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} styles={{minwidth:'500px' , margin:'auto'}}>
                                    <DialogTitle>Select Category</DialogTitle>
                                    <DialogContent>
                                    <form className={classes3.container}>
                                       
                                        <FormControl className={classes3.formControl}>
                                        {
                                          categories && categories.map((c , i)=>(
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            tabIndex={-1}
                                            onClick={handleToggle(c._id)}
                                            checkedIcon={<Check className={classes2.checkedIcon} />}
                                            icon={<Check className={classes2.uncheckedIcon} />}
                                            checked = {checked.indexOf(c._id) !== -1}
                                            // value={true}
                                            classes={{
                                              checked: classes2.checked,
                                              root: classes2.checkRoot
                                            }}
                                          />
                                        }
                                        classes={{ label: classes2.label, root: classes2.labelRoot }}
                                        label={c.name}
                                        />
                                          ))}
                                        <h3>Prices Range</h3>
                                        {
                                          prices.map((p , i) =>(
                                          <FormControlLabel
                                          control={
                                            <Radio
                                              checked={selectedEnabled === `${p.name}`}
                                              onChange={handleChange(p.name)}
                                              value={p._id}
                                              name={p.name}
                                              aria-label="prices"
                                              icon={
                                                <FiberManualRecord className={classes2.radioUnchecked} />
                                              }
                                              checkedIcon={
                                                <FiberManualRecord className={classes2.radioChecked} />
                                              }
                                              classes={{
                                                checked: classes2.radio,
                                                root: classes2.radioRoot
                                              }}
                                            />
                                          }
                                          classes={{
                                            label: classes2.label,
                                            root: classes2.labelRoot
                                          }}
                                          label={p.name}
                                        />
                                          ))
                                          
                                        };
                                        </FormControl>
                                    </form>
                                    </DialogContent>
                                    <DialogActions>
                                    
                                    <Button onClick={handleClose} color="primary">
                                        Ok
                                    </Button>
                                    </DialogActions>
                                </Dialog>
            </div>
            
            <ProductsList products={products}/>
            {loadMoreButton()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Product from '../components/Product'
import { ProductConsumer } from '../context'
import {lists,categories,brands} from '../data'

export class ProductsList extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div style={{ margin: '2.5%' }}>
                    <div>
                        <center> <h1>{lists[this.props.list]}</h1></center>
                        <div style={{  backgroundColor: 'lightgrey', border: '1px solid black' ,float:'left',width:'20%',marginTop:'0.65%'}}>
                            <center>Filters</center>
                            <hr></hr>
                            <hr></hr>
                            <div><center>Sub-Category:</center>
                            {categories[this.props.list].map((cat,index)=>{
                                return <div style={{ marginLeft:'5%' }}><input type='checkBox' id={index}></input><b>{cat}</b></div>
                            })}
                            </div>
                            <hr></hr>
                            <div><center>Brands:</center>
                            {brands[this.props.list].map((cat,index)=>{
                                return <div style={{ marginLeft:'5%' }}><input type='checkBox' id={index}></input><b>{cat}</b></div>
                            })}
                            </div>       
                            <hr></hr>                                                 
                            <div><center>Price Range</center></div>                                                                                                                
                        </div>
                        <div style={{marginLeft:'20%' }}>
                            <div>
                                <ProductConsumer>
                                    {value => {
                                        return value.products.map(product => {
                                            if (product.category == lists[this.props.list] || this.props.list == 0) {
                                                return < Product key={product.id} product={product} />
                                            }
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductsList

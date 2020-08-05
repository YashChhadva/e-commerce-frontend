import React, { Component } from 'react'
import {data} from './data'


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: data
    }
    handleDetail = () => {
        console.log("Hello from handle detail");
    }
    addToCart = () => {
        console.log("Hello from add to cart");
    }
    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

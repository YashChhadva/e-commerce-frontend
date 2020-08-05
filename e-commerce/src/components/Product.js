import React, { Component } from 'react'
import { Card } from '@material-ui/core'
import ProductConsumer from '../context'

export default class Product extends Component {

    render() {
        const { id, name, reducedPrice, inCart } = this.props.product;
        return (
            <React.Fragment>
                <div style={{ float: 'left', margin: '0.75%', border: '2px solid black' }}>
                    <div>
                        <Card style={{ height: '500px', width: '400px', alignSelf: 'center', margin: '10px' }}></Card>
                        <div style={{ margin: '10px' }}>
                            <h4 style={{ float:'left' }}>{name}</h4>
                            <button style={{ float :'right',height: '25px', width: '25px',margin:'17px'}} disabled={inCart}>+</button>
                            <h3 style={{ float:'right' }}>Rs. {reducedPrice}</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

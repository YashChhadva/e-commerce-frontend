import React, { useEffect } from 'react';
import './productstyle.scss';

export default function Product(props){
    const {product , handleCart} = props;
    const {category} = product
    return(
        <section className="product">
        <div className="product__photo">
            <div className="photo-container">
                <div className="photo-main">
                    {/* <div className="controls">
                        <i className="material-icons">share</i>
                        <i className="material-icons">favorite_border</i>
                    </div> */}
                    <img src={`${process.env.REACT_APP_API}/product/photo/${product._id}`}/>
                </div>
                {/* <div className="photo-album">
                    <ul>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
                        <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
                    </ul>
                </div> */}
            </div>
        </div>
        <div className="product__info">
            <div className="title">
                <h1>{product.name}</h1>
                {/* <span>COD: 45999</span> */}
            </div>
            <div className="price">
            RS. <span>{product.reducedPrice}</span>
            </div>
            <div className="title">
            <p>{product.description}</p>
            </div>
            {/* <div className="variant">
                {/* <h3>SELECT A COLOR</h3> 
                <ul>
                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
                </ul>
            </div> */}
            {/* <div className="description">
                <h3>Category</h3>
                {/* <ul>
                    <li>{product.category}</li>
                    
                </ul> 
            </div> */}
            <button className="buy--btn" onClick = {handleCart}>ADD TO CART</button>
        </div>
    </section>

    );
}
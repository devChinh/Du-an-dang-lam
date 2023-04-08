import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productshop.css'

const ProductShop = ({ item}) => {
    return (
        <div className="container">
            <div className="ps-card">
            <div className="card-header">
                <Link to = {`/product/${item.slug}`}>
                  <img src={item.image} alt={item.title} />
                </Link>  
            </div>
            <div className="card-body">
                <h3 className="title">{item.title}</h3>
                <span>${item.price}</span>
            </div>
            <div className="card-footer">
            <button><i className="fa-solid fa-heart"></i></button>
            <button><i className="fa-solid fa-bag-shopping"></i></button>
            </div>
        </div>
        </div>
    );
}

export default ProductShop;

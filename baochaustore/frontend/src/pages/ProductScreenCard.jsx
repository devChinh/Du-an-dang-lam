import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/productscreencard.css";

function ProductScreenCard({product}) {

    const [selectedImage , setSelectedImage] = useState('')

  return (
    <>
      <Navbar />
      <div className="screen-container">
        <div className="screen-row">
          <div className="screen-col">
          <div className="screen-images">
                        <div className="screen-top">
                            <img src={selectedImage || product.image} alt={product.title} />
                        </div>
                        <div className="screen-bottom">
                            <img src={product.image} onClick={() => setSelectedImage(`${product.image}`)} alt={product.title} />
                            <img src={product.image1} onClick={() => setSelectedImage(`${product.image1}`)} alt={product.title} />
                            <img src={product.image2} onClick={() => setSelectedImage(`${product.image2}`)} alt={product.title} />
                            <img src={product.image3} onClick={() => setSelectedImage(`${product.image3}`)} alt={product.title} />
                        </div>
                    </div>
          </div>
          <div className="screen-col">
          <div className="first-div div">
                        <h2 className="title">{product.title}</h2>
                        <p className="category">{product.category}</p>
                    </div>
                    <div className="second-div div">
                        <span className="price">Price : ${product.price}</span>
                        <div className="quantity"> Quantity : 1</div>
                    </div>
                    <div className="third-div div">
                        <p className="desc">{product.desc}</p>
                    </div>
                    <div className="fourth-div div">
                        <button className="cart">Add to card</button>
                        <button className="wish">Add to wish</button>
                    </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductScreenCard;

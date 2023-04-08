import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsShop from "../components/ProductsShop";
import "../styles/shop.css";
import loader from  '../assets/images/loader.gif'

const Shop = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },2000);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="s-row">
          <div className="s-col">
            <ProductsShop />
          </div>
        </div>
      ) : (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;

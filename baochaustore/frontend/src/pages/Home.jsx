import React  , {CSSProperties } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banners from '../components/Banners';
import CategoryMain from '../components/CategoryMain';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductsHome from '../components/ProductsHome';
import Slider from '../components/Slider';
import loader from '../assets/images/loader.gif'
import '../styles/home.css'



const Home = () => {
    const [loading ,setLoading] = useState(false);

    useEffect(() => {
       setTimeout(() => {
        setLoading(true);
       } , 3000)
    } , [])
    return (
        <>
        {
            loading ?  <div>
            <Navbar />
            <Slider />
            <Banners />
            <CategoryMain />
            <ProductsHome />
            <Newsletter />
            <Footer />
        </div> : 
         <div className="loader">
            <img src={loader} alt="" />
         </div>
        }
        </>
       
    );
}

export default Home;

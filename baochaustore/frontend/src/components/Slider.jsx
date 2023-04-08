import React, { useState } from 'react';
import '../styles/slider.css'
import { useEffect } from 'react';
import axios from 'axios';

const Slider = () => {
    
    const [slideIndex , setSlideIndex] = useState(0)
    const [slider  , setSlider] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('http://localhost:5000/api/slider')
          setSlider(result.data)
        }
        fetchData()
      }, [])
      
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
           setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0) 
        }
    }
    return (
        <div className="s-container">
            <div className="s-arrow left" onClick={() => handleClick("left")}>
            <i className="fa-solid fa-circle-arrow-left"></i>
            </div>
            <div className="wrapper" slideindex={slideIndex} style={{ transform: `translateX(${slideIndex * -100}vw)`}}>
                {
                    slider.map((item) => (
                        <div className="slide" key={item._id}>
                        <div className="img-container">
                            <img src={item.image} className="s-img" alt="piano1" />
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className="s-arrow right" onClick={() => handleClick("right")}>
            <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
        </div>
    );
}

export default Slider;

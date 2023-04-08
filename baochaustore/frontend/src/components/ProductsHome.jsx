import React, { useEffect, useState } from 'react';
import ProductHome from './ProductHome';
import '../styles/productsHome.css'
import axios from 'axios';
import { useReducer } from 'react';
import logger from 'use-reducer-logger'

const reducer = (state , action) => {
    switch (action.type) {
      case 'FETCH_REQUEST' : 
      return {...state , loading: true}
      case 'FETCH_SUCCESS' : 
      return {...state , products : action.payload , loading: false}
      case 'FETCH_FAIL' : 
      return {...state , error : action.payload , loading: false}
      default : 
      return state
    }
  }
  

const ProductsHome = () => {

    // logger để log ra dữ liệu của reducer 
    const [ {loading, error , products}  , dispatch ] =  useReducer(logger(reducer)  , {
        products : [],
        loading: true , 
        error: ''
     })

    // const [products , setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type : 'FETCH_REQUEST'})
            try {
                const result = await axios.get('http://localhost:5000/api/products')
                dispatch({type : 'FETCH_SUCCESS' , payload : result.data})
            } catch (error) {
               dispatch({type : 'FETCH_ERROR', payload : error.message}) 
            }
        }
        fetchData()
      }, [])

    return (
        <div className="hps-container">
            <h2>Laster Product</h2>
            <div className="hps-row">
            {
                loading ? <h1>Loading...</h1> : error ? (<h1 className="error">{error}</h1>) :
                products.slice(-8).map(item => (
                    <ProductHome  item={item} key={item._id}/>
                ))
            }
            </div>
        </div>
);
}

export default ProductsHome;

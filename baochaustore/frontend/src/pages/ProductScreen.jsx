import axios from "axios";
import React, { useEffect } from "react";
import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { getError } from "../utils";
import ProductScreenCard from "./ProductScreenCard";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const { id } = useParams();

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        console.log('============= getError(error)',getError(error))
        dispatch({ type: "FETCH_ERROR", payload: getError(error) });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1 className="error">{error}</h1>
      ) : (
       <ProductScreenCard product={product}/>
      )}
    </div>
  );
};

export default ProductScreen;

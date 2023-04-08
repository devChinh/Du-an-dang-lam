import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/productHome.css";
import Quick from "./Quick";

const ProductHome = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hp-card" key={item._id}>
      <div className="card-header">
        <Link to={`/product/${item.slug}`}>
          <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="title">{item.title}</h3>
        <span>${item.price}</span>
      </div>
      <div className="card-footer">
        <button onClick={() => setOpen(true)}>
          <i className="fa-solid fa-eye"></i>
        </button>
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
        <button>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
      {open && <Quick item={item} />}
    </div>
  );
};

export default ProductHome;

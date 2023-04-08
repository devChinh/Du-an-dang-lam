import React, { useEffect, useState } from "react";
import "../styles/productsshop.css";
import axios from "axios";
import ProductShop from "./ProductShop";
import ReactPaginate from 'react-paginate';


const ProductsShop = () => {

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/products");
      setData(result.data);
      setFilters(result.data);
    };
    fetchData();
  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filters.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filters.length / itemsPerPage));
  }, [itemOffset, itemsPerPage , filters]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filters.length;
    setItemOffset(newOffset);
  };
   
  const filterResult = (catItem) => {
    const result = data.filter((x) => x.category === catItem);
    setFilters(result);
  };

  return (
    <div className="shop-container">
      <div className="shop-row">
        <div className="shop-col">
          <h2>CATEGORY</h2>
          <button className="shop-btn" onClick={() => setFilters(data)}>
            All
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <button className="shop-btn" onClick={() => filterResult("Men")}>
            Men
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="shop-btn" onClick={() => filterResult("Women")}>
            Women
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="shop-col">
          <div className="shop-products">
            {currentItems.map((item) => (
              <ProductShop item={item} key={item._id} />
            ))}
          </div>
          <div className="shop-pagination">
          <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        nextLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="active"
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShop;

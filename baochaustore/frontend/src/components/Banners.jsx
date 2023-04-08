import React from "react";
import "../styles/banner.css";

const Banners = () => {
  return (
    <div className="b-container">
      <div className="b-row">
        <div className="b-col">
          <i className="fa-solid fa-check"></i>
          <span>Chất lượng sản phẩm</span>
        </div>
        <div className="b-col">
          <i className="fa-solid fa-truck-fast"></i>
          <span>Miễn phí vận chuyển</span>
        </div>
        <div className="b-col">
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <span>14 Ngày hoàn trả</span>
        </div>
        <div className="b-col">
          <i className="fa-solid fa-phone"></i>
          <span>24/7 Hỗ trợ</span>
        </div>
      </div>
    </div>
  );
};

export default Banners;

import "./header.css";

import React, { useEffect, useRef } from "react";
// Đã loại bỏ useState và logic dropdown, cuộn để gọi từ index.js
import {
  initializeHeaderScrollLogic,
  initializeProductDropdownLogic,
  initializeNavigationLogic,
} from "../pages/index.js"; // Thay đổi đường dẫn import nếu cần

export function Header() {
  // 1. Dùng useRef để tham chiếu đến các phần tử DOM
  const headerRef = useRef(null);
  const productLinkRef = useRef(null);
  const listProductDropdownRef = useRef(null);

  // 2. Gọi logic cuộn Header trong useEffect
  useEffect(() => {
    // Chỉ gọi hàm DOM sau khi component đã mount
    return initializeHeaderScrollLogic(headerRef.current);
  }, []);

  // 3. Gọi logic dropdown trong useEffect
  useEffect(() => {
    // Chỉ gọi hàm DOM sau khi component đã mount
    return initializeProductDropdownLogic(
      productLinkRef.current,
      listProductDropdownRef.current
    );
  }, []);

  // 4. Gọi logic navigation (login) trong useEffect
  useEffect(() => {
    return initializeNavigationLogic();
  }, []);

  return (
    // 5. Gán ref vào các phần tử tương ứng
    <header id="header" ref={headerRef}>
      <div className="logo" id="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <nav className="navigation">
        <a href="/Contact">Contact</a>
        <a
          href="/product/product.html"
          className="product"
          id="product"
          ref={productLinkRef} // Gán ref
        >
          Product <i className="fa-solid fa-chevron-down"></i>
        </a>
        <div
          className="list-product"
          id="listProduct"
          ref={listProductDropdownRef}
        >
          {" "}
          {/* Gán ref */}
          <a href="">Tất cả sản phẩm</a>
          <a href="">Thuốc theo đơn</a>
          <a href="">Thuốc không theo đơn</a>
          <a href="">Thực phẩm chức năng</a>
          <a href="">Sản phẩm bán chạy</a>
        </div>
        <input
          type="text"
          className="find-product"
          required
          placeholder="Tìm tên thuốc"
        />
        <button className="btnLogin-popup">Login</button>
        <button className="btnShoppingCart">
          <i className="fa-solid fa-cart-shopping"></i> Giỏ hàng
        </button>
      </nav>
    </header>
  );
}

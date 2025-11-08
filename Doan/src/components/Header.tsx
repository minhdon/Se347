import { useRef, useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const timerRef = useRef<number | null>(null);
  const [isProductList, setIsProductList] = useState(false);

  const handleProductMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsProductList(true);
  };
  const handleProductMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsProductList(false);
    }, 100);
  };

  const productList = isProductList ? styles.active : "";

  return (
    <>
      <header id="header">
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo công ty" />
        </div>

        <nav className={styles.navigation}>
          <a href="/contact/contact.html">Contact</a>
          <a
            href="/product/product.html"
            className={styles.product}
            id="product"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            Product
            <i className="fa-solid fa-chevron-down"></i>{" "}
          </a>
          <div
            className={`${styles["list-product"]} ${productList}`}
            id="listProduct"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            <a href="">Tất cả sản phẩm</a>
            <a href="">Thuốc theo đơn</a>
            <a href="">Thuốc không theo đơn</a>
            <a href="">Thực phẩm chức năng</a>
            <a href="">Sản phẩm bán chạy</a>
          </div>
          <input
            type="text"
            className={styles["find-product"]}
            required
            placeholder="Tìm tên thuốc"
          />
          <button className={styles["btnLogin-popup"]}>Login</button>{" "}
          <button className={styles["btnShoppingCart"]}>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i> Giỏ hàng
          </button>
        </nav>
      </header>
    </>
  );
};

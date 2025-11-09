import React from "react";
import { Header } from "../../components/HeaderFooter/TSX/Header";
import { Container } from "../../components/Product/TSX/Container";
import "../CSS/ProductPage.css";
import { Footer } from "../../components/HeaderFooter/TSX/Footer";

function ProductPage() {
  return (
    <>
      <Header />
      <div className="product-page-wrapper">
        <Container />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;

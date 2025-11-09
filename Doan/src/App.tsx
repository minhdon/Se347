import React from "react";
import LandingPage from "./pages/TSX/LandingPage";
import { Route, Routes } from "react-router";
import ContactPage from "./pages/TSX/ContactPage";
import LoginPage from "./pages/TSX/LoginPage";
import RegisterPage from "./pages/TSX/RegisterPage";
import ForgotPasswordPage from "./pages/TSX/ForgotPasswordPage";
import ProductPage from "./pages/TSX/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />}></Route>
        <Route path="/Product" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

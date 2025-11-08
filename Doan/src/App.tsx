import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import { Register } from "./components/Register/TSX/Register";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

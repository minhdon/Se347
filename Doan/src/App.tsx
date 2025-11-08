import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

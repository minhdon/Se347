import React from "react";
import { Contact } from "../../components/Contact/TSX/Contact";
import { Header } from "../../components/HeaderFooter/TSX/Header";
import { Footer } from "../../components/HeaderFooter/TSX/Footer";

function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;

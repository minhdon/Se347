import React from "react";
import { Header } from "../components/HeaderFooter/TSX/Header";
import { Hero } from "../components/LandingPage/TSX/Hero";
import { About } from "../components/LandingPage/TSX/About";
import { Choice } from "../components/LandingPage/TSX/Choice";
import { WhyChoice } from "../components/LandingPage/TSX/whyChoice";
import { Certification } from "../components/LandingPage/TSX/Certification";
import { Feedback } from "../components/LandingPage/TSX/Feedback";
import { Footer } from "../components/HeaderFooter/TSX/Footer";
function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Choice />
      <WhyChoice />
      <Certification />
      <Feedback />
      <Footer />
    </>
  );
}

export default LandingPage;

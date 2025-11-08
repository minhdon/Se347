import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Choice } from "./components/Choice";
import { WhyChoice } from "./components/whyChoice";
import { Certification } from "./components/Certification";
import { Feedback } from "./components/Feedback";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Choice />
      <WhyChoice />
      <Certification />
      <Feedback />
    </>
  );
}

export default App;

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Choice } from "./components/Choice";
import { WhyChoice } from "./components/whyChoice";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Choice />
      <WhyChoice />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <AboutUs />
    </React.Fragment>
  );
}

import React from 'react'
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Sevices";
import About from './components/UI/About';

const App = () => {
  return (
   <>
     <Header />
     <Hero />
     <Services />
     <About />
   </>
  );
}

export default App;

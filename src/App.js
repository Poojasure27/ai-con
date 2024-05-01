import React from 'react'
import "./App.css";

import Header from "./components/Header/Header";
// import Login from './components/UI/Login';
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Sevices";
import About from './components/UI/About';
import Sample from './components/UI/Sample';
// import Carousel from './components/UI/Carousel';
import Footer from './components/footer/Footer';


const App = () => {
  return (
   <>
     <Header />
  
     <Hero />
     <Services />
     <About />
     <Sample />
     {/* <Carousel /> */}
     <Footer />
   </>
  );
}

export default App;

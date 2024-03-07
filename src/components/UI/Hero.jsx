import React from 'react'

import "../../styles/hero.css";

import heroImg from "../../images/hero.png";
const Hero = () => {
  return (
  <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div >
                <h2>AI-Driven Answers Tailored </h2>
                <h2>to Your Text</h2>
                <h2 className="highlight">Loremm Loremm</h2>
                </div>
                <p className='description'>Lorem ipsum dolor, sit amet consectetur  vel, ea molestias consequatur totam. Blanditiis obcaecati rem id ducimus!</p>
                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>
                </div>
            </div>
            <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
  );
}

export default Hero

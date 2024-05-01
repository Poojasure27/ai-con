import React from 'react'
import { useNavigate } from 'react-router-dom';

import "../../styles/hero.css";

import heroImg from "../../images/hero.png";
const Hero = () => {

    const navigate = useNavigate();

    const handlePrimaryBtnClick = () => {
      // Redirect to the "image" page
      navigate('/image');
    };
     
  
    const handleSecondaryBtnClick =() => {
        window.location.href = 'https://docs-ai-three.vercel.app/';
    }

  return (
  <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div >
                <h2>AI-Driven Answers Tailored </h2>
                <h2>to Your Text</h2>
                <h2 className="highlight">Create and Engage</h2>
                </div>
                <p className='description'>Transform words into visuals: Unleash the power of AI imagery and document insight, all through intuitive chat</p>
                <div className="hero__btns">
                <button className="primary__btn" onClick={handlePrimaryBtnClick}>Get Started Now</button>
                    <button className="secondary__btn" onClick={handleSecondaryBtnClick}>Discover More</button>
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

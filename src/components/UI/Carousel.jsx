import React from 'react'
import "../../styles/caurousel.css";

import Slider from "react-slick";
import sliderImg1 from "../../images/sliderimg1.jpeg";

const Carousel = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    sliderToShow: 1,
    slidesToScroll: 1
  }
  return (
    <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitles">Carousel</h6>
                <h2>Trusted by more than <span className="highlight">lorem lorem</span></h2>
            </div>
            <div className="slider__wrapper">
            <Slider {...settings}>
            <div className='slider__item'>
                 <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laborum doloribus voluptates est commodi obcaecati cum exercitationem, deleniti illo quasi adipisci, corporis facilis esse dolor culpa aspernatur incidunt aliquam nemo.</p>

                 <div className="project__details">
                    <div className="project__img">
                       <img src={sliderImg1} alt="" /> 
                    </div>

                  <div>
                    <h5 className="project__name">Lion</h5>
                    <p className="description">CEO,Netflix</p>
                  </div>
                 </div>
            </div>

            
        </Slider>
            </div>
        </div>
    </section>
  );
};

export default Carousel

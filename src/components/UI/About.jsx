import React from 'react'
import "../../styles/about.css";

import aboutImg from "../../images/firstRight.png";

const chooseData = [
    {
       icon: "ri-image-line",
       title: "Image",
       description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ea non odio accusamus odit officiis dolor facilis error, eum numquam cum tempore culpa corrupti ad accusantium quis hic. Vel, inventore?"
    },
    {
        icon: "ri-group-line",
        title: "Dedicated team",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ea non odio accusamus odit officiis dolor facilis error, eum numquam cum tempore culpa corrupti ad accusantium quis hic. Vel, inventore?"
     },
     {
        icon: "ri-file-line",
        title: "Document",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ea non odio accusamus odit officiis dolor facilis error, eum numquam cum tempore culpa corrupti ad accusantium quis hic. Vel, inventore?"
     },
]





const About = () => {
  return (<section id="about">
   <div className="container">
    <div className="about__wrapper">
        <div className="about__content">
        <h6 className='subtitles'>Why choose us?</h6>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h2 className="highlight">Image Generation</h2>
            <p className='description about__content-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsam sit, ipsa soluta nostrum, a corporis consectetur, aliquid aspernatur numquam ratione quam eum deserunt sunt vel enim eligendi? Commodi, ex.</p>

           <div className='choose__item-wrapper'>
            {
                chooseData.map((item,index) => (
                    <div className="choose__us-item" key={index}> 
                    <span className="choose__us-icon"><i class={item.icon}></i></span>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.description}</p></div>  
                ))
            }
           </div>
        </div>

        <div className="about__img">
            <img src= {aboutImg} alt="imgGen" />
        </div>
    </div>
   </div>


  </section>
  );
};

export default About

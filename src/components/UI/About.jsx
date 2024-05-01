import React from 'react'
import "../../styles/about.css";

import aboutImg from "../../images/firstRight.png";

const chooseData = [
    {
       icon: "ri-image-line",
       title: "Image",
       description : "Elevate your content with precision-crafted visuals. Our innovative platform transforms prompts into striking images, tailored to your vision. Experience the power of AI-con imagery today"
    },
    {
        icon: "ri-group-line",
        title: "Dedicated team",
        description : "Experience the expertise of our dedicated team, committed to bringing your vision to reality. With skillful hands and innovative minds, we deliver results that exceed expectations, every time"
     },
     {
        icon: "ri-file-line",
        title: "Document",
        description : "Effortlessly enhance your productivity with our document generation tool. Input your prompts, and our advanced technology will meticulously craft professional documents tailored to your specifications with precision and efficiency."
     },
]





const About = () => {
  return (<section id="about">
   <div className="container">
    <div className="about__wrapper">
        <div className="about__content">
        <h6 className='subtitles'>Why choose us?</h6>
            <h2>Unlock imagination, Streamline Process</h2>
            <h2 className="highlight">Image Generation</h2>
            <p className='description about__content-desc'>Turn your ideas into vivid visuals effortlessly with AI-con. Just give us your prompts, and let our tech bring them to life in stunning detail!</p>

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

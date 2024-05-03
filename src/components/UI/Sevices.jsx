import React from 'react';
import "../../styles/services.css";
import AIImage from "../../images/ai.jpg"; 
import DocumentUploaderImage from "../../images/docs.jpg"; 

const Sevices = () => {
  return (
    <section id='service'>
      <div className="container">
        <div className="service__top-content">
          <h6 className='subtitles'>Our Services</h6>
          <h2>Save time managing your production</h2>
          <h2 className="highlight">with our services</h2>
        </div>

        <div className="service__items">
          {/* First Service */}
          <div className="service__item">
            <img src={AIImage} alt="AI Image Generator" />
            <h3>AI Image Generator</h3>
            {/* <p>Generate images using advanced AI algorithms.</p> */}
          </div>

          {/* Second Service */}
          <div className="service__item">
            <img src={DocumentUploaderImage} alt="Document Uploader" />
            <h3>Document Uploader</h3>
            {/* <p>Upload documents and get prompt-based answers using advanced document analysis.</p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sevices;

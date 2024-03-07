import React from 'react'
import "../../styles/sample.css";

import sampleImg from "../../images/sampleImg1.png";
import sampleImg2 from "../../images/sampleImg2.jpeg";
import sampleImg3 from "../../images/sampleImg3.jpeg";
import sampleImg4 from "../../images/sampleImg4.jpeg";


const sampleData = [{

 imgUrl: sampleImg,
 prompt: "A man with a Lion"
},
{

    imgUrl: sampleImg2,
    prompt: "A man with a Lion"
   },
   {

    imgUrl: sampleImg3,
    prompt: "A man with a Lion"
   },

   {
      imgUrl: sampleImg4,
      prompt: "A man with a Lion"
     }



]



const Sample = () => {
  return ( <section className='our__samples'> 
    <div className="container">
        <div className="sample__content">
            <h6 className="subtitles">sample</h6>
            <h2>our sample <span className='highlight'>Images</span></h2>
        </div>
    

    <div className="sample__wrapper">
       {
        sampleData.map((item,index) => (
            <div className="sample__item" key={index}>
            <div className="sample__img">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="sample__details">
                <h4>image 1</h4>
                <p className="description">{item.prompt}</p>

                
            </div>
        </div>
        ))
       }
    </div>
    </div>
  </section>
    
  );
}

export default Sample

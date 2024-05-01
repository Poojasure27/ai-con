import React from 'react'
import "./footer.css";

const quickLinks01 = [{
    path:"#",
    display: "91+ 7654738765",
    // icon: ""
},
{
    path:"#",
    display: "aicon@gmail.com",
    // icon:""
},

{
    path:"#",
    display: "Bangalore",
    // icon:""
}

]

const quickLinks02 = [{
    path:"#",
    display: "Instagram",
    // icon: "fa-brands fa-instagram"
},
{
    path:"#",
    display: "Facebook",
    // icon:"fa-brands fa-facebook"
},
{
    path:"#",
    display: "Twitter",
    // icon: "fa-brands fa-twitter"
}

]

const Footer = () => {

    const year = new Date().getFullYear()
  return (
   <footer className='footer'>
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>AICON</h2>
                <p className="description">Grow with us</p>
                <p className="small__text description">Stay updated on the latest in AI image generation. For inquiries or support, reach out to our team. Experience seamless image generation for your projects</p>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">solutions</div>
                <ul className="quick__links ">
                    {
                        quickLinks01.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">socials</div>
                <ul className="quick__links">
                    {
                        quickLinks02.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>




        </div>

        <p className="copyright">Copyright {year}, developed by Team 13. All rights reserved.</p>
    </div>
   </footer>
  )
}

export default Footer

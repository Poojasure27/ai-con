import React from 'react'
import "./footer.css";

const quickLinks01 = [{
    path:"#",
    display: "Lorem"
},
{
    path:"#",
    display: "Lorem"
},
{
    path:"#",
    display: "Lorem"
}

]

const quickLinks02 = [{
    path:"#",
    display: "lorem"
},
{
    path:"#",
    display: "Lorem"
},
{
    path:"#",
    display: "Lorem"
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
                <p className="small__text description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam veritatis minus! Ipsa ex temporibus voluptatum dolore suscipit numquam eos?</p>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">solutions</div>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item,index) => (
                            <li className='quick__link-item' key={index}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>


            <div className="footer__quick-links">
                <div className="quick__links-title">solutions</div>
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

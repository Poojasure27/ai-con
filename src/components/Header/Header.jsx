import React from 'react'
import "./Header.css";


const nav__links = [{
  path:'#home',
  display:"Home"
},
{
  path:'#about',
  display:"About"
},
{
  path:'#image',
  display:"Image"
},
{
  path:'#docs',
  display:"Docs"
}
]

const Header = () => {
  return (
  
      <header className='header'>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>AI_CON</h2>
                    <p>Grow with us</p>
                </div>

                {/* navigation */}

                <div className="navigation">
                  <ul className="menu">
                    {
                       nav__links.map((item,index) => (
                        <li className='menu__item'><a href={item.path} className='menu__link'>{item.display}</a></li>
                       ))}
                  </ul>
                </div>


            </div>
        </div>
      </header>
   
  );
}; 

export default Header

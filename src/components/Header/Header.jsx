import React, {useEffect, useRef} from 'react'
import "./Header.css";


const nav__links = [{
  path:'#about',
  display:"About"
},
{
  path:'#service',
  display:"Image"
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

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header__shrink')
    }else{
      headerRef.current.classList.remove('header__shrink')
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', headerFunc)
    return () => window.removeEventListener('scroll',headerFunc)
  },[]);


  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };


  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
  return (
  
      <header className='header' ref={headerRef}>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>AI_CON</h2>
                   
                </div>

                {/* navigation */}

                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  <ul className="menu">
                    {
                       nav__links.map((item,index) => (
                        <li className='menu__item' key={index}><a href={item.path}  onClick={handleClick} className='menu__link'>{item.display}</a></li>
                       ))}
                  </ul>
                </div>

              <span className="mobile__menu" onClick={toggleMenu}><i className="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </header>
   
  );
}; 

export default Header

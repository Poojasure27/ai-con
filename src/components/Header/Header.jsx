import React, { useEffect, useRef } from 'react';
import "./Header.css";
import "../../Login";
import Image from "../../Image"; 
import { useNavigate } from 'react-router-dom';

const nav__links = [
  {
    path: '#about',
    display: "About"
  },
  {
    path: '#service',
    display: "Service"
  },
  {
    path: '/image',
    display: "Image"
  },
  {
<<<<<<< HEAD
    path: "https://ai-doc-con.vercel.app/", // Modify this path to match your Next.js application URL
=======
    path: "https://ai-doc-con.vercel.app/",
>>>>>>> ce5f7ed1cf290447db884cb5f242dbdbfead7403
    display: "Docs"
  }
  // {
  //   path: "/login",
  //   display: "Login"
  // }
];

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (headerRef.current) { // Check if headerRef.current is not null
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();

    if (path === '/image') {
      navigate(path); // Navigate to '/image' route
    } else if (path.startsWith('#')) {
      // If the path starts with '#', assume it's an internal anchor link
      const targetId = path.slice(1); // Remove the '#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const location = targetElement.offsetTop;
        window.scrollTo({
          left: 0,
          top: location - 80,
          behavior: 'smooth' // Optionally smooth scrolling
        });
      }
    } else {
      // For external links, simply redirect the user
      window.location.href = path;
    }
  };

  const toggleMenu = () => {
    if (menuRef.current) { // Check if menuRef.current is not null
      menuRef.current.classList.toggle('menu__active');
    }
  };

  return (
    <header className='header' ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>AI_CON</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className='menu__item' key={index}>
                  <a href={item.path} onClick={(e) => handleClick(e, item.path)} className='menu__link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

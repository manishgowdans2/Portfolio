import React, { useState } from 'react';
import "./NavbarStyle.css";
import { Link } from 'react-router-dom';

const Navbar = ()=>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div className='Header'>
            <div className='logo'>
            <Link className='logoText' to="/">Portfolio</Link>
            </div>
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </div>
            <div className='hamburger' >
               <div className={`hamburgerLogo ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {isOpen ? 'X' : '☰' }
              </div> 
          </div>
        </div>
    )
}

export default Navbar;
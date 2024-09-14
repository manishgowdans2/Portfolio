import React, { useEffect, useState } from 'react';
import "./NavbarStyle.css";
import { Link } from 'react-router-dom';
import NavbarLogo from '../assets/NavbarLogo.png'
const Navbar = ()=>
{
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 0)
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div className={`Header ${scrolled ? 'scrolled' : ''}`}>
            <div className='logo'>
            <Link className={`logoText ${scrolled ? 'scrolled' : ''}`} to="/Portfolio">Portfolio | SDE</Link>
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
import React from 'react';
import './HomeScreen.css';
import HomeLogo from '../assets/homeLogo4.png'
import AboutMeLogo from '../assets/AboutMeLogo.png';
import Carousel from './Carousel';

const HomeScreen = () =>{
   return(
       <div className='home-container'>
           <div className='home-screen-part-1'>
               <div className='text'>
                   <h1>Hi👋 There, Nice To meet you 😊</h1>
                   <p> Welcome to my portfolio, <br /> hope you have fun exploring</p>
               </div>
               <div className='image'>
                   <img src={HomeLogo} alt='home Logo' />
               </div>
           </div>

           <div className='heading'>
               <h2>Quick Introduction</h2>
               <h3> About Me</h3>
           </div>

           <div className='home-screen-part-2'>
                   <div className='image'>
                       <img src={AboutMeLogo} alt='AboutMeLogo' />
                   </div>
                   <div className='sections'>
                       <Carousel />
                   </div>
            </div>
       </div>
    )
}

export default HomeScreen;
import React from 'react';
import './HomeScreen.css';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import Carousel from './Carousel';
import ProjectsCarousel from './ProjectsCarousel';
import { BsMailbox } from 'react-icons/bs';

const HomeScreen = () =>{
   return(
    <div className='home'>
    <div className='home-container'>
        <div className="profile-screen-part-1">
        <p className="bio">Hey 👋 There, nice to meet you 😊</p>
        <p className="bio1">Quick introduction about me</p>
        <h1 className="name">Manish Gowda NS</h1>
        <h2 className="role">Software Developer</h2>
        <div className="links">
          {/* <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="link">
            <FaGithub/>
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="link">
            <FaLinkedin/>
          </a> */}
          {/* <p>You can contact me here </p>
          <a href="manishgowdans2@gmail.com" target="_blank" rel="noopener noreferrer" className="link">
            <BsMailbox/>
          </a> */}
        </div>
      </div>
      <div className='profile-screen-part-2'>
      <Carousel/>
      </div>
    </div>
    <ProjectsCarousel/>
    </div>
    )
}

export default HomeScreen;
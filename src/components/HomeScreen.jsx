import React, { useState } from 'react';
import './HomeScreen.css';
import profile from '../assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeScreen = () =>{
   return(
    <div className='home-container'>
        <div className="profile-screen-part-1">
        <h1 className="name">Manish Gowda NS</h1>
        <h2 className="role">SDE 1</h2>
        <p className="bio">Enthusiastic and guick learner, with capable of adapting newer technologies, and build solutions 
        with following of latest principles of software development.</p>
        <div className="links">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="link">
            <FaGithub/>
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="link">
            <FaLinkedin/>
          </a>
        </div>
      </div>
      <div className='profile-screen-part-2'>
      <img
          src={profile}
          alt="Profile"
          className="picture"
        />
      </div>
    </div>
    )
}

export default HomeScreen;
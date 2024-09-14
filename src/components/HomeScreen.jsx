import React from 'react';
import './HomeScreen.css';
import ProjectsCarousel from '../components/ProjectsCarousel';

const HomeScreen = () =>{
   return(
    <div className='home'>
    <div className='home-container'>
        <h1>Hi There</h1>
    </div>
    <ProjectsCarousel/>
    </div>
    )
}

export default HomeScreen;
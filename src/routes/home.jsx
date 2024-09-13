import React from 'react';
import Navbar from '../components/Navbar';
import HomeScreen from '../components/HomeScreen';
import ProjectsCarousel from '../components/ProjectsCarousel';
import "./home.css";
const Home = () =>
{
    return <>
    <div className='navbar'>
    <Navbar/>
    </div>
    <div>
    <HomeScreen/>
    </div>
    <div>
    <ProjectsCarousel/>
    </div>
    </>
}

export default Home;
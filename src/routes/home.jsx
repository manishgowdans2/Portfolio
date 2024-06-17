import React from 'react';
import Navbar from '../components/Navbar';
import HomeScreen from '../components/HomeScreen';
import "./home.css";
const Home = () =>
{
    return <>
    <div className='navbar'>
    <Navbar/>
    </div>
    <div style={{ height: '1500px' }}>
    <HomeScreen/>
    </div>

    </>
}

export default Home;
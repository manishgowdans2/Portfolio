import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const cards = [
    {
      title: 'Skills',
      content: (
        <ul>
          <li>JavaScript - Advanced</li>
          <li>React - Advanced</li>
          <li>CSS - Intermediate</li>
          <li>Node.js - Intermediate</li>
        </ul>
      ),
    },
    {
      title: 'Projects',
      content: (
        <ul>
          <li>Project A - Description</li>
          <li>Project B - Description</li>
          <li>Project C - Description</li>
        </ul>
      ),
    },
    {
      title: 'Experience',
      content: (
        <ul>
          <li>Company A - Role - 2021-Present</li>
          <li>Company B - Role - 2018-2021</li>
          <li>Company C - Role - 2015-2018</li>
        </ul>
      ),
    },
    {
      title: 'Testimonials',
      content: (
        <ul>
          <li>"John is a fantastic developer!" - Client A</li>
          <li>"Great to work with!" - Client B</li>
          <li>"Highly recommend!" - Client C</li>
        </ul>
      ),
    },
  ];

//   const nextCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const prevCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

useEffect(()=>{
    const interval = setInterval(()=>{
        setTransition(false);
        setTimeout(()=>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            setTransition(true);
        }, 500)
       
    }, 3000); //change card every 3 seconds

    return () => clearInterval(interval);

}, [cards.length]);

const goToCard = (index) =>{
    setTransition(false);
    setTimeout(()=>{
        setCurrentIndex(index);
        setTransition(true);
    }, 500);
}
  return (
    <div className="carousel-container">
      <div className={`carousel-card ${transition ? 'transition' : ''}`}>
        <h2 className='title'>{cards[currentIndex].title}</h2>
        <p>{
            cards[currentIndex].content
        }</p>
      </div>
      <div className='pagination'>
        {
            cards.map((_, index)=>(
                <span
                key={index}
                className={`dot ${index === currentIndex ? 'active': ''}`}
                onClick={()=> goToCard(index)}
                ></span>
            ))
        }
      </div>
    </div>
  );
};

export default Carousel;

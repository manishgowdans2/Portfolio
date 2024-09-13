import React, {useState} from 'react';
import './ProjectsCarousel.css';
import { FaGithub } from 'react-icons/fa';

const ProjectsCarousel = () =>
 {
    const cards = [
        {
          title: 'Augmented Reality Learn Suite',
          content: (
            <p>This is the description which should be 
              filled later in detail about the projects.
            </p>
          ),
          link: ""
        },
        {
          title: 'Shopping Cart API',
          content: (
            <p>This API provides endpoints for managing shopping cart system.
            </p>
          ),
          link: ""
        },
        {
          title: 'Product Management',
          content: (
            <p>The aim is to store user data securely and provide services related to the stored information and maintain a secure environment without any breach of data.
            </p>
          ),
          link: ""
        },
        {
          title: 'FRIGHT-Food Done Right',
          content: (
            <p>This project is all about how we implement our ideas to reduce food wastage
            </p>
          ),
          link: ""
        }
    ]

    return <div className='projects-carousel'>
      <h1>A Curated Collection of Projects I've Crafted</h1>
      <div className='projects-carousel-view'>
        {cards.map((card, index) => (
          <div className='cards' key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="link">
            <FaGithub/>
            </a>
            </div>
        ))}
        </div>
    </div>
}

export default ProjectsCarousel;
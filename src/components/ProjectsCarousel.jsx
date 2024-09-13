import React from 'react';
import './ProjectsCarousel.css';

const ProjectsCarousel = () =>
 {
    const cards = [
        {
          title: 'Project Title',
          content: (
            <p>This is the description which should be 
              filled later in detail about the projects.
            </p>
          ),
        }
    ]

    return <div className='projects-carousel'>
        {cards.map((card, index) => (
          <div className='cards' key={index}>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
            </div>
        ))}
    </div>
}

export default ProjectsCarousel;
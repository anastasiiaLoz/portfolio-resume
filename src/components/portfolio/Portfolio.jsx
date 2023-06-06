import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";
import IMG5 from "../../assets/5.png";
import IMG6 from "../../assets/6.jpg";
import IMG7 from "../../assets/7.png";
import IMG8 from "../../assets/8.png";
import IMG9 from "../../assets/9.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MERN Social Media App",
    github: "https://github.com/anastasiiaLoz/Fullstack-responsive-MERN-app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio",
    github: "https://github.com/anastasiiaLoz/portfolio-resume",
    demo: "1"
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather",
    github: "https://github.com/anastasiiaLoz/weather-app-react-redux",
    demo: "https://weather-anastasiia-lozovych.netlify.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Movie Finder",
    github: "https://github.com/anastasiiaLoz/movies-finder-themoviedb-api",
    demo: "https://themoviedb-api-movie-finder-al.netlify.app/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Nested Accordion",
    github: "https://github.com/anastasiiaLoz/nested-accordion-react",
    demo: "https://nested-accordion-reactjs.netlify.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Shop",
    github: "https://github.com/anastasiiaLoz/shop",
  },
  {
    id: 7,
    image: IMG7,
    title: "Slim Mom",
    github: "https://github.com/nazarsilveroff/hydeem-reactivno/tree/dev",
    demo: "https://hydeem-reactivno.netlify.app/"
  },
  {
    id: 8,
    image: IMG8,
    title: "Weather Forecast",
    github: "https://github.com/GeorgiyT/goit-js-project-forca",
    demo: "https://georgiyt.github.io/goit-js-project-forca/"
  },
  {
    id: 9,
    image: IMG9,
    title: "NodeJS Backend for Kapusta Project",
    github: "https://github.com/anastasiiaLoz/backend-kapusta-project",
    demo: "https://kozubskyi-goit-kapusta.netlify.app/authorization"
    
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./portfolio.css";
import IMG from "../../assets/me.png";
import IMG1 from "../../assets/me.png";
import IMG2 from "../../assets/me.png";
import IMG3 from "../../assets/me.png";
import IMG4 from "../../assets/me.png";
import IMG5 from "../../assets/me.png";

const data = [
  {
    id: 1,
    image: IMG,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18418524-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id: 2,
    image: IMG1,
    title: "Title2",
    github: "https://github.com",
    demo: "1"
  },
  {
    id: 3,
    image: IMG2,
    title: "Title3",
    github: "https://github.com",
    demo: "1"
  },
  {
    id: 4,
    image: IMG3,
    title: "Title4",
    github: "https://github.com",
    demo: "1"
  },
  {
    id: 5,
    image: IMG4,
    title: "Title5",
    github: "https://github.com",
    demo: "1"
  },
  {
    id: 6,
    image: IMG5,
    title: "Title6",
    github: "https://github.com",
    demo: "1"
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

import React, { useRef } from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";



const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondColumn, setIsOpenSecondColumn] = useState(false);
  
  const ref1 = useRef();
  const ref2 = useRef();
  

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (ref1.current.style.height){
      ref1.current.style.height  = "";
    } else {
      ref1.current.style.height  = "auto";
    }
  };

  const handleClickSecondColumn = () => {
    setIsOpenSecondColumn(!isOpenSecondColumn);
    if (ref2.current.style.height){
      ref2.current.style.height  = "";
    } else {
      ref2.current.style.height  = "auto";
    }
  };
  

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Work Experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p className="service_workplace">Personal Projects</p>
                <p>MERN Social Media App</p>
                <p>Portfolio</p>
                <p>Weather</p>
                <p>Movie Finder</p>
                <p>Nested Accordion</p>
                <p>Shop</p>
              </div>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p className="service_workplace">Team Projects</p>
                <p>Slim Mom</p>
                <p>Weather Forecast</p>
                <p>NodeJS Backend for Kapusta Project</p>
              </div>
            </li>
          </ul>
        </article>
        
        <div className="experience_container">
        <article ref={ref1} className="service">
          <div className="service__head">
            <h3>Customer Service Representative</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <div>
                <p className="service_workplace">Teleperformance</p>
                <p>Lisbon, Portugal</p>
                <p>Customer Service Support | December 2021 - March 2023 </p>
              </div>
            </li>
            <li>
            <BiCheck className="service__list-icon" />
            <div>
              <p className="service_workplace">In White</p>
              <p>Odessa, Ukraine</p>
              <p>Wholesale Manager | August 2019 - December 2019</p>
            </div>
          </li>
          <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Hotel Hermes</p>
            <p>Odessa, Ukraine</p>
            <p>Receptionist | January 2013 - August 2013</p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Yunost Hotel</p>
            <p>Odessa, Ukraine</p>
            <p>Receptionist | July 2012 - January 2013</p>
          </div>
        </li>
          </ul>
        </article>
        <button className="btn btn-primary" onClick={handleClick}>{isOpen ? "Hide" : "See More" }</button>
        </div>
        <div  className="experience_container">
        <article ref={ref2} className="service">
          <div className="service__head">
            <h3>Hospitality</h3>
          </div>
          <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Pasta Non Basta</p>
            <p>Lisbon, Portugal</p>
            <p>Customer Service Support | December 2021 - March 2023 </p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Em Alta na baixa Restaurant by Fullest</p>
            <p>Lisbon, Portugal</p>
            <p>Waitress | January 2020 - May 2020</p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Jellyfish Manly</p>
            <p>Manly, Sydney, NSW, Australia | December 2017 - June 2019</p>
            <p>Assistant Manager</p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Cavallino Restaurante</p>
            <p>Sydney, NSW, Australia</p>
            <p>Waitress | August 2017 - December 2017</p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Aleixo Restaurante Deli e Bar</p>
            <p>Vitoria, ES, Brazil</p>
            <p>Restaurant Manager | June 2015 - July 2017</p>
          </div>
        </li>
        <li>
          <BiCheck className="service__list-icon" />
          <div>
            <p className="service_workplace">Princess Cruises</p>
            <p>USA</p>
            <p>Waitress | August 2013 - January 2015</p>
          </div>
        </li>
          </ul>
        </article>
        <button className="btn btn-primary" onClick={handleClickSecondColumn}>{isOpenSecondColumn ? "Hide" : "See More"}</button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

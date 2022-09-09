import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/me.png";
import Avatar2 from "../../assets/me.png";
import Avatar3 from "../../assets/me.png";
import Avatar4 from "../../assets/me.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam cupiditate ut error ratione eos nemo, velit sapiente fugiat nihil aspernatur vero dignissimos, pariatur illo, officia modi minus optio aperiam?"
  },
  {
    avatar: Avatar2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam cupiditate ut error ratione eos nemo, velit sapiente fugiat nihil aspernatur vero dignissimos, pariatur illo, officia modi minus optio aperiam?"
  },
  {
    avatar: Avatar3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam cupiditate ut error ratione eos nemo, velit sapiente fugiat nihil aspernatur vero dignissimos, pariatur illo, officia modi minus optio aperiam?"
  },
  {
    avatar: Avatar4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam cupiditate ut error ratione eos nemo, velit sapiente fugiat nihil aspernatur vero dignissimos, pariatur illo, officia modi minus optio aperiam?"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

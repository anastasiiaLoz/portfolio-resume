import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/tetiana.jpeg";
import Avatar2 from "../../assets/delgado.jpeg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Tetiana Zakharchenko",
    review:
      "It was our last coaching and it's always sad to say goodbye to someone. Time flew and it was a big pleasure to work with you! You are an amazing person with a lot of good qualities and I have no doubts you will fulfill your potential and achieve great success in any area of development that you choose. Always stay positive as you are! Thanks you for everything!"
  },
  {
    avatar: Avatar2,
    name: "Iaroslavna Delgado",
    review:
      "This is the person who has become for me an example of perfect colleague. I mean she's smart, responsible, funny. She always ready to help. She's also a motivation for others because she has impressive results."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations from Supervisor and colleguage</h5>
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

import React from 'react'
import './testimonials.css'
import Avt1 from "../../assets/avatar1.jpg"
import Avt2 from "../../assets/avatar2.jpg"
import Avt3 from "../../assets/avatar3.jpg"
import Avt4 from "../../assets/avatar4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id veniam, voluptate dicta autem quibusdam inventore hic nihil fugiat laboriosam est illo eius modi praesentium illum facere repellat odio! Quod?'
  },
  {
    avatar: Avt2,
    name: 'Shatte Male',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id veniam, voluptate dicta autem quibusdam inventore hic nihil fugiat laboriosam est illo eius modi praesentium illum facere repellat odio! Quod?'
  },
  {
    avatar: Avt3,
    name: 'Kwame Suoi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id veniam, voluptate dicta autem quibusdam inventore hic nihil fugiat laboriosam est illo eius modi praesentium illum facere repellat odio! Quod?'
  },
  {
    avatar: Avt4,
    name: 'Totiw Potiw',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id veniam, voluptate dicta autem quibusdam inventore hic nihil fugiat laboriosam est illo eius modi praesentium illum facere repellat odio! Quod?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )})
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
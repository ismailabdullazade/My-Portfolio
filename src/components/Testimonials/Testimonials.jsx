import React from 'react'
import './testimonials.css'
import ref_letter from "../../assets/Reference letter İsmayil.pdf"
import Avt1 from "../../assets/avatar11.jpeg"
import Avt2 from "../../assets/avatar12.png"
// import Avt3 from "../../assets/avatar3.jpg"
// import Avt4 from "../../assets/avatar4.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    // avatar: Avt3,
    name: 'Eyyub Zeynalov',
    address:'eyyub.Z@aplusa-security.com',
    position:"Manager of Support and Development department at 'A+A Security LLC'",
    review: 'Ismail is dedicated to providing quality work. He checks and rechecks his software before turning it in for presentation to the client. He strives to make his programs as user friendly as possible understanding that not everyone is an expert programmer. He is detail oriented and rarely has any bugs in his finished product. Dean’s energy is limitless and his enthusiasm serves to motivate everyone on his team. He will be greatly missed at "A+A Security LLC" but we know he will succeed wherever he goes.'
  },
  {
    avatar: Avt1,
    name: 'Kamran Jabiev',
    address:'kamran.jabiyev@code.edu.az',
    position:".Net Developer and Senior .Net Instructure at 'Code Academy'",
    review: "Ismail takes his work very seriously and regularly enrolled in classes to stay abreast of the newest developments in programming.His ongoing professional development courses helped him to easily learn new techniques and perform complex tasks the first time around. Although Ismail is a fast-learner, he is very careful and cautious about his work.I strongly recommend Ismail for any mid-level development position. And with the right guidance and training, I have no doubt Ismail could excel in an upper-level development position. He's simply that good."
  },
  {
    avatar: Avt2,
    name: 'Nijat Talibov',
    position: 'Senior Fullstack developer(7+ years experience)',
    review: 'Ismail is passionate about writing code and solving clients’ problems through the development of creative and innovative software. He has tremendous potential that is not being fulfilled in his current position.He is friendly, easy to get along with, well-liked by our clients and respected by his co-workers.'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <h5>Review from clients</h5> */}
      {/* <h2>Testimonials</h2> */}

      <div className='cta cta_ref_let'>
        <a className='btn' href={ref_letter} download>Download Reference Letter</a>
        
    </div>

      <Swiper className="container testimonials__container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,position,review,address},index) => {
            return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <h4 className="client__name">{position}</h4>

              <small className="client__review">{review}</small>
              <a className="client__name">{address}</a>
              

            </SwiperSlide>
          )})
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
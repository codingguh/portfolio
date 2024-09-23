import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/sertifikat-react-expert.jpg";
import Image3 from "../../assets/sertifikat-flutter-fundamental.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "Sertifikat Dicoding",
      subtitle: "React js Developer Expert",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "Sertifikat Dicoding",
      subtitle: "Flutter Fundamental",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Sertification</h2>

      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
      grabCursor={true}
      loop={true}
      className="testimonials__container grid"
    >
        {data.map(({ id, image, title,subtitle,comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>

              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

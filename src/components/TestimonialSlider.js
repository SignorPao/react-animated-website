import React from "react";

// import testimonials data
import { testimonialsData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      // slidesPerView={1.2}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, name, web, message, delay } = slide;
        // slide
        return (
          <SwiperSlide
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
            key={index}
          >
            {/* avatar */}
            <img
              src={image}
              alt="avatar"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay={delay}
            />

            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <div className="max-w-[340px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

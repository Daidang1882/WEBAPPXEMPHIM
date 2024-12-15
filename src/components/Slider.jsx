import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Import image
import banner1 from "../assets/images/bannermovie/01.png";
import banner2 from "../assets/images/bannermovie/02.png";
import banner3 from "../assets/images/bannermovie/03.png";
import banner4 from "../assets/images/bannermovie/04.png";
function Slieder() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="slide-margin">
        <img src={banner1} alt="" width="auto" height="500" />
      </SwiperSlide >
      <SwiperSlide className="slide-margin">
        <img src={banner2} alt="" width="auto" height="500" />
      </SwiperSlide >
      <SwiperSlide className="slide-margin">
        <img src={banner3} alt="" width="auto" height="500" />
      </SwiperSlide>
      <SwiperSlide className="slide-margin">
        <img src={banner1} alt="" width="auto" height="500" />
      </SwiperSlide>
      <SwiperSlide className="slide-margin">
        <img src={banner2} alt="" width="auto" height="500" />
      </SwiperSlide>
      <SwiperSlide className="slide-margin">
        <img src={banner3} alt="" width="auto" height="500"/>
      </SwiperSlide>
      <SwiperSlide className="slide-margin">
        <img src={banner4} alt="" width="auto" height="500"/>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slieder;

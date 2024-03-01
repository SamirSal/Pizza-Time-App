import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "../../../node_modules/swiper/swiper-bundle.min.css";
import f1 from "../../assets/images/featured.webp";
import f2 from "../../assets/images/featured2.webp";
import f3 from "../../assets/images/featured3.webp";
import "../Slider/slider.css";
function Slider1() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{ backgroundColor: "#d1411e" }}
    >
      <SwiperSlide>
        <img src={f2}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={f1}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={f3}></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider1;

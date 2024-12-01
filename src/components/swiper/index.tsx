import { Swiper, SwiperSlide } from "swiper/react";

import Img from "../../assets/img.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";

export function Carousel() {
  const images = [Img, Img3, Img4, Img5];
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      keyboard={{ enabled: true }}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className="brightness-125" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

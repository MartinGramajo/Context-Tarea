// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Image } from "react-bootstrap";

export default function CartasComponent({ heroes }) {
  return (
    <div className="centrado">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {heroes.map((hero, id) => (
            <SwiperSlide key={hero.id}>
              <div className="container">
                <div className="d-flex justify-content-between my-2">
                  <div className="fs-12">#{id}</div>
                  <div className="fs-12">{hero.publisher}</div>
                </div>
                <div className="text-center mt-4">
                  <Image className="imagen-card" src={hero.url} alt="" />
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                  <h6>{hero.superhero}</h6>
                  <h6 className="fs-12">{hero.characters}</h6>
                </div>
                <div></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </div>
  );
}

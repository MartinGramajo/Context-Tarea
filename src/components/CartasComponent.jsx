import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartasComponent({ heroes }) {
  return (
    <div className="centrado">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
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
              <div className="text-center">
                <h6>{hero.superhero}</h6>
                <h6 className="fs-12">{hero.characters}</h6>
              </div>
              <div className="text-center ">
                <Link
                  className="btnfos btnfos-4 text-decoration-none "
                  to={`/heroe/${hero.id}`}
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

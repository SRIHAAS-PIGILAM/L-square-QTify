import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";

function Carousel({
  data,
  renderComponent,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div
        ref={prevRef}
        className={styles.prev}
      >
        <LeftNavigation />
      </div>

      <div
        ref={nextRef}
        className={styles.next}
      >
        <RightNavigation />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={7}
        allowTouchMove={true}
        watchOverflow={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (
              swiper &&
              swiper.params &&
              swiper.navigation
            ) {
              swiper.params.navigation.prevEl =
                prevRef.current;

              swiper.params.navigation.nextEl =
                nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
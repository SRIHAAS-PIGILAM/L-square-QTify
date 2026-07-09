// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// import styles from "./Carousel.module.css";

// import LeftNavigation from "../LeftNavigation/LeftNavigation";
// import RightNavigation from "../RightNavigation/RightNavigation";

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <LeftNavigation />
//       <RightNavigation />

//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           prevEl: ".custom-prev",
//           nextEl: ".custom-next",
//         }}
//         spaceBetween={18}
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//           },
//           576: {
//             slidesPerView: 3,
//           },
//           768: {
//             slidesPerView: 4,
//           },
//           1024: {
//             slidesPerView: 5,
//           },
//           1280: {
//             slidesPerView: 6,
//           },
//           1440: {
//             slidesPerView: 7,
//           },
//         }}
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id}>
//             {renderComponent(item)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import styles from "./Carousel.module.css";

import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <LeftNavigation />
      <RightNavigation />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        slidesPerView={7}
        slidesPerGroup={1}
        spaceBetween={18}
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
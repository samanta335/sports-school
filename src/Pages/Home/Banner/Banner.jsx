import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <img
            src="https://www.totalsportal.com/wp-content/uploads/2021/12/Sports-Pictures-1200x715.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=""
            src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.healthshots.com/healthshots/en/uploads/2022/08/29155214/sports.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.cnbcfm.com/api/v1/image/104048950-GettyImages-557920441.jpg?v=1665838801&w=1920&h=1080"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

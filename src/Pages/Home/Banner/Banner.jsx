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
            className="mx-auto"
            src="https://grammarvocab.com/wp-content/uploads/2023/03/Sports-name-list-with-pictures-feature-1024x576.png"
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
        {/* <SwiperSlide>
          <img
            className="mx-auto w-1/2"
            src="https://media.istockphoto.com/id/1136317339/photo/sports-equipment-on-floor.jpg?s=612x612&w=0&k=20&c=-aI8u_Se89IC-HJZYH724ei5z-bIcSvRW6qUwyMtRyE="
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;

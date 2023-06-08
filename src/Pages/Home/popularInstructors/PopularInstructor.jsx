import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const PopularInstructor = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mt-16 uppercase font-medium">
        Popular Instructors
        <br />
        ----------------------
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <img
            src="https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-12T130434Z_965380455_UP1EICC10BJ0O_RTRMADP_3_SOCCER-WORLDCUP-ARG-CRO-PREVIEW-1.jpg?w=770&resize=770%2C505"
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructor of Football sport</p>
            <p>Name- Scaloni</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pbs.twimg.com/media/FvMnP93WYAAmr1-?format=jpg&name=medium"
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructors of Cricket sport</p>
            <p>Name- kanan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1162974893/photo/cheerful-athletic-man-smiling-after-training-on-tennis-court.jpg?s=612x612&w=0&k=20&c=-NypjaIJAr9Mp3LlEIvnYhQk5w5osXN8CJWJJFGXTXA="
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructor of Tennis sport</p>
            <p>Name- Andy janson</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1135084417/photo/lady-basketball-coach-on-court.jpg?s=612x612&w=0&k=20&c=Fjgr35Jnvvyqd6z_yN0-MFePrALhqoEEvACn0-gCLnE="
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructor of Basketball sport</p>
            <p>Name- Alvin</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.badmintonplanet.com/wp-content/uploads/2023/03/3-5-2023-badminton-news-Herry-Iman-Pierngadi-Confirms-Job-Offer-From-China.jpg"
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructor of Badminton sport</p>
            <p>Name- Paul Stewart</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d1s9j44aio5gjs.cloudfront.net/2022/07/Alisha-1200x675.png"
            alt=""
          />
          <div className="text-center">
            <p className="text-2xl">Instructor of Swimming sport</p>
            <p>Name- Savana</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularInstructor;

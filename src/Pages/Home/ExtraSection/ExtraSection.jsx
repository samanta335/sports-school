import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const ExtraSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <h1 className="text-3xl text-center mt-10 uppercase font-medium">
              Reviews About School
              <br />
              ----------------------
            </h1>
            <div className="flex flex-col items-center mx-24 my-10">
              <img className="rounded-full w-12  " src={review.img} alt="" />
              <h3 className="text-2xl text-purple-600 uppercase">
                {review.name}
              </h3>
              <Rating
                style={{ maxWidth: 120 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraSection;

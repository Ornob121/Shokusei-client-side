import "./Reveiws.css";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Reveiws.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import f1 from "../../../public/reviews/f1.png";
import f2 from "../../../public/reviews/f2.png";
import f4 from "../../../public/reviews/f4.png";
import f5 from "../../../public/reviews/f5.png";

const Reviews = () => {
  const [customerReviews, setCustomerReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setCustomerReviews(data));
  }, []);

  return (
    <div className="grid grid-cols-2 mb-40">
      <div className="bg-img">
        <div className="flex justify-evenly pt-[500px] pb-16 items-center">
          <img className="w-[98px] h-6" src={f1} alt="" />
          <img className="w-[98px] h-6" src={f2} alt="" />
          <img className="w-[98px] h-6" src={f4} alt="" />
          <img className="w-[98px] h-6" src={f5} alt="" />
        </div>
      </div>
      <div className="bg-zinc-100">
        <h5 className="text-red-400 text-xl text-center font-semibold pt-16">
          Testimonial
        </h5>
        <h3 className="text-6xl pt-4 font-medium text-center">Happy Users</h3>
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
          className="mySwiper mt-12"
        >
          {customerReviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="text-center">
                <p className="pb-20">{review.review_description}</p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={Math.round(review.rating)}
                  readOnly
                  className="mx-auto"
                />
                <h5 className="text-xl tracking-wide pt-4">
                  {review.people_name}
                </h5>
                <p>
                  <small>{review.people_job}</small>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

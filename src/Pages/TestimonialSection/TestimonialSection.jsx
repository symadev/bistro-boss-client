import Titles from "../../Components/Titles/Titles";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="bg-white text-black py-16 px-4">
      <Titles
        heading={"---What Our Clients Say---"}
        subHeading={"TESTIMONIALS"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-3xl mx-auto">
        {
          reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center text-center px-6 md:px-16 lg:px-24 space-y-4">
                {/* Rating */}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                
                {/* Quote Icon */}
                <FaQuoteLeft className="text-4xl text-black" />

                {/* Review Details */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {review.details}
                </p>

                {/* Reviewer Name */}
                <h3 className="text-lg md:text-xl font-semibold text-orange-500 uppercase">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default TestimonialSection;

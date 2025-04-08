import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import Titles from '../../../Components/Titles/Titles';

const Category = () => {
    return (
        <section>
            <Titles
            heading={"From 11:00am to 10:00pm"}
            subHeading={"ORDER ONLINE"}
            ></Titles>


<Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="mySwiper mb-24"
    breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    }}
>
    <SwiperSlide>
        <div className="relative">
            <img src={slide1} alt="Salads" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl text-white uppercase drop-shadow-md text-center">
                Salads
            </h2>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="relative">
            <img src={slide2} alt="Soups" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl text-white uppercase drop-shadow-md text-center">
            Pizzas
            </h2>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="relative">
            <img src={slide3} alt="Pizzas" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl text-white uppercase drop-shadow-md text-center">
            Soups
            </h2>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="relative">
            <img src={slide4} alt="Desserts" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl text-white uppercase drop-shadow-md text-center">
                Desserts
            </h2>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="relative">
            <img src={slide5} alt="Salads" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl lg:text-4xl text-white uppercase drop-shadow-md text-center">
                Salads
            </h2>
        </div>
    </SwiperSlide>
</Swiper>

   
        </section>
         );
};

export default Category;
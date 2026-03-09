"use client";
//import swiper report components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span className="block">Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos voluptatum omnis molestiae voluptatibus. Consequuntur
              quod, quaerat quam id debitis tempora vero sit minus totam
              exercitationem adipisci delectus, maiores nihil dolor.
            </p>
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] "
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex justify-end pt-45">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px] ">
            <h1 className="h1 text-center lg:text-left mb-2">
              <span className="block">Where hard</span> work meets success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos voluptatum omnis molestiae voluptatibus. 
            </p>
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] "
            />
          </div>
        </div>
      </SwiperSlide>
      {/*swiper nav button */}

      <SwiperNavButtons
  containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
  btnStyles="border border-accent text-white w-[56px] h-[56px] flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition-all duration-300"
  iconStyles=""
/>
    </Swiper>
  );
};

export default HeroSlider;

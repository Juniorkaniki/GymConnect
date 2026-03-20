"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/navigation";

import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const sliderData = [
  {
    title: "Where hard work meets success",
    subtitle: "Rejoignez GymnConnect, l'élite du fitness. Musculation, cardio et crossfit dans un environnement conçu pour la performance.",
    buttonText: "Get started",
  },
  {
    title: "Push your limits every day",
    subtitle: "Des équipements de pointe et une communauté soudée pour vous aider à atteindre vos objectifs les plus ambitieux.",
    buttonText: "Our Classes",
  },
];

const HeroSlider = () => {
  return (
    <Swiper 
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="h-full"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* CORRECTION 1 : pb-40 sur mobile pour laisser de la place aux flèches, lg:pb-0 sur ordi */}
          <div className="h-full flex justify-end pt-48 pb-40 lg:pb-0 container mx-auto ">
            <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
              
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="h1 text-center lg:text-left mb-2 uppercase"
              >
                <span className="block text-accent">Where hard</span> work meets success
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white italic text-center lg:text-left mb-4 text-lg"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="mb-12 lg:mb-8"
              >
                <CustomButton
                  text={slide.buttonText}
                  containerStyles="w-[196px] h-[62px]"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* CORRECTION 3 : Ajustement de la hauteur (h-auto) et du positionnement (bottom) */}
      <SwiperNavButtons
        containerStyles="absolute bottom-8 lg:bottom-12 right-0 h-auto w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-4"
        btnStyles="border border-accent text-accent w-[56px] h-[56px] flex items-center justify-center rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  );
};

export default HeroSlider;
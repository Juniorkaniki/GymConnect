"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// animation
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum omnis molestiae voluptatibus.",
    name: "Maria Garcia",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">

        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount:0.2}}
          className="h2 text-center mb-10"
        >
          NOS TEMOIGNAGES
        </motion.h2>

        {/* slider */}
        <motion.div
        variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount:0.2}}
        >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonialData.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl h-full flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-300">

                <Image
                  src={person.img}
                  width={90}
                  height={90}
                  alt={person.name}
                  className="rounded-full border-2 border-accent mb-4"
                />

                <FaQuoteLeft className="text-2xl text-gray-400 mb-2" />

                <p className="max-w-[300px] mb-4 text-sm">
                  {person.message}
                </p>

                <span className="text-lg text-accent font-semibold py-6">
                  {person.name}
                </span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;
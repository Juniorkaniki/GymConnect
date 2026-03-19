"use client";
//import swiper report components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg ",
    date: "march 10, 2026",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];
const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="h2 text-center mb-12"
        >
          Blogs
        </motion.h2>

        {/* slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              
            },
            1400:{
              slidesPerView:4,
            }
          }}
          className="h-[420px] md:max-w-[660px] lg:max-w-none  mb-8"
        >
          {blogData.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col">
                {/* image */}
                <Image
                  src={post.img.trim()}
                  width={320}
                  height={260}
                  alt={post.title}
                  className="mb-6 object-cover w-full"
                />

                {/* text */}
                <div className="flex flex-col items-start">
                  <span className="text-sm text-gray-300 mb-2">
                    {post.date}
                  </span>

                  <Link href={post.href}>
                    <h5 className="hover:text-accent transition-all duration-300 cursor-pointer">
                      {post.title}
                    </h5>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;

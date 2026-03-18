 
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

const Blog = () => {
  return (
    <section  className="h-screen bg-emerald-300" id="blog">Blog</section >
  );

}

export default Blog;
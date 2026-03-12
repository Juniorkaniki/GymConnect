"use client";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

//import swiper components

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { title } from "process";

//membership slider data
const membershipData = [
  {
    title: "Standard ",
    price: "$29.99",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: " Mondays-Friday gym access only",
      },
      {
        icon: FaCheck,
        text: "Full acces to everything",
      },
      {
        icon: MdClose,
        text: "No additionnal amenities",
      },
    ],
  },
  {
    title: "Ultimate ",
    price: "$45",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: " Mondays-Friday gym access only",
      },
      {
        icon: FaCheck,
        text: "Full acces to everything",
      },
      {
        icon: MdClose,
        text: "No additionnal amenities",
      },
    ],
  },
  {
    title: "Professionnal ",
    price: "$60",
    benefits: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: " Mondays-Friday gym access only",
      },
      {
        icon: FaCheck,
        text: "Full acces to everything",
      },
      {
        icon: FaCheck,
        text: "No additionnal amenities",
      },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper>
      {membershipData.map((membership, index) => (
        <SwiperSlide key={index}>
          <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
          div
            <h3 className="text-xl font-bold mb-4">{membership.title}</h3>
            <p className="text-2xl font-bold mb-4">{membership.price}</p>
            <ul className="space-y-2">
              {membership.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-center">
                  <benefit.icon className="text-green-500 mr-2" />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;

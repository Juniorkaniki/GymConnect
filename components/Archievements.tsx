"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: 19, icon: FaBriefcase, text: "training courses" },
  { number: 879, icon: FaClock, text: "work hours" },
  { number: 150, icon: ImUsers, text: "happy customers" },
  { number: 9, icon: FaTrophy, text: "International awards" },
];

// animation container
const statsContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

// animation item
const statsItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8] as const,
    },
  },
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={statsContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-16"
        >
          {stats.map((item, index) => (
            <motion.div
              variants={statsItem}
              className="flex flex-col justify-center items-center"
              key={index}
            >
              {/* circle */}
              <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                <div className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                  {isInView && (
                    <CountUp start={0} end={item.number} duration={3} />
                  )}
                </div>
              </div>

              {/* text */}
              <div className="flex flex-col justify-center items-center text-center">
                <item.icon className="text-3xl mb-2" />
                <h4 className="h4">{item.text}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Archievements from "./Archievements";
import Achievements from "./Archievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  },
  {
    icon: <IoIosPricetags />,
    title: "affordable prices",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  },
  {
    icon: <FaDumbbell />,
    title: "best equipment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 md:gap-8 mb-16">
          <motion.h2
            className="h2 text-center"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            A propos de nous
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptatum omnis molestiae voluptatibus. Consequuntur
            quod, quaerat quam id debitis tempora vero sit minus totam
            exercitationem adipisci delectus, maiores nihil dolor.
          </motion.p>
        </div>

        {/* featured items */}

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => (
            <div
              className="flex flex-col items-center text-center gap-4 border p-10"
              key={index}
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>

              <div className="flex flex-col justify-center items-center gap-2 text-center">
                <h4 className="h4 text-accent uppercase">{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
         variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

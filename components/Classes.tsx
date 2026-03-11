"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    img: "/assets/img/classes/bodybuilding.jpg",
  },
  {
    name: "cardio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    img: "/assets/img/classes/cardio.jpg",
  },
  {
    name: "fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    img: "/assets/img/classes/fitness.jpg",
  },
  {
    name: "crossfit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.",
    img: "/assets/img/classes/crossfit.jpg",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div
              className="relative w-full h-[300px] lg:h-[485px] flex justify-center items-center"
              key={index}
            >
              {/* image */}
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* text & button */}
              <div className="relative z-20 max-w-[380px] text-center flex flex-col items-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent uppercase"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    text="Join Now"
                    containerStyles="w-[160px] h-[50px]"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Classes;

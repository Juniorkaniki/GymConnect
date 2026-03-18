"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 xl:py-0 lg:h-[110vh] bg-[url('/assets/img/membership/bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
      id="prices"
    >
      <div className="container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="h2 text-white text-center mb-8"
        >
          Membership Plans
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Membership;

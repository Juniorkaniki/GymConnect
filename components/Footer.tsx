"use client";

import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24" id="footer">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/*info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias nemo ex sed, delectus
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(243) 972 800 949</span>
              </li>
              <li>
                <Link className="flex items-center gap-4 " href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>juniorkaniki243@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/*blog */}
          <div className="flex flex-col gap-4">
            <h4 className="h4 text-accent mb-4 uppercase">Recent blog posts</h4>
            {/*post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4 ">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug uppercase">
                  How to stay motivated for all exercice
                </h5>
                <p className="text-gray-400 tex-[12px] tracking-[3px] uppercase">
                  Septembre 22, 2026
                </p>
              </Link>
            </div>
            {/*post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4 ">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug uppercase">
                  How to stay motivated for all exercice
                </h5>
                <p className="text-gray-400 tex-[12px] tracking-[3px] uppercase">
                  Septembre 22, 2026
                </p>
              </Link>
            </div>
             {/*post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4 ">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug uppercase">
                  How to stay motivated for all exercice
                </h5>
                <p className="text-gray-400 tex-[12px] tracking-[3px] uppercase">
                  Septembre 22, 2026
                </p>
              </Link>
            </div>
          </div>
          {/*Gallery */}
          <div className="bg-pink-300/20">Gallery</div>
          {/*newsletter */}
          <div className="bg-pink-300/20">newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

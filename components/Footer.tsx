"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { motion, Variants } from "framer-motion";

const footerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "linear",
    },
  },
};

const footerItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const blogPosts = [
  {
    title: "How to stay motivated for all exercise",
    date: "September 22, 2026",
    href: "#",
  },
  {
    title: "How to stay motivated for all exercise",
    date: "September 22, 2026",
    href: "#",
  },
  {
    title: "How to stay motivated for all exercise",
    date: "September 22, 2026",
    href: "#",
  },
];

const galleryImages = [
  { src: "/assets/img/trainers/david.jpg", alt: "David" },
  { src: "/assets/img/trainers/matt.jpg", alt: "Matt" },
  { src: "/assets/img/trainers/rosy.jpg", alt: "Rosy" },
  { src: "/assets/img/trainers/sofia.jpg", alt: "Sofia" },
  { src: "/assets/img/trainers/matt.jpg", alt: "Matt" },
  { src: "/assets/img/trainers/rosy.jpg", alt: "Rosy" },
  { src: "/assets/img/trainers/matt.jpg", alt: "Matt" },
  { src: "/assets/img/trainers/sofia.jpg", alt: "Sofia" },
];

const Footer = () => {
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi ici
  };

  return (
    <footer className="bg-primary-300 pt-24" id="footer">
      <div className="container mx-auto pb-24 px-4">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* Info / Logo */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/assets/img/logo.png"
                width={117}
                height={55}
                alt="GymnConnect Logo"
              />
            </Link>
            <p className="max-w-sm text-gray-300">
              Rejoignez la communauté GymnConnect et transformez votre corps
              avec nos programmes de Musculation, Cardio et Crossfit.
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
                <Link
                  className="flex items-center gap-4 hover:text-accent transition-all"
                  href="mailto:juniorkaniki243@gmail.com"
                >
                  <FaEnvelope className="text-xl text-accent" />
                  <span>juniorkaniki243@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Blog Posts */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <h4 className="h4 text-accent mb-4 uppercase font-bold">
              Recent blog posts
            </h4>
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`flex flex-col gap-1 pb-3 mb-4 ${index !== blogPosts.length - 1 ? "border-b border-dotted border-gray-400" : ""}`}
              >
                <Link
                  className="hover:text-accent transition-all"
                  href={post.href}
                >
                  <h5 className="h5 leading-tight uppercase text-sm font-semibold">
                    {post.title}
                  </h5>
                  <p className="text-gray-400 text-[10px] tracking-[2px] uppercase mt-1">
                    {post.date}
                  </p>
                </Link>
              </div>
            ))}
          </motion.div>

          {/* Gallery */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4 uppercase font-bold">Gallery</h4>
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={img.src}
                    width={100}
                    height={100}
                    alt={img.alt}
                    className="object-cover rounded-sm"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}

          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4 uppercase font-bold">
              Newsletter
            </h4>
            <div className="flex flex-col gap-4">
              <p className="text-gray-300">
                Abonnez-vous pour recevoir nos derniers conseils fitness.
              </p>
              <form
                className="flex items-center w-full"
                onSubmit={handleNewsletter}
              >
                <input
                  type="email"
                  placeholder="votre adresse mail"
                  required
                  className="h-[50px] bg-white outline-none px-4 text-primary-300 flex-1 min-w-0"
                />
                <CustomButton
                  containerStyles="h-[50px] px-6"
                  text="Send"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright optionnel */}
      <div className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 GymnConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

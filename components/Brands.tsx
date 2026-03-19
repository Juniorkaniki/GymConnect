"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // CORRECTION 1 : Import explicite de Variants

const brandContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Optimisation : décalage légèrement plus rapide pour le dynamisme
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8], // Bézier pour un mouvement fluide et professionnel
    },
  },
};

const brandImages = [
  {
    name: "Partenaire Équipement 1",
    src: "/assets/img/brands/brand-1.png",
    href: "#",
  },
  {
    name: "Partenaire Nutrition 2",
    src: "/assets/img/brands/brand-2.png",
    href: "#",
  },
  {
    name: "Partenaire Fitness 3",
    src: "/assets/img/brands/brand-3.png",
    href: "#",
  },
  {
    name: "Partenaire Santé 4",
    src: "/assets/img/brands/brand-4.png",
    href: "#",
  },
  {
    name: "Partenaire Sport 5",
    src: "/assets/img/brands/brand-5.png",
    href: "#",
  },
];

const Brands = () => {
  return (
    <section className="py-12 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          variants={brandContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {brandImages.map((img, index) => (
            <motion.div
              key={index}
              variants={brandItem}
              className="flex items-center justify-center"
            >
              {" "}
              <Link
                href={img.href}
                className="group relative w-full h-[80px] flex items-center justify-center"
              >
                <Image
                  src={img.src}
                  fill
                  alt={`Logo de ${img.name}`} // Accessibilité améliorée
                  className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;

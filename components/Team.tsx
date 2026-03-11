"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivers",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    social: [
      { icon: FaFacebook, href: "https://www.facebook.com/" },
      { icon: FaTwitter, href: "https://www.twitter.com/" },
      { icon: FaYoutube, href: "https://www.youtube.com/" },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-10 uppercase">Our Trainers</h2>

        {/* trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {trainerData.map((trainer) => (
            <div
              key={trainer.name}
              className="flex flex-col items-center text-center"
            >
              {/* image */}
              <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* name */}
              <h4 className="h4 mb-2 text-xl font-bold">{trainer.name}</h4>

              {/* role */}
              <p className="text-xs mb-2 uppercase tracking-[3px]">
                {trainer.role}
              </p>

              {/* description */}
              <p className="text-sm mb-6 max-w-[320px] mx-auto">
                {trainer.description}
              </p>

              {/* social */}
              <div className="flex justify-center gap-4">
                {trainer.social.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-accent transition"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="mt-12 ">
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See All Trainers" 
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
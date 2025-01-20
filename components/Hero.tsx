"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MobileMockup from "@/components/MobileMockup";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const people = [
  {
    id: 1,
    name: "L&K Creative Nail Training",
    designation: "Education beauty website",
    image:
      "https://lkcreativenailtraining.co.uk/wp-content/uploads/2024/09/homepage-banner.webp",
  },
  {
    id: 2,
    name: "GMD Removals",
    designation: "Removals company website",
    image:
      "https://gmdremovals.co.uk/wp-content/uploads/2023/10/full-house-move-wide.jpg",
  },
  {
    id: 3,
    name: "Any Bike For Cash",
    designation: "Used bike marketplace",
    image:
      "https://anybikeforcash.co.uk/wp-content/themes/tailpress-child/uploads/888dc9f08af1a99b9d1fda644c2cf898/MainSideView/20241230102158_s.jpg",
  },
  {
    id: 4,
    name: "Luxe Asset Global",
    designation: "Precious metals investment website",
    image:
      "https://luxeassetglobal.com/wp-content/uploads/2020/06/Rectangle-1-1-770x303.png",
  },
  {
    id: 5,
    name: "Cloud9Comps",
    designation: "Competition raffle website",
    image:
      "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/473796548_122157826778349170_2217942519419073530_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=voajQlG1SJQQ7kNvgEXTtEq&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=A_A9klBtXp_Kxg2vWwoVtO-&oh=00_AYAmFypfyxIFe8vjvjlzKz5bsfUBOtI_gAzotDeeuP456A&oe=679062DC",
  },
  {
    id: 6,
    name: "SkinnersWindows",
    designation: "Window and gutter cleaning website",
    image:
      "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/462549152_1095520088774648_7665345365393299730_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RXzEWbpMtIoQ7kNvgEL5pn-&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AtjK-0fAB4XaA_5zf-qT31U&oh=00_AYAm-sVSKIUj3q2Ci9lOmz7exooiYEqB02i6eU4rFEzUdg&oe=67906225",
  },
];

const HeroLeft = () => {
  const [visiblePeople, setVisiblePeople] = useState(people);

  useEffect(() => {
    const updateVisiblePeople = () => {
      if (window.innerWidth <= 640) {
        setVisiblePeople(people.slice(0, 4));
      } else {
        setVisiblePeople(people);
      }
    };

    updateVisiblePeople();
    window.addEventListener("resize", updateVisiblePeople);

    return () => window.removeEventListener("resize", updateVisiblePeople);
  }, []);

  // HeroLeft component remains the same
  return (
    <div className="text-white text-4xl font-bold p-8">
      <div className="mb-2 sm:mb-5 sm:justify-center lg:justify-start">
        <a
          href="#"
          className="inline-flex space-x-6 bg-black/60 rounded-full py-1 pr-2"
        >
          <span className="rounded-full bg-primary-500/10 px-3 ml-1 text-sm/6 font-semibold text-primary-500 ring-1 ring-primary-100/10 ring-inset">
            <span className="hidden md:inline-flex">Limited Time&nbsp;</span>
            Offer
          </span>
          <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-500">
            <span>FREE 1st month hosting</span>
            <ChevronRightIcon
              className="size-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
        <span className="block">
          Transform Your
          <span className="text-primary-400"> Local Business </span>
          with a<span className="text-primary-400"> Stunning Website </span>
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Stand out from the competition{" "}
        <span className="hidden md:inline-flex">
          with a professional website that converts visitors into clients.
        </span>
      </p>
      <div className="mt-6 sm:mt-8">
        <Link
          href="#_"
          className="inline-block rounded-full px-6 py-2 bg-primary-400 text-black text-lg font-medium 
                   hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-300
                   hover:ring-2 hover:ring-offset-2 hover:ring-offset-black hover:ring-primary-300
                   transition-all ease-out duration-300"
        >
          <span className="relative">Get Started Today!</span>
        </Link>
      </div>
      <div className="mt-10">
        <TestimonialsPreview people={visiblePeople} />
      </div>
    </div>
  );
};

const HeroRight = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full overflow-hidden h-full">
      <div className="relative flex justify-center items-center scale-[60%] md:scale-90 lg:scale-90">
        <div className="relative z-10">
          <MobileMockup videoUrl="vid5.mov" classnames="custom-class" />
        </div>
        <div className="relative -ml-20 z-20">
          <MobileMockup
            videoUrl="vid4.mov"
            classnames="custom-class rotate-12"
          />
        </div>
      </div>
    </div>
  );
};

const HeroRightMobile = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full overflow-hidden h-full">
      <div className="relative flex justify-center items-center scale-[100%]">
        <div className="relative z-20">
          <MobileMockup videoUrl="vid4.mov" classnames="custom-class" />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative">
        {/* Mobile Layout */}
        <div className="lg:hidden ">
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="snap-center"
            >
              <section className="h-screen  flex items-center justify-center">
                <HeroLeft />
              </section>
            </motion.div>
          </AuroraBackground>

          <section className="h-screen snap-center flex items-center justify-center">
            <HeroRightMobile />
          </section>
        </div>

        {/* Desktop Layout */}

        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="hidden lg:flex lg:h-screen snap-center container mx-auto">
              <div className="w-1/2 flex items-center justify-end">
                <HeroLeft />
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <HeroRight />
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
    </div>
  );
};

export default Hero;

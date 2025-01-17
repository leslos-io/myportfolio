import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <>
      {/* First Section - Blue */}
      <section className="lg:hidden h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <div className="text-white text-4xl font-bold p-8">
          <div className="mb-2 sm:mb-5 sm:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex space-x-6 bg-black/60 rounded-full py-1 pr-2"
            >
              <span className="rounded-full bg-yellow-500/10 px-3 ml-1 text-sm/6 font-semibold text-yellow-500 ring-1 ring-yellow-100/10 ring-inset">
                <span className="hidden md:inline-flex">
                  Limited Time&nbsp;
                </span>
                Offer
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>FREE 1st month hosting</span>
                <ChevronRightIcon
                  className="size-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">
              Transform Your
              <span className="text-yellow-400"> Local Business </span>
              with a<span className="text-yellow-400"> Stunning Website </span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Stand out from the competition with a professional website that
            converts visitors into clients.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              href="#_"
              className="inline-block rounded-full px-6 py-2 bg-yellow-400 text-black text-lg font-medium 
                    hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-300 
                    hover:ring-2 hover:ring-offset-2 hover:ring-offset-black hover:ring-yellow-300 
                    transition-all ease-out duration-300"
            >
              <span className="relative">Get Started Today</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Second Section - Purple */}
      <section className="lg:hidden h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          Your Section 2 Content
        </div>
      </section>

      {/* Desktop layout for sections 1 and 2 */}
      <div className="hidden lg:flex lg:h-screen snap-start bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950">
        <section className="h-full w-1/2  flex items-center justify-center">
          <div className="text-blue-500 text-4xl font-bold">
            Your Section 1 Content
          </div>
        </section>

        <section className="h-full w-1/2  flex items-center justify-center">
          <div className="text-red-500 text-4xl font-bold">
            Your Section 2 Content
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;

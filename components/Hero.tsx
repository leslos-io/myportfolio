// components\Hero.tsx
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import StoryCard, { type StoryCardProps } from "@/components/StoryCard";
import TestimonialsPreview from "@/components/TestimonialsPreview";

const Hero = () => {
  const cards: StoryCardProps[] = [
    {
      videoUrl: "/vid1.mov",
      title: "Start getting leads!",
      rotation: 0,
      translateY: "0px",
    },
    {
      videoUrl: "/vid2.mov",
      title: "From an idea to live site in no time",
      rotation: 10,
      translateY: "20px",
    },
    {
      videoUrl: "/vid3.mov",
      title: "Business packaging and printing solutions",
      rotation: 25,
      translateY: "80px",
    },
  ];

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
      name: "Luxea Asset Global",
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

  return (
    <div className="bg-gradient-to-r from-stone-950 via-zinc-900 to-zinc-950 min-h-screen lg:min-h-fit pt-6 lg:pt-8 lg:pb-14">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-6 h-[90vh] lg:h-auto flex flex-col justify-center sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left z-10">
        <div className="lg:py-24">
              <div className="mb-2 sm:mb-5  sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex space-x-6 bg-black/60 rounded-full py-1 pr-2"
                >
                  <span className="rounded-full bg-yellow-500/10 px-3 ml-1 text-sm/6 font-semibold text-yellow-500 ring-1 ring-yellow-100/10 ring-inset">
                    Limited{" "}<span className="hidden md:inline-flex">Time&nbsp;</span>Offer
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
                  with a
                  <span className="text-yellow-400"> Stunning Website </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Stand out from the competition with a professional website that
                converts visitors into clients.
              </p>
              <div>
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
            </div>
          </div>
          {/* Video Cards Section */}

          <div className="mt-56 -mb-16 sm:-mb-48 lg:relative lg:m-0">
            <div className="relative min-h-[500px] flex items-center justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-[90%] lg:h-full">
              {" "}
              {/* Added lg:w-[90%] */}
              <div className="flex gap-1 -mx-8 scale-75 lg:scale-[0.75]">
                {" "}
                {/* Changed scale and added origin-right */}
                {cards.map((card, index) => (
                  <StoryCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <TestimonialsPreview people={people} className="mt-20 lg:mt-32" />
      </div>
    </div>
  );
};

export default Hero;

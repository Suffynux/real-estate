import React from "react";
import Card from "../Card/Card";
const Hero = () => {
  const logos = [
    { src: "/hero1.png", alt: "Company Logo 1" },
    { src: "/hero2.png", alt: "Company Logo 2" },
    { src: "/hero3.png", alt: "Company Logo 3" },
    { src: "/hero2.png", alt: "Company Logo 2" },
    { src: "/hero1.png", alt: "Company Logo 1" },
  ];
const cardImages = [
  {
    src: "/industrial.jpg",
    alt: "Industrial Site",
    title: "Industrial",
    description:
      "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
  },
  {
    src: "/commercial.jpg",
    alt: "Commercial Building",
    title: "Commercial",
    description:
      "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Residential House",
    title: "Residential",
    description:
      "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
  },
];


  return (
    <>
      <section className="bg-white overflow-hidden">
        <div className="flex">
          {/* First set of logos */}
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 px-8">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={119}
                  height={33}
                  className="min-w-[6rem] h-auto object-contain md:min-w-[10rem]"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex animate-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 px-8">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={119}
                  height={33}
                  className="min-w-[6rem] h-auto object-contain md:min-w-[10rem]"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
            min-width: 100%;
          }

          /* Pause animation on hover */
          section:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>
      </section>
{/* Services */}
    </>
  );
};

export default Hero;
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
      src: "/cardImage.png",
      alt: "Card Image",
      title: "Industrial",
      description:
        "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
    },
    {
      src: "/cardImage.png",
      alt: "Card Image",
      title: "Commercial",
      description:
        "Our experience building in the Commercial field includes Showrooms,Supermalls and Office Buildings"
    },
    {
      src: "/cardImage.png",
      alt: "Card Image",
      title: "Resedential",
      description:
        "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments"
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
      <section className="bg-[#F6F6F6CC]">
        <section className="max-w-[1200px] mx-auto">
          <div>
            <div className="py-20 px-[20px] text-center md:flex md:flex-row md:justify-between">
              <h1 className="text-[#242527] font-medium p-1 text-[24px] md:text-30 text-left transition-colors duration-300 hover:text-blue-500">
                Our Excellent Services
              </h1>
              <p className="text-[#C4C4C4] text-[14px] max-w-[500px] leading-6 transition-colors duration-300 hover:text-gray-600">
                Check out our best service you can possibly orders in building
                your company and don't forget to ask via our email or our
                customer service if you are interested in using our services
              </p>
            </div>
          </div>
          {/* Card Images */}
          <div className="py-4 px-[20px] flex gap-5 ">
            {cardImages.map((card, index) => {
              return (
                <Card
                  src={card.src}
                  alt={card.alt}
                  index={index}
                  description={card.description}
                  title={card.title}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
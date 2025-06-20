import React from "react";
import styles from "./quatliy.module.css";

const Quality = () => {
  const qualityitems = [
    {
      src: "/time.png",
      alt: "time icon",
      title: "On time",
      descrip: "We prioritize the quality of our work and finish it on time",
    },
    {
      src: "/tick.png",
      alt: "tick icon",
      title: "Best Materials",
      descrip:
        "The material determines the building itself so we recommend that you use the best & quality materials in its class.",
    },
    {
      src: "/price.png",
      alt: "price icon",
      title: "competitive price",
      descrip:
        "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest",
    },
    {
      src: "/price.png",
      alt: "price icon",
      title: "competitive price",
      descrip:
        "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest",
    },
  ];
  return (
    <>
      {/* Icons with qualities */}
      <section className="max-w-[1200px] mx-auto px-4 py-12">
        <div>
          <img src="./line.png" alt="Line icon" className="py-5" />
          <div className="md:flex md:flex-row md:justify-between">
            <h1 className="text-[24px] font-medium md:text-[30px]">
              What Make Us{" "}
              <span>
                {" "}
                <br />
                Different?
              </span>
            </h1>
            <p className="pt-[14px] py-7 text-[#C4C4C4] max-w-[500px]">
              Check out our best service you can possibly orders in building your
              company and don't forget to ask via our email or our customer service
              if you are interested in using our services
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {qualityitems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50 h-full"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-[93px] py-[15px] transition-transform duration-500 hover:rotate-12"
                  height={94}
                />
                <h1 className="text-[20px] font-medium transition-colors duration-300 hover:text-blue-500 mb-2">
                  {item.title}
                </h1>
                <p className="text-[14px] text-[#C4C4C4] transition-all duration-300 hover:text-gray-600">
                  {item.descrip}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image with avator */}
      <section className="flex flex-col lg:flex-row max-w-[1200px] mx-auto px-4">
        <div className="p-5 w-full">
          <div className="bg-[url('./buildingImage.png')] h-[340px] bg-no-repeat bg-center bg-cover flex justify-center items-end align-center">
            {/* profile Box */}
            <div
              className={`${styles.navbarGradient} h-[250px] w-[250px] relative top-24 flex flex-col justify-center items-center text-center p-4 gap-2 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <img
                src="/profile.png"
                alt="Profile image"
                width={70}
                height={70}
                className="rounded-lg transition-transform duration-700 hover:rotate-y-180"
              />
              <div>
                <h1 className="text-[20px] font-medium transition-colors duration-300 hover:text-blue-200">
                  Dianne Russell
                </h1>
                <p className="text-[14px] transition-all duration-300 hover:scale-[1.02]">
                  More than 20 years of experience in the fieldarchitecture and
                  has worked on project up to 100+
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* See our teams section */}
        <section className="w-full">
          <div>
            <div className="py-20 px-[30px] my-[40px] items-start">
              <h1 className="text-[#242527] font-medium p-1 text-[24px] transition-colors duration-300 hover:text-blue-500">
                Meet and talk with <br />
                our best architecture
              </h1>
              <p className="text-[#C4C4C4] text-[14px] transition-colors duration-300 hover:text-gray-600">
                All our teams are professional and competent in their fields and
                will help you realize your dream building with the excellent
                result.
              </p>

              <div className="flex justify-between mt-[15px]">
                <button className="px-[6px] py-[12px] bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-md">
                  See all team
                </button>
                <h1 className="flex items-center gap-4 text-[16px] transition-colors duration-300 hover:text-blue-500">
                  How it works
                  <span className="transition-transform duration-500 hover:translate-y-1">
                    <img
                      src="/bi_arrow-down.png"
                      alt="Arrow icon"
                      className="text-black"
                      height={20}
                      width={20}
                    />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Quality;
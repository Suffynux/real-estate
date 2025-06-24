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

    </>
  );
};

export default Quality;
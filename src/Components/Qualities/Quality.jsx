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
      <div className="px-[19px]">
        <img src="./line.png" alt="Line icon" className="py-5" />
        <h1 className="text-[24px] font-medium">
          What Make Us{" "}
          <span>
            {" "}
            <br />
            Different?
          </span>
        </h1>
        <p className="pt-[14px] py-7 text-[#C4C4C4]">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>
      <div className="text-center flex flex-col justify-center align-center px-[63px] md:flex-row">
        {qualityitems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-[93px] py-[15px]"
                height={94}
              />
              <h1 className="text-[20px] font-medium">{item.title}</h1>
              <p className="text-[14px] p-3 text-[#C4C4C4]">{item.descrip}</p>
            </div>
          );
        })}
      </div>

      {/* Image with avator */}
      <div className="p-5">
        <div className="bg-[url('./buildingImage.png')] h-[340px] bg-no-repeat bg-center bg-cover  flex flow-col justify-center items-end align-center">
          {/* profile Box */}
          <div
            className={`${styles.navbarGradient} h-[250px] w-[250px] relative top-24 flex flex-col justify-center items-center text-center p-4 gap-2 text-white`}
          >
            <img
              src="/profile.png"
              alt="Profile image"
              width={70}
              height={70}
              className="rounded-lg"
            />
            <h1 className="text-[20px] font-medium">Dianne Russell</h1>
            <p className="text-[14px]">
              More than 20 years of experience in the fieldarchitecture and has
              worked on project up to 100+
            </p>
          </div>
        </div>
      </div>

      {/* See our teams section */}

      <section>
        <div>
          <div className="py-20 px-[30px]  my-[40px] items-start">
            <h1 className="text-[#242527] font-medium p-1 text-[24px] ">
              Meet and talk with <br />
              our best architecture
            </h1>
            <p className="text-[#C4C4C4] text-[14px]">
              All our teams are professional and competent in their fields and
              will help you realize your dream building with the excellent
              result.
            </p>

                      <div className="flex justify-between mt-[15px] ">
            <button className="px-[6px] py-[12px] bg-blue-500 text-white">
              See all team
            </button>
<h1 className="flex items-center gap-4 text-[16px]">
  How it works
  <span>
    <img
      src="/bi_arrow-down.png"
      alt="Arrow icon"
      className=" text-black"
      height={20}
      width={20}
    />
  </span>
</h1>

          </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Quality;

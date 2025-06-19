import React from "react";

const OurStory = () => {
  return (
    <>
      <section>
        <div className="mt-[47px] px-[18px] rounded-md">
          <img
            src="./buildcarda.png"
            alt="build card"
            className="w-full mt-2 shadow"
          />
          <h1 className="text-[24px] pt-[16px] leading-loose text-bold	">
            Our Story
            Who we are
          </h1>
          <p className="text-[14px] pt-2 mt-2 text-[#C4C4C4]">
            Established in 1992, PT. Wahana Cipta operates as a General
            Contracting company with a footprint that we have planted throughout
            Indonesia. Initially, we focused on construction in the field of
            residential housing development in Jakarta. As the company grows,
            now we are present as a reliable...
          </p>

          <button className="px-[6px] py-[12px] bg-blue-500 text-white mt-[22px]">
            See all team
          </button>
        </div>
      </section>
    </>
  );
};

export default OurStory;

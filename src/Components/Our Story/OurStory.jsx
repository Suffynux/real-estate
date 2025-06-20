import React from "react";

const OurStory = () => {
  return (
    <section className="flex items-center justify-center py-12 px-4">
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between md:items-center gap-8 max-w-[1200px] w-full">
        <img
          src="./buildcarda.png"
          alt="build card"
          className="w-full max-w-full rounded-lg shadow-xl md:w-[578px] md:h-[29rem] object-cover  border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02]"
        />
        
        <div className="max-w-[550px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Our Story <br />
            Who we are
          </h1>
          <p className="text-base text-[#C4C4C4] mb-6 leading-relaxed">
            Established in 1992, PT. Wahana Cipta operates as a General
            Contracting company with a footprint that we have planted throughout
            Indonesia. Initially, we focused on construction in the field of
            residential housing development in Jakarta. As the company grows,
            now we are present as a reliable...
          </p>

          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
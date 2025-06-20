import React from "react";

const Collections = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-[1200px]">
        <h1 className="font-medium text-2xl md:text-[46px] mb-8">
          Our collection <br />
          best project
        </h1>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <img 
              src="./project1.png" 
              alt="building image"  
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="./project2.png" 
              alt="project 2" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="./project3.png" 
              alt="project 3" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="./project4.png" 
              alt="project 4" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Collections;
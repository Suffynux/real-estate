import React from "react";

const Collections = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-[1200px]">
        <h1 className="font-medium text-2xl md:text-[46px] mb-8 hover:text-blue-500 transition-colors duration-300">
          Our collection 
          best projects
        </h1>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <img 
              src="https://images.pexels.com/photos/28398113/pexels-photo-28398113.jpeg?_gl=1*13whq8e*_ga*MTM3MzA0OTI2LjE3NDkwMzc3ODY.*_ga_8JE65Q40S6*czE3NTA4MzE3OTUkbzckZzEkdDE3NTA4MzIyNzgkajI2JGwwJGgw" 
              alt="Mosuq project"  
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="https://images.pexels.com/photos/15723780/pexels-photo-15723780.jpeg?_gl=1*1v0h7uw*_ga*MTM3MzA0OTI2LjE3NDkwMzc3ODY.*_ga_8JE65Q40S6*czE3NTA4MzE3OTUkbzckZzEkdDE3NTA4MzIxMDYkajM0JGwwJGgw" 
              alt="Building project" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="https://images.pexels.com/photos/31999032/pexels-photo-31999032.jpeg?_gl=1*1vxq41l*_ga*MTM3MzA0OTI2LjE3NDkwMzc3ODY.*_ga_8JE65Q40S6*czE3NTA4MzE3OTUkbzckZzEkdDE3NTA4MzIwOTUkajQ1JGwwJGgw" 
              alt="Project 3" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
          <img 
              src="https://images.pexels.com/photos/28410134/pexels-photo-28410134.jpeg?_gl=1*tww4zn*_ga*MTM3MzA0OTI2LjE3NDkwMzc3ODY.*_ga_8JE65Q40S6*czE3NTA4MzE3OTUkbzckZzEkdDE3NTA4MzIxOTgkajM3JGwwJGgw" 
              alt="Karachi Project" 
              className="w-full h-auto rounded-lg border-2 border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:scale-[1.02] md:h-[478px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Collections;
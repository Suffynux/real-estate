import React from "react";

const Card = ({ src, title, description, alt, index }) => {
  return (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 min-w-[200px] md:w-[500px] md:h-[450px]"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover pt-3 rounded-3xl"
      />

      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h1>
        <p className="text-sm text-[#C4C4C4]">{description}</p>
      </div>
    </div>
  );
};

export default Card;

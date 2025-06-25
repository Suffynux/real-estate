  import React from 'react'
  import Card from "../Card/Card";
  const Services = () => {
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
<div className="py-4 px-[20px] w-full"> {/* Changed this line */}
  <div className="flex gap-5 overflow-x-auto pb-4"> {/* Changed this line */}
    {cardImages.map((card, index) => {
      return (
        <Card
          key={index}
          src={card.src}
          alt={card.alt}
          index={index}
          description={card.description}
          title={card.title}
        />
      );
    })}
  </div>
</div>

          </section>
        </section>
      
      </>
    )
  }

  export default Services
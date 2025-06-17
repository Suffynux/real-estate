import React from 'react'
import Card from '../Card/Card'
const Hero = () => {
  const logos = [
    { src: "/hero1.png", alt: "Company Logo 1" },
    { src: "/hero2.png", alt: "Company Logo 2" },
    { src: "/hero3.png", alt: "Company Logo 3" },
    { src: "/hero2.png", alt: "Company Logo 2" },
    { src: "/hero1.png", alt: "Company Logo 1" }
  ]
  const cardImages =[
    {src : "/cardImage.png" , alt: "Card Image" , title: "Industrial" , description  : "Industrial development is our main line of business. We do Factory Construction, Warehouse and others"},
    {src : "/cardImage.png" , alt: "Card Image" , title: "Industrial" , description  : "Industrial development is our main line of business. We do Factory Construction, Warehouse and others"},
    {src : "/cardImage.png" , alt: "Card Image" , title: "Industrial" , description  : "Industrial development is our main line of business. We do Factory Construction, Warehouse and others"}

  ]

  return (
    <>
    <section className=" bg-white">
      <div className="flex items-center h-full">
        {/* First set of logos */}
        <div className="flex items-center gap-8 animate-scroll">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                width={119} 
                height={33} 
                className="min-w-[6rem] h-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-8 animate-scroll">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                width={119} 
                height={33} 
                className="min-w-[6rem] h-auto object-contain"
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
          gap: 2rem;
        }
        
        /* Pause animation on hover */
        section:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>

    <section>

        <div>
            <div className='py-20 px-[20px] text-center'>

            <h1 className='text-[#242527] font-medium p-1 text-[24px]'>Our Excellent Services</h1>
            <p className='text-[#C4C4C4] text-[14px]'>Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services</p>

            </div>
        </div>
{/* Card Images */}
        <div className='py-4 px-[20px] flex  gap-5 '>
        {cardImages.map((card , index)=>{
          return(
            <Card src={card.src} 
            alt={card.alt} 
            index={index} 
            description={card.description}
            title={card.title}/>
          );
        })}
        </div>
    </section>
    </>
  )
}

export default Hero
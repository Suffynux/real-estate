import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <section className="bg-[#2B2B2B]">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex justify-between items-center h-[40px] px-[20px] py-[4px]">
            <div className="text-[#FFFFFF] font-bold text-[20px]">logo</div>
            <div className="hidden md:block">
              <ul className="flex lg:gap-[80px] text-[#C4C4C4] md:gap-5">
                <li>Home</li>
                <li>Servies</li>
                {/* Below here */}
                <li>Find a team</li>
                {/* team section */}
                <li>About Us</li>
                {/* We will show  project collection here */}
                <li>Porfolio</li>
                {/* Last section */}

              </ul>
            </div>
            <div className="md:hidden">
              <img src="./icon _menu_.png" alt="Menu" className="" />
            </div>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <main>
        <section className={`${styles.navbarGradient}`}>
          {/* Wrapper div with max-width constraint */}
          <div className="max-w-[1200px] mx-auto">
            {/* Hero Content Container */}
            <div className="md:flex md:justify-between md:items-center">
              
              {/* Hero Text */}
              <div className="pt-[80px] px-5 md:flex-1">
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">We Provide</h1>
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">
                  Architectural design
                </h1>
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">
                  and Construction
                </h1>
                <p className="text-[14px] pt-[8px] pb-[16px] text-[#C4C4C4] md:max-w-[579px]">
                  More than 100 building and housing projects that we have built.
                  The building owner chose us over other contractors in Jakarta,
                  because our work is different
                </p>
                <button className="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-sky-300 to-blue-700">
                  Discover more
                </button>
                
                {/* Stats for big screens - positioned below button */}
                <div className="px-[24px] py-[20px] md:flex hidden justify-between text-white mt-8">
                  <div className="flex flex-col">
                    <h1 className="text-[24px] font-bold">300+</h1>
                    <p className="text-[12px] font-normal">
                      Happy <br />
                      Clients
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[24px] font-bold">900+</h1>
                    <p className="text-[12px] font-normal">
                      Projects <br />
                      Completed
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[24px] font-bold">20+</h1>
                    <p className="text-[12px] font-normal">
                      Awards <br />
                      Winnings
                    </p>
                  </div>
                </div>
              </div>

    {/* Hero Images */}
    <div className="flex justify-end">
      {/* Mobile Image (shown on small devices only) */}
      <img
        src="./HeroImage.png"
        alt="building"
        className="block md:hidden"
      />
      
    </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Stats Section */}
      <section className={`${styles.heroGradient} shadow-2xl md:hidden`}>
        <div className="text-white">
          {/* Header */}
          <div className="flex justify-between px-[24px] py-[20px]">
            <div>
              <h2 className="text-[36px] font-bold">
                25 <span className="text-[14px] font-medium">years</span>
              </h2>
            </div>
            <div className="text-[#FFFFFF] font-bold text-[20px]">logo</div>
          </div>
          
          {/* Description */}
          <div>
            <p className="px-[24px] text-sm font-light">
              As a trusted general project that has been operating for 25 years,
              our commitment is always to prioritize our client satisfaction.
            </p>
          </div>
          
          {/* Stats */}
          <div className="px-[24px] py-[20px] flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-[24px] font-medium">300+</h1>
              <p className="text-[12px] font-normal">
                Happy <br />
                Clients
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[24px] font-medium">900+</h1>
              <p className="text-[12px] font-normal">
                Projects <br />
                Completed
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[24px] font-medium">20+</h1>
              <p className="text-[12px] font-normal">
                Awards <br />
                Winnings
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Notification from "../UnderDevelopment/Notification";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  // Function to close the notification
  const handleCloseNotification = () => {
    setIsNotificationOpen(false);
  };

  return (
    <>
      <nav>
        {/* Navbar Section */}
        <section className="bg-[#2B2B2B]">
          <div className="max-w-[1200px] mx-auto">
            <nav className="flex justify-between items-center h-[60px] px-4">
              <div className="text-white font-bold text-2xl cursor-pointer">
                <img
                  src="/logo.png"
                  alt="logo imgage"
                  width={250}
                  className="pt-[10px] pb-[10px] hidden md:block"
                />
                <img
                  src="/logo.png"
                  alt="logo imgage"
                  width={100}
                  className="pt-[10px] pb-[10px] md:hidden "
                />
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-8 text-[#C4C4C4]">
                <a href="#home">
                  <li className="cursor-pointer hover:text-[#0775b4]">Home</li>
                </a>
                <a href="#services">
                  <li className="cursor-pointer hover:text-[#0775b4]">
                    Services
                  </li>
                </a>
                <a href="#our-team">
                  <li className="cursor-pointer hover:text-[#0775b4]">
                    Find a Team
                  </li>
                </a>
                <a href="#about-us">
                  <li className="cursor-pointer hover:text-[#0775b4]">
                    About Us
                  </li>
                </a>
                <a href="#portfolio">
                  <li className="cursor-pointer hover:text-[#0775b4]">
                    Portfolio
                  </li>
                </a>
              </ul>

              {/* Mobile Menu Icon */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(true)}>
                  <img src="./icon _menu_.png" alt="Menu" className="w-6 h-6" />
                </button>
              </div>
            </nav>
          </div>
        </section>

        {/* Mobile Side Panel */}
        <div
          className={`fixed top-0 right-0 w-[70%] h-full bg-[#1f1f1f] text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-6 p-4 text-lg">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0775b4]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0775b4]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0775b4]"
              >
                Find a Team
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0775b4]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0775b4]"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className={`${styles.navbarGradient}`}>
          {/* Wrapper div with max-width constraint */}
          <div className="max-w-[1200px] mx-auto">
            {/* Hero Content Container */}
            <div className="md:flex md:justify-between md:items-center">
              {/* Hero Text */}
              <div className="pt-[80px] px-5 md:flex-1">
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">
                  We Provide
                </h1>
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">
                  Architectural design
                </h1>
                <h1 className="text-[24px] text-white font-medium md:text-[64px]">
                  and Construction
                </h1>
                <p className="text-[14px] pt-[8px] pb-[16px] text-[#C4C4C4] md:max-w-[579px]">
                  More than 100 building and housing projects that we have
                  built. The building owner chose us over other contractors in
                  Jakarta, because our work is different
                </p>

                <button
                  onClick={() => {
                    setIsNotificationOpen(true);
                    // Automatically close the notification after 4 seconds
                    setTimeout(() => {
                      setIsNotificationOpen(false);
                    }, 4000);
                  }}
                  className="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-sky-300 to-blue-700 cursor-pointer"
                >
                  Discover more
                </button>
                                {isNotificationOpen && (
                  <Notification onClose={handleCloseNotification} />
                )}

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

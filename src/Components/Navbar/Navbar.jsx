import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <section>
        <nav className="bg-[#2B2B2B] flex justify-between align-center items-center  h-[40px] px-[20px] py-[4px]">
          <div className="text-[#FFFFFF] font-bold text-[20px] ">logo</div>
          <div className="lg:hidden  ">
            <img src="./icon _menu_.png" alt="" className="   " />
          </div>
        </nav>
      </section>
      {/* Hero section */}
      <main>
        <section className="">
          {/* Div of gradient color */}
          <div className={styles.navbarGradient}>
            {/* Hero Text */}
            <div className="pt-[80px] px-5">
              <h1 className="text-[24px] text-white font-medium">We Provide</h1>
              <h1 className="text-[24px]  text-white font-medium">
                Architectural design
              </h1>
              <h1 className="text-[24px]  text-white font-medium">
                and Construction{" "}
              </h1>
              <p className="text-[14px] pt-[8px] pb-[16px] text-[#C4C4C4] ">
                ​More than 100 building and housing projects that we have built.
                The building owner chose us over other contractors in Jakarta,
                because our work is different
              </p>
              <button class="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-sky-300 to-blue-700">
                Discover more
              </button>
            </div>
            {/* Hero Image */}
            <div className="flex justify-end -mt-36">
              <img src="./HeroImage.png" alt="building image" />
            </div>
          </div>
        </section>
      </main>
      {/* Stats */}
      <section className={`${styles.heroGradient} shadow-2xl `} >
        <div className=" text-white">
          {/* first part */}
          <div className="flex justify-between px-[24px] py-[20px]">
            <div>
              <h2 className="text-[36px] font-bold">
                25 <span className="text-[14px] font-medium">years</span>
              </h2>
            </div>

            <div>
              <div className="text-[#FFFFFF] font-bold text-[20px] ">logo</div>
            </div>
          </div>
          {/* second part */}
          <div >
            <p className="px-[24px] text-sm font-light">
              As a trusted general project that has been operating for 25 years,
              our commitment is always to prioritize our client satisfaction.
            </p>
          </div>
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
                Winings
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

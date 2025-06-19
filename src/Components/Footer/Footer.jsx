import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <section className="">
        <footer
          className={`${styles.navbarGradient} pb-[115px] text-white p-5`}
        >
          <div className="flex flex-col gap-7">
            <h4>Logo</h4>
            <p>
              is a general contractor company based in Jakarta. More than 25
              years of experience in building and carving out Indonesia's
              development.
            </p>

            {/* icons */}
            <div className="flex flow-row gap-3">
              <a href="#" target="_blank">
                <img src="./Socials/logo1.svg" alt="twitter" />
              </a>
              <a href="#" target="_blank">
                <img src="./Socials/logo2.svg" alt="instagram" />
              </a>
              <a href="#" target="_blank">
                <img src="./Socials/logo3.svg" alt="google" />
              </a>
              <a href="#" target="_blank">
                <img src="./Socials/logo4.svg" alt="linkedin" />
              </a>
            </div>
          </div>

          {/*footer links */}

          <div className="flex flexc-row gap-9 pt-[40px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[20px] font-extrabold">Company</h2>
              <p
                className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer
  "
              >
                About
              </p>
              <p className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
                How it works
              </p>
              <p className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
                Terms
              </p>
              <p className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
                Privacy Policy
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[20px] font-extrabold">More</h2>
              <p className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
                Documentation
              </p>
              <p className="text-md font-medium border-b-2 border-transparent hover:border-b-2 hover:border-black cursor-pointer">
                License
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;

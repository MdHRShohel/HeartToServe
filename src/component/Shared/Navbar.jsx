import logo from "../../asset/a.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";

function Navbar() {
  const [mobileBtn, setMobileBtn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <Link className="navHover" href={"/"}>
        HOME
      </Link>
      <Link className="navHover" href={"/Programs"}>
        PROGRAMS
      </Link>
      <Link className="navHover" href={"/Counselling"}>
        COUNSELING
      </Link>
      <Link className="navHover" href={"/Blog"}>
        BLOG
      </Link>
      <Link className="navHover" href={"#"}>
        ABOUT US
      </Link>
      <Link className="navHover" href={"#"}>
        CONTACT US
      </Link>
    </>
  );

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Navbar top */}
      <div className="bg-[#f3f3f3] py-3 px-4 md:px-8 hidden lg:block">
        <div className="px-4 md:px-0 flex justify-between items-center container">
          <div className="[&>*]:text-xs space-x-5">
            <a className="hoverStyle" href="tel:+6494461709">
              +880 1938 688488
            </a>
            <a className="hoverStyle" href="mailto:dogood@qodeinteractive.com">
              bonefire@donation.com
            </a>
            <span className="hoverStyle">Nikanjia-2 Dhaka, Bangladesh</span>
          </div>
          {/* Social Icons */}
          <div className="flex gap-5 items-center ">
            <a
              className="flex justify-center rounded-full hover:bg-[#f0e8f8] w-6 h-6"
              href="#"
            >
              <svg
                className="w-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a
              className="flex justify-center rounded-full hover:bg-[#f0e8f8] w-6 h-6"
              href="#"
            >
              <svg
                className="w-[12px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a
              className="flex justify-center rounded-full hover:bg-[#f0e8f8] w-6 h-6"
              href="#"
            >
              <svg
                className="w-[12px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="px-4 md:px-8 border-b-2 mb-4 py-3.5 pt-5 sticky top-0 z-50 bg-white navbar">
        <div className="flex justify-between items-center relative container">
          <Link href={"/"} className="flex justify-center items-center">
            <Image className="w-[60px]" src={logo} alt="" />
            <p className="uppercase leading-4 ml-1">
              Heart <br /> To <br /> Serve
            </p>
          </Link>
          <div className="text-md xl:text-lg text-[#303030] space-x-7 hidden lg:block ">
            {menuItems}
          </div>
          <div className="text-md xl:text-xl  hidden lg:flex gap-7 justify-between items-center">
            <div>
              <Link onClick={toggleDrawer} href={"#"}>
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </Link>
            </div>
            <div className="tracking-wider px-6 py-2 rounded-lg border border-black hover:bg-[#F36A4F] hover:text-white hover:border-current transition-all duration-200">
              <Link href={"#"}>DONATE NOW</Link>
            </div>
          </div>

          {/* custom hamburger button */}
          <div
            className={`mobileBtn lg:hidden ${
              mobileBtn ? "mobileBtn" : "active"
            } `}
            onClick={() => setMobileBtn(!mobileBtn)}
          >
            <span></span>
          </div>

          {/* mobile menu */}
          <div
            className={` ${
              mobileBtn ? "hidden" : "block top-16"
            } absolute  flex gap-3 flex-col text-md text-[#303030]  lg:hidden bg-white w-full py-5 px-5 border-b-4 transition-all duration-500`}
          >
            {menuItems}
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="bla bla bla"
      >
        <div className=" flex justify-center items-center h-full">
          <input
            type="text"
            className="border-2 w-6/12 rounded-l-lg py-2 px-6 border-orange-500 outline-orange-400"
            placeholder="Search Here"
          />
          <label
            htmlFor=""
            className="bg-[#ffe2da] rounded-r-lg hover:bg-[#ffd3c6] duration-300 text-[#ff9370] font-semibold py-2.5 cursor-pointer  px-3"
          >
            Search
          </label>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;

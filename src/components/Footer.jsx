import { logoLight } from "../assets";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <img className="w-32" src={logoLight} alt="logolight" />
          <p className="text-white text-sm tracking-wide">@ReactBD.com</p>
          <div className="flex gap-5 text-lg text-gray-400 ">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Clement Town, Dehradun</p>
            <p>Mobile: 91848484838</p>
            <p>Phone: 00332 3243434</p>
            <p>e-mail: rahulsingh@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaLocationDot />
              </span>{" "}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <IoBagCheckOutline />
              </span>{" "}
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{" "}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <input
            type="text"
            placeholder="e-mail address"
            className="bg-transparent border px-4 py-2 text-sm text-center"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

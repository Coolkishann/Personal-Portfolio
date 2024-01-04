import React from "react";
import { FaHome, FaLaptopCode, FaReact } from "react-icons/fa";
import { MdEmail, MdPersonOutline } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";


const Data = [
  {
    label: "Home",
    value: "Home",
    icon: FaHome,
    desc: "Home",
    src: "/",
  },
  {
    label: "About",
    value: "About",
    icon: MdPersonOutline,
    desc: "About",
    src: "/about",
  },
  // {
  //   label: "Skills",
  //   value: "Skills",
  //   icon: FaLaptopCode,
  //   desc: "Skills",
  //   src: "/skills",
  // },
  {
    label: "Projects",
    value: "Projects",
    icon: FaReact,
    desc: "Projects",
    src: "/projects",
  },
  {
    label: "Experience",
    value: "Experience",
    icon: HiOutlineBriefcase,
    desc: "Experience",
    src: "/experience",
  },
  {
    label: "Contact",
    value: "Contact",
    icon: IoIosContact,
    desc: "Contact",
    src: "/contact",
  },
];

const Navigation = () => {
  return (
    <section className="fixed right-0 top-1/2 transform -translate-y-1/2 xl:right-5 lg:flex justify-center  items-center z-50">
      <div className=" text-white rounded-2xl  p-6 flex flex-col items-center z-50 md:gap-3 ">
        {Data.map(({ label, value, icon, src }) => (
          <Link to={src} key={value}>
            <Tooltip
              content={label}
              placement="right"
              color="black" // Change tooltip text color
              size="regular"
              delay={0}
              className="group relative py-2 bg-white text-black-50 cursor-pointer flex items-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-black bg-white hover:text-blue-900 mb-1 group-hover:opacity-70 transition-opacity duration-300 ease-in-out">
                {React.createElement(icon, { className: "text-lg" })}
              </div>
            </Tooltip>
          </Link>
        ))}
      </div>
    </section>


  );
};

export default Navigation;

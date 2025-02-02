import PPic from "../assets/mypic.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Hero = () => {
  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
        <p className="text-2xl font-bold text-black">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative text-white">
          I'm
          <span className="text-blue-800 ml-4 uppercase">
            Kishan Vishwakarma
          </span>
        </p>
        <p className="text-xl font-bold relative uppercase text-black">
          Full-Stack Developer
        </p>
        <p className="text-base font-medium w-10/12 md:w-2/3 relative text-black">
        Fueled by an unwavering passion for coding, I thrive on transforming ideas into elegant solutions. With a love for problem-solving and an eye for detail, each project is a canvas where innovation meets precision. As a developer, my journey is defined by the thrill of bringing ideas to life in the dynamic world of technology.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1IDHuFxahRuSIYgxB9EO2WityXSyI1IIy/view?usp=sharing"
            target="_blank"
          >
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={PPic}
          loading="lazy"
          alt="Kishan Vishwakarma"
          className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover object-center shadow-lg "
        />
      </div>
    </div>
  );
};

export default Hero;

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="h-full pb-20">
        <nav className="flex items-center bg-[#D6E4E9] justify-evenly py-4 fixed top-0 z-50 w-full h-[85px]">
          <div>
            <Link to="/">
              <img
                src="src/assets/images/texting-logo.svg"
                alt=""
                className="w-28"
              />
            </Link>
            {/* Hamburger Menu Button (Mobile) */}
            <button
              className="lg:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "x" : "-"}
            </button>
          </div>
          <ul className="lg:flex hidden text-white">
            <Link to="/">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                About Garvith
              </li>
            </Link>
            <Link to="/performance">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                Performance
              </li>
            </Link>
            <Link to="/writting">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                Writting
              </li>
            </Link>
            <Link to="/gallery">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                Gallery
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-primary-blue">
                Contact US
              </li>
            </Link>
          </ul>
          <a
            href="https://wa.me/916264576510?text=Hi%20there%2C%20I%20heard%20that%20you%20have%20best%20tutors%20from%20Cambridge%2C%20Oxford%20and%20other%20top%20schools.%20I%27m%20also%20looking%20for%20a%20tutor%20in"
            aria-label="Whatsapp"
            target="_blank"
            className="text-white  bg-[#256882] rounded-md w-44 py-2 text-center"
          >
            Book Show
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

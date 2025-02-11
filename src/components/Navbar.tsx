import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "/images/hamburger.svg";
import closeIcon from "/images/cancel.svg";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full pb-20">
      <nav className="bg-white shadow-md w-full py-4 fixed top-0 z-50 h-[85px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={scrollToTop}>
                <img src="/images/logo.png" alt="" className="w-28" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5">
              {["Home", "About", "Performance", "writting", "Gallery"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item == "Home" ? `/` : `/${item.toLowerCase()}`}
                    className="px-3 cursor-pointer text-brownish-gray text-lg hover:text-deep-blue transition"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <a
                href="/contact-us"
                onClick={scrollToTop}
                className="text-deep-blue border hover:bg-deep-blue hover:text-white font-semibold border-deep-blue rounded-md lg:w-44 py-2 px-5 text-center"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/916264576510?text=Hi%20there%2C%20I%20heard%20that%20you%20have%20best%20tutors%20from%20Cambridge%2C%20Oxford%20and%20other%20top%20schools.%20I%27m%20also%20looking%20for%20a%20tutor%20in"
                aria-label="Whatsapp"
                target="_blank"
                className="text-white  bg-deep-blue rounded-md lg:w-44 py-2 text-center"
              >
                Book Show
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img
                  src={isOpen ? closeIcon : menuIcon}
                  alt="Menu"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#D6E4E9] p-4">
            {["Home", "About", "Performance", "writting", "Gallery"].map(
              (item) => (
                <Link
                  key={item}
                  to={item == "Home" ? `/` : `/${item.toLowerCase()}`}
                  className="block py-2 px-3 cursor-pointer text-brownish-gray text-lg hover:text-deep-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            <div className="mt-4 space-y-2">
              <a
                href="/contact-us"
                onClick={scrollToTop}
                className="block text-deep-blue border hover:bg-deep-blue hover:text-white font-semibold border-[#256882] rounded-md w-full py-2 px-5 text-center"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/916264576510?text=Hi%20there%2C%20I%20heard%20that%20you%20have%20best%20tutors%20from%20Cambridge%2C%20Oxford%20and%20other%20top%20schools.%20I%27m%20also%20looking%20for%20a%20tutor%20in"
                aria-label="Whatsapp"
                target="_blank"
                className="block text-white  bg-[#256882] rounded-md w-full py-2 text-center"
              >
                Book Show
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

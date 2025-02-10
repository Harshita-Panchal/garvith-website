import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function Footer() {
  return (
    <>
      <section className="">
        <div className="flex justify-between lg:px-[100px] px-5 lg:py-6 border  border-t-deep-blue border-b-deep-blue">
          <img src="src/assets/images/logo.png" alt="" className="w-28" />
          <div className="md:flex items-center hidden md:gap-2 ">
            <a
              href="https://www.facebook.com/share/14eo9iDAsF/?mibextid=qi2Omg"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/fb.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/instagram.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZF2hf-sI1Mvo5dkJ8F0DVA"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/youtube.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:px-[100px] px-5 py-12">
          <div>
            <p className="text-lg font-semibold mb-5 text-deep-blue ">
              Address
            </p>
            <p className="max-w-xs">
              1st left, 5, Radhe Krishna colony, gautampura, block depalpur,
              district Indore, M.P.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-5 text-deep-blue">
              Explore Menu
            </p>
            <ul className="text-base my-5">
              <Link to="/" onClick={scrollToTop}>
                <li>Home</li>
              </Link>
              <Link to="/about" onClick={scrollToTop}>
                <li>About Garvith</li>
              </Link>
              <Link to="/performance" onClick={scrollToTop}>
                <li>Performance</li>
              </Link>
              <Link to="/writting" onClick={scrollToTop}>
                <li>Writing</li>
              </Link>
              <Link to="/gallery" onClick={scrollToTop}>
                <li>Gallery</li>
              </Link>
              <Link to="/contact-us" onClick={scrollToTop}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold mb-5 text-deep-blue">
              Contact Us
            </p>
            <div className="flex flex-col">
              <span>+91 6264576510</span>
            </div>
            <div className="flex flex-col">
              <span>gopalmali1718@gmail.com</span>
            </div>
          </div>
          <div className="md:hidden flex gap-3 mt-5 ">
            <a
              href="https://www.facebook.com/share/14eo9iDAsF/?mibextid=qi2Omg"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/fb.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/instagram.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="rounded-full p-2 h-10 w-10 border border-deep-blue"
            >
              <img
                src="src/assets/images/youtube.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </a>
          </div>
        </div>
        <div className="text-center py-3  font-semibold border-t border-t-deep-blue">
          "© 2025 | Designed and Developed by{" "}
          <span className="">
            <a
              href="#"
              aria-label="Whatsapp"
              target="_blank"
              className="hover:underline"
            >
              Harshita Panchal
            </a>
          </span>
          "{/* linkdin */}
        </div>
      </section>
    </>
  );
}

export default Footer;

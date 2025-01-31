import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className=" bg-[#C30E59]">
        <div className="grid grid-cols-3 max-w-[1140px] mx-auto text-white py-12">
          <div className="flex flex-col justify-between">
            <img src="src/assets/images/logo.png" alt="" className="w-28" />
            <div className="flex ">
              <img src="src/assets/images/facebook.svg" alt="" />
              <img src="src/assets/images/instagram.svg" alt="" />
              <img src="src/assets/images/youtube.svg" alt="" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-5">Explore Menu</p>
            <ul className="text-base font-medium my-5">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About Garvith</li>
              </Link>
              <Link to="/performance">
                <li>Performance</li>
              </Link>
              <Link to="/writting">
                <li>Writing</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact-us">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-5">Contact Us</p>
            <div className="flex flex-col">
              <span className="text-base font-medium"> LOCATION :</span>
              <span>
                G3/C, 7th Street, Shree G Valley Colony, Bicholi Mardana,
                Indore, M.P.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">PHONE :</span>
              <span>+91 664576510</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">EMAIL :</span>
              <span>gopalmali1718@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="bg-orange-peel border-t border-top-white text-center py-6 px-4 text-white text-[28px] font-semibold">
          "© 2025 | Designed and Developed by H"
        </div>
      </section>
    </>
  );
}

export default Footer;

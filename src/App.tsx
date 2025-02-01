import "./App.css";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        {/* <nav className="bg-[#C30E59] flex items-center justify-evenly py-4"> */}
        <nav className="flex items-center bg-[#D6E4E9] justify-evenly py-4">
          <div>
            <Link to="/">
              <img
                src="src/assets/images/texting-logo.svg"
                alt=""
                className="w-28"
              />
            </Link>
          </div>
          <ul className="flex text-white">
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
          <button className="text-white  bg-[#256882] rounded-md w-44 py-2 ">
            Book Show
          </button>
        </nav>
        <AppRoutes />
        {/* <Home />
         */}
        <Footer />
        {/* #927B67 */}
      </div>
    </>
  );
}

export default App;

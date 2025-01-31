import "./App.css";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <nav className="bg-[#C30E59] flex items-center justify-evenly py-4">
          <div>
            <img src="src/assets/images/logo.png" alt="" className="w-28" />
          </div>
          <ul className="flex text-white">
            <Link to="/">
              <li className="px-3 cursor-pointer text-base">Home</li>
            </Link>
            <Link to="/about">
              <li className="px-3 cursor-pointer text-base">About Garvith</li>
            </Link>
            <Link to="/performance">
              <li className="px-3 cursor-pointer text-base">Performance</li>
            </Link>
            <Link to="/gallery">
              <li className="px-3 cursor-pointer text-base">Gallery</li>
            </Link>
            <Link to="/contact-us">
              <li className="px-3 cursor-pointer text-base">Contact US</li>
            </Link>
          </ul>
          <button className="text-white border border-white rounded-full w-44 py-2 ">
            Book Show
          </button>
        </nav>
        <AppRoutes />
        {/* <Home />
         */}
        <Footer />
      </div>
    </>
  );
}

export default App;

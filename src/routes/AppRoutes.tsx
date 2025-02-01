import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutGarvith from "../pages/AboutGarvith";
import Performance from "../pages/Performance";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutGarvith />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;

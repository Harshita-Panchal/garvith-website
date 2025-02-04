import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;

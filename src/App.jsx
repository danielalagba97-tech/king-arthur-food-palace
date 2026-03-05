import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
<a
  href="tel:07088470202"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "gold",
    color: "black",
    padding: "14px 18px",
    borderRadius: "50px",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
    zIndex: "999"
  }}
>
📞 Call Now
</a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
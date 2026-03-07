import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

/* Admin Pages */

import Login from "./admin/Login";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import MenuManager from "./admin/MenuManager";
import Payments from "./admin/Payments";
import Analytics from "./admin/Analytics";

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

        {/* Website Pages */}

        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />

        {/* Admin Login */}

        <Route path="/admin-login" element={<Login />} />

        {/* Admin Panel */}

        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="orders" element={<Orders />} />

          <Route path="menu" element={<MenuManager />} />

          <Route path="payments" element={<Payments />} />

          <Route path="analytics" element={<Analytics />} />

        </Route>

      </Routes>

      <Footer />

    </Router>

  );

}

export default App;
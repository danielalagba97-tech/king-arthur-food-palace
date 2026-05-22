import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px max(2vw, 20px)",
        background: "#000",
        borderBottom: "2px solid gold",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        flexWrap: "wrap",
        gap: "10px"
      }}
    >
      {/* Logo + Brand Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "max(1vw, 10px)", flexShrink: 1 }}>
        <img
          src={logo}
          alt="King Arthur Food Palace"
          style={{
            height: "clamp(45px, 8vw, 100px)",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            color: "gold",
            fontWeight: "900",
            margin: 0,
            fontSize: "clamp(15px, 2.2vw, 28px)",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap"
          }}
        >
          King Arthur Food Palace
        </h1>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "max(1.5vw, 10px)", flexWrap: "wrap" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/order" style={orderStyle}>Order</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "clamp(13px, 1.2vw, 16px)",
};

const orderStyle = {
  background: "gold",
  padding: "6px max(1.2vw, 12px)",
  borderRadius: "6px",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "clamp(13px, 1.2vw, 16px)",
};

export default Navbar;

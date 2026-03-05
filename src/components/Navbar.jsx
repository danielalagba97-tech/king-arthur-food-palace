import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 60px",
        background: "#000",
        borderBottom: "2px solid gold",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Logo + Brand Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        <img
          src={logo}
          alt="King Arthur Food Palace"
          style={{
            height: "120px",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            color: "gold",
            fontWeight: "900",
            margin: 0,
            fontSize: "30px",
            letterSpacing: "1px",
          }}
        >
          King Arthur Food Palace
        </h1>
      </div>

      {/* Navigation Links */}
      <div>
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
  marginRight: "25px",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
};

const orderStyle = {
  background: "gold",
  padding: "10px 18px",
  borderRadius: "6px",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Navbar;
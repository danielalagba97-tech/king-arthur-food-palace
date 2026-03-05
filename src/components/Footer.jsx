import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        color: "white",
        padding: "40px 60px",
        borderTop: "2px solid gold",
        marginTop: "60px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={logo}
            alt="King Arthur Food Palace"
            style={{ height: "70px" }}
          />
          <h2 style={{ color: "gold", margin: 0 }}>
            King Arthur Food Palace
          </h2>
        </div>

        {/* Contact Info */}
        <div style={{ lineHeight: "1.8" }}>
          <p>📍 Jehovah Witness Street, NDU, Amassoma</p>
          <p>📞 07088470202 | 09132665527</p>
          <p>🕒 10:00 AM – 11:30 PM</p>
          <p>Facebook: Felix Arthur</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: "15px",
          color: "#aaa"
        }}
      >
        © {new Date().getFullYear()} King Arthur Food Palace. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
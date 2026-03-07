import React from "react";
function Contact() {
  return (
    <div
      style={{
        padding: "60px",
        background: "#0d0d0d",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "gold", marginBottom: "30px" }}>
        Contact King Arthur Food Palace 📞
      </h1>

      <p style={{ marginBottom: "15px" }}>
        📍 Jehovah Witness Street, NDU, Amassoma
      </p>

      <p style={{ marginBottom: "15px" }}>
        🕒 Open Daily: 10:00 AM – 11:30 PM
      </p>

      <p style={{ marginBottom: "10px" }}>
        📞 07088470202
      </p>

      <p style={{ marginBottom: "20px" }}>
        📞 09132665527
      </p>

      <p style={{ marginBottom: "25px" }}>
        👍 Facebook: Felix Arthur
      </p>

      <p style={{ color: "#ccc", marginBottom: "40px" }}>
        Call the numbers above to place your orders or make inquiries.
      </p>

      {/* Google Map */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <iframe
          src="https://www.google.com/maps?q=Jehovah%20Witness%20Street%20Amassoma&output=embed"
          width="100%"
          height="350"
          style={{
            borderRadius: "10px",
            border: "2px solid gold"
          }}
          loading="lazy"
          title="King Arthur Food Palace Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
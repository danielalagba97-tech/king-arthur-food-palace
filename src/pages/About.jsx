import logo from "../assets/images/logo.png";

function About() {
  return (
    <div
      style={{
        padding: "60px",
        color: "white",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      
      <h1
        style={{
          color: "gold",
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        About King Arthur Food Palace 👑
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8"
        }}
      >
        
        <p style={{ marginBottom: "20px" }}>
          King Arthur Food Palace is an eatery where we prioritize the satisfaction
          of all our esteemed customers. Located at Jehovah Witness Street,
          Niger Delta University (NDU), Amassoma, we are dedicated to serving
          students and visitors with premium local and continental meals at
          affordable prices.
        </p>

        <p style={{ marginBottom: "20px" }}>
          From delicious jollof rice and fried rice to burgers, shawarma,
          chicken & chips, and other tasty meals, we combine quality, taste,
          and fast service to satisfy every craving.
        </p>

        <h2 style={{ color: "gold", marginTop: "40px" }}>
          Our Mission
        </h2>

        <p style={{ marginTop: "15px" }}>
          To provide high-quality, hygienic, and affordable meals that make
          every student feel like royalty.
        </p>

        <h2 style={{ color: "gold", marginTop: "40px" }}>
          Why Choose Us?
        </h2>

        <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
          <li>✔ Affordable student-friendly pricing</li>
          <li>✔ Fast and reliable service</li>
          <li>✔ Clean and hygienic environment</li>
          <li>✔ Delicious meals made with care</li>
        </ul>

      </div>
    </div>
  );
}

export default About;
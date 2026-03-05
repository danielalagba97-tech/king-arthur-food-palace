import foodpalace from "../assets/images/foodpalace.jpg";
import friedrice from "../assets/images/friedrice.jpg";
import chickenandchips from "../assets/images/chickenandchips.jpg";
import kingarthurshawarma from "../assets/images/kingarthurshawarma.jpg";
import kingarthurjollof from "../assets/images/kingarthurjollof.jpg";
import kingarthurburger from "../assets/images/kingarthurburger.jpg";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section style={{
        minHeight: "85vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${foodpalace}) center/cover`,
        color: "gold",
        textAlign: "center"
      }}>

        <h1 style={{ fontSize: "3rem" }}>Eat Like Royalty 👑</h1>

        <p style={{ color: "white", marginTop: "15px", maxWidth: "500px" }}>
          Premium local & continental meals for NDU students
        </p>

        <a href="/menu" style={{
          marginTop: "25px",
          padding: "12px 25px",
          background: "gold",
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "6px"
        }}>
          View Menu
        </a>

      </section>


      {/* Visit Restaurant */}
      <section style={{
        padding: "60px 20px",
        background: "#0d0d0d",
        textAlign: "center"
      }}>

        <h2 style={{ color: "gold", marginBottom: "30px" }}>
          Visit King Arthur Food Palace
        </h2>

        <img
          src={foodpalace}
          alt="King Arthur Food Palace"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "12px",
            border: "2px solid gold",
            marginBottom: "25px"
          }}
        />

        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#ddd",
          lineHeight: "1.7"
        }}>
          Located at Jehovah Witness Street, Niger Delta University (NDU), Amassoma,
          King Arthur Food Palace offers delicious meals, a comfortable dining
          environment, and excellent service for students and visitors.
        </p>

      </section>


      {/* Featured Dishes */}
      <section style={{ padding: "60px 20px", background: "#111" }}>

        <h2 style={{ color: "gold", textAlign: "center", marginBottom: "40px" }}>
          Featured Dishes
        </h2>

        <div style={flexGrid}>

          <div className="dish-card" style={cardStyle}>
            <img src={friedrice} alt="Fried Rice" style={imageStyle}/>
            <h3 style={{ marginTop: "15px" }}>Fried Rice</h3>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={chickenandchips} alt="Chicken & Chips" style={imageStyle}/>
            <h3 style={{ marginTop: "15px" }}>Chicken & Chips</h3>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={kingarthurshawarma} alt="Shawarma" style={imageStyle}/>
            <h3 style={{ marginTop: "15px" }}>King Arthur Shawarma</h3>
          </div>

        </div>

      </section>


      {/* Most Popular Meals */}
      <section style={{
        padding: "60px 20px",
        background: "#0d0d0d",
        textAlign: "center"
      }}>

        <h2 style={{ color: "gold", marginBottom: "40px" }}>
          Most Popular Meals 🔥
        </h2>

        <div style={flexGrid}>

          <div className="dish-card" style={cardStyle}>
            <img src={kingarthurshawarma} alt="Shawarma" style={imageStyle}/>
            <h3>King Arthur Shawarma</h3>
            <p>Big Size — ₦3,000</p>
            <p>Jumbo Size — ₦3,500</p>
            <p>Super Jumbo — ₦4,000</p>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={kingarthurburger} alt="Burger" style={imageStyle}/>
            <h3>Burger</h3>
            <p>₦3,000</p>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={chickenandchips} alt="Chicken & Chips" style={imageStyle}/>
            <h3>Chicken & Chips</h3>
            <p>₦3,500</p>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={kingarthurjollof} alt="Jollof Rice" style={imageStyle}/>
            <h3>Jollof Rice + Chicken + Water</h3>
            <p>₦3,000</p>
          </div>

          <div className="dish-card" style={cardStyle}>
            <img src={friedrice} alt="Fried Rice" style={imageStyle}/>
            <h3>Fried Rice + Chicken + Water</h3>
            <p>₦3,000</p>
          </div>

        </div>

      </section>


      {/* Food Gallery */}
      <section style={{
        padding: "60px 20px",
        background: "#000",
        textAlign: "center"
      }}>

        <h2 style={{ color: "gold", marginBottom: "40px" }}>
          Food Gallery 🍽️
        </h2>

        <div style={galleryGrid}>

          <img src={friedrice} alt="Fried Rice" style={galleryImage}/>
          <img src={kingarthurjollof} alt="Jollof Rice" style={galleryImage}/>
          <img src={kingarthurburger} alt="Burger" style={galleryImage}/>
          <img src={chickenandchips} alt="Chicken and Chips" style={galleryImage}/>
          <img src={kingarthurshawarma} alt="Shawarma" style={galleryImage}/>
          <img src={foodpalace} alt="Restaurant" style={galleryImage}/>

        </div>

      </section>


      {/* Testimonials */}
      <section style={{
        padding: "60px 20px",
        background: "#0d0d0d",
        textAlign: "center"
      }}>

        <h2 style={{ color: "gold", marginBottom: "40px" }}>
          What Students Are Saying
        </h2>

        <div style={flexGrid}>

          <div style={testimonialStyle}>
            <p>"Best jollof rice in NDU 🔥"</p>
            <strong style={{ color: "gold" }}>— 300L Student</strong>
          </div>

          <div style={testimonialStyle}>
            <p>"Affordable and fast delivery!"</p>
            <strong style={{ color: "gold" }}>— 200L Student</strong>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section style={{
        padding: "80px 20px",
        background: "black",
        textAlign: "center",
        borderTop: "1px solid gold"
      }}>

        <h2 style={{ color: "gold", fontSize: "2rem" }}>
          Ready to Order?
        </h2>

        <p style={{ color: "white", marginTop: "15px" }}>
          Place your order now and enjoy premium meals from King Arthur Food Palace.
        </p>

        <a href="/order" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "12px 30px",
          background: "gold",
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "6px"
        }}>
          Order Now
        </a>

      </section>

    </div>
  );
}


/* FLEX GRID */
const flexGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap"
};

const cardStyle = {
  background: "#000",
  padding: "20px",
  borderRadius: "10px",
  width: "100%",
  maxWidth: "260px",
  textAlign: "center",
  border: "1px solid gold"
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px"
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto"
};

const galleryImage = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
  border: "1px solid gold"
};

const testimonialStyle = {
  background: "#111",
  padding: "25px",
  borderRadius: "10px",
  width: "100%",
  maxWidth: "280px",
  border: "1px solid gold"
};

export default Home;
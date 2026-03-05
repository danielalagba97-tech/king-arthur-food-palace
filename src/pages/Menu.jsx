import shawarma from "../assets/images/kingarthurshawarma.jpg";
import kingarthurburger from "../assets/images/kingarthurburger.jpg";
import chickenandchips from "../assets/images/chickenandchips.jpg";
import kingarthurjollof from "../assets/images/kingarthurjollof.jpg";
import friedrice from "../assets/images/friedrice.jpg";
import cake from "../assets/images/cake.jpg";
import barbecue from "../assets/images/barbecue.jpg";
import meatpie from "../assets/images/meatpie.jpg";
import logo from "../assets/images/logo.png";

function Menu() {
  return (
    <div
      style={{
        padding: "60px",
        minHeight: "100vh",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.93), rgba(0,0,0,0.93)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <h1 style={{ color: "gold", textAlign: "center", marginBottom: "50px" }}>
        Our Menu 🍽️
      </h1>

      {/* Shawarma */}
      <h2 style={sectionTitle}>Shawarma</h2>

      <div style={gridStyle}>
        <div className="dish-card" style={cardStyle}>

          <img src={shawarma} alt="Shawarma" style={imageStyle} />

          <h3>King Arthur Shawarma</h3>

          <p>Big Size — ₦3,000</p>
          <p>Jumbo Size — ₦3,500</p>
          <p>Super Jumbo — ₦4,000</p>

        </div>
      </div>

      <div className="menu-divider"></div>


      {/* Fast Food */}
      <h2 style={sectionTitle}>Fast Food</h2>

      <div style={gridStyle}>

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
          <img src={barbecue} alt="Barbecue" style={imageStyle}/>
          <h3>Barbecue</h3>
          <p>₦12,000</p>
        </div>

        <div className="dish-card" style={cardStyle}>
          <img src={meatpie} alt="Meat Pie" style={imageStyle}/>
          <h3>Meat Pie</h3>
          <p>₦800</p>
        </div>

        <div className="dish-card" style={cardStyle}>
          <img src={cake} alt="Cake" style={imageStyle}/>
          <h3>Cake</h3>
          <p>₦1,000</p>
        </div>

      </div>

      <div className="menu-divider"></div>


      {/* Rice Meals */}
      <h2 style={sectionTitle}>Rice Meals</h2>

      <div style={gridStyle}>

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

      <div className="menu-divider"></div>


      {/* Extras */}
      <h2 style={sectionTitle}>Extras</h2>

      <div style={gridStyle}>
        <div className="dish-card" style={cardStyle}>
          <h3>Salad</h3>
          <p>₦500</p>
        </div>
      </div>

    </div>
  );
}


/* Section titles */
const sectionTitle = {
  color: "gold",
  marginBottom: "25px",
  marginTop: "20px"
};


/* GRID (keeps cards same size) */
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 220px))",
  justifyContent: "center",
  gap: "25px",
  marginBottom: "40px"
};


/* CARD */
const cardStyle = {
  background: "#000",
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid gold",
  textAlign: "center"
};


/* IMAGE SIZE */
const imageStyle = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px"
};

export default Menu;
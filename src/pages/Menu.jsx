import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const orderMeal = (meal) => {
    navigate("/order", { state: { meal } });
  };

  /* reusable card */

  const FoodCard = ({ image, name, price, meal }) => (
    <div
      style={cardStyle}
      onClick={() => orderMeal(meal)}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {image && <img src={image} alt={name} style={imageStyle} />}

      <h3>{name}</h3>
      <p>{price}</p>

      <p style={orderHint}>Tap to Order</p>
    </div>
  );

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

      {/* SHAWARMA */}

      <h2 style={sectionTitle}>Shawarma</h2>

      <div style={gridStyle}>

        <FoodCard
          image={shawarma}
          name="King Arthur Shawarma"
          price="Big Size — ₦3,000 / Jumbo — ₦3,500 / Super Jumbo — ₦4,000"
          meal="Big Shawarma"
        />

      </div>

      <div className="menu-divider"></div>

      {/* FAST FOOD */}

      <h2 style={sectionTitle}>Fast Food</h2>

      <div style={gridStyle}>

        <FoodCard
          image={kingarthurburger}
          name="Burger"
          price="₦3,000"
          meal="Burger"
        />

        <FoodCard
          image={chickenandchips}
          name="Chicken & Chips"
          price="₦3,500"
          meal="Chicken & Chips"
        />

        <FoodCard
          image={barbecue}
          name="Barbecue"
          price="₦12,000"
          meal="Barbecue"
        />

        <FoodCard
          image={meatpie}
          name="Meat Pie"
          price="₦800"
          meal="Meat Pie"
        />

        <FoodCard
          image={cake}
          name="Cake"
          price="₦1,000"
          meal="Cake"
        />

      </div>

      <div className="menu-divider"></div>

      {/* RICE MEALS */}

      <h2 style={sectionTitle}>Rice Meals</h2>

      <div style={gridStyle}>

        <FoodCard
          image={kingarthurjollof}
          name="Jollof Rice + Chicken + Water"
          price="₦3,000"
          meal="Jollof Rice + Chicken"
        />

        <FoodCard
          image={friedrice}
          name="Fried Rice + Chicken + Water"
          price="₦3,000"
          meal="Fried Rice + Chicken"
        />

      </div>

      <div className="menu-divider"></div>

      {/* EXTRAS */}

      <h2 style={sectionTitle}>Extras</h2>

      <div style={gridStyle}>

        <FoodCard
          name="Salad"
          price="₦500"
          meal="Salad"
        />

      </div>

    </div>
  );
}


/* SECTION TITLES */

const sectionTitle = {
  color: "gold",
  marginBottom: "25px",
  marginTop: "20px"
};


/* GRID */

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
  textAlign: "center",
  cursor: "pointer",
  transition: "0.3s"
};


/* IMAGE */

const imageStyle = {
  width: "100%",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px"
};


/* TAP LABEL */

const orderHint = {
  color: "#ccc",
  fontSize: "13px",
  marginTop: "8px"
};

export default Menu;
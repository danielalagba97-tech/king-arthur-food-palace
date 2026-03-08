import { useState, useEffect } from "react";
import { addOrder } from "../data/orders";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Order() {

  const location = useLocation();
  const preselectedMeal = location.state?.meal || "";

  const [orderType, setOrderType] = useState("");
  const [cart, setCart] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    note: "",
    payment: ""
  });

  /* Auto add meal if coming from Menu */

  useEffect(() => {
    if (preselectedMeal) {
      setCart([{ meal: preselectedMeal, quantity: 1 }]);
    }
  }, [preselectedMeal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* Add meal to cart */

  const addMeal = () => {

    if (!selectedMeal) {
      alert("Please select a meal");
      return;
    }

    const existing = cart.find((item) => item.meal === selectedMeal);

    if (existing) {

      const updatedCart = cart.map((item) =>
        item.meal === selectedMeal
          ? { ...item, quantity: item.quantity + Number(quantity) }
          : item
      );

      setCart(updatedCart);

    } else {

      const item = {
        meal: selectedMeal,
        quantity: Number(quantity)
      };

      setCart([...cart, item]);
    }

    setSelectedMeal("");
    setQuantity(1);
  };

  /* Remove item */

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  /* Submit order */

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!orderType) {
      alert("Please select Delivery or Pickup");
      return;
    }

    if (cart.length === 0) {
      alert("Please add at least one meal");
      return;
    }

    const orderData = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      meals: cart,
      location: formData.location,
      note: formData.note,
      payment: formData.payment,
      orderType,
      status: "Pending",
      time: new Date().toLocaleString()
    };

    addOrder(orderData);

    const mealList = cart
      .map((item) => `${item.meal} x${item.quantity}`)
      .join("\n");

    const message = `
NEW ORDER

Name: ${formData.name}
Phone: ${formData.phone}

Meals:
${mealList}

Type: ${orderType}
Location: ${formData.location}
Payment: ${formData.payment}
Note: ${formData.note}
`;

    const whatsappNumber = "2349132665527";

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    setWhatsappLink(whatsappURL);
    setShowWhatsapp(true);

    alert("Order received successfully!");

    setCart([]);

    setFormData({
      name: "",
      phone: "",
      location: "",
      note: "",
      payment: ""
    });

    setOrderType("");
  };

  return (
    <div
      style={{
        padding: "60px",
        minHeight: "100vh",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <h1 style={{ textAlign: "center", color: "gold", marginBottom: "40px" }}>
        Place Your Order 🍔
      </h1>

      {/* Delivery / Pickup */}

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>

        <button
          type="button"
          onClick={() => setOrderType("Delivery")}
          style={buttonStyle(orderType === "Delivery")}
        >
          Delivery
        </button>

        <button
          type="button"
          onClick={() => setOrderType("Pickup")}
          style={buttonStyle(orderType === "Pickup")}
        >
          Pickup
        </button>

      </div>

      {orderType && (

        <form onSubmit={handleSubmit} style={formStyle}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          {/* Add Meals */}

          <div style={{ display: "flex", gap: "10px" }}>

            <select
              value={selectedMeal}
              onChange={(e) => setSelectedMeal(e.target.value)}
              style={inputStyle}
            >

              <option value="">Select Meal</option>

              <option>Big Shawarma</option>
              <option>Jumbo Shawarma</option>
              <option>Super Jumbo Shawarma</option>
              <option>Burger</option>
              <option>Chicken & Chips</option>
              <option>Barbecue</option>
              <option>Jollof Rice + Chicken</option>
              <option>Fried Rice + Chicken</option>
              <option>Meat Pie</option>
              <option>Cake</option>

            </select>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={inputStyle}
            />

            <button
              type="button"
              onClick={addMeal}
              style={addBtn}
            >
              Add
            </button>

          </div>

          {/* Cart */}

          {cart.length > 0 && (

            <div style={cartBox}>

              <h3 style={{ color: "gold" }}>Your Order</h3>

              {cart.map((item, index) => (

                <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>

                  <p>{item.meal} x{item.quantity}</p>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    style={removeBtn}
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

          {orderType === "Delivery" && (
            <input
              type="text"
              name="location"
              placeholder="Delivery Address"
              required
              value={formData.location}
              onChange={handleChange}
              style={inputStyle}
            />
          )}

          <textarea
            name="note"
            placeholder="Additional Instructions"
            value={formData.note}
            onChange={handleChange}
            style={{ ...inputStyle, height: "90px" }}
          />

          <select
            name="payment"
            required
            value={formData.payment}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Payment Method</option>
            <option value="pickup">Pay on Pickup / Delivery</option>
            <option value="transfer">Bank Transfer</option>
          </select>

          <button type="submit" style={submitBtn}>
            Submit Order
          </button>

        </form>

      )}

      {showWhatsapp && (

        <div style={{ textAlign: "center", marginTop: "40px" }}>

          <h2 style={{ color: "gold" }}>Order Saved</h2>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={whatsappBtn}
          >
            Send Order to WhatsApp
          </a>

        </div>

      )}

    </div>
  );
}

const buttonStyle = (active) => ({
  padding: "12px 25px",
  background: active ? "gold" : "#111",
  color: active ? "black" : "white",
  border: "1px solid gold",
  borderRadius: "6px"
});

const formStyle = {
  maxWidth: "600px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: "rgba(0,0,0,0.85)",
  padding: "30px",
  borderRadius: "10px",
  border: "1px solid gold"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid gold",
  background: "#111",
  color: "white"
};

const cartBox = {
  background: "#111",
  border: "1px solid gold",
  padding: "15px",
  borderRadius: "6px"
};

const addBtn = {
  background: "gold",
  border: "none",
  padding: "10px",
  borderRadius: "6px"
};

const removeBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "6px",
  borderRadius: "5px"
};

const submitBtn = {
  background: "gold",
  color: "black",
  padding: "15px",
  border: "none",
  fontWeight: "bold",
  borderRadius: "8px"
};

const whatsappBtn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "14px 30px",
  background: "#25D366",
  color: "white",
  borderRadius: "8px",
  fontWeight: "bold",
  textDecoration: "none"
};

export default Order;
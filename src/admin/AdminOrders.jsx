import { useState } from "react";
import { addOrder } from "../data/orders";

function Order() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    meal: "",
    orderType: "Pickup",
    location: "",
    landmark: "",
    payment: "Pay On Pickup"
  });

  const [whatsappLink, setWhatsappLink] = useState("");
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const orderData = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      meal: formData.meal,
      quantity: 1,
      orderType: formData.orderType,
      location: formData.location,
      landmark: formData.landmark,
      payment: formData.payment,
      status: "Pending",
      time: new Date().toLocaleString()
    };

    // Save order for Admin Dashboard
    addOrder(orderData);

    // Create WhatsApp message
    const message = `
NEW ORDER

Name: ${formData.name}
Phone: ${formData.phone}
Meal: ${formData.meal}
Order Type: ${formData.orderType}
Location: ${formData.location}
Landmark: ${formData.landmark}
Payment Method: ${formData.payment}
`;

    const whatsappNumber = "2349132665527";

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    setWhatsappLink(url);
    setShowWhatsapp(true);

    alert("Order received! We will prepare your meal shortly.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      meal: "",
      orderType: "Pickup",
      location: "",
      landmark: "",
      payment: "Pay On Pickup"
    });

  };

  return (

    <div style={container}>

      <h1 style={{ color: "gold" }}>
        Place Your Order 🍽️
      </h1>

      <form onSubmit={handleSubmit} style={form}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={input}
        />

        <select
          name="meal"
          value={formData.meal}
          onChange={handleChange}
          required
          style={input}
        >

          <option value="">Select Meal</option>
          <option>Shawarma</option>
          <option>Burger</option>
          <option>Chicken & Chips</option>
          <option>Jollof Rice + Chicken</option>
          <option>Fried Rice + Chicken</option>
          <option>Barbecue</option>
          <option>Meat Pie</option>
          <option>Cake</option>

        </select>

        <select
          name="orderType"
          value={formData.orderType}
          onChange={handleChange}
          style={input}
        >

          <option>Pickup</option>
          <option>Delivery</option>

        </select>

        {formData.orderType === "Delivery" && (

          <>
            <input
              type="text"
              name="location"
              placeholder="Delivery Location"
              value={formData.location}
              onChange={handleChange}
              style={input}
            />

            <input
              type="text"
              name="landmark"
              placeholder="Nearest Landmark"
              value={formData.landmark}
              onChange={handleChange}
              style={input}
            />
          </>

        )}

        <select
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          style={input}
        >

          <option>Pay On Pickup</option>
          <option>Bank Transfer</option>

        </select>

        {formData.payment === "Bank Transfer" && (

          <div style={bankBox}>

            <p>Bank: Moniepoint</p>
            <p>Account Number: 5377316915</p>
            <p>Account Name: King Arthur Food Palace</p>

          </div>

        )}

        <button type="submit" style={button}>
          Submit Order
        </button>

      </form>

      {showWhatsapp && (

        <div style={whatsappContainer}>

          <h2 style={{ color: "gold" }}>
            Order Saved Successfully
          </h2>

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

const container = {
  minHeight: "100vh",
  background: "#0d0d0d",
  color: "white",
  padding: "60px",
  textAlign: "center"
};

const form = {
  maxWidth: "500px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const input = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const bankBox = {
  background: "#111",
  padding: "15px",
  borderRadius: "6px",
  border: "1px solid gold"
};

const button = {
  padding: "12px",
  background: "gold",
  border: "none",
  fontWeight: "bold",
  borderRadius: "6px",
  cursor: "pointer"
};

const whatsappContainer = {
  marginTop: "40px"
};

const whatsappBtn = {
  display: "inline-block",
  marginTop: "20px",
  padding: "14px 30px",
  background: "#25D366",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

export default Order;
import { useState } from "react";
import { addOrder } from "../data/orders";
import logo from "../assets/images/logo.png";

function Order() {

  const [orderType, setOrderType] = useState("");
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    meal: "",
    quantity: 1,
    location: "",
    note: "",
    payment: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderType) {
      alert("Please select Delivery or Pickup");
      return;
    }

    const orderData = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      meal: formData.meal,
      quantity: formData.quantity,
      location: formData.location,
      note: formData.note,
      payment: formData.payment,
      orderType: orderType,
      status: "Pending",
      time: new Date().toLocaleString()
    };

    addOrder(orderData);

    const message = `
NEW ORDER

Name: ${formData.name}
Phone: ${formData.phone}
Meal: ${formData.meal}
Quantity: ${formData.quantity}
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

    alert(
      orderType === "Pickup"
        ? "Order received! Your food will be ready in about 15–25 minutes."
        : "Order received! Delivery usually takes about 20–35 minutes."
    );

    setFormData({
      name: "",
      phone: "",
      meal: "",
      quantity: 1,
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

      <h1
        style={{
          textAlign: "center",
          color: "gold",
          marginBottom: "40px"
        }}
      >
        Place Your Order 🍔
      </h1>

      {/* DELIVERY OR PICKUP */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <button
          type="button"
          onClick={() => setOrderType("Delivery")}
          style={{
            padding: "12px 25px",
            background: orderType === "Delivery" ? "gold" : "#111",
            color: orderType === "Delivery" ? "black" : "white",
            border: "1px solid gold",
            borderRadius: "6px"
          }}
        >
          Delivery
        </button>

        <button
          type="button"
          onClick={() => setOrderType("Pickup")}
          style={{
            padding: "12px 25px",
            background: orderType === "Pickup" ? "gold" : "#111",
            color: orderType === "Pickup" ? "black" : "white",
            border: "1px solid gold",
            borderRadius: "6px"
          }}
        >
          Pickup
        </button>

      </div>

      {orderType && (

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "rgba(0,0,0,0.85)",
            padding: "30px",
            borderRadius: "10px",
            border: "1px solid gold"
          }}
        >

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

          <select
            name="meal"
            required
            value={formData.meal}
            onChange={handleChange}
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
          </select>

          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            style={inputStyle}
          />

          {orderType === "Delivery" && (
            <input
              type="text"
              name="location"
              placeholder="Delivery Address / Landmark"
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
            style={{
              ...inputStyle,
              height: "90px"
            }}
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

          {formData.payment === "transfer" && (

            <div style={infoBox}>

              <h3 style={{ color: "gold" }}>Bank Transfer Details</h3>

              <p>Bank: Moniepoint</p>
              <p>Account Name: King Arthur Food Palace</p>
              <p>Account Number: 5377316915</p>

              <p style={{ fontSize: "14px", color: "#ccc" }}>
                After payment keep your receipt.
              </p>

            </div>

          )}

          <button
            type="submit"
            style={{
              background: "gold",
              color: "black",
              padding: "15px",
              border: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Submit Order
          </button>

        </form>

      )}

      {/* WhatsApp Button */}

      {showWhatsapp && (

        <div style={{ textAlign: "center", marginTop: "40px" }}>

          <h2 style={{ color: "gold" }}>Order Saved Successfully</h2>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "15px 30px",
              background: "#25D366",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Send Order to WhatsApp
          </a>

        </div>

      )}

    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid gold",
  background: "#111",
  color: "white"
};

const infoBox = {
  background: "#111",
  border: "1px solid gold",
  padding: "15px",
  borderRadius: "6px"
};

export default Order;
import { useState } from "react";
import logo from "../assets/images/logo.png";

function Order() {

  const [orderType, setOrderType] = useState("");

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

  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      payment: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      orderType === "pickup"
        ? "Order received! Your food will be ready in about 15–25 minutes."
        : "Order received! Our delivery team will contact you shortly."
    );

    console.log(orderType, formData);
  };

  return (
    <div
      style={{
        padding: "60px",
        minHeight: "100vh",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.92), rgba(0,0,0,0.92)), url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
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


      {/* Delivery / Pickup */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        <button
          onClick={() => setOrderType("delivery")}
          style={{
            padding: "12px 25px",
            background: orderType === "delivery" ? "gold" : "#111",
            color: orderType === "delivery" ? "black" : "white",
            border: "1px solid gold",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Delivery
        </button>

        <button
          onClick={() => setOrderType("pickup")}
          style={{
            padding: "12px 25px",
            background: orderType === "pickup" ? "gold" : "#111",
            color: orderType === "pickup" ? "black" : "white",
            border: "1px solid gold",
            borderRadius: "6px",
            cursor: "pointer"
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
            background: "rgba(0,0,0,0.8)",
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
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            style={inputStyle}
          />

          <select
            name="meal"
            required
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
            placeholder="Quantity"
            onChange={handleChange}
            style={inputStyle}
          />


          {/* Delivery Section */}
          {orderType === "delivery" && (
            <>
              <input
                type="text"
                name="location"
                placeholder="Delivery Address"
                required
                onChange={handleChange}
                style={inputStyle}
              />

              <div style={infoBox}>
                🚚 Delivery usually takes **20–35 minutes** depending on your location.
              </div>
            </>
          )}


          {/* Pickup Section */}
          {orderType === "pickup" && (
            <div style={infoBox}>
              ⏱ Your order will be ready in **15–25 minutes**.
              <br />
              📍 Pick up at **King Arthur Food Palace,
              Jehovah Witness Street, NDU Amassoma.**
            </div>
          )}


          <textarea
            name="note"
            placeholder="Additional Instructions"
            onChange={handleChange}
            style={{ ...inputStyle, height: "100px" }}
          />


          {/* Payment Section */}
          <div>

            <h3 style={{ color: "gold", marginBottom: "10px" }}>
              Payment Method
            </h3>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="radio"
                value="delivery"
                checked={formData.payment === "delivery"}
                onChange={handlePaymentChange}
              />
              Pay on Delivery / Pickup
            </label>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="radio"
                value="transfer"
                checked={formData.payment === "transfer"}
                onChange={handlePaymentChange}
              />
              Bank Transfer
            </label>

            {formData.payment === "transfer" && (
              <div style={infoBox}>
                <strong style={{ color: "gold" }}>Bank Transfer Details</strong>

                <p>Bank: Moniepoint</p>
                <p>Account Name: King Arthur Food Palace</p>
                <p>Account Number: 5377316915</p>

                <p style={{ fontSize: "14px", color: "#ccc" }}>
                  After transfer, please keep your receipt. Payment will be confirmed when your order is processed.
                </p>
              </div>
            )}

          </div>


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
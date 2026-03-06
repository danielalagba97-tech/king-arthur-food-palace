import { useState } from "react";
import { getOrders } from "../data/orders";
import logo from "../assets/images/logo.png";

function TrackOrder() {

  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState(null);

  const handleSearch = () => {

    const orders = getOrders();

    const foundOrder = orders
      .filter(o => o.phone === phone)
      .slice(-1)[0];

    if (foundOrder) {

      setOrder(foundOrder);

    } else {

      alert("No order found for this phone number");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "60px",
        textAlign: "center",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.92), rgba(0,0,0,0.92)), url(${logo})`,
        backgroundSize: "cover"
      }}
    >

      <h1 style={{ color: "gold", marginBottom: "30px" }}>
        Track Your Order
      </h1>

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        style={{
          padding: "12px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid gold"
        }}
      />

      <br/>

      <button
        onClick={handleSearch}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "gold",
          border: "none",
          fontWeight: "bold",
          borderRadius: "6px"
        }}
      >
        Check Order
      </button>

      {order && (

        <div
          style={{
            marginTop: "40px",
            background: "#111",
            padding: "30px",
            borderRadius: "10px",
            border: "1px solid gold",
            maxWidth: "400px",
            marginInline: "auto"
          }}
        >

          <h2 style={{ color: "gold" }}>
            Status: {order.status}
          </h2>

          <p>Meal: {order.meal}</p>

          <p>Quantity: {order.quantity}</p>

          <p>Type: {order.orderType}</p>

          <p>Ordered At: {order.time}</p>

        </div>

      )}

    </div>

  );

}

export default TrackOrder;
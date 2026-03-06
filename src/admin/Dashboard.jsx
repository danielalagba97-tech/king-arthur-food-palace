import { useEffect, useState } from "react";
import { getOrders } from "../data/orders";

function Dashboard() {

  const [orders, setOrders] = useState([]);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {

    const checkOrders = () => {

      const storedOrders = getOrders();
      setOrders(storedOrders);

      if (storedOrders.length > lastCount) {
        alert("🔔 New Order Received!");
      }

      setLastCount(storedOrders.length);
    };

    checkOrders();

    const interval = setInterval(checkOrders, 3000);

    return () => clearInterval(interval);

  }, [lastCount]);

  const todayOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const revenue = orders.length * 3000; // demo estimate

  return (
    <div style={{ padding: "40px", color: "white" }}>

      <h1 style={{ color: "gold", marginBottom: "30px" }}>
        Dashboard
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={card}>
          <h3>Today's Orders</h3>
          <h2>{todayOrders}</h2>
        </div>

        <div style={card}>
          <h3>Pending Orders</h3>
          <h2>{pendingOrders}</h2>
        </div>

        <div style={card}>
          <h3>Revenue Today</h3>
          <h2>₦{revenue}</h2>
        </div>

      </div>

    </div>
  );
}

const card = {
  border: "1px solid gold",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  background: "#111"
};

export default Dashboard;
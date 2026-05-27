import { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "../data/orders";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load orders from your local file storage
  useEffect(() => {
    const fetchOrders = () => {
      if (typeof getOrders === "function") {
        setOrders(getOrders());
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Check for new customer orders every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    // Instantly update layout screen state
    const updated = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);

    // Persist status change back to storage tracker
    if (typeof updateOrderStatus === "function") {
      updateOrderStatus(orderId, newStatus);
    }
  };

  const filteredOrders = orders.filter(
    (order) => filter === "All" || order.status === filter
  );

  return (
    <div
      style={{
        padding: "140px max(4vw, 20px) 60px max(4vw, 20px)",
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white"
      }}
    >
      {/* Title Header summary context */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h1 style={{ color: "gold", margin: 0 }}>Admin Control Panel</h1>
          <p style={{ color: "#aaa", margin: "5px 0 0 0" }}>Manage your incoming kitchen orders</p>
        </div>
        
        {/* Navigation Filters */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["All", "Pending", "Preparing", "Completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                padding: "8px 16px",
                background: filter === type ? "gold" : "#111",
                color: filter === type ? "black" : "white",
                border: "1px solid gold",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Grid Tracker Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px" }}>
        {filteredOrders.length === 0 ? (
          <p style={{ color: "#666", gridColumn: "1 / -1", textAlign: "center", fontSize: "1.2rem" }}>No orders found under "{filter}"</p>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "rgba(0, 0, 0, 0.85)",
                border: `2px solid ${order.status === "Pending" ? "red" : order.status === "Preparing" ? "orange" : "green"}`,
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
                <div>
                  <h3 style={{ margin: 0, color: "gold" }}>{order.name || "Anonymous"}</h3>
                  <small style={{ color: "#888" }}>{order.time || "Just now"}</small>
                </div>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    background: order.orderType === "Delivery" ? "#1a3a5f" : "#2e1a47",
                    color: "white"
                  }}
                >
                  {order.orderType || "Order"}
                </span>
              </div>

              <div style={{ flexGrow: 1 }}>
                <strong style={{ display: "block", marginBottom: "5px", fontSize: "0.9rem", color: "#aaa" }}>Items Ordered:</strong>
                {order.meals && order.meals.map((item, idx) => (
                  <p key={idx} style={{ margin: "4px 0", fontSize: "1rem" }}>
                    • {item.meal} <span style={{ color: "gold" }}>x{item.quantity}</span>
                  </p>
                ))}
              </div>

              <div style={{ background: "#111", padding: "10px", borderRadius: "6px", fontSize: "0.9rem" }}>
                <p style={{ margin: "2px 0" }}>📞 <strong>Phone:</strong> {order.phone || "N/A"}</p>
                {order.orderType === "Delivery" && (
                  <p style={{ margin: "2px 0", wordBreak: "break-word" }}>📍 <strong>Address:</strong> {order.location || "No address provided"}</p>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #333" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "#888", display: "block" }}>TOTAL</span>
                  <strong style={{ fontSize: "1.2rem", color: "gold" }}>₦{order.total}</strong>
                </div>

                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  style={{
                    padding: "8px",
                    background: "#000",
                    color: "white",
                    border: "1px solid gold",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  <option value="Pending">🔴 Pending</option>
                  <option value="Preparing">🟠 Preparing</option>
                  <option value="Completed">🟢 Completed</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;

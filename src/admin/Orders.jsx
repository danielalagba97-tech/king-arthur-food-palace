import { useState, useEffect } from "react";
import { getOrders, updateOrderStatus } from "../data/orders";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch active customer orders from localStorage
  useEffect(() => {
    const fetchOrders = () => {
      if (typeof getOrders === "function") {
        setOrders(getOrders());
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Live sync: updates every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    // Instantly update layout state on screen
    const updated = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);

    // Save status modification back to local data store
    if (typeof updateOrderStatus === "function") {
      updateOrderStatus(orderId, newStatus);
    }
  };

  const filteredOrders = orders.filter(
    (order) => filter === "All" || order.status === filter
  );

  return (
    <div style={{ padding: "20px", color: "white", minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Title & Filter Controls Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div>
          <h2 style={{ color: "gold", margin: 0 }}>Customer Orders</h2>
          <p style={{ color: "#aaa", margin: "5px 0 0 0" }}>Real-time incoming kitchen stream</p>
        </div>

        {/* Filter Badges */}
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
                fontWeight: "bold",
                transition: "0.2s"
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Dynamic Flex Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {filteredOrders.length === 0 ? (
          <p style={{ color: "#666", gridColumn: "1 / -1", textAlign: "center", fontSize: "1.1rem", marginTop: "40px" }}>
            No orders found under "{filter}"
          </p>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "rgba(20, 20, 20, 0.95)",
                border: `1px solid ${order.status === "Pending" ? "red" : order.status === "Preparing" ? "orange" : "green"}`,
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
              }}
            >
              {/* Header Row */}
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
                <div>
                  <h3 style={{ margin: 0, color: "gold", fontSize: "1.1rem" }}>{order.name || "Anonymous"}</h3>
                  <small style={{ color: "#888" }}>{order.time || "Just now"}</small>
                </div>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    background: order.orderType === "Delivery" ? "#1a3a5f" : "#2e1a47",
                    color: "white",
                    alignSelf: "flex-start"
                  }}
                >
                  {order.orderType || "Order"}
                </span>
              </div>

              {/* Meals Checklist Area */}
              <div style={{ flexGrow: 1 }}>
                <span style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem", color: "#aaa", fontWeight: "bold" }}>ITEMS:</span>
                {order.meals && order.meals.map((item, idx) => (
                  <p key={idx} style={{ margin: "4px 0", fontSize: "0.95rem" }}>
                    • {item.meal} <span style={{ color: "gold", fontWeight: "bold" }}>x{item.quantity}</span>
                  </p>
                ))}
              </div>

              {/* Delivery / Metadata Box */}
              <div style={{ background: "#000", padding: "10px", borderRadius: "6px", fontSize: "0.85rem", border: "1px solid #222" }}>
                <p style={{ margin: "2px 0" }}>📞 <strong>Phone:</strong> {order.phone || "N/A"}</p>
                {order.orderType === "Delivery" && (
                  <p style={{ margin: "2px 0", wordBreak: "break-word" }}>📍 <strong>Address:</strong> {order.location || "No address provided"}</p>
                )}
                {order.note && (
                  <p style={{ margin: "6px 0 2px 0", color: "gold", fontStyle: "italic" }}>📝 <strong>Note:</strong> {order.note}</p>
                )}
              </div>

              {/* Bottom Total & Status Modifier Dropdown */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #333" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#888", display: "block" }}>TOTAL PRICE</span>
                  <strong style={{ fontSize: "1.1rem", color: "gold" }}>₦{order.total}</strong>
                </div>

                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  style={{
                    padding: "6px 10px",
                    background: "#111",
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

export default Orders;

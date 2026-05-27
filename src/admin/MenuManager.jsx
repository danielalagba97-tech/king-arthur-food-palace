import { useState, useEffect } from "react";
import menuService from "../data/menu";

function MenuManager() {
  const [menuItems, setMenuItems] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newCategory, setNewCategory] = useState("Meals");

  useEffect(() => {
    if (menuService && menuService.getMenu) {
      setMenuItems(menuService.getMenu());
    }
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newName || !newPrice) return alert("Please fill in all fields");

    if (menuService && menuService.addMenuItem) {
      const updated = menuService.addMenuItem({
        name: newName,
        price: Number(newPrice),
        category: newCategory
      });
      setMenuItems(updated);
    }
    setNewName("");
    setNewPrice("");
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      if (menuService && menuService.deleteMenuItem) {
        const updated = menuService.deleteMenuItem(id);
        setMenuItems(updated);
      }
    }
  };

  const handleToggleStock = (id) => {
    if (menuService && menuService.toggleAvailability) {
      const updated = menuService.toggleAvailability(id);
      setMenuItems(updated);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", minHeight: "100vh", background: "#0a0a0a" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "gold", margin: 0 }}>Menu Manager</h2>
        <p style={{ color: "#aaa", margin: "5px 0 0 0" }}>Add, remove, or toggle food stock status</p>
      </div>

      <form 
        onSubmit={handleAddItem}
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid gold",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          alignItems: "flex-end",
          marginBottom: "40px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", flex: "1", minWidth: "200px" }}>
          <label style={{ fontSize: "0.85rem", color: "gold" }}>Item Name</label>
          <input
            type="text"
            placeholder="e.g. Peppered Chicken"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "130px" }}>
          <label style={{ fontSize: "0.85rem", color: "gold" }}>Price (₦)</label>
          <input
            type="number"
            placeholder="3500"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "150px" }}>
          <label style={{ fontSize: "0.85rem", color: "gold" }}>Category</label>
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={inputStyle}
          >
            <option value="Meals">Meals</option>
            <option value="Sides">Sides</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        <button type="submit" style={btnStyle}>
          ➕ Add to Menu
        </button>
      </form>

      <div style={{ background: "#111", borderRadius: "8px", border: "1px solid #222", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid gold", background: "#000" }}>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Category</th>
              <th style={thTdStyle}>Price</th>
              <th style={thTdStyle}>Status</th>
              <th style={thTdStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ padding: "20px", textAlign: "center", color: "#666" }}>
                  No items in menu list. Add one above!
                </td>
              </tr>
            ) : (
              menuItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #222" }}>
                  <td style={{ ...thTdStyle, fontWeight: "bold" }}>{item.name}</td>
                  <td style={thTdStyle}>{item.category}</td>
                  <td style={{ ...thTdStyle, color: "gold" }}>₦{item.price}</td>
                  <td style={thTdStyle}>
                    <button
                      type="button"
                      onClick={() => handleToggleStock(item.id)}
                      style={{
                        padding: "4px 10px",
                        background: item.available ? "#1b4d22" : "#611a15",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        fontWeight: "bold"
                      }}
                    >
                      {item.available ? "🟢 In Stock" : "🔴 Out of Stock"}
                    </button>
                  </td>
                  <td style={thTdStyle}>
                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      style={{
                        padding: "4px 10px",
                        background: "transparent",
                        color: "#ff4d4d",
                        border: "1px solid #ff4d4d",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem"
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#000",
  color: "white",
  outline: "none"
};

const btnStyle = {
  padding: "10px 20px",
  background: "gold",
  color: "black",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  height: "40px"
};

const thTdStyle = {
  padding: "14px",
  fontSize: "0.95rem"
};

export default MenuManager;

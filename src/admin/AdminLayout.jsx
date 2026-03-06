import { Link, Outlet, Navigate } from "react-router-dom";

function AdminLayout() {

  const isAuth = localStorage.getItem("adminAuth");

  if (!isAuth) {

    return <Navigate to="/admin-login" />;

  }

  const handleLogout = () => {

    localStorage.removeItem("adminAuth");

    window.location.href = "/admin-login";

  };

  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>

      <div
        style={{
          width: "250px",
          background: "#000",
          color: "white",
          padding: "30px",
          borderRight: "1px solid gold"
        }}
      >

        <h2 style={{ color: "gold", marginBottom: "30px" }}>
          Admin Panel
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

          <Link to="/admin" style={linkStyle}>Dashboard</Link>

          <Link to="/admin/orders" style={linkStyle}>Orders</Link>

          <Link to="/admin/menu" style={linkStyle}>Menu Manager</Link>

          <Link to="/admin/payments" style={linkStyle}>Payments</Link>

          <Link to="/admin/analytics" style={linkStyle}>Analytics</Link>

          <button onClick={handleLogout} style={logoutStyle}>
            Logout
          </button>

        </nav>

      </div>

      <div style={{ flex: 1, padding: "40px" }}>

        <Outlet />

      </div>

    </div>

  );

}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const logoutStyle = {
  marginTop: "20px",
  padding: "10px",
  background: "gold",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

export default AdminLayout;
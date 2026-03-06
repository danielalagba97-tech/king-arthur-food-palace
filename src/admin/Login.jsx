import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const adminUser = "kingarthur";
    const adminPass = "foodpalace";

    if (username === adminUser && password === adminPass) {

      localStorage.setItem("adminAuth", "true");

      navigate("/admin");

    } else {

      alert("Invalid login details");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "white"
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "10px",
          border: "1px solid gold",
          width: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <h2 style={{ textAlign: "center", color: "gold" }}>
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button style={btnStyle}>
          Login
        </button>

      </form>

    </div>

  );

}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid gold",
  background: "#000",
  color: "white"
};

const btnStyle = {
  padding: "12px",
  background: "gold",
  border: "none",
  fontWeight: "bold",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Login;
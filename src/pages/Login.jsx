import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ marginBottom: "10px", color: "#111827" }}>
          VoucherPro
        </h1>

        <p style={{ marginBottom: "25px", color: "#6b7280" }}>
          Sign in to manage your vouchers efficiently
        </p>

        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#4f46e5",
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
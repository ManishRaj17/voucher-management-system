import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/dashboard")}>
        Go To Dashboard
      </button>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import { useVoucher } from "../context/VoucherContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { vouchers } = useVoucher();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1 style={{ color: "#111827" }}>Dashboard</h1>
          <p style={{ color: "#6b7280" }}>
            Manage your vouchers seamlessly
          </p>
        </div>

        <button
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "12px 18px",
            borderRadius: "10px",
          }}
          onClick={() => navigate("/create")}
        >
          + Create Voucher
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          <h2>{vouchers.length}</h2>
          <p>Total Vouchers</p>
        </div>

        <div className="card">
          <h2>₹{
            vouchers.reduce(
              (sum, v) => sum + Number(v.amount || 0),
              0
            )
          }</h2>
          <p>Total Amount</p>
        </div>

        <div className="card">
          <h2>Active</h2>
          <p>System Status</p>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: "20px" }}>Recent Entries</h2>

        {vouchers.length === 0 ? (
          <p>No vouchers available.</p>
        ) : (
          vouchers.map((v) => (
            <div
              key={v.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{v.type}</span>
              <span>{v.remarks || "No remarks"}</span>
              <strong>₹{v.amount}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
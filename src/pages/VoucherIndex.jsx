import { useState } from "react";
import { useVoucher } from "../context/VoucherContext";

export default function VoucherIndex() {
  const { vouchers, deleteVoucher } = useVoucher();
  const [search, setSearch] = useState("");

  const filtered = vouchers.filter((v) =>
    (v.remarks || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Voucher Index</h1>

      <input
        type="text"
        placeholder="Search narration..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Narration</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="6">No Data Found</td>
            </tr>
          ) : (
            filtered.map((v) => (
              <tr key={v.id}>
                <td>{new Date(v.id).toLocaleDateString()}</td>
                <td>{v.type}</td>
                <td>{v.remarks}</td>
                <td>₹{v.amount}</td>
                <td>₹{v.amount}</td>
                <td>
                  <button onClick={() => deleteVoucher(v.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
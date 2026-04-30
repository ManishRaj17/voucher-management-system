import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVoucher } from "../context/VoucherContext";

export default function VoucherForm() {
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const navigate = useNavigate();
  const { addVoucher } = useVoucher();

  const handleSave = () => {
    const voucherData = {
      name: "Voucher Entry",
      type: "Payment",
      amount,
      remarks,
    };

    addVoucher(voucherData);
    navigate("/dashboard");
  };

  return (
    <div className="voucher-container">
      <div className="header-bar">
        <div className="header-left">
          <button>Show All</button>
          <button>Add New Voucher</button>
          <button>Create Account</button>
        </div>

        <h3>Voucher Entry | Create</h3>

        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>

      <div className="form-top">
        <div className="field">
          <label>Group</label>
          <input value="CASH" readOnly />
        </div>

        <div className="field">
          <label>Voucher No</label>
          <input value="1" readOnly />
        </div>

        <div className="field">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="field">
          <label>Voc Type</label>
          <select>
            <option>Payment</option>
          </select>
        </div>

        <div className="field">
          <label>Remarks</label>
          <input
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Closing Bal</label>
          <input />
        </div>
      </div>

      <div className="ledger-box">
        <div className="ledger-header">
          <span>Account Head</span>
          <span>Narration</span>
          <span>Bill No</span>
          <span>Amt</span>
          <span>Mode</span>
          <span>Action</span>
        </div>

        <div className="ledger-row">
          <select>
            <option>Select Account Head</option>
          </select>

          <input placeholder="On Account" />
          <input placeholder="Bill No" />

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <select>
            <option>NA</option>
          </select>

          <button>+</button>
        </div>
      </div>

      <div className="total-box">
        <div>Total DR Amt: ₹{amount || 0}</div>
        <div>Total CR Amt: ₹{amount || 0}</div>
      </div>
    </div>
  );
}
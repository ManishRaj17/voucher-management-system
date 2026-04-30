import { createContext, useContext, useEffect, useState } from "react";

const VoucherContext = createContext();

export const VoucherProvider = ({ children }) => {
  const [vouchers, setVouchers] = useState(() => {
    const saved = localStorage.getItem("vouchers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("vouchers", JSON.stringify(vouchers));
  }, [vouchers]);

  const addVoucher = (voucher) => {
    setVouchers([...vouchers, { id: Date.now(), ...voucher }]);
  };

  return (
    <VoucherContext.Provider value={{ vouchers, addVoucher }}>
      {children}
    </VoucherContext.Provider>
  );
};

export const useVoucher = () => useContext(VoucherContext);
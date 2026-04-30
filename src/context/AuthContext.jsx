import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setUser({ role: 'admin' });
      return true;
    }
    if (username === 'staff' && password === 'staff123') {
      setUser({ role: 'staff' });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
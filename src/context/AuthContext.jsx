import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem('authUser') || null);

  // Ya no es necesario el useEffect para inicializar user

  const login = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', username); // guardar también el user
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

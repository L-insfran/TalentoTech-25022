import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Recuperar usuario al cargar la app
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

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

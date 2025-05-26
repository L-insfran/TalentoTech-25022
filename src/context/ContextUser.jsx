import { createContext, useContext, useState } from "react";

const userAutorizadoContext = createContext();


export const UserAutorizadoProvider = ({ children }) => {
  const [userAutorizado, setUserAutorizado] = useState(false);
  const [user, setUser] = useState({});

  const login = (userData) => {
    setUser(userData);
  
    setUserAutorizado(true);
  };

  const logout = () => {
    setUser({});
    setUserAutorizado(false);
  };

  return (
    <userAutorizadoContext.Provider value={{ userAutorizado, user, login, logout }}>
      {children}
    </userAutorizadoContext.Provider>
  );
}

export const useAuthUser = () => {
  const context = useContext(userAutorizadoContext);
  if (!context) {
    throw new Error('useAuthCarrito debe usarse dentro de UserAutorizadoProvider');
  }
  return context;
};
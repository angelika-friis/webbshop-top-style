import { createContext, useState, useContext, useEffect } from 'react';
import {
  checkLogin,
  loginUser,
  registerUser,
  logoutUser,
} from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const data = await checkLogin();
        setUser({ username: data.username });
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };
    verifyUser();
  }, []);


  const login = async (username, password) => {
    try {
      const data = await loginUser(username, password);
      setUser({ username: data.username });
    } catch (error) {
      console.error(error.message);
    }
  };

  const register = async (username, password) => {
    try {
      await registerUser(username, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await logoutUser(username, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

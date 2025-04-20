import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userErrorMessage, setUserErrorMessage] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/auth/me', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          setUser({ username: data.username });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Kunde inte kontrollera inloggning:', error);
        setUser(null);
      }
    };
    checkLogin();
  }, []);


  const login = async (username, password) => {
    const res = await fetch('http://localhost:5050/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setUser({ username: data.username });
    } else {
      setUserErrorMessage(data.message);
      throw new Error(data.message);
    }
  };

  const register = async (username, password) => {
    const res = await fetch('http://localhost:5050/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

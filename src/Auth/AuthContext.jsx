// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('authUser');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = (email, password, role) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) return false;

    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return false;

    const token = Math.random().toString(36).substring(2);
    const authUser = { email: user.email, role: user.role, token };
    setUser(authUser);
    localStorage.setItem('authUser', JSON.stringify(authUser));

    return authUser; // return user for redirect
  };

  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

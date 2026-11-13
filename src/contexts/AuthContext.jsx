import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('demoToken');
    if (token) setUser({ email: token, role: 'admin' });
    setLoading(false);
  }, []);

  const login = (email) => {
    localStorage.setItem('demoToken', email);
    setUser({ email, role: 'admin' });
  };

  const logout = () => {
    localStorage.removeItem('demoToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

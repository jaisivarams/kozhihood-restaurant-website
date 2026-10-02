import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi, getStoredToken, setStoredToken, removeStoredToken } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Validate stored token against /api/auth/me on initial app load
  useEffect(() => {
    async function loadUser() {
      const token = getStoredToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await authApi.getMe();
        if (response && response.user) {
          setUser(response.user);
        } else {
          removeStoredToken();
          setUser(null);
        }
      } catch (err) {
        console.warn('Failed to restore user session:', err.message);
        removeStoredToken();
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const login = async (email, password) => {
    const data = await authApi.login(email, password);
    if (data.token) {
      setStoredToken(data.token);
    }
    if (data.user) {
      setUser(data.user);
    }
    return data;
  };

  const register = async (name, email, password) => {
    const data = await authApi.register(name, email, password);
    if (data.token) {
      setStoredToken(data.token);
    }
    if (data.user) {
      setUser(data.user);
    }
    return data;
  };

  const logout = () => {
    removeStoredToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

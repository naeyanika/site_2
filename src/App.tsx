import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PasswordReset from './src/components/PasswordReset';
import UpdatePassword from './src/components/UpdatePassword';
import Login from './pages/Login';
import Home from './pages/Home';
import ThcLinks from './pages/ThcLinks';
import Tutorials from './pages/Tutorials';


function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/thc-links"
            element={
              <PrivateRoute>
                <ThcLinks />
              </PrivateRoute>
            }
          />
          <Route
            path="/tutorials"
            element={
              <PrivateRoute>
                <Tutorials />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

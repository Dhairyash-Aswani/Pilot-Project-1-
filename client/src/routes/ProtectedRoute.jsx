import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('Checking token in ProtectedRoute:', token);

  if (!token) {
    // Optional: show a message briefly before redirecting
    console.log("No Token or Some issue has occured!")
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

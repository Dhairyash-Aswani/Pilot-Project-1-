import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import DefaultDashboard from '../pages/DefaultDashboard';
import MyAircraft from '../pages/MyAircraft';
import AircraftDetails from '../pages/AircraftDetails';
import Administration from '../pages/Administration';
import Analytics from '../pages/Analytics';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes wrapped in Layout */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/default-dashboard" // ✅ Added route
        element={
          <ProtectedRoute>
            <Layout>
              <DefaultDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-aircraft"
        element={
          <ProtectedRoute>
            <Layout>
              <MyAircraft />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/aircraft-details"
        element={
          <ProtectedRoute>
            <Layout>
              <AircraftDetails />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/administration"
        element={
          <ProtectedRoute>
            <Layout>
              <Administration />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Layout>
              <Analytics />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;

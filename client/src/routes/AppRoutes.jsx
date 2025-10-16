// AppRoutes.jsx
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
import AIAssistant from '../pages/AIAssistant';
import MyResources from '../pages/MyResources';
import MyFinancials from '../pages/MyFinancials'; // 1. IMPORT the new page

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
        path="/default-dashboard"
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

      <Route
        path="/ai"
        element={
          <ProtectedRoute>
            <Layout>
              <AIAssistant />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-resources"
        element={
          <ProtectedRoute>
            <Layout>
              <MyResources />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* 2. ADD the new route for MyFinancials */}
      <Route
        path="/my-financials"
        element={
          <ProtectedRoute>
            <Layout>
              <MyFinancials />
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


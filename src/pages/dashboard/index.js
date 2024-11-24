import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Analytics from './Analytics';
import Transactions from './Transactions';
import Reports from './Reports';
import Compliance from './Compliance';
import Users from './Users';
import Audit from './Audit';
import Settings from './Settings';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/analytics" replace />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/users" element={<Users />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
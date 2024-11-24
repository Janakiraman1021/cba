import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Reports from './pages/dashboard/Reports';
import Analytics from './pages/dashboard/Analytics';
import Settings from './pages/dashboard/Settings';
import Compliance from './pages/dashboard/Compliance';
import Transactions from './pages/dashboard/Transactions';
import Users from './pages/dashboard/Users';
import Audit from './pages/dashboard/Audit';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/users" element={<Users />} />
            <Route path="/audit" element={<Audit />} />
            
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

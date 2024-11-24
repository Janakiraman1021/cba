import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2, Shield, Users, FileText, Settings, Globe, DollarSign } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = location.pathname.startsWith('/dashboard');

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              CloudBank
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-transparent hover:bg-blue-600 text-blue-500 hover:text-white px-4 py-2 rounded-lg border border-blue-500 hover:border-transparent transition-all"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <BarChart2 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/reports" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <FileText className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
                <Link to="/analytics" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <BarChart2 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
                <Link to="/settings" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link to="/compliance" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Compliance</span>
                </Link>
                <Link to="/transactions" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Transactions</span>
                </Link>
                <Link to="/users" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </Link>
                <Link to="/audit" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>Audit</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, AlertTriangle, DollarSign, Users, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch user-specific data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token'); // Ensure the token is stored during login
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome, {userData?.personalDetails?.name}</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-slate-800 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <DollarSign className="text-green-400 w-8 h-8" />
              <div>
                <h2 className="text-lg text-white">Account Balance</h2>
                <p className="text-xl font-bold text-green-400">${userData?.accountBalance.toFixed(2)}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-slate-800 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <TrendingUp className="text-blue-400 w-8 h-8" />
              <div>
                <h2 className="text-lg text-white">Last Transaction</h2>
                <p className="text-md text-gray-400">
                  {userData?.lastTransactions[0]?.description || 'No recent transactions'}
                </p>
                <p className="text-blue-400 font-bold">
                  {userData?.lastTransactions[0]?.amount
                    ? `$${Math.abs(userData?.lastTransactions[0]?.amount)}`
                    : ''}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-slate-800 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <Users className="text-purple-400 w-8 h-8" />
              <div>
                <h2 className="text-lg text-white">Account Number</h2>
                <p className="text-xl font-bold text-purple-400">{userData?.personalDetails?.accountNumber}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transactions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Recent Transactions</h2>
          <div className="bg-slate-800 rounded-lg p-6">
            {userData?.lastTransactions?.length > 0 ? (
              <ul className="space-y-4">
                {userData.lastTransactions.map((transaction) => (
                  <li key={transaction.id} className="flex justify-between items-center">
                    <span className="text-gray-400">{transaction.description}</span>
                    <span
                      className={`font-bold ${
                        transaction.amount < 0 ? 'text-red-400' : 'text-green-400'
                      }`}
                    >
                      {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No recent transactions available.</p>
            )}
          </div>
        </div>

        {/* Analytics Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Spending Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={userData?.analytics || []}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

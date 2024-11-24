import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../components/Input';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setErrorMessage(data.message || 'Login failed. Please try again.');
        return;
      }

      // Store token and redirect to dashboard
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setLoading(false);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8 bg-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700"
        >
          <div>
            <h2 className="text-center text-3xl font-bold text-white">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:text-blue-400">
                Sign up
              </Link>
            </p>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                label="Email address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                placeholder="you@example.com"
              />
              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
                placeholder="••••••••"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white ${
                loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;

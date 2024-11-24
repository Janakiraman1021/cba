import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Shield, FileText, Activity, 
  PieChart, Users, Bell, Settings 
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: "Real-time Analytics",
      description: "Monitor transactions and market trends as they happen with millisecond precision."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Compliance Monitoring",
      description: "Stay compliant with automated checks and real-time regulatory updates."
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: "Custom Reports",
      description: "Generate detailed reports with our flexible and powerful reporting engine."
    },
    {
      icon: <Activity className="h-6 w-6 text-red-500" />,
      title: "Risk Management",
      description: "Advanced risk assessment tools powered by AI and machine learning."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next-Gen Banking Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial data into actionable insights with our AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="px-8 py-3 bg-transparent border border-blue-500 hover:bg-blue-600/10 rounded-lg text-blue-500 font-semibold transition-all transform hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need to manage your financial analytics</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">5M+</div>
              <div className="text-gray-400">Daily Transactions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold text-purple-500 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold text-pink-500 mb-2">500+</div>
              <div className="text-gray-400">Financial Institutions</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, TrendingUp, AlertTriangle, 
  DollarSign, Users, ArrowUpRight 
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

const data = [
  { name: '00:00', value: 4000 },
  { name: '04:00', value: 3000 },
  { name: '08:00', value: 2000 },
  { name: '12:00', value: 2780 },
  { name: '16:00', value: 1890 },
  { name: '20:00', value: 2390 },
  { name: '24:00', value: 3490 },
];

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-gray-400">Monitor your key metrics in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { 
            title: 'Total Transactions', 
            value: '$2.4M', 
            change: '+12.5%',
            icon: <DollarSign className="h-6 w-6 text-green-500" />
          },
          { 
            title: 'Active Users', 
            value: '1,234', 
            change: '+5.2%',
            icon: <Users className="h-6 w-6 text-blue-500" />
          },
          { 
            title: 'Risk Score', 
            value: '92/100', 
            change: '+3.1%',
            icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-700/50 rounded-lg">
                {stat.icon}
              </div>
              <div className="flex items-center text-green-500">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
        >
          <h3 className="text-xl font-semibold mb-4">Transaction Volume</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
        >
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { 
                title: 'Large Transaction Detected',
                description: 'Transaction exceeding $50,000 detected',
                time: '5 minutes ago',
                icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
              },
              {
                title: 'New User Registration',
                description: 'New corporate account created',
                time: '12 minutes ago',
                icon: <Users className="h-5 w-5 text-blue-500" />
              },
              {
                title: 'System Update',
                description: 'Security patches applied successfully',
                time: '1 hour ago',
                icon: <BarChart2 className="h-5 w-5 text-green-500" />
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 bg-slate-700/50 rounded-lg">
                  {activity.icon}
                </div>
                <div>
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-gray-400">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Analytics;
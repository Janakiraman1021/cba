import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, AlertTriangle, 
  CheckCircle, XCircle, Clock 
} from 'lucide-react';

const auditLogs = [
  {
    id: 1,
    event: 'Login Attempt',
    user: 'john@example.com',
    status: 'Success',
    ip: '192.168.1.1',
    timestamp: '2024-03-15 14:30:25'
  },
  {
    id: 2,
    event: 'Password Change',
    user: 'jane@example.com',
    status: 'Success',
    ip: '192.168.1.2',
    timestamp: '2024-03-15 14:28:10'
  },
  {
    id: 3,
    event: 'Failed Login',
    user: 'unknown@example.com',
    status: 'Failed',
    ip: '192.168.1.3',
    timestamp: '2024-03-15 14:25:00'
  }
];

const Audit = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Audit Logs</h1>
          <p className="text-gray-400">Track and monitor system activities</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: 'Total Events',
            value: '12,345',
            icon: <Clock className="h-6 w-6 text-blue-500" />
          },
          {
            title: 'Success Rate',
            value: '99.9%',
            icon: <CheckCircle className="h-6 w-6 text-green-500" />
          },
          {
            title: 'Failed Events',
            value: '23',
            icon: <XCircle className="h-6 w-6 text-red-500" />
          },
          {
            title: 'Security Alerts',
            value: '5',
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
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search audit logs..."
                className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  IP Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {auditLogs.map((log, index) => (
                <motion.tr
                  key={log.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {log.event}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      log.status === 'Success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {log.ip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {log.timestamp}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing 1 to 10 of 100 entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Audit;
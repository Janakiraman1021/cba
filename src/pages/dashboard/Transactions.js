import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, AlertTriangle } from 'lucide-react';

const transactions = [
  {
    id: 'TX123456',
    amount: '$12,450.00',
    type: 'Wire Transfer',
    status: 'Completed',
    date: '2024-03-15 14:30:25',
    risk: 'Low'
  },
  {
    id: 'TX123457',
    amount: '$50,000.00',
    type: 'International Transfer',
    status: 'Pending Review',
    date: '2024-03-15 14:28:10',
    risk: 'High'
  },
  // Add more transaction data as needed
];

const Transactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Transaction Monitoring</h1>
          <p className="text-gray-400">Monitor and analyze transactions in real-time</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Risk Level
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {transactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-slate-700/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`flex items-center text-sm ${
                      transaction.risk === 'High'
                        ? 'text-red-400'
                        : 'text-green-400'
                    }`}>
                      {transaction.risk === 'High' && (
                        <AlertTriangle className="h-4 w-4 mr-1" />
                      )}
                      {transaction.risk}
                    </span>
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

export default Transactions;
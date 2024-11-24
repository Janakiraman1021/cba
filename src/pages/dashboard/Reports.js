import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const Reports = () => {
  const reportTemplates = [
    {
      id: 1,
      name: 'Transaction Summary',
      description: 'Daily overview of all transactions with risk analysis',
      type: 'Automated',
      frequency: 'Daily',
      lastGenerated: '2024-03-15 14:30'
    },
    {
      id: 2,
      name: 'Compliance Report',
      description: 'Detailed compliance status and violations',
      type: 'Manual',
      frequency: 'On-demand',
      lastGenerated: '2024-03-14 09:15'
    },
    {
      id: 3,
      name: 'Risk Assessment',
      description: 'Comprehensive risk analysis and scoring',
      type: 'Automated',
      frequency: 'Weekly',
      lastGenerated: '2024-03-15 00:00'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Report Generation</h1>
          <p className="text-gray-400">Generate and manage custom reports</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <FileText className="h-4 w-4 mr-2" />
          New Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Filters</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Date Range
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Custom range</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Report Type
              </label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Types</option>
                  <option>Transaction Reports</option>
                  <option>Risk Reports</option>
                  <option>Compliance Reports</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
        >
          <h3 className="text-xl font-semibold mb-4">Report Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Generated Today', value: '12' },
              { label: 'Scheduled', value: '5' },
              { label: 'Failed', value: '0' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-4">
        {reportTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">{template.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{template.description}</p>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-400">Type: {template.type}</span>
                <span className="text-gray-400">Frequency: {template.frequency}</span>
                <span className="text-gray-400">Last Generated: {template.lastGenerated}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Generate
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reports;
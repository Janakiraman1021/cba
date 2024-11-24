import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Compliance = () => {
  const complianceMetrics = [
    {
      category: 'KYC Verification',
      status: 'Compliant',
      score: 98,
      issues: 0,
      lastChecked: '15 minutes ago'
    },
    {
      category: 'Transaction Monitoring',
      status: 'Warning',
      score: 85,
      issues: 3,
      lastChecked: '5 minutes ago'
    },
    {
      category: 'Regulatory Reporting',
      status: 'Compliant',
      score: 100,
      issues: 0,
      lastChecked: '1 hour ago'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      title: 'Large Transaction Alert',
      description: 'Transaction exceeding threshold detected',
      severity: 'high',
      time: '10 minutes ago'
    },
    {
      id: 2,
      title: 'KYC Update Required',
      description: 'Customer documentation needs renewal',
      severity: 'medium',
      time: '1 hour ago'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Compliance Monitoring</h1>
        <p className="text-gray-400">Track and manage compliance requirements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: 'Overall Compliance Score',
            value: '94%',
            icon: <Shield className="h-6 w-6 text-green-500" />,
            change: '+2.5%'
          },
          {
            title: 'Active Alerts',
            value: '3',
            icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
            change: '-1'
          },
          {
            title: 'Last Audit Score',
            value: 'A+',
            icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
            change: 'Passed'
          }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-700/50 rounded-lg">
                {metric.icon}
              </div>
              <span className="text-green-500 text-sm">{metric.change}</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 rounded-xl border border-slate-700"
        >
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-semibold">Compliance Metrics</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {complianceMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium mb-1">{metric.category}</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`flex items-center ${
                        metric.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'
                      }`}>
                        {metric.status === 'Compliant' ? (
                          <CheckCircle className="h-4 w-4 mr-1" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 mr-1" />
                        )}
                        {metric.status}
                      </span>
                      <span className="text-gray-400">Score: {metric.score}%</span>
                      <span className="text-gray-400">Issues: {metric.issues}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{metric.lastChecked}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 rounded-xl border border-slate-700"
        >
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-semibold">Recent Alerts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <AlertTriangle className={`h-5 w-5 mr-2 ${
                        alert.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                      }`} />
                      <h4 className="font-medium">{alert.title}</h4>
                    </div>
                    <span className="text-sm text-gray-400">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{alert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Compliance;
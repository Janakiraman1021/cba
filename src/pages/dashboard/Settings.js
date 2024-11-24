import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, User, Globe, Moon, Sun } from 'lucide-react';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: <User className="h-5 w-5" />,
      settings: [
        {
          name: 'Email Notifications',
          description: 'Receive email updates about your account',
          type: 'toggle',
          value: true,
        },
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle',
          value: false,
        },
      ],
    },
    {
      title: 'Notification Preferences',
      icon: <Bell className="h-5 w-5" />,
      settings: [
        {
          name: 'Transaction Alerts',
          description: 'Get notified about important transaction updates',
          type: 'toggle',
          value: true,
        },
        {
          name: 'Compliance Alerts',
          description: 'Receive notifications about compliance issues',
          type: 'toggle',
          value: true,
        },
      ],
    },
    {
      title: 'Security Settings',
      icon: <Lock className="h-5 w-5" />,
      settings: [
        {
          name: 'Session Timeout',
          description: 'Automatically log out after period of inactivity',
          type: 'select',
          options: ['15 minutes', '30 minutes', '1 hour', '4 hours'],
          value: '30 minutes',
        },
        {
          name: 'Login History',
          description: 'View and manage your login sessions',
          type: 'button',
          label: 'View History',
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and settings</p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="bg-slate-800/50 rounded-xl border border-slate-700"
          >
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {section.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{setting.name}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                  {setting.type === 'toggle' && (
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        setting.value ? 'bg-blue-600' : 'bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          setting.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                  {setting.type === 'select' && (
                    <select className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {setting.options.map((option) => (
                        <option key={option} value={option} selected={option === setting.value}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {setting.type === 'button' && (
                    <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                      {setting.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/50 rounded-xl border border-slate-700"
        >
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Display Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Theme Preference</h3>
                <p className="text-sm text-gray-400">Choose your preferred theme</p>
              </div>
              <div className="flex items-center space-x-2 bg-slate-700 rounded-lg p-1">
                <button className="p-2 rounded bg-slate-600">
                  <Moon className="h-5 w-5" />
                </button>
                <button className="p-2 rounded">
                  <Sun className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Settings;

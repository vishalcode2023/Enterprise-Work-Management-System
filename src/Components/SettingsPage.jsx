import React, { useEffect, useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '', newPassword: '' });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, email: formData.email } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('✅ Profile updated successfully!');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => {
      if (u.email === user.email && u.password === formData.password) {
        return { ...u, password: formData.newPassword };
      }
      return u;
    });

    if (JSON.stringify(users) === JSON.stringify(updatedUsers)) {
      toast.error('❌ Current password is incorrect');
      return;
    }

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success('🔒 Password changed successfully!');
    setFormData({ ...formData, password: '', newPassword: '' });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 border-b pb-2">⚙️ Account Settings</h2>

      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-indigo-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">✏️ Edit Profile</h3>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🔐 Change Password</h3>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              value={formData.newPassword}
              onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter new password"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;

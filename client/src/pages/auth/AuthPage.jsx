import React, { useState } from 'react';
import { Mail, Lock, UserRound, ShieldCheck } from 'lucide-react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', role: 'user' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Signing up:', form);
    } else {
      console.log('Signing in:', form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
          {isSignUp ? 'Sign Up' : 'Sign In'} to IntelliDoc
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 items-center gap-2">
                Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="mt-1 py-2 px-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="user">User</option>
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-10 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-10 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

// 'onSwitch' is a function to switch back to the login page
export default function SignupPage({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert('Signup feature in progress!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create Your ApexStox Account</h2>
          <p className="mt-2 text-gray-400">Join our community of traders</p>
        </div>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="text-sm font-bold text-gray-400">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-400">Set Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
           <div>
            <label className="text-sm font-bold text-gray-400">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <button onClick={onSwitch} className="font-bold text-blue-500 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

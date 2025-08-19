import React from 'react';

// This is a simplified version for testing the button click
export default function LoginPage() {

  const handleLogin = (e) => {
    e.preventDefault();
    // This alert will confirm if the button click is working
    alert('Login button click is working!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome to ApexStox</h2>
        </div>
        <form onSubmit={handleLogin}>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Test Login Button
          </button>
        </form>
      </div>
    </div>
  );
}

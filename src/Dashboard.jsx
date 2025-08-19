import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ApexStox</h1>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-md p-2 w-72"
            placeholder="Search for a stock... (e.g., INFY)"
          />
        </div>
        <div>
          <span className="mr-4">👤</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-gray-400">Total Fund</h3>
                <p className="text-2xl font-bold">₹1,000,000.00</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-gray-400">Invested Value</h3>
                <p className="text-2xl font-bold">₹0.00</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-gray-400">Overall P&L</h3>
                <p className="text-2xl font-bold text-gray-500">₹0.00</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600 p-6 rounded-lg text-center cursor-pointer">
                <h3 className="text-xl font-bold">📈 STOCKS</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center cursor-not-allowed opacity-50">
                <h3 className="text-xl font-bold">₿ CRYPTO (Coming Soon)</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center cursor-not-allowed opacity-50">
                <h3 className="text-xl font-bold">⛁ F&O (Coming Soon)</h3>
            </div>
        </div>
      </main>
    </div>
  );
}

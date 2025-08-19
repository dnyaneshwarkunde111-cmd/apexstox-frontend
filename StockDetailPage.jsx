import React from 'react';

// 'stock' will contain the details of the stock we clicked on
// 'onBack' is a function to go back to the dashboard
export default function StockDetailPage({ stock, onBack }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <button onClick={onBack} className="text-xl font-bold hover:text-blue-500">
          &larr; Back to Dashboard
        </button>
        <h1 className="text-xl font-bold">{stock.symbol}</h1>
        <div>
          <span className="mr-4">👤</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 grid grid-cols-3 gap-8">
        {/* Center Panel for Chart and News */}
        <div className="col-span-2">
          <div className="mb-4">
            <h2 className="text-3xl font-bold">{stock.instrument_name}</h2>
            <p className="text-xl text-gray-400">{stock.exchange}</p>
          </div>

          {/* Chart Area */}
          <div className="bg-gray-800 rounded-lg p-4 h-96 mb-8">
            <p className="text-center text-gray-500">[Live TradingView Chart will be here]</p>
          </div>

          {/* News Area */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
            <div className="bg-gray-800 rounded-lg p-4 h-48">
              <p className="text-center text-gray-500">[Live News from FMP API will be here]</p>
            </div>
          </div>
        </div>

        {/* Right Panel for Buy/Sell */}
        <div className="col-span-1 bg-gray-800 rounded-lg p-6 h-fit">
          <h3 className="text-2xl font-bold mb-4 text-center">Trade</h3>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Quantity</label>
            <input
              type="number"
              defaultValue="1"
              className="w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-1">Product</label>
            <select className="w-full p-2 bg-gray-700 rounded-md">
              <option>Delivery</option>
              <option>Intraday</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button className="w-full py-3 font-bold bg-green-600 rounded-md hover:bg-green-700">
              BUY
            </button>
            <button className="w-full py-3 font-bold bg-red-600 rounded-md hover:bg-red-700">
              SELL
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

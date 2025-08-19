import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard({ onStockSelect }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = async (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length > 1) {
      setIsLoading(true);
      try {
        const backendUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${backendUrl}/api/stocks/search?symbol=${newSearchTerm}`);
        setSearchResults(response.data.data || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ApexStox</h1>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-md p-2 w-72"
            placeholder="Search for a stock... (e.g., INFY)"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm.length > 1 && (
            <ul className="absolute z-10 w-full bg-gray-700 rounded-md mt-1 max-h-60 overflow-y-auto">
              {isLoading && <li className="p-2 text-gray-400">Searching...</li>}
              {!isLoading && searchResults.length > 0 && (
                searchResults.map((stock) => (
                  <li 
                    key={stock.symbol} 
                    onClick={() => onStockSelect(stock)} 
                    className="p-2 hover:bg-gray-600 cursor-pointer"
                  >
                    {stock.symbol} - {stock.instrument_name}
                  </li>
                ))
              )}
              {!isLoading && searchResults.length === 0 && searchTerm.length > 1 && (
                 <li className="p-2 text-gray-400">No results found.</li>
              )}
            </ul>
          )}
        </div>
        <div><span className="mr-4">👤</span></div>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg"><h3 className="text-gray-400">Total Fund</h3><p className="text-2xl font-bold">₹1,000,000.00</p></div>
            <div className="bg-gray-800 p-4 rounded-lg"><h3 className="text-gray-400">Invested Value</h3><p className="text-2xl font-bold">₹0.00</p></div>
            <div className="bg-gray-800 p-4 rounded-lg"><h3 className="text-gray-400">Overall P&L</h3><p className="text-2xl font-bold text-gray-500">₹0.00</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600 p-6 rounded-lg text-center cursor-pointer" onClick={() => alert("You are on the Stocks page.")}><h3 className="text-xl font-bold">📈 STOCKS</h3></div>
            <div className="bg-gray-700 p-6 rounded-lg text-center cursor-not-allowed opacity-50"><h3 className="text-xl font-bold">₿ CRYPTO (Coming Soon)</h3></div>
            <div className="bg-gray-700 p-6 rounded-lg text-center cursor-not-allowed opacity-50"><h3 className="text-xl font-bold">⛁ F&O (Coming Soon)</h3></div>
        </div>
      </main>
    </div>
  );
}

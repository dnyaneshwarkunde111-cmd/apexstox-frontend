import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const LightweightCharts = window.LightweightCharts;

export default function StockDetailPage({ stock, user, onBack }) {
  const [quantity, setQuantity] = useState(1);
  const [productType, setProductType] = useState('Delivery');
  const [livePrice, setLivePrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const chartContainerRef = useRef();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current || !LightweightCharts) return;

    const chart = LightweightCharts.createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 384,
        layout: {
            backgroundColor: '#1f2937',
            textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
            vertLines: { color: '#374151' },
            horzLines: { color: '#374151' },
        },
        crosshair: { mode: 1 },
        rightPriceScale: { borderColor: '#4b5563' },
        timeScale: { borderColor: '#4b5563' },
    });
    
    chartRef.current = chart;

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#22c55e', downColor: '#ef4444', borderDownColor: '#ef4444',
      borderUpColor: '#22c55e', wickDownColor: '#ef4444', wickUpColor: '#22c55e',
    });

    const fetchStockData = async () => {
      setIsLoading(true);
      const backendUrl = import.meta.env.VITE_API_URL;
      
      try {
        const priceResponse = await axios.get(`${backendUrl}/api/stocks/price?symbol=${stock.symbol}`);
        setLivePrice(priceResponse.data.price);
      } catch (error) {
        console.error("Failed to fetch live price", error);
        setLivePrice('N/A');
      }

      try {
        const historyResponse = await axios.get(`${backendUrl}/api/stocks/historical_data?symbol=${stock.symbol}`);
        const chartData = historyResponse.data.sort((a, b) => new Date(a.time) - new Date(b.time));
        candleSeries.setData(chartData);
      } catch (error) {
          console.error("Failed to fetch historical data", error);
      }

      setIsLoading(false);
    };

    fetchStockData();

    return () => {
        if (chartRef.current) {
            chartRef.current.remove();
            chartRef.current = null;
        }
    }
  }, [stock.symbol]);

  const handleTrade = async (tradeType) => {
    if (quantity <= 0) return alert("Quantity must be greater than zero.");
    if (livePrice === 'N/A' || !livePrice) return alert("Could not fetch live price.");

    const tradeDetails = {
      userId: user.id,
      symbol: stock.symbol,
      quantity: Number(quantity),
      price: Number(livePrice),
    };

    try {
      const backendUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${backendUrl}/api/trade/${tradeType}`, tradeDetails);
      alert(response.data.message);
      onBack();
    } catch (error) {
      alert("Trade failed: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <button onClick={onBack} className="text-xl font-bold hover:text-blue-500">&larr; Back</button>
        <h1 className="text-xl font-bold">{stock.symbol}</h1>
        <div><span>👤 {user.email}</span></div>
      </header>
      <main className="p-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="mb-4">
            <h2 className="text-3xl font-bold">{stock.instrument_name}</h2>
            <p className="text-xl text-gray-400">
              Current Price: {isLoading ? 'Loading...' : `₹${livePrice}`}
            </p>
          </div>
          
          <div ref={chartContainerRef} className="bg-gray-800 rounded-lg h-96 mb-8 w-full"></div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
            <div className="bg-gray-800 rounded-lg p-4 h-48">
              <p className="text-center text-gray-500">[Live News Feed will be here]</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-800 rounded-lg p-6 h-fit">
          <h3 className="text-2xl font-bold mb-4 text-center">Trade</h3>
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Quantity</label>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-1">Product</label>
            <select 
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md"
            >
              <option>Delivery</option>
              <option>Intraday</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleTrade('buy')} className="w-full py-3 font-bold bg-green-600 rounded-md hover:bg-green-700">BUY</button>
            <button onClick={() => handleTrade('sell')} className="w-full py-3 font-bold bg-red-600 rounded-md hover:bg-red-700">SELL</button>
          </div>
        </div>
      </main>
    </div>
  );
}

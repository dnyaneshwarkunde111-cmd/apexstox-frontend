/*
============================================================
File: src/App.jsx (Updated Version)
============================================================
*/
import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx';
import Footer from './Footer.jsx'; // Footer ko import karein
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
  };

  const handleBackToDashboard = () => {
    setSelectedStock(null);
  };

  // Page content ko decide karne ke liye ek variable
  let pageContent;
  if (!user) {
    pageContent = isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />;
  } else if (selectedStock) {
    pageContent = <StockDetailPage stock={selectedStock} user={user} onBack={handleBackToDashboard} />;
  } else {
    pageContent = <Dashboard user={user} onStockSelect={handleStockSelect} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-grow">
        {pageContent}
      </div>
      <Footer />
    </div>
  );
}

export default App;

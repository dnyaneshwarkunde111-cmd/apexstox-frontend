import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const togglePage = () => setIsLoginPage(!isLoginPage);
  const handleStockSelect = (stock) => setSelectedStock(stock);
  const handleBackToDashboard = () => setSelectedStock(null);

  if (!isLoggedIn) {
    return <div>{isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />}</div>;
  } else if (selectedStock) {
    return <StockDetailPage stock={selectedStock} onBack={handleBackToDashboard} />;
  } else {
    return <Dashboard onStockSelect={handleStockSelect} />;
  }
}

export default App;

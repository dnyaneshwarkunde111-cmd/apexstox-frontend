import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx'; // Import the new page
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null); // To track selected stock

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const togglePage = () => setIsLoginPage(!isLoginPage);
  const handleStockSelect = (stock) => setSelectedStock(stock);
  const handleBackToDashboard = () => setSelectedStock(null);

  if (!isLoggedIn) {
    // Show Login/Signup if not logged in
    return (
       <div>
        {isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />}
      </div>
    );
  } else if (selectedStock) {
    // Show Stock Detail Page if a stock is selected
    return <StockDetailPage stock={selectedStock} onBack={handleBackToDashboard} />;
  } else {
    // Show Dashboard if logged in and no stock is selected
    return <Dashboard onStockSelect={handleStockSelect} />;
  }
}

export default App;

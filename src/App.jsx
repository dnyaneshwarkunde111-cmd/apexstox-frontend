import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx';
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

  if (!user) {
    return (
       <div>
        {isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />}
      </div>
    );
  } else if (selectedStock) {
    return <StockDetailPage stock={selectedStock} user={user} onBack={handleBackToDashboard} />;
  } else {
    return <Dashboard user={user} onStockSelect={handleStockSelect} />;
  }
}

export default App;

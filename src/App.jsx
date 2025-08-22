import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx';
import Footer from './Footer.jsx';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (loggedInUser) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
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

  let pageContent;
  if (!user) {
    pageContent = isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />;
  } else if (selectedStock) {
    pageContent = <StockDetailPage stock={selectedStock} user={user} onBack={handleBackToDashboard} />;
  } else {
    pageContent = <Dashboard user={user} onStockSelect={handleStockSelect} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main className="flex-grow">
        {pageContent}
      </main>
      <Footer />
    </div>
  );
}

export default App;

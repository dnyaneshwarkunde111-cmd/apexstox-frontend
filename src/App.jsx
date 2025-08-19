import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx';
import StockDetailPage from './StockDetailPage.jsx';
import './index.css';

function App() {
  const [user, setUser] = useState(null); // isLoggedIn ko user se replace kiya
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null);

  // Login successful hone par poora user object save karein
  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Login aur Signup page ke beech switch karein
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  // Dashboard se stock select hone par
  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
  };

  // Stock detail page se wapas dashboard par aane ke liye
  const handleBackToDashboard = () => {
    setSelectedStock(null);
  };

  // Main logic: Kya dikhana hai?
  if (!user) {
    // Agar user logged in nahi hai, toh Login ya Signup page dikhayein
    return (
       <div>
        {isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />}
      </div>
    );
  } else if (selectedStock) {
    // Agar user logged in hai AUR stock select kiya hai, toh detail page dikhayein
    return <StockDetailPage stock={selectedStock} user={user} onBack={handleBackToDashboard} />;
  } else {
    // Agar user logged in hai aur koi stock select nahi kiya hai, toh dashboard dikhayein
    return <Dashboard user={user} onStockSelect={handleStockSelect} />;
  }
}

export default App;

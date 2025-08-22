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

  // Yeh check karega ki user pehle se logged in hai ya nahi
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login successful hone par user ki details save karega
  const handleLoginSuccess = (loggedInUser) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  // Login aur Signup page ke beech switch karega
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

  // Main logic: Kaunsa page dikhana hai?
  let pageContent;
  if (!user) {
    // Agar user logged in nahi hai, toh Login ya Signup page dikhayein
    pageContent = isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />;
  } else if (selectedStock) {
    // Agar user logged in hai AUR stock select kiya hai, toh detail page dikhayein
    pageContent = <StockDetailPage stock={selectedStock} user={user} onBack={handleBackToDashboard} />;
  } else {
    // Agar user logged in hai aur koi stock select nahi kiya hai, toh dashboard dikhayein
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

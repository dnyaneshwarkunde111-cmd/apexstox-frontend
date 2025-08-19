import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx'; // Import the new Dashboard
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return (
      <div>
        {isLoginPage ? <LoginPage onSwitch={togglePage} onLoginSuccess={handleLoginSuccess} /> : <SignupPage onSwitch={togglePage} />}
      </div>
    );
  }
}

export default App;

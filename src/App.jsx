import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Dashboard from './Dashboard.jsx'; // Import the new Dashboard
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manages if user is logged in
  const [isLoginPage, setIsLoginPage] = useState(true);

  // This function will be called from LoginPage on successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  // If user is logged in, show Dashboard. Otherwise, show Login/Signup.
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

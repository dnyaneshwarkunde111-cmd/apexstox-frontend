import React, { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx'; // Import the new Signup Page
import './index.css';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  // This function will toggle between login and signup pages
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div>
      {isLoginPage ? <LoginPage onSwitch={togglePage} /> : <SignupPage onSwitch={togglePage} />}
    </div>
  );
}

export default App;


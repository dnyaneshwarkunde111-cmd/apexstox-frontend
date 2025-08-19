import React from 'react';
import LoginPage from './LoginPage.jsx'; // We are importing the new Login Page
import './index.css';

function App() {
  // For now, we are just showing the Login Page.
  // Later, we will add logic to show the Dashboard after login.
  return (
    <LoginPage />
  );
}

export default App;


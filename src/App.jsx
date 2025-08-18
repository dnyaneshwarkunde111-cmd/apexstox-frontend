import React from 'react';

// Main Login Page ka code yahan hai
// Hum isse baad mein alag file mein daalenge
function LoginPage() {
  // Is code ko humne pehle discuss kiya tha
  return (
    <div style={{color: 'white', backgroundColor: '#111827', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
      <div style={{width: '100%', maxWidth: '400px', padding: '32px', backgroundColor: '#1F2937', borderRadius: '8px'}}>
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '28px', fontWeight: 'bold'}}>Welcome to ApexStox</h2>
          <p style={{marginTop: '8px', color: '#9CA3AF'}}>Login to continue</p>
        </div>
        <div style={{marginTop: '32px'}}>
          <p style={{textAlign: 'center'}}>[Login Form and Google Button will be here]</p>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <LoginPage />
  )
}

export default App

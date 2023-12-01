// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api') // Update this endpoint if necessary
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;

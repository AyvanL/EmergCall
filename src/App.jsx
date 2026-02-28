import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </>
  );
}

export default App

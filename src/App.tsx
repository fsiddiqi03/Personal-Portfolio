import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
// Import other components

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Projects' element={<Projects/>} />
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;



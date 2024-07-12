import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Itinerary from './itinerary';
import Lists from './lists';
import Home from './home';

function App() {
  const [llmResponse, setLlmResponse] = useState('');
  const [llamaResponse, setLlamaResponse] = useState('');

  const handleLlmResponse = (response) => {
    setLlmResponse(response);
  };

  const handleLlamaResponse = (response) => {
    setLlamaResponse(response);
  };
  return (
    <Router>
    <div className="App">
    <center>  <h1 style={{ color: '#146C94' }}>TRAVEL with AI</h1> <hr></hr> </center> 
    <Routes>
          <Route path="/" element={<Home onLlmResponse={handleLlmResponse} onLlamaResponse={handleLlamaResponse} />} />
          <Route path="/itinerary" element={<Itinerary llmResponse={llmResponse} />} />
          <Route path="/lists" element={<Lists llamaResponse={llamaResponse} />} />
        </Routes>

    <footer className="home">
    <div> <Link to="/">  <h1>Home</h1>  </Link> </div>
    <div> <Link to="/itinerary">  <h1>Itinerary</h1> </Link> </div>
    <div> <Link to="/lists">  <h1>Packing Lists</h1>  </Link> </div>
     </footer>
    </div>
    </Router>
  );
}

export default App;

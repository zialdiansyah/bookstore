import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail';
import Library from './pages/Library';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;

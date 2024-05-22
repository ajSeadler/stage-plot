import React from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Canvas />
    </div>
  );
};

export default App;

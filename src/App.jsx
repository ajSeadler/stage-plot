import React from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import './App.css';

const App = () => {
  return (
    <>
    {/* <h1>STAGE PLOT DESIGNER</h1> */}
    <div className="app">
      <Sidebar />
      <Canvas />
    </div>
    </>
  );
};

export default App;

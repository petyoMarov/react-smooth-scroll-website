import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Sidebar from './components/Sidebar/index';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
};

export default App;

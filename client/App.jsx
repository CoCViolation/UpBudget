import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import BudgetMain from './components/BudgetMain.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/budgetmain' element={<BudgetMain />} />
      </Routes>
    </Router>
  );
};

export default App;

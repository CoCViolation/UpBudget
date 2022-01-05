import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import BudgetMain from './components/BudgetMain.jsx';
import NewBudgetForm from './components/NewBudgetForm.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/budgetmain' element={<BudgetMain />} />
        <Route path='/newbudget' element={<NewBudgetForm />} />
      </Routes>
    </Router>
  );
};

export default App;

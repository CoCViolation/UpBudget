import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245
import Login from './components/Login.jsx';
import BudgetMain from './components/BudgetMain.jsx';
import NewBudgetForm from './components/NewBudgetForm.jsx';
import TotalsDisplay from './components/TotalsDisplay.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/budgetmain' element={<BudgetMain />} />
        <Route path='/newbudget' element={<NewBudgetForm />} />
        <Route path='/totaldisplay' element={<TotalsDisplay />} />
      </Routes>
<<<<<<< HEAD
    </Router>
=======
     </Router>
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245
  );
};

export default App;

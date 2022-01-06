import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import BudgetMain from './components/BudgetMain.jsx';
import NewBudgetForm from './components/NewBudgetForm.jsx';
import TotalsDisplay from './components/TotalsDisplay.jsx';
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/budgetmain' element={<BudgetMain />} />
        <Route path='/newbudget' element={<NewBudgetForm />} />
        <Route path='/totaldisplay' element={<TotalsDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;

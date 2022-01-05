import React from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const BudgetMain = (props) => {
  console.log(props);


  
  return (
    <div className='container budget-container'>
      <div className='header1'> My Account</div>
      <div className='header2'> Hi User! </div>
      <div className='content-large'>Total Monthly Budget:        
        <ul className='categories'></ul>
      </div>
      <div className='content-medium1'>Total Spent
        <ul className='totalSpent'></ul></div>
      <div className='content-medium2'>Budget
        <ul className='remBudget'></ul></div>
      <div className='buttonbox'>
      <Link to='/totaldisplay'>
      <button className="button">Input Spending</button>
      </Link>
      <Link to='/newbudget'>
      <button className="button">Input New Budget</button>
      </Link>
      </div>
     </div>
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}

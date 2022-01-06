import React from 'react';
// import { connect } from 'react-redux';
// import "../styles.scss";
import {Link} from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const BudgetMain = (props) => {
  console.log(props);


  
  return (
    <div className='budget-container'>
      <h4> My Account</h4>
      <div>
        <div className='content'>Total Monthly Budget: fake $1000
          

        </div>
        <div className='content'>Total Spent : fake $450
          

        </div>
        <div className='content'>Budget : fake $550
        
        
        </div>
      </div>
      <Link to='/totaldisplay'>
      <button className="btn">Input Spending</button>
      </Link>
      <Link to='/newbudget'>
      <button className="btn">Input New Budget</button>
      </Link>
    </div>
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}

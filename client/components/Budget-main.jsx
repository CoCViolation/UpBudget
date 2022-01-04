import React, { useState } from 'react';
import { connect } from 'react-redux';

const BudgetMain = () => {
  return (
    <div className='container budget-container'>
      <div className='header'>
        <div className='header1'>Account</div>
        <div className='header2'>Hi user!</div>
      </div>
      <div className='content-large'>Total Monthly Budget:</div>
      <div className='content-large'>Spent</div>
      <div className='content-large'>Budget</div>

      <div className='left_space'>Total Monthly Budget:</div>
      <div className='main'>
        <div className='main1'>Main1</div>
      </div>
      <div className='right_space'>Right_Space</div>
    </div>
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}

import React, { Component } from 'react';
import useForm from 'react-hook-form';

const NewBudgetForm = () => {
  return (
    <div className="NewBudgetForm">

      <form>
        <input type="text" placeholder = "Groceries" name="groceries" className="type" />

      </form> 
    </div>
 
  );
};

export default NewBudgetForm;

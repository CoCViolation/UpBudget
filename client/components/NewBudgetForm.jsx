import React, { Component } from 'react';
import useForm from 'react-hook-form';

const NewBudgetForm = () => {

  return (
    <div className="NewBudgetForm">

      <form>
        <input type="text" placeholder = "Groceries" name="groceries" className="type" />
        <input type="text" placeholder = "Gym" name="gym" className="type" />
        <input type="text" placeholder = "Rent" name="rent" className="type" />
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" />
        <input type="text" placeholder = "Fun Money" name="fun money" className="type" />
        <input type="text" placeholder = "Student Loan" name="student loan" className="type" />
        <input type="text" placeholder = "Electronics" name="electronics" className="type" />
        <input type="text" placeholder = "Day Care" name="day care" className="type" />
        <input type="text" placeholder = "Clothing" name="clothing" className="type" />
        <button className="btn" type="button" onClick={()=>{console.log('TESTTEST')}}>TEST!!!</button>
      </form> 
    </div>
 
  );
};

export default NewBudgetForm;

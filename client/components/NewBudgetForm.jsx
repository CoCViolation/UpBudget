import React, { Component } from "react";
import useForm from "react-hook-form";

const NewBudgetForm = () => {
  const submitHandler = () => {
    console.log("HELLO");
  };

  return (
    <div className="NewBudgetForm">
      <form
        onSubmit={(e) => {
          console.log("HELLO");
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          type="text"
          placeholder="Groceries"
          name="groceries"
          className="type"
        />
        <input type="text" placeholder="Gym" name="gym" className="type" />
        <input type="text" placeholder="Rent" name="rent" className="type" />
        <input
          type="text"
          placeholder="Car Loan"
          name="car loan"
          className="type"
        />
        <input
          type="text"
          placeholder="Fun Money"
          name="fun money"
          className="type"
        />
        <input
          type="text"
          placeholder="Student Loan"
          name="student loan"
          className="type"
        />
        <input
          type="text"
          placeholder="Electronics"
          name="electronics"
          className="type"
        />
        <input
          type="text"
          placeholder="Day Care"
          name="day care"
          className="type"
        />
        <input
          type="text"
          placeholder="Clothing"
          name="clothing"
          className="type"
        />
        <input type="submit" value="Click" />
      </form>
    </div>
  );
};

export default NewBudgetForm;

// onChange={(e) => setGroceries(e.target.value)}

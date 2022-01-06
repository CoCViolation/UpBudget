import React, {useState} from 'react'
import PieChart from './PieChart';
import {Link} from 'react-router-dom';
import { addSpending} from '../store.js'
import { useSelector, useDispatch } from "react-redux";

function TotalsDisplay() {

  const dispatch = useDispatch();
  const spendState = useSelector((state) => state.config.spending);

  const [groceries, setGroceries] = useState(0);
  const [gym, setGym] = useState(0);
  const [rent, setRent] = useState(0);
  const [car_loan, setCar_loan,] = useState(0);
  const [fun_money, setFun_money,] = useState(0);
  const [student_loan, setStudent_loan,] = useState(0);
  const [electronics, setElectronics] = useState(0);
  const [day_care, setDaycare] = useState(0);
  const [clothing, setClothing] = useState(0);
  
  const [clicked, setClicked] = useState(false);


  const handleSubmitClick = () => {
    setClicked(true);
    dispatch(addSpending({groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing}));
    alert("Submitted Successfully!")    
  }

  const total = state => {
    let sum = 0;
    for (const category in state){
      sum+= Number(state[category]);
    }
    console.log(sum);
    return sum;
  };


  return (
    <div className="sub-budget-container">
      <form className='content'>
        <h4>New Budget Form</h4>
        <label className='label'>Groceries:</label>
          <input type="text" placeholder = "Groceries" name="groceries" className="type" onChange={(e) => setGroceries(e.target.value)}/>
        <label className='label'>Gym:</label>
          <input type="text" placeholder = "Gym" name="gym" className="type" onChange={(e) => setGym(e.target.value)}/>
          <label className='label'>Rent:</label>
        <input type="text" placeholder = "Rent" name="rent" className="type" onChange={(e) => setRent(e.target.value)}/>
          <label className='label'>Car Loan:</label>
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" onChange={(e) => setCar_loan(e.target.value)}/>
         <label className='label'>Fun Money:</label>
          <input type="text" placeholder = "Fun Money" name="fun money" className="type" onChange={(e) => setFun_money(e.target.value)}/>
        <label className='label'>Student Loan:</label>
          <input type="text" placeholder = "Student Loan" name="student loan" className="type" onChange={(e) => setStudent_loan(e.target.value)}/>
        <label className='label'>Electronics:</label>
          <input type="text" placeholder = "Electronics" name="electronics" className="type" onChange={(e) => setElectronics(e.target.value)}/>
        <label className='label'>Day Care:</label>
          <input type="text" placeholder = "Day Care" name="day care" className="type" onChange={(e) => setDaycare(e.target.value)}/>
        <label className='label'>Clothing:</label>
          <input type="text" placeholder = "Clothing" name="clothing" className="type" onChange={(e) => setClothing(e.target.value)}/>
          
        <button type='button' className='btn' onClick={()=>handleSubmitClick()}>Submit</button>
        <Link style={{textDecoration:'none', fontSize:'13px'}} className='btn' to="/budgetmain">Go Back</Link>
      </form>
        <h4>Total Spending Budget: $ {total(spendState)}</h4>
        {clicked ? <> <PieChart groceries={groceries} gym={gym} rent={rent} car_loan={car_loan} fun_money={fun_money} student_loan={student_loan} electronics={electronics} day_care={day_care} clothing={clothing}/> </> : ''}
    </div>
  )
}


export default TotalsDisplay;


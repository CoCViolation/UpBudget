import React, { useState } from 'react';
// import useForm from 'react-hook-form';
import PieChart from './PieChart.jsx';
import "../styles.scss";

const NewBudgetForm = () => {

  const [groceries, setGroceries] = useState({ groceries: 0 });
  const [gym, setGym] = useState({ gym: 0 });
  const [rent, setRent] = useState({ rent: 0 });
  const [car_loan, setCar_loan,] = useState({ car_loan: 0 });
  const [fun_money, setFun_money,] = useState({ fun_money: 0 });
  const [student_loan, setStudent_loan,] = useState({ student_loan: 0 });
  const [electronics, setElectronics] = useState({ electronics: 0 });
  const [day_care, setDaycare] = useState({ day_care: 0 });
  const [clothing, setClothing] = useState({ clothing: 0 });
  const [clicked, setClicked] = useState(false);

 
  const isCLicked  = () => {
    // e.preventDefault();
    console.log('helllo')
    // console.log(fun_money);
    // console.log(clicked);
    // setClicked(true);
  }


  return (
    <div className="NewBudgetForm">
      <form>
        <label for="groceries">Groceries:</label>
        <input type="text" placeholder = "Groceries" name="groceries" className="type" onChange={(e) => setGroceries({groceries: e.target.value})}/>
        <label for="gym">Gym:</label>
        <input type="text" placeholder = "Gym" name="gym" className="type" onChange={(e) => setGym({gym: e.target.value})}/>
        <label for="rent">Rent:</label>
        <input type="text" placeholder = "Rent" name="rent" className="type" onChange={(e) => setRent({rent: e.target.value})}/>
        <label for="car loan">Fun Money:</label>
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" onChange={(e) => setCar_loan({car_loan: e.target.value})}/>
        <label for="fun money">Fun Money:</label>
        <input type="text" placeholder = "Fun Money" name="fun money" className="type" onChange={(e) => setFun_money({ fun_money: e.target.value})}/>
        <label for="student loan">Student Loan:</label>
        <input type="text" placeholder = "Student Loan" name="student loan" className="type" onChange={(e) => setStudent_loan({student_loan: e.target.value})}/>
        <label for="electronics">Electronics:</label>
        <input type="text" placeholder = "Electronics" name="electronics" className="type" onChange={(e) => setElectronics({ electronics: e.target.value})}/>
        <label for="day care">Day Care:</label>
        <input type="text" placeholder = "Day Care" name="day care" className="type" onChange={(e) => setDaycare({ day_care: e.target.value})}/>
        <label for="clothing">Clothing:</label>
        <input type="text" placeholder = "Clothing" name="clothing" className="type" onChange={(e) => setClothing({ clothing: e.target.value})}/>
        <button type='button' onClick={()=>{
          clicked ? setClicked(false) : setClicked(true);
          }}>Submit</button>
      </form>
        {clicked ? <> <PieChart groceries={groceries} gym={gym} rent={rent} car_loan={car_loan} fun_money={fun_money} student_loan={student_loan} electronics={electronics} day_care={day_care} clothing={clothing}/> </> : ''}
    </div>
 
  );
};

export default NewBudgetForm;

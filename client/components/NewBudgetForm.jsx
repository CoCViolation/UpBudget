import React, { useState } from 'react';
// import useForm from 'react-hook-form';
import PieChart from './PieChart.jsx';
import "../styles.scss";

const NewBudgetForm = () => {
  // const [form, setForm] = useState({
  //   groceries: 0,
  //   gym: 0,
  //   rent: 0,
  //   car_loan: 0,
  //   fun_money: 0,
  //   student_loan: 0,
  //   electronics: 0,
  //   day_care: 0,
  //   clothing: 0
  // })
  // const [groceries, setGroceries] = useState({ groceries: 0 });
  // const [gym, setGym] = useState({ gym: 0 });
  // const [rent, setRent] = useState({ rent: 0 });
  // const [car_loan, setCar_loan,] = useState({ car_loan: 0 });
  // const [fun_money, setFun_money,] = useState({ fun_money: 0 });
  // const [student_loan, setStudent_loan,] = useState({ student_loan: 0 });
  // const [electronics, setElectronics] = useState({ electronics: 0 });
  // const [day_care, setDaycare] = useState({ day_care: 0 });
  // const [clothing, setClothing] = useState({ clothing: 0 });
  const [clicked, setClicked] = useState(false);

 
  const isCLicked  = () => {
    // e.preventDefault();
    console.log('helllo')
    // console.log(fun_money);
    // console.log(clicked);
    // setClicked(true);
  }

  // useEffect(()=> {

  // }, [clicked])

  return (
    // <div className="NewBudgetForm">
      <div>
      {/* <form> */}
        <input type="text" placeholder = "Groceries" name="groceries" className="type" />
        <input type="text" placeholder = "Gym" name="gym" className="type" onChange={(e) => setGym(e.target.value)}/>
        <input type="text" placeholder = "Rent" name="rent" className="type" onChange={(e) => setRent(e.target.value)}/>
        <input type="text" placeholder = "Car Loan" name="car loan" className="type" onChange={(e) => setCar_loan(e.target.value)}/>
        <input type="text" placeholder = "Fun Money" name="fun money" className="type" onChange={(e) => setFun_money(e.target.value)}/>
        <input type="text" placeholder = "Student Loan" name="student loan" className="type" onChange={(e) => setStudent_loan(e.target.value)}/>
        {/* <input type="text" placeholder = "Electronics" name="electronics" className="type" onChange={(e) => setElectronics(e.target.value)}/>
        <input type="text" placeholder = "Day Care" name="day care" className="type" onChange={(e) => setDaycare(e.target.value)}/>
        <input type="text" placeholder = "Clothing" name="clothing" className="type" onChange={(e) => setClothing(e.target.value)}/> */}
        <button type='button' onClick={()=>{
          clicked ? setClicked(false) : setClicked(true);
          }}>Submit</button>
          {/* <button onClick={()=>console.log('hello')}>test</button> */}
          {/* <button onClick={console.log('here')}>here</button> */}
      {/* </form> */}
      {/* <div> */}
        {/* {clicked ? <> <PieChart props={groceries, gym, rent, car_loan, fun_money, student_loan}/> </> : ''} */}
        {clicked ? <> <PieChart/> </> : ''}
        {/* <PieChart/> */}
      {/* </div> */}
    </div>
 
  );
};

export default NewBudgetForm;

// onChange={(e) => setGroceries(e.target.value)}

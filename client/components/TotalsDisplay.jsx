import React, {useState} from 'react'
import PieChart from './PieChart';
import "../styles.scss";
import {Link} from 'react-router-dom';

function TotalsDisplay() {

  const [groceries, setGroceries] = useState("0");
  const [gym, setGym] = useState("0");
  const [rent, setRent] = useState("0");
  const [car_loan, setCar_loan,] = useState("0");
  const [fun_money, setFun_money,] = useState("0");
  const [student_loan, setStudent_loan,] = useState("0");
  const [electronics, setElectronics] = useState("0");
  const [day_care, setDaycare] = useState("0");
  const [clothing, setClothing] = useState("0");
  const [clicked, setClicked] = useState(false);

  
  //catch error that type has to be only integer

  let total = (parseInt(groceries)+ 
                  parseInt(gym)+
                  parseInt(rent)+
                  parseInt(car_loan)+
                  parseInt(fun_money)+
                  parseInt(student_loan)+
                  parseInt(electronics)+
                  parseInt(day_care)+
                  parseInt(clothing)
  );

  const handleSubmitClick = () => {
  
    const groceries = document.getElementById("groceries").value;
    const gym = document.getElementById("gym").value;
    const rent = document.getElementById("rent").value;
    const car_loan = document.getElementById("car_loan").value;
    const fun_money = document.getElementById("fun_money").value;
    const student_loan = document.getElementById("student_loan").value;

    fetch("http://localhost:3000/sql", {
      method: "POST",
      credentials:'include',
      body: JSON.stringify({
        groceries,
        gym,
        rent,
        car_loan,
        fun_money,
        student_loan
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((success) => {
        console.log(success)
        if (success.hasOwnProperty('userData')) {
          alert(
            `Successful`
          );
          navigate("/budgetmain");
        } else
          alert(
            "Something Went Wrong! Please make sure all fields are correct!"
          );
      })
      .then(response => response.text()) 
      .then(json => console.log(json))
      .catch(err => console.log('Import Data Failed', err))
  }

  return (
    <div className='sub-budget-container'>
      <div className='content'>
        <h4>Total Monthly Budget Spend</h4>
        <label className='label'>Groceries: <input type="text" placeholder = "Groceries" value={groceries} className="type" onChange={(e) => setGroceries(e.target.value)}/>
        </label>
        <label className='label'>Gym:
        <input type="text" placeholder = "Gym" value={gym} className="type" onChange={(e) => setGym(e.target.value)}/>
        </label>
        <label className='label'> Rent:
          <input type="text" placeholder = "Rent" value={rent} className="type" onChange={(e) => setRent(e.target.value)}/>
        </label>
        <label className='label'>Car Loan:
          <input type="text" placeholder = "Car Loan" value={car_loan} className="type" onChange={(e) => setCar_loan(e.target.value)}/>
        </label>
        <label className='label'>Fun Money:
          <input type="text" placeholder = "Fun Money" value={fun_money} className="type" onChange={(e) => setFun_money(e.target.value)}/>
        </label >
        <label className='label'>Student Loan:
          <input type="text" placeholder = "Student Loan" value={student_loan} className="type" onChange={(e) => setStudent_loan(e.target.value)}/>
        </label >
        <label className='label'>Electronics:
          <input type="text" placeholder = "Electronics" value={electronics} className="type" onChange={(e) => setElectronics(e.target.value)}/>
        </label>
        <label className='label'>Day Care:
          <input type="text" placeholder = "Day Care" value={day_care} className="type" onChange={(e) => setDaycare(e.target.value)}/>
        </label>
        <label className='label'>Clothing:
          <input type="text" placeholder = "Clothing" value={clothing} className="type" onChange={(e) => setClothing(e.target.value)}/>
        </label>
      </div>
      <p className='totalSpend'> Total Spending: {total}</p>
      <button type='button' className='btn' onClick={handleSubmitClick}>Submit</button>
      <Link style={{textDecoration:'none', fontSize:'13px'}} className='btn' to="/budgetmain">Go Back</Link>
      
    </div>
  )
}


export default TotalsDisplay;


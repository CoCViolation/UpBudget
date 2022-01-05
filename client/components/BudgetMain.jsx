import React from 'react';
// import { connect } from 'react-redux';
import "../styles.scss";
import {Link} from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const BudgetMain = (props) => {
  // const [spending, setSpending] = useState({
  //   groceries: 1,
  //   gym: 2,
  //   rent: 3,
  //   car_loan: 4,
  //   fun_money: 5,
  //   student_loan: 6,
  //   electronics: 8,
  //   day_care: 10,
  //   clothing: 1
  // })

  const spending = {groceries: 1,
    gym: 2,
    rent: 3,
    car_loan: 4,
    fun_money: 5,
    student_loan: 6,
    electronics: 8,
    day_care: 10,
    clothing: 1}

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Gym', 'Rent', 'Car Loan', 'Fun Money', 'Student Loan', 'Electronics'],
    datasets: [
      {
        label: '# of Votes',
        // data: [12, 19, 3, 5, 2, 3], //match to data.labels
        // data: [spending.groceries, spending.gym, spending.rent, spending.car_loan, spending.fun_money, spending.student_loan, spending.electronics, spending.day_care, spending.clothing], //match to data.labels
        data: [spending.groceries, spending.gym, spending.rent, spending.car_loan, spending.fun_money, spending.student_loan], //match to data.labels
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  return (
    <div className='container budget-container'>
      <div className='header1'> My Account</div>
      <div className='header2'> Hi User! </div>

      <div className='content-large'>Total Monthly Budget:
        
        <ul className='categories'>
          <table>
            <thead>
              <br></br>
              <tr>
                <th> Spending So far: </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
              <td>Groceries</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Gym</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Rent</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Car Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Fun Money</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Student Loan</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Electronics</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Day Care</td>
              <td>$</td>
              </tr>
              <tr>
              <td>Clothing</td>
              <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul>
      </div>
      <div className='content-medium1'>Total Spent
      <ul className='totalSpent'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>
      <div className='content-medium2'>Budget
      <ul className='remBudget'>
          <table>
            <thead>
              <br></br>
              <br></br>
              <tr>
                <th>  </th>
              </tr>
 
            </thead>
            <tbody>
              <tr>
                <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
              <td>$</td>
              </tr> <tr>
               <td>$</td>
              </tr>
              <tr>
                 <td>$</td>
              </tr>
              <tr>
                <td>$</td>
              </tr>
              <tr>
               <td>$</td>
              </tr>
              <br></br>
            </tbody>
          </table>
         
        </ul></div>

      <div className='buttonbox'>
      <Link to='/totaldisplay'>
      <button className="button">Input Spending</button>
      </Link>
      <br></br>
      <Link to='/newbudget'>
      <button className="button">Input New Budget</button>
      </Link>
      </div>
      {/* <Pie data ={data}/> */}
     </div>
  );
};

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}

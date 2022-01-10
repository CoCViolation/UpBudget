import React, { useEffect, useState } from 'react';
// import "../styles.scss";
import {Link} from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
const sampleUserData = require('../sample user data.json');
const transactionsList = sampleUserData.transactions;
import { useSelector } from "react-redux";

const BudgetMain = () => {

  const budgetState = useSelector((state) => state.config.budget);
  const spendingState = useSelector((state) => state.config.spending);
  console.log(budgetState);

  const total = state => {
    let sum = 0;
    for (const category in state){
      sum+= Number(state[category]);
    }
    console.log(sum);
    return sum;
  };
 

  // we'll be using this fetch request to pull user from localhost:3000/sql
  // and we can then manipulate it however we want to make it fit the graphs
  // we want to build
  useEffect(() => {
  // for now, I can't run localhost:3000 for whatever reason, but I'm 99% sure this syntax
  // is correct, so I'm building out the logic by just importing from the sample-user-data.json
  // file which contains a lot of the same data, we should only require a few tweaks to make it fit
  // just replace transactionList with the parsed result for whatever user we access with the db query
  //   fetch('https://localhost:3000/sql')
  //     .then((result) => enter the for loop below
    // iterating through the user data's list of transactions
    for (let i = 0; i < transactionsList.length; i++) {
      // inserting a table entry into transactions table that corresponds to each listed transaction
      // taking relevant info: date, payee, amount, name, debit/credit, notes
      let row = document.getElementById('transactions-table').insertRow(i)
      let name = row.insertCell(0);
      let date = row.insertCell(1);
      if (transactionsList[i].credit == true) {
        let credit = row.insertCell(2);
        credit.innerHTML = `<b>transaction type:</b> credit` 
      } else if (transactionsList[i].debit == true) {
        let debit = row.insertCell(2);
        debit.innerHTML = '<b>transaction type: </b> debit'
      }
      let amount = row.insertCell(3);
      name.innerHTML = `<b>transaction name:</b> ${transactionsList[i].name}`
      date.innerHTML = `<b>date:</b> ${transactionsList[i].date.slice(0, 10)}`
      amount.innerHTML = `<b>amount:</b> $${transactionsList[i].amount}`;
      // console.log("This is the amount",transactionsList[i].amount)
    }

  })


  return (
    <div className='container budget-container'>
      <div className='header1'> My Account</div>
      <div className='header2'> Hi User! </div>
      <div className='budget-container'>
      <h4> My Account</h4>
      <div>
        <div className='content'>Total Monthly Budget: $ {total(budgetState)}
          

        </div>
        <div className='content'>Total Spent : $ {total(spendingState)}
          

        </div>
        <div className='content'>Budget : $ {total(budgetState) - total(spendingState)}
        
        
        </div>
      </div>
        <Link to='/totaldisplay'>
        <button className="btn">Input Spending</button>
        </Link>
        <Link to='/newbudget'>
        <button className="btn">Input New Budget</button>
        </Link>
      </div>

      {/* <div id="testcomponent">{sampleUserData.transactions}</div> */}
      <div id="transactions-list" className='content-medium1'>
        <br/>
        <ul className='transactions'>
          <table id="transactions-table">
            <thread>
              <tr>
                <th>Recent Transactions:</th>
              </tr>
            </thread>
            <tbody>

            </tbody>
          </table>
        </ul>
      </div>
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
      
      
    
    </div>
  );
  };

export default BudgetMain;
//state = {userData, categories, transactions, categoryBudget}

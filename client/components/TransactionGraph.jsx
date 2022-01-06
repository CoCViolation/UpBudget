import React from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

const PieChart = (props) => {

    const {groceries, gym, rent, car_loan, fun_money,student_loan, electronics, day_care, clothing} = props;
    
      ChartJS.register(ArcElement, Tooltip, Legend);
    
      const data = {
        labels: ['Gym', 'Rent', 'Car Loan', 'Fun Money', 'Student Loan', 'Electronics'],
        datasets: [
          {
            label: '# of Votes',
            // data: [25, 19, 3, 5, 2, 3], //match to data.labels
            // data: [spending.groceries, spending.gym, spending.rent, spending.car_loan, spending.fun_money, spending.student_loan, spending.electronics, spending.day_care, spending.clothing], //match to data.labels
            data: [groceries, gym, rent, car_loan, fun_money, student_loan], //match to data.labels
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
        <Pie data ={data}/>
      )

}



export default PieChart;
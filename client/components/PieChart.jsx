import React from 'react';
// import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../styles.scss";

const PieChart = (props) => {

    const {groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing} = props;

      ChartJS.register(ArcElement, Tooltip, Legend);
    
      const data = {
        labels: ['Groceries', 'Gym', 'Rent', 'Car Loan', 'Fun Money', 'Student Loan', 'Electronics', 'Day Care', 'Clothing'],
        datasets: [
          {
            label: 'Monthly Budget',
            data: [groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing], //match to data.labels
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 192, 203, 0.2)',
              'rgba(116, 60, 148, 0.2)',
              'rgba(148, 60, 89, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 192, 203, 1)',
              'rgba(116, 60, 148, 1)',
              'rgba(148, 60, 89, 1)',
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
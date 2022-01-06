import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const BarChart = (props) => {

    const {groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing} = props.budget;
    // const {spending.groceries, spending.gym, spending.rent, spending.car_loan, spending.fun_money, spending.student_loan, spending.electronics, spending.day_care, spending.clothing} = props;
    // console.log(groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing);

    ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );

    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Spending vs Budget Bar Chart',
        },
    },
    };

    const labels = ['Groceries', 'Gym', 'Rent', 'Car Loan', 'Fun Money', 'Student Loan', 'Electronics', 'Day Care', 'Clothing'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Budget',
        data: [groceries, gym, rent, car_loan, fun_money, student_loan, electronics, day_care, clothing],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Spending',
        data: [props.spending.groceries, props.spending.gym, props.spending.rent, props.spending.car_loan, props.spending.fun_money, props.spending.student_loan, props.spending.electronics, props.spending.day_care, props.spending.clothing],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    return (
        <Bar options={options} data={data} />
  )
}

export default BarChart;
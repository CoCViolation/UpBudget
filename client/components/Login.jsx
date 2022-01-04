import React, { Component } from 'react';

const Login = () => {
<<<<<<< HEAD
  return (
    <div className='container login-container'>
      <h3 className='welcome'> Budgeting Tool</h3>
      <div className='divider'></div>
      <br></br>
      <br></br>
      <img
        src='https://www-assets.youneedabudget.com/wp-content/uploads/2019/02/12222336/illo_fourrules_onehowitworks-768x665.png'
        alt='Budget Logo'
        className='budgetlogo'
      />
      <br></br>
      <br></br>
      <div className='section'>
        <a href='/auth/google' className='btn red darken-1'>
          <i className='fab fa-google left'></i> Log In With Google
        </a>
      </div>
    </div>
  );
};
=======
    
    
    return (
        <div className="container login-container">
            <h3 className="welcome"> Budgeting Tool</h3>
            <div className="divider"></div>
            <img src="https://www-assets.youneedabudget.com/wp-content/uploads/2019/02/12222336/illo_fourrules_onehowitworks-768x665.png" alt="Budget Logo" className="budgetlogo" />
            <div className="section">
                <a href="/auth/google" className="btn red darken-1">
                   <i className="fab fa-google left"></i> Log In With Google
                </a>
            </div>

        </div>
    )
}
>>>>>>> 1c942680eee19814dde8bd2dd9ff39846119b245

export default Login;

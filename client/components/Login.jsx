import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const userLogin = async () => {
  // const login = await fetch('http://localhost:3000/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify()
  //   })
  //     .then(data => data.json())
  //     .catch(error => console.log('This is the error', error));
  // }

  const styles = {
    loginPage: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", 
    },
  };


  const google = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };

  return (
    <div className="container login-container" style={styles.loginPage}>
      <h3 className="welcome"> Budgeting Tool</h3>
      <div className="divider"></div>
      <br></br>
      <br></br>
      <img
        src="https://www-assets.youneedabudget.com/wp-content/uploads/2019/02/12222336/illo_fourrules_onehowitworks-768x665.png"
        alt="Budget Logo"
        className="budgetlogo"
        style={{width:500}}
      />
      <br></br>
      <br></br>
      <div className="section">
        <a
          onClick={google}
          href="http://localhost:3000/auth/google"
          className="btn red darken-1"
        >
          <i className="fab fa-google left"></i> Log In With Google
        </a>
      </div>
    </div>
  );
};

export default Login;

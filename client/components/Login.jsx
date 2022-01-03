import React, { Component } from 'react';


const Login = () => {
    
    
    return (
        <div className="container login-container">
            <h3 className="welcome"> Budgeting Tool</h3>
            <div className="divider"></div>
            <div className="section">
                <a href="/auth/google" className="btn red darken-1">
                   <i className="fab fa-google left"></i> Log In With Google
                </a>
            </div>

        </div>
    )
}

export default Login;
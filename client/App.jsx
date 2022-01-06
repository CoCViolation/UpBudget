import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import BudgetMain from "./components/BudgetMain.jsx";
import NewBudgetForm from "./components/NewBudgetForm.jsx";
import TotalsDisplay from "./components/TotalsDisplay.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  useEffect(() => {
    let user;

    const fetchData = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.statusCode === 200) return response.json();
          throw new Error("authentication failed");
        })
        .then((resObject) => {
          console.log(resObject);
        })
        .catch((err) => {
          console.log("ERROR is", err);
        });
    };
    fetchData();
    // const username = user.user;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/budgetmain" element={<BudgetMain />} />
        <Route path="/newbudget" element={<NewBudgetForm />} />
        <Route path="/totaldisplay" element={<TotalsDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;

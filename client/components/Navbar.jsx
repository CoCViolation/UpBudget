import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const styles = {
    appbar: {
      display: "flex",
      backgroundColor: "rgb(206, 229, 230)",
      justifyContent: "flex-start",
      height: 60,
      color: "black",
    },
  };

  const [clicked, setClicked] = useState(false);

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
    <div style={{ width: "300px" }}>
      <Box style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" style={styles.appbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => (clicked ? setClicked(false) : setClicked(true))}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {clicked ? (
        <>
          <Sidebar />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;

import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import cors from "cors";

import express from "express";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import cookieParser from "cookie-parser";
import sqlRouter from "./routes/sql.js";
import sqlController from "./controllers/sqlcontroller.js";
import authRoutes from "./routes/auth-routes.js";

// import BudgetMain from '../client/components/BudgetMain.ejs'

import * as passportSetup from "./passport-setup.js";

const app = express();

const PORT = 3000;
app.set("trust proxy", 1);
//will parse all json
app.use(express.json());
//will break down queries in the requested URL.
//extended true (default value, but need to declare) uses the express qs library which allows nested objects to be passed as queries.
//exnteded false uses queryString library which is a simpler solution for basic usage
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
    cretentials: true,
  })
);

// app.use((req, res, next) => {
//   next();
// });

app.use("/auth", authRoutes);

//need express sessions. Must look this up.
app.use(
  session({
    secret: "catSnake",
    resave: false,
    saveUninitialized: true,
    secure: true,
    cookie: { maxAge: 600000, httpOnly: false },
  })
);

app.use(cookieParser("catSnake"));
//add passport initialize and sessions
// //add passport initialize and sessions
app.use(passport.initialize());
app.use(passport.session());

//start writing route handlers here
app.use("/sql", sqlRouter);

app.get("/evan", (req, res) => {
  res.send("HEY IAM EVAN HERE");
});

// app.get('/budgetMain', (req, res, ) => {
//   res.status(200).render('BudgetMain');
// })

app.get("http://localhost:8080/budgetmain", (req, res) => {
  console.log(req.session);
});

// catch-all route handler for any requests to an unknown route
// app.get("*", function (req, res, next) {
//   res.status(301).redirect("/Page you are looking for is not-found");
// });

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;

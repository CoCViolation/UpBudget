import express from "express";
import sqlController from "../controllers/sqlcontroller.js";

const router = express.Router();

//this will be run before any of the others
router.use((req, res, next) => {
  console.log(`  using sqlRouter`);

  // checks to see if it has property passport.
  // passport.hasownproperty gets a middleware error for some reason
  // console.log(req);
  const hasProperty = req._passport;
  console.log(hasProperty);

  // if it does not have the property passport, it's because it doesn't exist or it's already timed out
  if (hasProperty === undefined) {
    res.status(200).send("Unauthorized Entry");
  }
  //if it exists due to logging in and within the cookies timeframe, it goes to next.
  else {
    console.log("Heyy sercan");
    next();
  }
});

//get from the specific page
router.get(
  "/",
  sqlController.getUser,
  sqlController.getTransactions,
  sqlController.getCategories,
  sqlController.getCategoryBudgets,
  (req, res) => {
    const userData = {
      userData: res.locals.userData,
      transactions: res.locals.transactions,
      categories: res.locals.categories,
      categoryBudget: res.locals.categoryBudgets,
    };
    // console.log(userData);
    // console.log("sending data back");
    res.status(200).json(userData);
  }
);

export default router;

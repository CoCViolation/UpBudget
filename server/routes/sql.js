import express from 'express';
import path from 'path';
import sqlController from '../controllers/sqlController.js';

const router = express.Router();

//this will be run before any of the others
router.use((req, res, next) => {
    console.log(`  using sqlRouter`);
    next();
})

//get from the specific page
router.get('/', sqlController.getUser, sqlController.getTransactions, sqlController.getCategories, sqlController.getCategoryBudgets, (req, res)=> {
    const userData = {
        'userData': res.locals.userData,
        'transactions': res.locals.transactions,
        'categories': res.locals.categories,
        'categoryBudget': res.locals.categoryBudgets
    }
    // console.log(userData);
    console.log('sending data back');
    res.status(200).json(userData);
})

export default router;
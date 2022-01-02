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
router.get('/', sqlController.getUser, (req, res)=> {
    res.status(200).send('');
})

export default router;
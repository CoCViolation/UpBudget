import express from 'express';
import path from 'path';

import db from '../models/sql'
const query = db.query;

const controller = {}

//will return a valid username in res.locals.user_id
controller.getUser = (req, res, next) => {
    console.log(`    Running sqlController.getUser`);

    //dummy query to get all users
    query('SELECT * FROM users;')
        .then(query => {
            console.log(query.rows);
            res.locals.userID = 1;
            next();  
        })
        .catch(err => console.log(err));

    //set the user id to res.locals.user_id
}

//assume there's a valid res.locals.user_id
controller.getTransactions = (req, res, next) => {
    console.log(`    Running sqlController.getTransactions`);

    // set userID to res var or self defined
    const userID = res.locals.userID;

    //query all transactions by inner joining the trnsaction user id to the users id
    query(`SELECT * FROM transactions t INNER JOIN users u ON t.user_id = ${userID}; `)
        .then(query => console.log(query.rows))
        .catch(err => console.log(err));
    next();
}

//

export default controller;
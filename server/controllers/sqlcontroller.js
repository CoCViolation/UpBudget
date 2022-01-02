import express from 'express';
import path from 'path';

const controller = {}

controller.getUser = (req, res, next) => {
    console.log(`    Running sqlController.getUser`);
    next();
}

export default controller;
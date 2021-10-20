const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user, datas} = req.body;
        
        pool.query(


        );
    }
);

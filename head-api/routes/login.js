const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {id, pass} = req.body.user;

        pool.query(
            
        );
    }
);


module.exports = router

const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.get(
    '/',
    function(req, res, next) {
        pool.query(
            'SELECT * FROM memo',
            function(error, results) {
                if (error) { throw error; }

                res.status(200).json({
                    data: results.rows
                });
            }
        );
    }
);

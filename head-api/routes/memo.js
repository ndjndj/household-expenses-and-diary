const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.get(
    '/',
    function(req, res, next) {
        pool.query(
            'SELECT * FROM memo',
            function(error, results) {
                if(error) { throw error; }

                res.status(200).json({
                    data: results.rows
                });
            }
        );
    }
);

router.post(
    '/',
    function(req, res, next) {
        const {title, text} = req.body.memo;

        pool.query(
            'INSERT INTO memo(title, text) VALUES ($1, $2)',
            [title, text],
            function(error, results) {
                if(error) { throw error; }

                res.status(201).json({
                    status: 'success'
                });
            }
        );

    }
);

module.exports = router

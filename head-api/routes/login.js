const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user_id, pass} = req.body.user;

        pool.query(
            'SELECT ' +
            '    id, user_name, password ' +
            'FROM head_users WHERE ($1, $2)',
            [user_id, pass],
            function(error, results) {
                if(error) { throw error }
                console.log(results.rows);
            }
        );
    }
);


module.exports = router

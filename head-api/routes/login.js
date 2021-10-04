const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user_id, password} = req.body.user;
        console.log(user_id, password);
        pool.query(
            'SELECT ' +
            '    id, user_id, user_name ' +
            'FROM head_users WHERE user_id = $1 AND password =  $2',
            [user_id, password],
            function(error, results) {
                if(error) { throw error; }
                console.log(results.rows);
            }
        );
    }
);


module.exports = router

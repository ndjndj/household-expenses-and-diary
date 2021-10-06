const e = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user_id, password} = req.body.user;

        pool.query(
            'SELECT ' +
            '    id, user_id, user_name ' +
            'FROM head_users WHERE user_id = $1 AND password =  $2',
            [user_id, password],
            function(error, results) {
                if(error) { throw error; }

                let message = '';

                if(results.rows.length) {
                    message = `Hi ${results.rows[0]['user_name']}`;
                } else {
                    message = 'failed';
                }

                res.status(201).json({
                    status: 'success',
                    message:message,
                    data: results.rows
                });

            }
        );
    }
);

router.post(
    '/create_user',
    function(req, res, next) {
        const {user_id, user_name, password} = req.body.user;

        pool.query(
            'SELECT user_id FROM head_users WHERE user_id = $1',
            [user_id],
            function(error, results) {
                if(results.rows) {
                    console.log('users exists already');
                    return;
                }

                pool.query(
                    'INSERT INTO head_users(user_id, user_name, password)'  +
                    '   VALUES($1, $2, $3)',
                    [user_id, user_name, password],
                    function(error, results) {
                        if(error) { throw error; }
                        res.status(201).json({
                            status: 'success'
                        });
                    }
                );

            }
        );

    }
);


module.exports = router;

const express = require('express');
const router = express.Router();
const format = require('pg-format');

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user, datas} = req.body;
        console.log("func");
        const del = format('DELETE FROM head_categories WHERE user_id = %I;', user.user_id);
        console.log(sql);
        pool.query(del, [], function(error, results) {
            if(error) { throw error; }

            const ins = format(
                'INSERT INTO head_categories (user_id, id, name) VALUES %L', datas['data']
            );
            pool.query(ins, [], function(error, results) {
                res.status(201).json({status: 'success'})
            });
        });
    }
);

module.exports = router;

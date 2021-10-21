const express = require('express');
const router = express.Router();
const format = require('pg-format');

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user, datas} = req.body;
        console.log("func");
        const sql = format('DELETE head_categories WHERE user_id = %I; INSERT INTO head_categories (user_id, id, name) VALUES %L', user.user_id, datas['data']);
        console.log(sql);
        pool.query(sql, [user.user_id], function(error, results) {
            if(error) { throw error; }
            res.status(201).json({status: 'success'})
        });
    }
);

module.exports = router;

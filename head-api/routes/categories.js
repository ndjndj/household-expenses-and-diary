const express = require('express');
const router = express.Router();
const format = require('pg-format');

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user, datas} = req.body;
        console.log("func");
        const sql = format('INSERT INTO head_categories (user_id, id, name) VALUES %L', datas['data']);
        console.log(sql);
    }
);

module.exports = router;

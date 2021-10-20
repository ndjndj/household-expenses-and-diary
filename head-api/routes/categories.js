const express = require('express');
const router = express.Router();
const format = require('pg-format');

const pool = require('../db/pool');

router.post(
    '/',
    function(req, res, next) {
        const {user, datas} = req.body;

        const sql = format('INSERT INTO head_categories (id, name) VALUES %L, datas');
        console.log(sql);
    }
);

module.exports = router;

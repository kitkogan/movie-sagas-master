const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//router sends GET req as DB query for movies
router.get('/', (req, res) => {
    console.log('movie.router get movie', req.body);
    let queryText = 'SELECT * FROM "movies";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log("An error was encourntered while getting your movies", err)
        res.sendStatus(500);
    })
})

module.exports = router;
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
        console.log('An error was encourntered while getting your movies', err)
        res.sendStatus(500);
    })
})

//router sends GET req to DB for movie details by id
router.get('/details/:id', (req, res) => {
    let deetsById = req.params.id 
    let queryText = 'SELECT * FROM "movies" WHERE "id" = $1;';
    pool.query(queryText, [deetsById])
        .then(result => {
            res.send(result.rows[0]);
        })
        .catch(err => {
            console.log('An error was encountered while getting your movie details', err)
            res.sendStatus(500);
        })
})

module.exports = router;
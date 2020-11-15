const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 'SELECT * FROM "genres";';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT "movies".title, "genres".name FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
  JOIN "genres" ON "movies_genres".genres_id = "genres".id
  WHERE "movies".id = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      // console.log(result);
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;

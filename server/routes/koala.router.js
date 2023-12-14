const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool')


// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET route working')
    let queryText = `
    SELECT * FROM "koalas"
    `
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    })
        .catch((error) => {
            console.log("error getting books", error);
            res.sendStatus(500)

        })
})

// POST
koalaRouter.post('/', (req, res) => {
    console.log("POST route working")
let koalas = req.body
let queryText = `
INSERT INTO "koalas"
	("name", "gender", "age", "ready_to_transfer", "comments")
	VALUES
	('Stevie', 'M', 23, true, 'Born in Minnesota')
    `
pool.query(queryText).then((result) => {
    res.sendStatus(201)
})
})

// PUT
koalaRouter.put('/', (req, res) => {
    console.log("PUT route working")

    pool.query = `
    SELECT * FROM "koalas"
    `
})

// DELETE

module.exports = koalaRouter;
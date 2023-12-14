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
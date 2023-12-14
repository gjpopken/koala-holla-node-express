const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool')


// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET route working')
    let queryText = `
    SELECT * FROM "koalas;"
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
let koala = req.body

let queryText = `
INSERT INTO "koalas"
	("name", "gender", "age", "ready_to_transfer", "comments")
	VALUES ($1, $2, $3, $4, $5);
    `
const queryParams = [koala.name, koala.gender, koala.age, koala.ready_to_transfer, koala.comments]
pool.query(queryText, queryParams).then((result) => {
    res.sendStatus(201)
// let queryText = `INSERT INTO "koalas"
// ("name", "gender", "age", "ready_to_transfer", "comments")
// VALUES
// ('Stevi', 'M', 46, true, 'old and grumpy');
//     `
// pool.query(queryText).then((result) => {
//     res.sendStatus(201)
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
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool')


// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET route working')
    let queryText = `
    SELECT * FROM "koalas";
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

    // ! this section deals with SQL injection by establishinng queryParams instead of pure SQL being sent to the database
    let koala = req.body
    console.log('this is koala', koala);
    let queryText = `
INSERT INTO "koalas"
	("name", "gender", "age", "ready_to_transfer", "comments")
	VALUES ($1, $2, $3, $4, $5);
    `
    const queryParams = [koala.name, koala.gender, koala.age, koala.ready_to_transfer, koala.comments]
    pool.query(queryText, queryParams).then((result) => {
        res.sendStatus(201)
    })
        .catch((error) => {
            console.log('oops we hit an error in the POST query')
            res.sendStatus(404)
        })
    // end of section dealing with SQL Injection

    // ! this section is to test that the post route can update the database with predetermined data
    // let queryText = `INSERT INTO "koalas"
    // ("name", "gender", "age", "ready_to_transfer", "comments")
    // VALUES
    // ('Stevi', 'M', 46, true, 'old and grumpy');
    //     `
    // pool.query(queryText).then((result) => {
    //     res.sendStatus(201)
    // end of section inserting predetermined data into the database
})

// PUT
koalaRouter.put('/', (req, res) => {
    console.log("PUT route working")

// ! this sectioin is able to update data on the database with a predetermined value and id
    queryText = `
    UPDATE "koalas"
    SET "ready_to_transfer" = TRUE
    WHERE "id" = 3;
    `
    pool.query(queryText).then((result) => {
        res.send(result);
    })
//end of section that can update database with a predetermined value and id
})

// DELETE

module.exports = koalaRouter;
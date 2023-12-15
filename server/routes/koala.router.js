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

// ! This is a section that Im pretty sure we need(so im gonna make it ), but Gavin
// ! said we could get it done without it 
koalaRouter.get('/byid/:id', (req,res) => {
const idToGet = req.params.id 
const queryText = `
    SELECT FROM "koalas"
    WHERE "id" = 1
    `
const queryParams = [idToGet]

pool.query(queryText, queryParams).then((result) => {
    res.sendStatus(200)
    console.log("/koalas/byid/id result:", result.rows)
})
.catch((error) => {
    console.log('some error in the byid get route');
    res.sendStatus(error)
})
})
// end of byid GET router


koalaRouter.put('/:id', (req, res) => {
    console.log("PUT route working")

// ! this sectioin is able to update data on the database with a predetermined value and id
    // queryText = `
    // UPDATE "koalas"
    // SET "ready_to_transfer" = TRUE
    // WHERE "id" = 3;
    // `
    // pool.query(queryText).then((result) => {
    //     res.send(result);
    // })
//end of section that can update database with a predetermined value and id

// ! this section is to target by id the koalas to switch ready for transfer to true
let id = req.params.id


queryText = `
UPDATE "koalas"
SET "ready_to_transfer" = TRUE
WHERE "id" = $1;
`
let queryParams =[id]
pool.query(queryText, queryParams).then((result) => {
    res.send(result);
    console.log('targetting by id successful')
})

// this is the end of the section to target by id the koalas to switch ready to transfer to true
.catch((error) => {
    console.log('you did something wrong dingus', error);
})
})

// DELETE

module.exports = koalaRouter;
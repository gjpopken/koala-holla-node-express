const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool')


// GET
koalaRouter.get('/', (req,res) => {
    console.log('GET route working')

})
// POST
koalaRouter.post('/', (req,res) =>{
    console.log("POST route working")
})

// PUT
koalaRouter.put('/', (req,res) =>{
    console.log("PUT route working")
})

// DELETE

module.exports = koalaRouter;
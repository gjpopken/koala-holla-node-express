const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool')


// GET
koalaRouter.get('/', (req,res) => {
    console.log('GET route working')

})
// POST


// PUT


// DELETE

module.exports = koalaRouter;
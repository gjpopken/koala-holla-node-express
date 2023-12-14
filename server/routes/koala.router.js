const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/koalas', (req,res) => {
    console.log('GET route working')
  res.sendStatus(200)
    
    .catch((error) => {
        console.log('WE HIT THE KOALA WITH OUR SUBARU OUTBACK', error)
        res.sendStatus(500)
    })
})
// POST


// PUT


// DELETE

module.exports = koalaRouter;
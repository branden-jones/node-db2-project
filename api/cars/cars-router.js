
const express = require('express');

const router = express.Router();

router.get('/', async (req,res,next) => {
    res.json('getting all cars')
})

router.get('/:id', async (req,res,next) => {
    res.json('getting your special car')
})

router.post('/', async (req,res,next) => {
    res.json('posting a new car')
})

module.exports = router
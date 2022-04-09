const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json()
})

router.post('/', (req, res, next) => {
    res.send('POST movie routes')
})

module.exports = router;
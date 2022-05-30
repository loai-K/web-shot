const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.json({status: 'success', message: 'Welcome to the Screen Shot API'})
})

module.exports = router

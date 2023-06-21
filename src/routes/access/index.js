
const express = require('express');
const AccessController = require('../../controllers/access.controller');
const router = express.Router();

//SignUP
router.post('/shop/signup' , AccessController.signUp)

router.get('/', function(req, res, next) {
    return res.status(200).json({
        code: 1,
        message: "Thanh cong !!!!!!!"
    })
})

module.exports = router;
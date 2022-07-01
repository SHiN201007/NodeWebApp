var express = require('express');
var router = express.Router();
// Controllers
var mainController = require('../public/javascripts/Controllers/MainController')
var signController = require('../public/javascripts/Controllers/SignController')

// 画面起動時
router.get('/', mainController.openWindow);

// サインアップ時
router.post('/confirm', signController.doSignUp);

module.exports = router;
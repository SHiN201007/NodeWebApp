var express = require('express');
var router = express.Router();

/* GET confirm page. */
router.get('/', function(req, res, next) {
    const data = {
        info: {
            title: 'Confirm',
            result: 'result',
        }
    }
    res.render('confirm', data);
});

module.exports = router;
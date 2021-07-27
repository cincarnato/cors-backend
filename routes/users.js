var express = require('express');
var router = express.Router();


/* CORS */
/*router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://frontend.int:3000')
    next()
})*/

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({username: 'get'});
});


router.post('/', function (req, res, next) {
    res.json({username: 'post'});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var axios = require('axios')


/* CORS */
/*router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://frontend.int:3000')
    next()
})*/

/* GET users listing. */
router.get('/', function (req, res, next) {

    axios.get(process.env.SERVICES_URL)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.status(500)
            res.send('ERROR')
        })

});



module.exports = router;

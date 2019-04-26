var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//     res.render('login', { title: 'Express' });
// });

router.get('/', function (req, res) {
    var sessionObj = req.cookies['session_obj'];
   // console.log(sessionObj);
    if (sessionObj) {
        res.render('layout.html');
    } else {
        res.render('login', { title: 'Express' })
    }
});

module.exports = router;

var express = require('express');
var router  = express.Router();
var nano    = require('nano')('http://admin:password@localhost:5984')
var db_name = 'data';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('form');
});

router.post('/', function(req, res) {
  var db = nano.use(db_name);

  function insert_doc(doc, tried) {
    db.insert(doc, function (error,http_body,http_headers) {
      if(error) {
        if(error.message === 'no_db_file' && tried < 1) {
          // create database and retry
          return nano.db.create(db_name, function () {
            insert_doc(doc, tried+1);
          });
        } else {
          return console.log(error);
        }
      }
      console.log(http_body);
    });
  }
  res.redirect('/data');
});

module.exports = router;

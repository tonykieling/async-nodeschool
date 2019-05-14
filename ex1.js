const http = require('http')  
const async = require('async'); 
const fs = require('fs')

async.waterfall([
  cb => {
    cb(null, fs.readFileSync(process.argv[2], 'utf8'))
  },
  (url, cb) => {
    let body = ""
    http.get(url, function(res){  
      res.on('data', function(chunk){  
        body += chunk.toString();  
      });  
      res.on('end', function(){  
        cb(null, body);  
      });  
    }).on('error', function(err) {  
      cb(err);  
    });
  }], (err, result) => {  
    if (err) return console.error(err);
    console.log(result); 
  }
)

/*
## Challenge
  In this problem you will need to write a program that first reads the contents of a file.

  The path will be provided as the first command-line argument to your program (i.e. process.argv[2]).

  The file will contain a single URL. Using http.get, create a GET request to this URL and console.log the response body.



 Here's the official solution in case you want to compare notes:
─────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
      , http = require('http')
      , async = require('async');
    
    async.waterfall([
      function(done){
        fs.readFile(process.argv[2], function(err, data){
          if (err) return done(err);
          done(null, data)
        });
      },
    
      function(data, done){
        var body = '';
        http.get(data.toString().trimRight(), function(res){
          res.on('data', function(chunk){
            body += chunk.toString();
          });
    
          res.on('end', function(chunk){
            done(null, body);
          });
        }).on('error', function(e){
          done(e);
        });
      }
    ], function done(err, result){
      if (err) return console.error(err);
      console.log(result);
    });

  */
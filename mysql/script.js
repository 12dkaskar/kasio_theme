var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  connectionLimit : 50,
  host     : 'localhost',
  user     : 'root',
  password : 'deepti12',
  database : 'userdetails'
});

// connection.connect(function(error){
//     if(!!error){
//         console.log("Error");
//     }else{
//           console.log("connected");
//     }
// });

app.get('/',function(req,resp){
   
    // about mysql
    connection.query("SELECT * FROM userdetails",function(error,rows,fields){
        if(!!error){
              console.log('Error in the Query');
        } else {
            
            //   console.log(rows[0].userName);
              resp.send('hello' + rows[0].userName );
        }

    });
});


app.listen(3000);

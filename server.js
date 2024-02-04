const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');
const { qrCode } = require('ngx-bootstrap-icons');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// database connection...
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nursery',
    port : 3306
});

// check db connection...

db.connect(err=>{
    if(err){
        console.log('err');
    }
    console.log('database connected...');
})

//get all data...

app.get('/admin',(req,res)=>{
        let qr = 'select * from admin';
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            });
        }
    })
      })

app.listen(3000, () =>{
    console.log('server is running...')
});
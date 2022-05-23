const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",

});

app.post('/register', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
    const company = req.body.company;
    const date = req.body.date;

    db.query("INSERT INTO users (username, password, date, company) VALUES (?,?,?,?)", [username, password, date, company], (err, result)=> {
         console.log(err);
         console.log(result)
    })
})


// app.post('/login', (req, res)=> {

//     const username = req.body.username;
//     const password = req.body.password;

//     db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, result)=> {
//         if(err) {
//             console.log(err)
//          res.send({err: err}) 
//         } 
//         if(result.length > 0) {
//                 res.send(result)
//         } else {
//                 res.send({message: "Wrong username/password combination!"}); 
//         }
            
        
//     })

// })





app.post('/login', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT (date, company) FROM users WHERE username = ? AND password = ?", [username, password], (err, result)=> {
        const date = date;
        const company = result.company; 
        console.log(date)
        
    })

})







app.listen(3001, ()=> {
    console.log("running server")
})
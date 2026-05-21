const express = require('express');
const cors = require('cors');
const session = require('express-session');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'studentsecret',
    resave: false,
    saveUninitialized: true
}));

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sql = 'SELECT * FROM users WHERE username=? AND password=?';

    db.query(sql, [username, password], (err, result) => {

        if (err)
            return res.send(err);

        if (result.length > 0) {

            req.session.user = result[0];

            res.json({
                success: true,
                role: result[0].role
            });

        } 
        else {

            res.json({
                success: false,
                message: 'Invalid Username or Password'
            });

        }

    });

});

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});
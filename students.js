const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add-student',(req,res)=>{

    const {name,roll_no,class_name,section_name,email} = req.body;

    const sql='INSERT INTO students(name,roll_no,class_name,section_name,email) VALUES(?,?,?,?,?)';

    db.query(sql,[name,roll_no,class_name,section_name,email],(err,result)=>{

        if(err)
            return res.send(err);

        res.send('Student Added Successfully');
    });
});

module.exports = router;
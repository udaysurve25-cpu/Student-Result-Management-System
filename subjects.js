const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add-subject',(req,res)=>{

    const {subject_name,class_name} = req.body;

    const sql='INSERT INTO subjects(subject_name,class_name) VALUES(?,?)';

    db.query(sql,[subject_name,class_name],(err,result)=>{

        if(err)
            return res.send(err);

        res.send('Subject Added Successfully');
    });
});

module.exports = router;
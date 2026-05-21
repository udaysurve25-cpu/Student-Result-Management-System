const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add-result',(req,res)=>{

    const {student_name,m1,m2,m3,m4,m5} = req.body;

    const total = Number(m1)+Number(m2)+Number(m3)+Number(m4)+Number(m5);

    const percentage = total/5;

    let grade='Fail';

    if(percentage >= 90)
        grade='A+';
    else if(percentage >= 80)
        grade='A';
    else if(percentage >= 70)
        grade='B';
    else if(percentage >= 60)
        grade='C';

    const status = percentage >= 40 ? 'Pass':'Fail';

    const sgpa = (percentage/10).toFixed(2);

    const sql='INSERT INTO results(student_name,total,percentage,grade,status,sgpa) VALUES(?,?,?,?,?,?)';

    db.query(sql,[student_name,total,percentage,grade,status,sgpa],(err,result)=>{

        if(err)
            return res.send(err);

        res.send('Result Generated');
    });
});

module.exports = router;
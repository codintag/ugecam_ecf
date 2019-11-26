const express = require('express');
const router = express.Router();


const Inscription = require('../models/inscription');

router.get('/', (req, res) => {
    Inscription.find((err, datas) => {
        if (err) {
        console.log(err);
        res.end();
    } else {
        // res.send(datas);
        res.render('pageinscrit', { datas });
        res.end();
    }
    });
});

router.post('/register', function (req, res) {
    if ((req.body.userName !== null) && (req.body.email !== null) && (req.body.password !== null)){
        const newInscription = new Inscription({
            "userName": req.body.userName,
            "email": req.body.email,
            "password": req.body.password
        });
        
        newInscription.save().then((datas) => {
            res.status(201).json(datas).end();
        }).catch(error => {
            console.log(error);
            res.status(500).end();
        });
    }
});

module.exports = router;
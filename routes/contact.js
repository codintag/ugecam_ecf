const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');

router.get('/', (req, res, next) => {
    Contact.find({}, function (err, datas) {
        if(err) {
        console.log(err);
        res.end();
    } else {
        // res.send(datas);
        res.render('pagecontact', { datas })
        res.end();
    }
    });
});

router.post('/registerMessage', (req, res) => {
    if ((req.body.nomPrenom !== null) && (req.body.email !== null) && (req.body.subject !== null) && (req.body.messages !== null)) {
        const newContact = new Contact({
            "nomPrenom": req.body.nomPrenom,
            "email": req.body.email,
            "subject": req.body.subject,
            "phone": req.body.phone,
            "messages": req.body.messages
        });
        
        newContact.save().then((datas) => {
            res.status(201).json(datas).end();
        }).catch(error => {
            console.log(error);
            res.status(500).end();
        });
    }
});


module.exports = router;
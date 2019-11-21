const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Vous êtes dans la partie de messages d\'utilisateurs');
});


module.exports = router;
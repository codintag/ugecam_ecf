const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Vous êtes sur la page des inscrits');
});

module.exports = router;
const axios = require('axios');
const router = require('express').Router();

router.get('/', async (req, res) => {
    const {Strain, Type, Rating, Effects, Flavor, Description} = req.body;
    console.log(Strain + '\n');
    console.log(Type + '\n');
    console.log(Rating + '\n');
    console.log(Effects + '\n');
    console.log(Flavor + '\n');
    console.log(Description + '\n');
    res.send('GOT YOUR QUERY!')
});

module.exports = router;
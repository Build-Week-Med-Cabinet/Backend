const axios = require("axios");
const router = require("express").Router();
const authMiddleware = require('../auth/authMiddleware');

router.get("/", async (req, res) => {
  try {
    const { searchQuery } = req.body;
    const { data } = await axios.get(`https://morning-badlands-32563.herokuapp.com/recommend/?search_params=${searchQuery}`);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
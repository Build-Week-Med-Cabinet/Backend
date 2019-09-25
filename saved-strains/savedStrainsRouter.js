const router = require("express").Router();
const authMiddleware = require('../auth/authMiddleware');

// get all saved strains for a user route
router.get("/", authMiddleware, async (req, res) => {
});

// save a strain route
router.post("/save", authMiddleware, async (req, res) => {
});

// unsave a strain route
router.post("/unsave", authMiddleware, async (req, res) => {
});


module.exports = router;
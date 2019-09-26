const router = require("express").Router();
const authMiddleware = require('../auth/authMiddleware');
const Strains = require('./savedStrainsModel');


// add a strain
router.post('/:id/strains', async (req, res) => {
    try {
        const { id } = req.params;
        const { index } = req.body;
        const savedStrainObj = { user_Id: id, strain_Id: index };
        if (Strains.findRow(savedStrainObj)) {
            const response = await Strains.add(savedStrainObj);
            res.send(response);
        }
        else {
            res.status(500).json({ message: 'Strain is already saved' });
        }
    } catch (err) {
        console.log(err);
    }
});

// get all saved strains for a user
router.get('/:id/strains', async (req, res) => {
    try {
        const { id } = req.params;
    } catch {
        
    }
});

// get a particular saved strain by ID
router.get('/:id/strains/:strainId', async (req, res) => {
    try {
        const { id, strainId } = req.params;
    } catch {
        
    }
});

// // get a particular saved strain by Name
router.get('/:id/strains/:strainName', async (req, res) => {
    const { id, strainName } = req.params;
});

// remove a saved strain
router.post("/:id/strains/:strainId", (req, res) => {
    try {
        const { id, strainId } = req.params;
    } catch {

    }
});


module.exports = router;
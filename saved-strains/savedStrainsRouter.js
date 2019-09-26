const router = require("express").Router();
const authMiddleware = require('../auth/authMiddleware');
const Strains = require('./savedStrainsModel');
//add middleware for nonexistent routes ie when id's strains don't exist or are empty etc
//add auth middleware
//mention discrepancy between strains table id and suggestions ID
//add documentation/ReadMe File
//deploy db as postgresql   
//readd protected routes to search and saved
//change db to new updated db

// add a strain
// router.post('/:id/strains', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { index } = req.body;
//         const savedStrainObj = { user_Id: id, strain_Id: index };
//         if (Strains.findRow(id, index)) { //fix this since it allows duplicates
//             const response = await Strains.add(savedStrainObj);
//             res.status(200).json(response);
//         }
//         else {
//             res.status(400).json({ message: 'Strain is already saved' });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

// router.post('/:id/strains', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { index } = req.body;
//         const savedStrainObj = { user_Id: id, strain_Id: index };
//         console.log(Strains.findRow(savedStrainObj));
//         const response = await Strains.add(savedStrainObj);
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(400).json({ message: 'error adding this strain to your favorites'});
//     }
// });
router.post('/:id/strains', async (req, res) => {
    try {
        const { id } = req.params;
        const { index } = req.body;
        const savedStrainObj = { user_Id: id, strain_Id: index };
        console.log(Strains.findRow(id, index));
        const response = await Strains.add(savedStrainObj);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'error adding this strain to your favorites'});
    }
});

// get all saved strains for a user
router.get('/:id/strains', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Strains.find(id);
        res.status(200).json(response)
    } catch {
        res.status(400).json({ message: 'error retrieving saved strains' })
    }
});

// get a particular saved strain by ID
router.get('/:id/strains/:strainId', async (req, res) => {
    try {
        const { id, strainId } = req.params;
        const response = await Strains.findByStrainId(id, strainId);
        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error retrieving saved strain' });
    }
}); //fix 

// // get a particular saved strain by Name
router.get('/:id/strains/:strainName', async (req, res) => {
    try {
        const { id, strainName } = req.params;
        const response = await Strains.findBy(id, strainName);
        res.status(200).json(response)
    } catch {
        res.status(400).json({ message: 'error retrieving saved strain' })
    }
}); //fix 

// remove a saved strain
router.delete("/:id/strains/:strainId", async (req, res) => {
    try {
        const { id, strainId } = req.params;
        const response = await Strains.remove(id, strainId);
        res.status(200).json(response)
    } catch {
        res.status(400).json({ message: 'error retrieving saved strain' })
    }
});


module.exports = router;
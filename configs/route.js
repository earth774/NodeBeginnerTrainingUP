const router = require('express').Router();

let contact = require('../controller/Contactcontroller');

// Contact
router.get('/getAll',contact.getAll )
router.get('/getID/:id',contact.getID)
router.post('/addData',contact.addData)
router.put('/updateData/:id',contact.updateData)
router.delete('/deleteData/:id',contact.deleteData)

module.exports = router;
const express = require('express');
const userController = require('../controllers/userController.js');
const transactionController = require('../controllers/transactionController.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

// user API's
router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);

// Transaction API's
router.post('/addTransaction',auth,transactionController.addTransaction);
router.get('/getAllTransaction',auth,transactionController.getAllTransaction);
router.put('/update/:id',auth,transactionController.deleteTransaction);
router.delete('/delete/:id',auth,transactionController.deleteTransaction);

// Transaction Report API's
router.get('/transactions/report',auth,transactionController.transactionReport);

module.exports = router;
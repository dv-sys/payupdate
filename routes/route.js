const express = require('express');
const router = express.Router();
const editpay = require('../controllers/editpay');
const app = express();

router.get('/',(req,res)=>{
    console.log('Dv');
    res.send('<h2>After Payment of Sales Bill, Update Paid Amt</h2><h4>refer path http://localhost:8000/editpay</h4>');
})

router.post('/editpay',editpay);

module.exports = router;
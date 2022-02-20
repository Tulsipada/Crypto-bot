const express = require('express');
const router = express.Router();
const User= require('../models/user');

router.get("/",(req,res)=>{
    const id = req.query.id;
    User.findById(id).then(user=>{
        res.send(user);
    });
});

module.exports = router;
const User= require('../models/user');
const Money= require('../models/money');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

    router.post('/', async (req, res) => {
    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        res.render('signup', {error:"User already Exisits Please Login"});
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            fname: req.body.fname,
            lname:req.body.lname,
            email: req.body.email,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save(); // seave data
        //crate session
        req.session.user = user.id;
        const money = new Money({
            objid: req.session.user,
            money: 0
        });
        money.save()
        res.redirect('/');
    }
}).get('/', (req,res)=>{
    if(req.session.user){
        res.redirect('/');
        }else{
        res.render('signup');  
        }
    });

module.exports = router;


 

const bcrypt = require('bcrypt');
const User = require('../models/user');
const express = require('express');
const router = express.Router();



router.post('/', async (req, res) => {
    //  Now find the user by their email address
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).render('login', {error:"User not registed"});
    }
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).render('login', {error:"Worng Password"});
    }
    req.session.user = user.id;
    //send Fist name on indexfile
        res.redirect('/');
    
});

router.get('/', (req,res)=>{
    if(req.session.user){
    res.redirect('/');
    }else{
        res.render('login');}
    });

// function validate(req) {
//     const schema = joi.object({
//         email: joi.string().min(5).max(255).required().email(),
//         password: joi.string().min(5).max(255).required()
//     });

//     return schema.validate(req);
// }

module.exports = router; 

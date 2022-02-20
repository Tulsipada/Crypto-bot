const express = require('express');
const router = express.Router();
const User= require('../models/user');



router.get('/', (req,res)=>{ 
    if(req.session.user){
        // axios.get(`http://localhost:4000/api/find/?id=${req.session.user}`).then((response)=>{
        //     res.render('dashboard',{user:response.data.fname});//{user:req.session.user}
        // });
        User.findById(req.session.user).then(user=>{
            res.render('dashboard',{user:user.fname});
        });
    }else{
        res.render('dashboard');
    };
});


module.exports = router; 
const Money= require('../models/money');
const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{ 
    if(req.session.user){
        let user = await Money.findOne({ objid: req.session.user });
        if (!user){
            const money = new Money({
                objid: req.session.user,
                money: 0
            });
            money.save()
        }else{
            Money.findOne({ objid: req.session.user }).then(money=>{
                res.render('addmoney',{money:money.money})
            });
        };
    }else{
        res.render('login');
    };
});

router.post('/',async(req,res)=>{
    Money.findOne({ objid: req.session.user }).then(response=> {
        let rupess = (response.money + Number(req.body.money));
        Money.findOneAndUpdate({objid: req.session.user},{
            $set:{
                money : rupess
            }
        }).then(()=>{
            res.redirect('/addmoney');
        });
      })
    });
    
    

module.exports = router; 
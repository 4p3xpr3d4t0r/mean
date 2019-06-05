var express = require('express');
var router = express.Router();
var Country = require('../models/dataSchema');

router.post('/create',(req,res,next) => {
    var newCountry = new Country({
        
        name:req.body.name,
        location:req.body.location,
        singleRoom:req.body.singleRoom,
        doubleRoom:req.body.doubleRoom,
        trippleRoom:req.body.trippleRoom,
        singleRoomRate:req.body.singleRoomRate,
        doubleRoomRate:req.body.doubleRoomRate,
        trippleRoomrate:req.body.trippleRoomrate,
        totalRooms:req.body.totalRooms
    });
    newCountry.save((err,country) => {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:country});
    });
    
});

router.get('/read',(req,res,next) => {
    Country.find({},(err,countries)=> {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:countries});
    });
});

router.put('/update',(req,res,next) => {
    Country.findById(req.body._id,(err,country) => {
        if(err)
            res.status(500).json({errmsg : err});
        country.name = req.body.name;
        country.capital = req.body.capital;
        country.save((err,country) => {
            if(err)
                res.status(500).json({errmsg : err});
            res.status(200).json({msg:country});

        });
    });
});

router.delete('/delete/:id',(req,res,next) => {
    Country.findOneAndRemove({_id:req.params.id},(err,country) => {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:country});

    });
});


module.exports = router;
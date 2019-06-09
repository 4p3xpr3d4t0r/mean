var express = require('express');
var router = express.Router();
var Country = require('../models/dataSchema');
var Booking = require('../models/bookingSchema');

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

router.post('/booking',(req,res,next) => {
    var newBooking = new Booking({
        
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        date:req.body.date,
        address:req.body.address,
        nic:req.body.nic,
        phoneNo:req.body.phoneNo,
        country_id:req.body.country_id,
    
    });
    newBooking.save((err,booking) => {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:booking});
    });
    
});

router.get('/read',(req,res,next) => {
    Country.find({},(err,countries)=> {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:countries});
    });
});

router.get('/readBooking',(req,res,next) => {
    Booking.find({},(err,countries)=> {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:countries});
    });
});

router.get('/readOne/:id',(req,res,next) => {
    Country.findOne({_id:req.params.id},(err,country) => {
        if(err)
            res.status(500).json({errmsg : err});
        res.status(200).json({msg:country});

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
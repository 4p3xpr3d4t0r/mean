var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    date:{type:Date},
    address:{type:String},
    nic:{type:String},
    phoneNo:{type:Number},
    country_id:{type:String},
    

});

module.exports = mongoose.model('booking',bookingSchema);
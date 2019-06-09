var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    name:{type:String},
    location:{type:String},
    singleRoom:{type:Number},
    doubleRoom:{type:Number},
    trippleRoom:{type:Number},
    singleRoomRate:{type:Number},
    doubleRoomRate:{type:Number},
    trippleRoomRate:{type:Number},
    totalRooms:{type:Number}

});

module.exports = mongoose.model('country',countrySchema);
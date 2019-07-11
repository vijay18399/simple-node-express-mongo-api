// userModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
 name: {
        type: String,
        required: true
    },
     age: {
        type: Number,
        required: true
    },
    contact: {
        mobile: Number,
        email:String
    },
  
  address: {
        street: String,
        city: String,
        state: String,
        pincode: Number
    }
});
// Export Contact model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
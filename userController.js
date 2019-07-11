// userController.js
// Import user model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = function (req, res) {
    var user = new User();
       user.name = req.body.name ? req.body.name : user.name;
        user.age = req.body.age;
    user.contact.mobile = req.body.mobile;
    user.contact.email = req.body.email;
    user.address.street = req.body.street;
    user.address.city = req.body.city;
    user.address.state = req.body.state;
    user.address.pincode = req.body.pincode;
// save the user and check for errors
    user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New user created!',
                data: user
            });
    });
};
// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
         user.name = req.body.name ? req.body.name : user.name;
        user.age = req.body.age;
    user.contact.mobile = req.body.mobile;
    user.contact.email = req.body.email;
    user.address.street = req.body.street;
    user.address.city = req.body.city;
    user.address.state = req.body.state;
    user.address.pincode = req.body.pincode;
// save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};
const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUser = async (req,res) => {
    const { username }= req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({message: 'User saved'});
};

usersCtrl.getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

usersCtrl.updatedUser = async (req,res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json('User updated');
};

usersCtrl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted');
};

module.exports = usersCtrl;
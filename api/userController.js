
let User = require('../model/userModel');

let users = [];

exports.initUsers = function() {
    users.push(new User("Thomas", "Dupont", 26, "Administrateur"));
    users.push(new User("Thierry", "Delamar", 51, "Superviseur"));
    users.push(new User("Thibault", "Durand", 34, "Diffuseur"));
    users.push(new User("Jean-Paul", "Durand", 30, "Diffuseur"));
    users.push(new User("Marie", "Labris", 26, "Superviseur"));
}

exports.findAll = function(req, res) {
    res.send(users);
}

exports.find = function(req, res) {
    const firstName = req.params["userFirstName"];
    res.send(users.find(user => user.firstName == firstName));
}

exports.save = function(req, res) {
    users.push(new User(req.body.firstName, req.body.lastName, req.body.age, req.body.permission));
    res.sendStatus(201);
}

exports.delete = function(req, res) {
    const firstName = req.params["userFirstName"];
    users = users.filter(user => user.firstName != firstName);
    res.sendStatus(200);
}

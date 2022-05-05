'use strict';

module.exports = class User {

    constructor(firstName, lastName, age, permission) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age= age;
        this.permission = permission;
    }
}

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNumber = officeNum;
    }

    getOfficeNumber() {
        return this.officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
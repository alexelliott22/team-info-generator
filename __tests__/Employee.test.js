const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('john', '652', 'joedoe@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('test the getName function', () => {
    const employee = new Employee('john doe', '652', 'johndoe@hotmail.com');

    expect(employee.getName()).toEqual(employee.name);
});

test('test the getID function', () => {
    const employee = new Employee('john doe', '652', 'johndoe@hotmail.com');

    expect(employee.getId()).toEqual(employee.id);
});

test('test the getEmail function', () => {
    const employee = new Employee('john doe', '652', 'johndoe@hotmail.com');

    expect(employee.getEmail()).toEqual(employee.email);
});

test('test the getRole function', () => {
    const employee = new Employee('john doe', '652', 'johndoe@hotmail.com');

    expect(employee.getRole()).toBe('Employee');
});
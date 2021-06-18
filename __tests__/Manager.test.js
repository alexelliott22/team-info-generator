const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('john', '652855', 'joedoe@hotmail.com', '582');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('check that the correct role is returned', () => {
    const manager = new Manager('john', '652855', 'joedoe@hotmail.com', '582');

    expect(manager.getRole()).toBe('Manager');
});

test('check that get office number function returns a number', () => {
    const manager = new Manager('john', '652855', 'joedoe@hotmail.com', '582');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})
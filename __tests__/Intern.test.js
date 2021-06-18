const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('john', '652', 'joedoe@hotmail.com', 'Harding');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('test the getSchool method', () => {
    const intern = new Intern('john', '652', 'joedoe@hotmail.com', 'Harding');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('check that the correct role is returned', () => {
    const intern = new Intern('john', '652', 'joedoe@hotmail.com', 'Harding');

    expect(intern.getRole()).toBe('Intern');
})
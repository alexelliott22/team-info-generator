const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('john', '652', 'joedoe@hotmail.com', 'joedoe54');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('test the getGithub method', () => {
    const engineer = new Engineer('john', '652', 'joedoe@hotmail.com', 'joedoe54');
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('check that the correct role is returned', () => {
    const engineer = new Engineer('john', '652', 'joedoe@hotmail.com', 'joedoe54');

    expect(engineer.getRole()).toBe('Engineer');
})
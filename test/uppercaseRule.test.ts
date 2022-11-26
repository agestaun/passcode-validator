import Validator from '../src/Validator';

describe('Uppercase Rule', () => {

    const validator = new Validator().upperCase().build();

    test('should not be valid with no uppercase characters', () => {

        const valid = validator.isValid('mypassword');
        expect(valid).toBe(false);
    });

    test('should be valid with uppercase characters', () => {
        const valid = validator.isValid('myPassword');
        expect(valid).toBe(true);
    });
});
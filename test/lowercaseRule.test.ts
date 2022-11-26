import Validator from '../src/Validator';

describe('Lowercase Rule', () => {

    const validator = new Validator().lowerCase().build();

    test('should not be valid with no lowercase characters', () => {
        const valid = validator.isValid('MYPASSWORD');
        expect(valid).toBe(false);
    });

    test('should be valid with lowercase characters', () => {
        const valid = validator.isValid('myPASSWORD');
        expect(valid).toBe(true);
    });
});
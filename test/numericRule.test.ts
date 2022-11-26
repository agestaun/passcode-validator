import Validator from '../src/Validator';

describe('Numeric Rule', () => {

    const validator = new Validator().numeric().build();

    test('should not be valid if it contains non-numeric characters', () => {
        const valid = validator.isValid('Pass4537');
        expect(valid).toBe(false);
    });

    test('should be valid if it only contains numeric characters', () => {
        const valid = validator.isValid('4537');
        expect(valid).toBe(true);
    });
});
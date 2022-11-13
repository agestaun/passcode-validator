import {UppercaseRule, Validator} from '../src';

describe('Uppercase Rule', () => {
    
    test('should not be valid with no uppercase characters', () => {
        const validator = new Validator([new UppercaseRule()]);
        const valid = validator.isValid('mypassword');
        expect(valid).toBe(false);
    });

    test('should be valid with uppercase characters', () => {
        const validator = new Validator([new UppercaseRule()]);
        const valid = validator.isValid('myPassword');
        expect(valid).toBe(true);
    });
});
import {LengthRule, Validator} from '../src';

describe('Length Rule', () => {

    test('should not be valid if it does not meet the required length', () => {
        const validator = new Validator([new LengthRule(6)]);
        const valid = validator.isValid('mypassword');
        expect(valid).toBe(false);
    });

    test('should be valid if it meets the required length', () => {
        const validator = new Validator([new LengthRule(6)]);
        const valid = validator.isValid('mypass');
        expect(valid).toBe(true);
    });
});
import {LowercaseRule, Validator} from '../src';

describe('Lowercase Rule', () => {
    
    test('should not be valid with no lowercase characters', () => {
        const validator = new Validator([new LowercaseRule()]);
        const valid = validator.isValid('MYPASSWORD');
        expect(valid).toBe(false);
    });

    test('should be valid with lowercase characters', () => {
        const validator = new Validator([new LowercaseRule()]);
        const valid = validator.isValid('myPASSWORD');
        expect(valid).toBe(true);
    });
});
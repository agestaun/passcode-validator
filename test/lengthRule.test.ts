import {LengthRule, Validator} from '../src';
import {LengthRuleError} from '../src/rules/LengthRule';

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

    test('should not be valid if it does not meet the range length', () => {
        const validator = new Validator([new LengthRule(6, 8)]);
        const firstValidation = validator.isValid('mypwd');
        const secondValidation = validator.isValid('mypassword');
        expect(firstValidation || secondValidation).toBe(false);
    });

    test('should be valid if it meets the range length', () => {
        const validator = new Validator([new LengthRule(6, 8)]);
        const valid = validator.isValid('mypass');
        expect(valid).toBe(true);
    });

    test('should create the instance if minLength and maxLength have the same value', () => {
        expect(new LengthRule(6, 6)).toBeTruthy();
    });

    test('should throw an error if minLength is negative', () => {
        expect(() => new LengthRule(-6))
            .toThrow(LengthRuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if minLength is 0', () => {
        expect(() => new LengthRule(0))
            .toThrow(LengthRuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if maxLength is 0', () => {
        expect(() => new LengthRule(6, 0))
            .toThrow(LengthRuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if maxLength is smaller than minLength', () => {
        expect(() => new LengthRule(6, 5))
            .toThrow(LengthRuleError.MAX_LENGTH_GREATER);
    });
});
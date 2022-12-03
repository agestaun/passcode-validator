import LengthRule from './rules/LengthRule';
import LowercaseRule from './rules/LowercaseRule';
import PINRule from './rules/PINRule';
import PasswordValidator from './PasswordValidator';
import SpecialCharRule from './rules/SpecialCharRule';
import UppercaseRule from './rules/UppercaseRule';

// Class that implements the builder pattern. I avoid to name it ValidatorBuilder to
// make it cleaner for consume.
export default class Validator {
    private readonly validator: PasswordValidator;

    constructor() {
        this.validator = new PasswordValidator();
    }

    upperCase = (message?: string): Validator => {
        this.validator.addRule(new UppercaseRule(message));
        return this;
    };

    lowerCase = (message?: string): Validator => {
        this.validator.addRule(new LowercaseRule(message));
        return this;
    };

    length = (min: number, max?: number, message?: string): Validator => {
        this.validator.addRule(new LengthRule(min, max, message));
        return this;
    };

    numeric = (message?: string): Validator => {
        this.validator.addRule(new PINRule(message));
        return this;
    };

    specialChar = (message?: string): Validator => {
        this.validator.addRule(new SpecialCharRule(message));
        return this;
    };

    build = (): PasswordValidator => this.validator;
}
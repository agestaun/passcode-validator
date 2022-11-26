import PasswordValidator from './PasswordValidator';
import LengthRule from './rules/LengthRule';
import LowercaseRule from './rules/LowercaseRule';
import NumericRule from './rules/NumericRule';
import UppercaseRule from './rules/UppercaseRule';

// Class that implements the builder pattern. I avoid to name it ValidatorBuilder to
// make it cleaner for consume.
export default class Validator {
    private readonly validator: PasswordValidator;

    constructor() {
        this.validator = new PasswordValidator();
    }

    upperCase = (): Validator => {
        this.validator.addRule(new UppercaseRule());
        return this;
    };

    lowerCase = (): Validator => {
        this.validator.addRule(new LowercaseRule());
        return this;
    };

    length = (min: number, max?: number): Validator => {
        this.validator.addRule(new LengthRule(min, max));
        return this;
    };

    numeric = (): Validator => {
        this.validator.addRule(new NumericRule());
        return this;
    };

    build = (): PasswordValidator => this.validator;
}
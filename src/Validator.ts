import ForbiddenText from './rules/ForbiddenText';
import LengthRule from './rules/LengthRule';
import LowerCaseRule from './rules/LowerCaseRule';
import PINRule from './rules/PINRule';
import PasswordValidator from './PasswordValidator';
import SpecialCharRule from './rules/SpecialCharRule';
import UpperCaseRule from './rules/UpperCaseRule';

// Class that implements the builder pattern. I avoid to name it ValidatorBuilder to
// make it cleaner for consume.
export default class Validator {
    private readonly validator: PasswordValidator;

    constructor() {
        this.validator = new PasswordValidator();
    }

    upperCase = (message?: string): Validator => {
        this.validator.addRule(new UpperCaseRule(message));
        return this;
    };

    lowerCase = (message?: string): Validator => {
        this.validator.addRule(new LowerCaseRule(message));
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

    forbidden = (texts: string[], message?: string): Validator => {
        this.validator.addRule(new ForbiddenText(texts, message));
        return this;
    };

    build = (): PasswordValidator => this.validator;
}
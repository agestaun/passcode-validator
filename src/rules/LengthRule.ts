import Rule from './Rule';

export enum LengthRuleError {
    POSITIVE_VALUE_REQUIRED = 'The values cannot be smaller or equal to zero.',
    MAX_LENGTH_GREATER = 'If maxLength is received, it must be greater or equal to minLength.'
}

class LengthRule extends Rule {
    readonly minLength: number;
    readonly maxLength: number;

    /**
     *
     * @param minLength The minimum required length.
     * @param maxLength The maximum required length. If it's undefined, max will get the value of minLength, so the password/PIN will have a required length instead of a range.
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(minLength: number, maxLength?: number, message?: string) {
        super(message);
        if (minLength <= 0 || maxLength === 0) {
            throw LengthRuleError.POSITIVE_VALUE_REQUIRED;
        } else if (maxLength && (maxLength < minLength)) {
            throw LengthRuleError.MAX_LENGTH_GREATER;
        } else {
            this.minLength = minLength;
            this.maxLength = maxLength ?? minLength;
        }
    }

    validate(subject: string) {
        super.completed = subject.length >= this.minLength && subject.length <= this.maxLength;
    }
}

export default LengthRule;
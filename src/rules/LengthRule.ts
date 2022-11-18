import Rule from './Rule';

export enum LengthRuleError {
    ZERO_VALUE = 'The values cannot be zero.',
    MAX_LENGTH_GREATER = 'If maxLength is received, it must be greater than minLength.'
}

class LengthRule extends Rule {
    readonly minLength: number;
    readonly maxLength: number;

    /**
     *
     * @param minLength The minimum required length.
     * @param maxLength The maximum required length. If it's undefined, max will get the value of minLength, so the password/PIN will have a required length instead of a range.
     * @param errorMessage The error message to display if the password/PIN does not meet the rule.
     */
    constructor(minLength: number, maxLength?: number, errorMessage?: string) {
        super(errorMessage);
        if (minLength === 0 || maxLength === 0) {
            throw LengthRuleError.ZERO_VALUE;
        } else if (maxLength && (maxLength < minLength)) {
            throw LengthRuleError.MAX_LENGTH_GREATER;
        } else {
            this.minLength = minLength;
            this.maxLength = maxLength ?? minLength;
        }
    }

    isValid(subject: string): boolean {
        return subject.length >= this.minLength && subject.length <= this.maxLength;
    }
}

export default LengthRule;
import Rule from "./Rule";


class LengthRule extends Rule {
    readonly minLength: number;
    readonly maxLength?: number;

    /**
     *
     * @param minLength The minimum required length.
     * @param maxLength The maximum required length. If it's undefined, max will get the value of minLength, so the password/PIN will have a required length instead of a range.
     * @param errorMessage The error message to display if the password/PIN does not meet the rule.
     */
    constructor(minLength: number, maxLength?: number, errorMessage?: string) {
        super(errorMessage);
        this.minLength = minLength;
        this.maxLength = maxLength ?? minLength;
    }

    isValid(subject: string): boolean {
        return subject.length >= this.minLength && this.maxLength <= this.maxLength;
    }
}

export default LengthRule;
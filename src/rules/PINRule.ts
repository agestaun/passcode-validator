import Rule from './Rule';

/**
 * Rule to allow only digits.
 */
class PINRule extends Rule {
    readonly onlyDigitsPattern = /^\d+$/;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.completed = this.onlyDigitsPattern.test(subject);
    }
}

export default PINRule;
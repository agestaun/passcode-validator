import Rule from './Rule';

/**
 * Rule to require uppercase characters.
 */
class UppercaseRule extends Rule {

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.completed = subject.toLowerCase() !== subject;
    }
}

export default UppercaseRule;
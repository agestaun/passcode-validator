import Rule from './Rule';

class SpecialCharRule extends Rule {
    private readonly specialCharPattern = new RegExp(/[^A-Za-z0-9]/g);

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.completed = this.specialCharPattern.test(subject);
    }
}

export default SpecialCharRule;
import Rule from './rules/Rule';
import ValidationResponse from './ValidationResponse';

export default class PasswordValidator {
    private rules: Set<Rule>;

    constructor() {
        this.rules = new Set<Rule>();
    }

    /**
     * Validates the subject against the rules. To check only if it's valid call {@link isValid}.
     * @param subject The password/PIN to validate.
     * @return An array of {@link ValidationResponse}.
     */
    validate = (subject: string): ValidationResponse[] => {
        return Array.from(this.rules).map((rule) => {
            const valid = rule.isValid(subject);
            return { rule, valid, error: valid ? null : rule.getError() };
        });
    };

    /**
     * Checks if the password meets all the rules.
     * @param subject The password/PIN to check. To see what rules the subject meets call {@link validate}.
     * @return True if it meets all the rules. Otherwise, false.
     */
    isValid = (subject: string): boolean => {
        return Array.from(this.rules).every((r) => r.isValid(subject));
    };

    /**
     * Replaces the current rules.
     * @param rules The new rules to set.
     */
    updateRules = (rules: Set<Rule>) => this.rules = rules;

    /**
     * Get the current rules.
     * @return The rules to validate the password/PIN.
     */
    getRules = (): Rule[] => this.getRules();

    /**
     * Adds a new rule if it does not exist. Throws an error if the instance was already added.
     * @param rule
     */
    addRule = (rule: Rule) => {
        Array.from(this.rules).forEach((r) => {
            const className = r.constructor.name;
            if (className === rule.constructor.name) {
                throw `You cannot set the same rule more than once '${className}'. Use updateRules to update all the rules.`;
            }
        });
        this.rules.add(rule);
    };

    /**
     * Deletes an existing rule.
     * @param rule
     */
    removeRule = (rule: Rule) => this.rules.delete(rule);
}
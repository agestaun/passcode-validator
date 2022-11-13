import Rule from './rules/Rule';
import ValidationResponse from './ValidationResponse';

class Validator {
    private rules: Rule[];

    constructor(rules: Rule[]) {
        this.rules = rules;
    }

    /**
     * Validates the subject against the rules. To check only if it's valid call {@link isValid}.
     * @param subject The password/PIN to validate.
     * @return An array of {@link ValidationResponse}.
     */
    validate = (subject: string): ValidationResponse[] => {
        return this.rules.map((rule) =>  {
            const valid = rule.isValid(subject);
            return {rule, valid, error: valid ? null : rule.getError()};
        });
    };

    /**
     * Checks if the password meets all the rules.
     * @param subject The password/PIN to check. To see what rules the subject meets call {@link validate}.
     * @return True if it meets all the rules. Otherwise, false.
     */
    isValid = (subject: string): boolean => this.rules.every((r) => r.isValid(subject));

    /**
     * Replaces the current rules.
     * @param rules The new rules to set.
     */
    update = (rules: Rule[]) => this.rules = rules;

    /**
     * Get the current rules.
     * @return The rules to validate the password/PIN.
     */
    getRules = (): Rule[] => this.getRules();
}

export default Validator;
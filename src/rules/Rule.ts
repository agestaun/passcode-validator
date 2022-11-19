abstract class Rule {
    private readonly errorMessage?: string;

    /**
     * @param errorMessage The error message to display if the password/PIN does not meet the rule.
     */
    protected constructor(errorMessage?: string) {
        this.errorMessage = errorMessage;
    }

    getError(): string | undefined | null {
        return this.errorMessage;
    }

    abstract isValid(subject: string): boolean;
}

export default Rule;
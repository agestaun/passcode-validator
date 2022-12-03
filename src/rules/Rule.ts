abstract class Rule {
    private readonly message?: string;
    protected completed?: boolean;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    protected constructor(message?: string) {
        this.message = message;
    }

    abstract validate(subject: string): void;

    isCompleted = (): boolean | undefined => this.completed;
    reset = () => this.completed = undefined;

    getMessage(): string | undefined | null {
        return this.message;
    }
}

export default Rule;
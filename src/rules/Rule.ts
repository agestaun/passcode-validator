abstract class Rule {
    private readonly errorMessage?: string;

    protected constructor(errorMessage?: string) {
        this.errorMessage = errorMessage;
    }

    getError(): string | undefined | null {
        return this.errorMessage;
    }

    abstract isValid(subject: string): boolean;
}

export default Rule;
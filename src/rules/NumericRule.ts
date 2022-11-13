import Rule from "./Rule";

class NumericRule extends Rule {
    readonly onlyDigitsPattern = /^\d+$/;

    constructor(errorMessage?: string) {
        super(errorMessage);
    }

    isValid(subject: string): boolean {
        return this.onlyDigitsPattern.test(subject);
    }
}

export default NumericRule;
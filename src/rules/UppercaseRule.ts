import Rule from "./Rule";

class UppercaseRule extends Rule {

    constructor(errorMessage?: string) {
        super(errorMessage);
    }

    isValid(subject: string): boolean {
        return subject.toLowerCase() !== subject
    }
}

export default UppercaseRule;
import Rule from './Rule';

class LowercaseRule extends Rule {

    constructor(errorMessage?: string) {
        super(errorMessage);
    }

    isValid(subject: string): boolean {
        return subject.toUpperCase() !== subject;
    }
}

export default LowercaseRule;
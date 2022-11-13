import Rule from './rules/Rule';

/**
 * Type which contains the rule, a value indicating if it's valid and the error if it's not.
 */
type ValidationResponse = {
    rule: Rule;
    valid: boolean;
    error: string;
}

export default ValidationResponse;
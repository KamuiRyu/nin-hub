export class ValidationError extends Error {
    public validationErrors: Record<string, string[]>;
    constructor(message: string, validationErrors: Record<string, string[]>) {
        super(message);
        this.name = 'ValidationError';
        this.validationErrors = JSON.parse(JSON.stringify(validationErrors));
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

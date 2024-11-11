import { plainToClass } from 'class-transformer';
import { validate, ValidationError as ClassValidatorError } from 'class-validator';
import { ValidationError } from '@/utils/validation/validation.error';

export async function validateDto<T extends object>(dtoClass: new () => T, body: any = {}) {
    const dtoInstance = plainToClass(dtoClass, body || {});

    const errors = await validate(dtoInstance, { skipMissingProperties: false });

    if (errors.length > 0) {
        const formattedErrors: Record<string, string[]> = {};

        errors.forEach((error: ClassValidatorError) => {
            const field = error.property;
            const messages = Object.values(error.constraints || {});
            formattedErrors[field] = messages.map(String);
        });

        throw new ValidationError('Validation failed', formattedErrors);
    }

    return dtoInstance;
}

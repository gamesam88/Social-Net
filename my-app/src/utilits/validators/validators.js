import { Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';

const validationSchema = {
    field: {
        password: [
            {
                validator: Validators.maxLength,
                customArgs: { length: 15 },
            },
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'The min length is {{length}}',
            }, Validators.required.validator
        ],
        email: [Validators.required.validator,
        Validators.email.validator],
    },
};

export const formValidation = createFinalFormValidation(validationSchema);

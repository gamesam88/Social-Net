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


const profileDataValidationSchema = {
    field: {
        fullName: [
            {
                validator: Validators.maxLength,
                customArgs: { length: 15 },
                message: 'The max length is {{length}}',
            },
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'The min length is {{length}}',
            }, Validators.required.validator
        ],
        aboutMe: [
            {
                validator: Validators.maxLength,
                customArgs: { length: 50 },
                message: 'The max length is {{length}}',
            },
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'The min length is {{length}}',
            }, Validators.required.validator
        ],
        lookingForAJobDescription: [
            {
                validator: Validators.maxLength,
                customArgs: { length: 50 },
                message: 'The max length is {{length}}',
            },
            {
                validator: Validators.minLength,
                customArgs: { length: 3 },
                message: 'The min length is {{length}}',
            }, Validators.required.validator
        ],
    },
};

export const profileDataValidation = createFinalFormValidation(profileDataValidationSchema);

export const formValidation = createFinalFormValidation(validationSchema);

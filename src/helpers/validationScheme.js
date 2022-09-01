import { string } from 'yup';

const validationMessage = {
    required: 'field is required',
    common: 'incorrect value',
    email: 'incorrect email',
    maxCharLength: ({ max }) => `enter up to ${max} characters`,
};

const { required, common, email, maxCharLength } = validationMessage;

export const VALIDATION_SCHEME = {
    name: string().trim().required(required).min(2, common).max(255, validationMessage.maxCharLength),
    email: string().trim().required(required).email(email),
    password: string().trim().required(required).min(8, common).max(20, maxCharLength),
};

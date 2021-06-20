import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-ZА-ЯЁ][a-zа-яё]{0,1477}$/, 'First letter - upper')
  .required('Field cannot be empty');
export const LOGIN_SCHEMA = yup
  .string()
  .matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-]).{4,}$/,
    'Display name should be more than 4 characters'
  )
  .required('Field cannot be empty');
export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required('Field cannot be empty');
export const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-]).{8,}$/,
    'Password confirmation needs to match original password'
  )
  .required('Field cannot be empty');
export const SIGN_IN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  login: LOGIN_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirmPassword: PASSWORD_SCHEMA
});

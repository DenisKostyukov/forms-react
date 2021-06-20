import React from 'react';
import cx from 'classnames';
import style from './InputForm.module.sass';
function InputForm ({ field, form: { touched, errors }, ...props }) {
  return (
    <input
      {...field}
      {...props}
      className={cx(style.input, {
        [style.invalidInput]: touched[field.name] && errors[field.name],
        [style.validInput]: touched[field.name] && !errors[field.name],
      })}
    />
  );
}
export default InputForm;

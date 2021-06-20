import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from '../../utils/validationSchemas';
import InputForm from './InputForm';
import style from './SignInForm.module.sass'
import '../../common/styles/forms.sass';
const initialValues = {
  email: '',
  password: '',
};
function SignInForm () {
  return (
    <>
      <div className='container'>
        <div className='formHeader'>
          <h1 className='formTitle'>LOGIN TO YOUR ACCOUNT</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SIGN_IN_SCHEMA}
          onSubmit={actions => {
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formikProps => {
            return (
              <div className='formWrapper'>
                <Form className='form'>
                  <div className='row'>
                    <Field
                      type='text'
                      component={InputForm}
                      name='email'
                      placeholder='email'
                    />
                    <ErrorMessage
                      className='error'
                      name='email'
                      component='div'
                    />
                  </div>
                  <div className='row'>
                    <Field
                      component={InputForm}
                      name='password'
                      placeholder='Password'
                    />
                    <ErrorMessage
                      className='error'
                      name='password'
                      component='span'
                    />
                  </div>
                  <div className='row'>
                    <label className={style.labelCheckbox}>
                      <Field type='checkbox' name='checked' />
                      <span className="labelText">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className='row'>
                    <Field
                      className={style.submitBtn}
                      type='submit'
                      value='LOGIN'
                    />
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default SignInForm;

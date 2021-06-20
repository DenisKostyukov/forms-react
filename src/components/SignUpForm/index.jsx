import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas';
import InputForm from './InputForm';
import style from './SignUpForm.module.sass';
import '../../common/styles/forms.sass';
const initialValues = {
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUPForm () {
  return (
    <>
      <div className="container">
        <div className="formHeader">
          <h1 className="formTitle">CREATE AN ACCOUNT</h1>
          <p className="formDescription">
            We always keep your name and email address private.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SIGN_UP_SCHEMA}
          onSubmit={actions => {
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {formikProps => {
            return (
              <div className="formWrapper">
                <Form className="form">
                  <div className="row">
                    <Field
                      type='text'
                      component={InputForm}
                      name='firstName'
                      placeholder='first name'
                    />

                    <Field
                      component={InputForm}
                      name='lastName'
                      placeholder='last name'
                    />
                    <ErrorMessage
                      className="error"
                      name='firstName'
                      component='div'
                    />
                    <ErrorMessage
                      className="error"
                      name='lastName'
                      component='div'
                    />
                  </div>
                  <div className="row">
                    <Field
                      component={InputForm}
                      name='login'
                      placeholder='Display name'
                    />

                    <Field
                      component={InputForm}
                      name='email'
                      placeholder='email'
                    />
                    <ErrorMessage
                      className="error"
                      name='login'
                      component='span'
                    />
                    <ErrorMessage
                      className="error"
                      name='email'
                      component='span'
                    />
                  </div>
                  <div className="row">
                    <Field
                      type='password'
                      component={InputForm}
                      name='password'
                      placeholder='password'
                    />

                    <Field
                      type='password'
                      component={InputForm}
                      name='confirmPassword'
                      placeholder='confirm password'
                    />
                    <ErrorMessage
                      className="error"
                      name='password'
                      component='span'
                    />
                    <ErrorMessage
                      className="error"
                      name='confirmPassword'
                      component='span'
                    />
                  </div>
                  <div className="row">
                    <label className={style.label}>
                      <Field type='radio' name='picked' />
                      <div className={style.labelDescription}>
                        <h3 className={style.labelTitle}>Join As a Buyer</h3>
                        <span className={style.labelText}>
                          I am looking for a Name, Logo or Tagline for my
                          business, brand or product.
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="row">
                    <label className={style.label}>
                      <Field type='radio' name='picked' />
                      <div className={style.labelDescription}>
                        <h3 className={style.labelTitle}>
                          Join As a Creative or Marketplace Seller
                        </h3>
                        <span className={style.labelText}>
                          I plan to submit name ideas, Logo designs or sell
                          names in Domain Marketplace.
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="row">
                    <label className={style.labelCheckbox}>
                      <Field type='checkbox' name='checked' />
                      <span className="labelText">
                        Allow Squadhelp to send marketing/promotional offers
                        from time to time
                      </span>
                    </label>
                  </div>
                  <div className="row">
                    <Field
                      className={style.submitBtn}
                      type='submit'
                      value='Create account'
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

export default SignUPForm;

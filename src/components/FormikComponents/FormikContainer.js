import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
function FormikContainer() {
    const initialValues = {
        email: '',
    };
    const onSubmit = (values) => console.log('Form data', values);
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => (
                <Form>
                    <FormikControl
                        control="input"
                        type="text"
                        label="Email"
                        name="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}
export default FormikContainer;

import React from 'react';
import { Field } from 'formik';

function Select() {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-select">
            <label htmlForm={name}> {name} </label>
            <Field as="select" id={name} name={name} {...rest}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    );
                })}
            </Field>
        </div>
    );
}

export default Select;

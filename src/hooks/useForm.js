import { useState } from 'react';
import { validateForm } from '../utils/validation';

/**
 * Small form helper shared by the sign in and sign up pages.
 *
 * - Errors appear after a field loses focus, or after the first submit.
 * - `handleSubmit(onValid)` only calls `onValid(values)` when every field is valid,
 *   otherwise it moves focus to the first invalid field.
 */
export function useForm(initialValues, validators) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => validators[name]?.(value) ?? '';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (touched[name] || submitted) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const handleSubmit = (onValid) => (event) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validateForm(values, validators);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(validators).find((name) => nextErrors[name]);
    if (firstInvalid) {
      event.currentTarget.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    onValid(values);
  };

  /** Props to spread onto a <TextField />. */
  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return { values, errors, handleSubmit, fieldProps };
}

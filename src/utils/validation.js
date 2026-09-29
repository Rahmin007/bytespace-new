/**
 * Form validation rules shared by the sign in, sign up and newsletter forms.
 * Each validator returns an error message string, or '' when the value is valid.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return 'Enter your email address.';
  if (!EMAIL_PATTERN.test(email)) return 'Enter a valid email address, like name@example.com.';
  return '';
}

export function validateFullName(value) {
  const name = value.trim();
  if (!name) return 'Enter your full name.';
  if (name.length < 2) return 'Your name must be at least 2 characters.';
  if (!/^[\p{L}\s'.-]+$/u.test(name)) return 'Use letters, spaces, hyphens or apostrophes only.';
  return '';
}

/** Used on sign up, where we set the password rules. */
export function validateNewPassword(value) {
  if (!value) return 'Create a password.';
  if (value.length < 8) return 'Use at least 8 characters.';
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value))
    return 'Include at least one letter and one number.';
  return '';
}

/** Used on sign in, where we only check that something was typed. */
export function validateExistingPassword(value) {
  return value ? '' : 'Enter your password.';
}

/**
 * Runs a map of validators against a values object.
 * Returns { fieldName: message } containing only the fields with errors.
 */
export function validateForm(values, validators) {
  return Object.entries(validators).reduce((errors, [field, validate]) => {
    const message = validate(values[field] ?? '');
    return message ? { ...errors, [field]: message } : errors;
  }, {});
}

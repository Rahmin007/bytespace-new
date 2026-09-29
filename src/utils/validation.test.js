import {
  validateEmail,
  validateExistingPassword,
  validateForm,
  validateFullName,
  validateNewPassword,
} from './validation';

describe('validateEmail', () => {
  it.each(['', '   '])('asks for an email when empty (%j)', (value) => {
    expect(validateEmail(value)).toBe('Enter your email address.');
  });

  it.each(['jamie', 'jamie@', 'jamie@example', '@example.com', 'jamie @example.com'])(
    'rejects %s',
    (value) => {
      expect(validateEmail(value)).toMatch(/valid email/);
    },
  );

  it.each(['designer@example.com', 'first.last+tag@mail.co.uk', '  padded@example.com  '])(
    'accepts %s',
    (value) => {
      expect(validateEmail(value)).toBe('');
    },
  );
});

describe('validateFullName', () => {
  it('requires a name', () => expect(validateFullName(' ')).toBe('Enter your full name.'));
  it('requires two characters', () => expect(validateFullName('J')).toMatch(/at least 2/));
  it('rejects digits and symbols', () => expect(validateFullName('Jamie 99')).toMatch(/letters/));
  it.each(['Jamie Davis', "Sinéad O'Brien", 'Rahmin Amer Zaman', 'Anne-Marie'])(
    'accepts %s',
    (value) => expect(validateFullName(value)).toBe(''),
  );
});

describe('validateNewPassword', () => {
  it('requires a password', () => expect(validateNewPassword('')).toBe('Create a password.'));
  it('requires 8 characters', () => expect(validateNewPassword('abc12')).toMatch(/8 characters/));
  it('requires a letter and a number', () => {
    expect(validateNewPassword('abcdefgh')).toMatch(/letter and one number/);
    expect(validateNewPassword('12345678')).toMatch(/letter and one number/);
  });
  it('accepts a strong password', () => expect(validateNewPassword('bytespace1')).toBe(''));
});

describe('validateExistingPassword', () => {
  it('only checks that something was typed', () => {
    expect(validateExistingPassword('')).toBe('Enter your password.');
    expect(validateExistingPassword('x')).toBe('');
  });
});

describe('validateForm', () => {
  it('returns only the fields that have errors', () => {
    const errors = validateForm(
      { email: 'bad', password: 'ok' },
      { email: validateEmail, password: validateExistingPassword },
    );
    expect(errors).toEqual({ email: expect.stringMatching(/valid email/) });
  });

  it('treats missing values as empty strings', () => {
    expect(validateForm({}, { email: validateEmail })).toEqual({
      email: 'Enter your email address.',
    });
  });
});

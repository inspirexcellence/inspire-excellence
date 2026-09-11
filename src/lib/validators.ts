export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function validateContactForm(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  if (data.consent !== true) {
    errors.consent = 'You must agree to the terms.';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}

export function validateBookingForm(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.consultationType) {
    errors.consultationType = 'Please select a consultation type.';
  }

  if (data.consent !== true) {
    errors.consent = 'You must agree to the terms.';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}

export function validateNewsletterForm(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors
  };
}

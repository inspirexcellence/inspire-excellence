/* ============================================
   Form Types — Inspire Excellence
   ============================================ */

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  consultationType: ConsultationType;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
};

export type ConsultationType =
  | 'discovery'
  | 'executive-coaching'
  | 'leadership-development'
  | 'corporate-workshop'
  | 'group-empowerment'
  | 'other';

export type NewsletterFormData = {
  email: string;
  firstName?: string;
};

export type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  errors: Record<string, string>;
};

export type FormResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

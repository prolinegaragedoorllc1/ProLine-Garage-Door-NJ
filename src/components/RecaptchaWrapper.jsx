import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RecaptchaWrapper({ onChange }) {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn('reCAPTCHA site key not found. Please set VITE_RECAPTCHA_SITE_KEY in your environment.');
    return null;
  }

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        theme="light"
      />
    </div>
  );
}
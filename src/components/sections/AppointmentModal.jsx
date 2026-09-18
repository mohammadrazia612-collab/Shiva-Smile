import React, { useState, useEffect } from 'react';
import { clinicData } from '../../data/clinicData';
import { X, CheckCircle2, Calendar, Clock, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import './AppointmentModal.css';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    treatment: 'Dental Implants',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }
    }, 900);
  };

  return (
    <div className="appointment-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="appointment-modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-icon"
          onClick={onClose}
          aria-label="Close appointment request form"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div className="appointment-form-view">
            <div className="modal-header-block">
              <span className="eyebrow">APPOINTMENT SCHEDULING</span>
              <h3 className="form-modal-title">Request Your Consultation.</h3>
              <p className="form-modal-subtitle">
                Select your preferred treatment discipline and scheduling window at Shiva Smile Dental Care Hospital. Our clinical team will contact you to confirm timing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form" noValidate>
              {/* Row 1: Name & Phone */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fullName" className="field-label">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`field-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                  {errors.fullName && <span className="field-error"><AlertCircle size={13} /> {errors.fullName}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="field-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 83098 64006"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`field-input ${errors.phone ? 'has-error' : ''}`}
                  />
                  {errors.phone && <span className="field-error"><AlertCircle size={13} /> {errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Email & Treatment */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email" className="field-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field-input ${errors.email ? 'has-error' : ''}`}
                  />
                  {errors.email && <span className="field-error"><AlertCircle size={13} /> {errors.email}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="treatment" className="field-label">Primary Interest</label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="field-input field-select"
                  >
                    {clinicData.treatments.map((t) => (
                      <option key={t.id} value={t.title}>{t.title}</option>
                    ))}
                    <option value="General Comprehensive Consultation">General Comprehensive Consultation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="preferredDate" className="field-label">Preferred Date *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`field-input ${errors.preferredDate ? 'has-error' : ''}`}
                  />
                  {errors.preferredDate && <span className="field-error"><AlertCircle size={13} /> {errors.preferredDate}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="preferredTime" className="field-label">Preferred Time Window</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="field-input field-select"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="form-field">
                <label htmlFor="message" className="field-label">Medical History or Specific Dental Concerns (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about any specific dental concerns, pain, or timeline preferences..."
                  value={formData.message}
                  onChange={handleChange}
                  className="field-input field-textarea"
                />
              </div>

              {/* Submit Button */}
              <div className="form-submit-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  {isSubmitting ? 'Transmitting Request...' : 'Request Appointment'}
                </button>
              </div>

              <p className="form-disclaimer-note">
                * Note: Submission initiates a scheduling request. Our clinical coordinator will contact you to verify details and confirm slot reservation.
              </p>
            </form>
          </div>
        ) : (
          /* Success State View */
          <div className="appointment-success-view">
            <div className="success-icon-circle">
              <CheckCircle2 size={44} className="success-check-icon" />
            </div>

            <span className="eyebrow">REQUEST TRANSMITTED</span>
            <h3 className="success-title">Thank You, {formData.fullName}.</h3>
            
            <p className="success-text">
              We have received your appointment request for <strong>{formData.treatment}</strong> on <strong>{formData.preferredDate}</strong> ({formData.preferredTime}).
            </p>

            <div className="success-receipt-box">
              <div className="receipt-item">
                <span className="receipt-label">Confirmation Reference:</span>
                <span className="receipt-code">#SSD-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="receipt-item">
                <span className="receipt-label">Direct Clinic Phone:</span>
                <span className="receipt-val">{clinicData.phone}</span>
              </div>
            </div>

            <p className="success-notice">
              Our clinical desk at Shiva Smile Dental Care Hospital will reach out to <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to finalize your appointment.
            </p>

            <button
              type="button"
              className="btn btn-primary success-close-btn"
              onClick={onClose}
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

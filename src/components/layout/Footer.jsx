import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Top Tier */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <span className="brand-aura">SHIVA SMILE</span>
              <span className="brand-dot">•</span>
              <span className="brand-dental">DENTAL HOSPITAL</span>
            </a>
            <p className="footer-mission">
              Multi-speciality dental care hospital in Siddipet, Telangana. Providing trusted dental implants, cosmetic dentistry, gentle pediatric care, and emergency dental services.
            </p>
            <div className="footer-contact-snippet">
              <span>{clinicData.address}</span>
              <span>Direct Phone: {clinicData.phone}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Overview</a></li>
              <li><a href="#quick-services">Services</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#gallery">Smile Gallery</a></li>
              <li><a href="#doctors">Our Doctors</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Treatments Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Key Specialties</h4>
            <ul className="footer-links-list">
              <li><a href="#treatments">Dental Implants</a></li>
              <li><a href="#treatments">Cosmetic Dentistry</a></li>
              <li><a href="#treatments">Pediatric Dentistry</a></li>
              <li><a href="#treatments">Emergency Dental Care</a></li>
              <li><a href="#treatments">Root Canal Treatment</a></li>
              <li><a href="#treatments">Periodontal Gum Care</a></li>
            </ul>
          </div>

          {/* Concierge Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Appointments & Contact</h4>
            <ul className="footer-links-list">
              <li><button type="button" className="footer-action-link" onClick={onOpenAppointment}>Book Appointment</button></li>
              <li><a href={clinicData.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Appointment</a></li>
              <li><a href={`tel:${clinicData.phoneRaw}`}>Call Helpline: {clinicData.phone}</a></li>
              <li><a href="#contact">Hospital Timings & Location</a></li>
              <li><a href="#">Patient Privacy Notice</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {clinicData.name}. All rights reserved. Azam Pura, Siddipet, Telangana 502103, India.
          </p>

          <button
            type="button"
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

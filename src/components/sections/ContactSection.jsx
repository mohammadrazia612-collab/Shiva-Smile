import React from 'react';
import { clinicData } from '../../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section section-spacing" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <span className="eyebrow">HOSPITAL LOCATION & CONTACT</span>
          <h2 className="contact-title">Visit Shiva Smile Dental Care.</h2>
          <p className="contact-subtitle">
            Conveniently located in Azam Pura, Siddipet, Telangana, offering comfortable modern dental hospital facilities for patients and families.
          </p>
        </div>

        <div className="contact-grid">
          {/* Information Column */}
          <div className="contact-info-card">
            <h3 className="contact-clinic-name">{clinicData.name}</h3>
            <p className="contact-tagline">{clinicData.tagline}</p>

            <div className="contact-details-list">
              {/* Address */}
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="detail-heading">Hospital Address</h4>
                  <p className="detail-text">{clinicData.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="detail-heading">Direct Helpline / Emergency</h4>
                  <a href={`tel:${clinicData.phoneRaw}`} className="detail-link">{clinicData.phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="detail-heading">Inquiries & Appointments</h4>
                  <a href={`mailto:${clinicData.email}`} className="detail-link">{clinicData.email}</a>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="detail-heading">Hospital Operating Hours</h4>
                  {clinicData.hours.map((h, idx) => (
                    <p key={idx} className="detail-schedule">
                      <span className="schedule-days">{h.days}:</span> {h.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Channels */}
            <div className="contact-actions-row">
              <a
                href={clinicData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary whatsapp-btn"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Appointment</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent("Shiva Smile Dental Care Hospital, Azam Pura, Siddipet, Telangana 502103")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary directions-btn"
              >
                <ExternalLink size={15} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Presentation Column */}
          <div className="contact-map-card">
            <div className="map-frame-wrapper">
              <iframe
                title="Shiva Smile Dental Care Hospital Location Map"
                src="https://maps.google.com/maps?q=Azam+Pura,+Siddipet,+Telangana+502103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.15) contrast(1.05)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="map-overlay-badge">
                <MapPin size={16} className="map-pin-pulse" />
                <span>Azam Pura • Siddipet, Telangana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

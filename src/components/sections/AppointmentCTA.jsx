import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ArrowUpRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import './AppointmentCTA.css';

export default function AppointmentCTA({ onOpenAppointment }) {
  return (
    <section className="appointment-cta-section" id="booking">
      <div className="container">
        <div className="appointment-cta-card">
          {/* Subtle Ambient Glow */}
          <div className="cta-ambient-glow" aria-hidden="true" />

          <div className="appointment-cta-content">
            <span className="eyebrow cta-eyebrow">RESERVE YOUR PRIVATE CONSULTATION</span>
            
            <h2 className="cta-headline">
              YOUR SMILE<br />
              <span className="cta-headline-accent">IS OUR PRIORITY.</span>
            </h2>

            <p className="cta-support-text">
              Experience the harmony of medical precision, biomimetic aesthetics, and unhurried clinical care. Book your 3D diagnostic evaluation today.
            </p>

            <div className="cta-button-wrapper">
              <button
                type="button"
                className="btn btn-primary cta-action-btn"
                onClick={onOpenAppointment}
              >
                <span>Book an Appointment</span>
                <ArrowUpRight size={18} />
              </button>

              <a
                href={`tel:${clinicData.phone}`}
                className="btn btn-secondary cta-call-btn"
              >
                <Phone size={16} />
                <span>Call Us: {clinicData.phone}</span>
              </a>
            </div>

            <div className="cta-guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={16} className="guarantee-icon" />
                <span>Zero-Pressure Clinical Consultation</span>
              </div>
              <div className="guarantee-item">
                <Sparkles size={16} className="guarantee-icon" />
                <span>Complimentary 3D Intraoral Diagnostic Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

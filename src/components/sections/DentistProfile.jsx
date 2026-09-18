import React from 'react';
import { clinicData } from '../../data/clinicData';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import './DentistProfile.css';

export default function DentistProfile({ onOpenAppointment }) {
  const doc = clinicData.doctorProfile;

  return (
    <section className="dentist-section section-spacing" id="about">
      <div className="container">
        <div className="dentist-card">
          {/* Portrait Media Column */}
          <div className="dentist-media-col">
            <img
              src={doc.image}
              alt={`${doc.name}, ${doc.title}`}
              className="dentist-portrait-img"
              loading="lazy"
            />
            <div className="dentist-portrait-badge">
              <Award size={16} />
              <span>Verified Clinical Fellow</span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="dentist-content-col">
            <span className="eyebrow">CLINICAL LEADERSHIP</span>
            <h2 className="dentist-name">{doc.name}</h2>
            <p className="dentist-qualifications">{doc.qualifications}</p>
            <p className="dentist-experience">{doc.experience}</p>

            <blockquote className="dentist-quote">
              {doc.philosophy}
            </blockquote>

            <p className="dentist-bio">{doc.bio}</p>

            <div className="dentist-credentials-list">
              <h4 className="credentials-heading">Accreditations & Honors (Placeholder Clinical Profile)</h4>
              {doc.credentials.map((cred, idx) => (
                <div key={idx} className="credential-item">
                  <CheckCircle2 size={16} className="credential-icon" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="dentist-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenAppointment}
              >
                <span>Request Consultation with {doc.name}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

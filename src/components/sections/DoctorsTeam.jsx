import React from 'react';
import { clinicData } from '../../data/clinicData';
import { Award, ArrowUpRight } from 'lucide-react';
import './DoctorsTeam.css';

export default function DoctorsTeam({ onOpenAppointment }) {
  return (
    <section className="doctors-team-section section-spacing" id="doctors">
      <div className="container">
        <div className="doctors-header">
          <span className="eyebrow">MULTIDISCIPLINARY EXPERTISE</span>
          <h2 className="doctors-title">Meet Our Clinical Specialists.</h2>
          <p className="doctors-subtitle">
            Experienced dental surgeons, implant providers, pediatric specialists, and emergency dental practitioners serving patients in Siddipet.
          </p>
        </div>

        <div className="doctors-grid">
          {clinicData.doctorsTeam.map((doc, idx) => (
            <div key={idx} className="doctor-card">
              <div className="doctor-image-wrapper">
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role}`}
                  className="doctor-image"
                  loading="lazy"
                />
                <div className="doctor-experience-tag">
                  <Award size={13} />
                  <span>{doc.experience}</span>
                </div>
              </div>

              <div className="doctor-info-box">
                <h3 className="doctor-name">{doc.name}</h3>
                <p className="doctor-qualifications">{doc.qualifications}</p>
                <span className="doctor-role-pill">{doc.role}</span>
                <p className="doctor-specialization">{doc.specialization}</p>

                <button
                  type="button"
                  className="doctor-book-link"
                  onClick={onOpenAppointment}
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

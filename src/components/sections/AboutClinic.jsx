import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ArrowRight, Cpu, UserCheck, Heart, Users } from 'lucide-react';
import './AboutClinic.css';

const pillarIcons = [Cpu, UserCheck, Heart, Users];

export default function AboutClinic({ onOpenAppointment }) {
  const { aboutClinic } = clinicData;

  return (
    <section className="about-clinic-section section-spacing" id="clinic-story">
      <div className="container">
        <div className="about-clinic-grid">
          {/* Left Column: Visual Story */}
          <div className="about-visual-col">
            <div className="about-image-wrapper">
              <img
                src={aboutClinic.image}
                alt="Shiva Smile Dental Care Hospital clinic in Siddipet"
                className="about-clinic-img"
                loading="lazy"
              />
              <div className="about-floating-badge">
                <span className="badge-title">{clinicData.name}</span>
                <span className="badge-subtitle">{clinicData.city}, {clinicData.state}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & 4 Pillars */}
          <div className="about-content-col">
            <span className="eyebrow">{aboutClinic.eyebrow}</span>
            <h2 className="about-headline">{aboutClinic.title}</h2>
            <p className="about-lead-text">{aboutClinic.lead}</p>

            {/* 4 Pillars Grid */}
            <div className="about-pillars-grid">
              {aboutClinic.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div key={idx} className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <Icon size={20} className="pillar-icon" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="about-action-row">
              <button
                type="button"
                className="btn btn-primary about-cta-btn"
                onClick={onOpenAppointment}
              >
                <span>Experience Our Care</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

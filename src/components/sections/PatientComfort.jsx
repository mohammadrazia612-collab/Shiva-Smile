import React from 'react';
import { clinicData } from '../../data/clinicData';
import { Headphones, Sparkles, Armchair, Clock, Check } from 'lucide-react';
import './PatientComfort.css';

const iconMap = {
  Headphones: Headphones,
  Sparkles: Sparkles,
  Armchair: Armchair,
  Clock: Clock
};

export default function PatientComfort() {
  return (
    <section className="comfort-section section-spacing" id="experience">
      <div className="container">
        {/* Header */}
        <div className="comfort-header">
          <span className="eyebrow">THE PATIENT SANCTUARY</span>
          <h2 className="comfort-title">Clinical excellence, minus clinical anxiety.</h2>
          <p className="comfort-subtitle">
            We designed our clinic from the ground up to feel calm, quiet, and profoundly comfortable. Every touchpoint is intended to soothe your nervous system.
          </p>
        </div>

        {/* Large Hero Visual Feature */}
        <div className="comfort-visual-banner">
          <img
            src="/images/clinic_lounge.jpg"
            alt="Shiva Smile Dental Care Hospital patient lounge, Siddipet"
            className="comfort-banner-img"
            loading="lazy"
          />
          <div className="comfort-banner-badge">
            <span>Shiva Smile Dental Care Hospital • Siddipet, Telangana</span>
          </div>
        </div>

        {/* Comfort Pillars Grid */}
        <div className="comfort-grid">
          {clinicData.comfortPoints.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={idx} className="comfort-card">
                <div className="comfort-icon-box">
                  <Icon size={22} className="comfort-icon" />
                </div>
                <h3 className="comfort-card-title">{item.title}</h3>
                <p className="comfort-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

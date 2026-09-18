import React, { useState } from 'react';
import { clinicData } from '../../data/clinicData';
import { Cpu, Eye, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import './Technology.css';

export default function Technology({ onOpenAppointment }) {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const currentTech = clinicData.technology[activeTechIndex];

  return (
    <section className="technology-section section-spacing" id="technology">
      <div className="container">
        {/* Section Header */}
        <div className="technology-header">
          <span className="eyebrow">DIAGNOSTIC & SURGICAL HARDWARE</span>
          <h2 className="technology-main-title">
            PRECISION<br />
            <span className="technology-title-gradient">MEETS TECHNOLOGY.</span>
          </h2>
          <p className="technology-lead">
            We have replaced antiquated dental tools with sub-micron optical scanners, low-dose 3D volumetric tomography, and computer-guided robotics.
          </p>
        </div>

        {/* Technology Interactive Keynote Stage */}
        <div className="technology-keynote-container">
          {/* Tech Navigation Tabs */}
          <div className="technology-tabs" role="tablist">
            {clinicData.technology.map((tech, index) => (
              <button
                key={tech.id}
                role="tab"
                aria-selected={activeTechIndex === index}
                className={`tech-tab-button ${activeTechIndex === index ? 'is-active' : ''}`}
                onClick={() => setActiveTechIndex(index)}
              >
                <span className="tech-tab-number">0{index + 1}</span>
                <span className="tech-tab-name">{tech.name}</span>
              </button>
            ))}
          </div>

          {/* Active Keynote Display */}
          <div className="technology-display-card" key={currentTech.id}>
            <div className="tech-display-grid">
              {/* Media Column */}
              <div className="tech-media-col">
                <div className="tech-image-wrapper">
                  <img
                    src={currentTech.image}
                    alt={currentTech.name}
                    className="tech-display-image"
                    loading="lazy"
                  />
                  <div className="tech-metric-floating-card">
                    <span className="metric-huge">{currentTech.metric}</span>
                    <span className="metric-label">{currentTech.metricLabel}</span>
                  </div>
                </div>
              </div>

              {/* Information Column */}
              <div className="tech-info-col">
                <div className="tech-badge-row">
                  <span className="pill-badge">{currentTech.badge}</span>
                </div>
                <h3 className="tech-feature-title">{currentTech.name}</h3>
                <p className="tech-feature-subtitle">{currentTech.subtitle}</p>
                <p className="tech-feature-desc">{currentTech.description}</p>

                <div className="tech-action-box">
                  <button
                    type="button"
                    className="btn btn-primary tech-cta-button"
                    onClick={onOpenAppointment}
                  >
                    <span>Experience This Technology</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

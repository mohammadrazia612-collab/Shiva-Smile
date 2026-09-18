import React, { useState } from 'react';
import { clinicData } from '../../data/clinicData';
import { ArrowRight, CheckCircle2, Clock, X } from 'lucide-react';
import './Treatments.css';

export default function Treatments({ onOpenAppointment }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [detailModalItem, setDetailModalItem] = useState(null);

  const currentTreatment = clinicData.treatments[selectedIdx];

  return (
    <section className="treatments-section section-spacing" id="treatments">
      <div className="container">
        {/* Header */}
        <div className="treatments-header">
          <span className="eyebrow">COMPREHENSIVE CLINICAL DISCIPLINES</span>
          <h2 className="treatments-title">Precision treatments. Tailored outcomes.</h2>
          <p className="treatments-subtitle">
            Every procedure is planned digitally, executed with microscopic precision, and designed for biological longevity.
          </p>
        </div>

        {/* Apple-Style Navigation Selector Bar */}
        <div className="treatments-nav-scroll">
          <div className="treatments-nav-bar" role="tablist">
            {clinicData.treatments.map((treatment, idx) => (
              <button
                key={treatment.id}
                role="tab"
                aria-selected={selectedIdx === idx}
                className={`treatment-tab-btn ${selectedIdx === idx ? 'is-active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                {treatment.title}
              </button>
            ))}
          </div>
        </div>

        {/* Large Storytelling Showcase Stage */}
        <div className="treatment-stage-card" key={currentTreatment.id}>
          <div className="treatment-stage-content">
            <span className="eyebrow treatment-stage-eyebrow">{currentTreatment.eyebrow}</span>
            <h3 className="treatment-stage-headline">{currentTreatment.headline}</h3>
            <p className="treatment-stage-description">{currentTreatment.shortDesc}</p>

            <div className="treatment-bullets">
              {currentTreatment.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="treatment-bullet-item">
                  <CheckCircle2 size={18} className="treatment-bullet-icon" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="treatment-meta">
              <div className="treatment-duration-badge">
                <Clock size={16} />
                <span>Typical Time: <strong>{currentTreatment.duration}</strong></span>
              </div>
            </div>

            <div className="treatment-cta-row">
              <button
                type="button"
                className="btn btn-primary treatment-primary-btn"
                onClick={onOpenAppointment}
              >
                <span>Reserve Consultation</span>
                <ArrowRight size={16} />
              </button>
              
              <button
                type="button"
                className="btn btn-secondary treatment-secondary-btn"
                onClick={() => setDetailModalItem(currentTreatment)}
              >
                <span>Clinical Overview</span>
              </button>
            </div>
          </div>

          <div className="treatment-stage-visual">
            <img
              src={currentTreatment.image}
              alt={currentTreatment.title}
              className="treatment-visual-img"
              loading="lazy"
            />
            <div className="treatment-visual-overlay">
              <span className="treatment-badge-tag">{currentTreatment.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Deep Dive Modal */}
      {detailModalItem && (
        <div className="treatment-modal-backdrop" onClick={() => setDetailModalItem(null)}>
          <div className="treatment-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="treatment-modal-header">
              <div>
                <span className="eyebrow">{detailModalItem.eyebrow}</span>
                <h3 className="modal-title">{detailModalItem.title}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setDetailModalItem(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="treatment-modal-body">
              <p className="modal-lead">{detailModalItem.headline}</p>
              <p className="modal-text">{detailModalItem.shortDesc}</p>

              <h4 className="modal-subheading">Clinical Protocol Highlights:</h4>
              <ul className="modal-list">
                {detailModalItem.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="modal-duration-box">
                <Clock size={16} />
                <span>Expected Treatment Window: <strong>{detailModalItem.duration}</strong></span>
              </div>
            </div>

            <div className="treatment-modal-footer">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={() => {
                  setDetailModalItem(null);
                  onOpenAppointment();
                }}
              >
                Schedule {detailModalItem.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

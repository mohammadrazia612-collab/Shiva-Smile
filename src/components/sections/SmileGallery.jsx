import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import './SmileGallery.css';

export default function SmileGallery({ onOpenAppointment }) {
  return (
    <section className="smile-gallery-section section-spacing" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="eyebrow">DOCUMENTED CLINICAL CASES</span>
          <h2 className="gallery-title">The Smile Gallery.</h2>
          <p className="gallery-subtitle">
            Curated clinical outcomes combining micron ceramic engineering, orthodontic harmony, and biologically conservative aesthetics.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {clinicData.smileGallery.map((item) => (
            <div key={item.id} className="gallery-item-card">
              <div className="gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                
                {/* Floating Category Tag */}
                <div className="gallery-badge-top">
                  <span>{item.category}</span>
                </div>

                {/* Hover Reveal Overlay */}
                <div className="gallery-hover-overlay">
                  <div className="hover-content">
                    <span className="hover-category">{item.category}</span>
                    <h3 className="hover-title">{item.title}</h3>
                    <p className="hover-desc">{item.description}</p>
                    <div className="hover-meta">
                      <Sparkles size={14} className="hover-icon" />
                      <span>{item.details}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Label */}
              <div className="gallery-card-caption">
                <h4 className="caption-title">{item.title}</h4>
                <span className="caption-details">{item.details}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-bottom-cta">
          <button
            type="button"
            className="btn btn-primary gallery-consult-btn"
            onClick={onOpenAppointment}
          >
            <span>Discuss Your Aesthetic Goals</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ShieldCheck, Sparkles, Maximize2, Layers, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import './QuickServices.css';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Maximize2: Maximize2,
  Layers: Layers,
  Sun: Sun,
  CheckCircle2: CheckCircle2
};

export default function QuickServices({ onOpenAppointment }) {
  const handleScrollToTreatments = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#treatments');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="quick-services-section" id="quick-services">
      <div className="container">
        <div className="quick-services-header">
          <div className="quick-header-left">
            <span className="eyebrow">CORE DISCIPLINES</span>
            <h2 className="quick-services-title">Essential Care Categories</h2>
          </div>
          <a href="#treatments" onClick={handleScrollToTreatments} className="btn-link quick-explore-link">
            <span>View All Clinical Protocols</span>
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="quick-services-grid">
          {clinicData.quickServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <a
                key={service.id}
                href={service.anchor}
                className="quick-service-card"
                onClick={handleScrollToTreatments}
              >
                <div className="quick-card-top">
                  <div className="quick-icon-wrapper">
                    <Icon size={20} className="quick-icon" />
                  </div>
                  <span className="quick-category-tag">{service.category}</span>
                </div>
                <h3 className="quick-card-title">{service.title}</h3>
                <p className="quick-card-tagline">{service.tagline}</p>
                <div className="quick-card-arrow">
                  <span>Explore</span>
                  <ArrowRight size={13} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

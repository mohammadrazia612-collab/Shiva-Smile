import React from 'react';
import { clinicData } from '../../data/clinicData';
import { ShieldCheck, Cpu, Sparkles, Clock } from 'lucide-react';
import './TrustBenefits.css';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Clock: Clock
};

export default function TrustBenefits() {
  return (
    <section className="trust-benefits-section" id="trust">
      <div className="container">
        <div className="trust-benefits-grid">
          {clinicData.trustBenefits.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div key={idx} className="trust-item-box">
                <div className="trust-icon-ring">
                  <Icon size={20} className="trust-icon" />
                </div>
                <h3 className="trust-item-title">{item.title}</h3>
                <p className="trust-item-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { clinicData } from '../../data/clinicData';
import './Statistics.css';

/**
 * Animated Statistics Counter with immediate Pop-in & upward count
 * Triggers on initial page load immediately.
 */
function StatItem({ value, isDecimal, suffix, label, description, isTriggered, index }) {
  const [displayValue, setDisplayValue] = useState(isDecimal ? '0.0' : '0');

  useEffect(() => {
    if (!isTriggered) return;

    // Stagger counting start slightly per item
    const delay = index * 90;
    const duration = 1800;
    let animationFrameId;

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOutExpo for count
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        if (isDecimal) {
          const currentDecimal = (ease * value).toFixed(1);
          setDisplayValue(currentDecimal);
        } else {
          const currentInt = Math.floor(ease * value).toLocaleString();
          setDisplayValue(currentInt);
        }

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(isDecimal ? value.toFixed(1) : value.toLocaleString());
        }
      };

      animationFrameId = requestAnimationFrame(updateCounter);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isTriggered, value, isDecimal, index]);

  return (
    <div
      className={`stat-card ${isTriggered ? 'stat-pop-animated' : ''}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="stat-number-wrapper">
        <span className="stat-number">{displayValue}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <h3 className="stat-label">{label}</h3>
      <p className="stat-description">{description}</p>
    </div>
  );
}

export default function Statistics() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Trigger immediately on page load with brief stagger
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 180);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="statistics-section" id="statistics">
      <div className="container">
        <div className="statistics-grid">
          {clinicData.statistics.map((stat, idx) => (
            <StatItem
              key={idx}
              index={idx}
              value={stat.value}
              isDecimal={stat.isDecimal}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              isTriggered={hasStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

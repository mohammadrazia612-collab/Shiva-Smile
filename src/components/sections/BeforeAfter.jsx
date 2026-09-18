import React, { useState, useRef, useCallback, useEffect } from 'react';
import { clinicData } from '../../data/clinicData';
import { Sparkles, SlidersHorizontal, Info } from 'lucide-react';
import './BeforeAfter.css';

export default function BeforeAfter({ onOpenAppointment }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStopDrag);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStopDrag);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStopDrag);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStopDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDrag]);

  return (
    <section className="before-after-section section-spacing" id="results">
      <div className="container">
        {/* Header */}
        <div className="before-after-header">
          <span className="eyebrow">CLINICAL TRANSFORMATION</span>
          <h2 className="before-after-title">Biological Harmony in Practice.</h2>
          <p className="before-after-subtitle">
            Drag the divider to observe the precise restorative closure, tooth alignment, and natural enamel shade reproduction.
          </p>
        </div>

        {/* Comparison Stage */}
        <div className="before-after-card">
          <div
            className="comparison-stage"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after transformation comparison slider"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setSliderPosition(prev => Math.max(prev - 5, 5));
              if (e.key === 'ArrowRight') setSliderPosition(prev => Math.min(prev + 5, 95));
            }}
          >
            {/* After Image (Full width background) */}
            <img
              src={clinicData.beforeAfter.afterImage}
              alt="After restorative aesthetic treatment"
              className="comparison-img comparison-after-img"
              draggable="false"
            />
            <div className="comparison-tag tag-after">AFTER</div>

            {/* Before Image (Clipped from left to sliderPosition) */}
            <div
              className="comparison-before-wrapper"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={clinicData.beforeAfter.beforeImage}
                alt="Before restorative aesthetic treatment"
                className="comparison-img comparison-before-img"
                draggable="false"
              />
              <div className="comparison-tag tag-before">BEFORE</div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className={`comparison-divider ${isDragging ? 'is-active' : ''}`}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="divider-line" />
              <div className="divider-handle" aria-hidden="true">
                <div className="handle-arrows">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Case Meta */}
          <div className="comparison-meta-grid">
            {clinicData.beforeAfter.details.map((item, idx) => (
              <div key={idx} className="comparison-meta-item">
                <span className="meta-label">{item.label}</span>
                <span className="meta-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="comparison-footer">
            <div className="comparison-disclaimer">
              <Info size={15} />
              <span>Demonstration Clinical Case. Individual clinical results vary based on oral anatomy and specific treatment needs.</span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenAppointment}
            >
              Schedule Consultation at Shiva Smile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

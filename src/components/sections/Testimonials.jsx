import React, { useState } from 'react';
import { clinicData } from '../../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = clinicData.testimonials.length;
  const current = clinicData.testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section section-spacing" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="eyebrow">PATIENT REFLECTIONS</span>
          <h2 className="testimonials-title">Trusted by perfectionists.</h2>
          <p className="testimonials-disclaimer-note">
            (Demonstration patient testimonials based on verified treatment protocols)
          </p>
        </div>

        {/* Single Testimonial Spotlight Card */}
        <div className="testimonial-stage" key={current.id}>
          <div className="testimonial-quote-icon">
            <Quote size={40} />
          </div>

          {/* Rating Stars */}
          <div className="testimonial-stars" aria-label={`Rated ${current.rating} out of 5 stars`}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>

          <blockquote className="testimonial-quote-text">
            “{current.quote}”
          </blockquote>

          <div className="testimonial-author-row">
            <div className="author-info">
              <h4 className="author-name">{current.author}</h4>
              <p className="author-role">{current.role}</p>
            </div>
            <div className="treatment-verified-tag">
              <CheckCircle size={14} />
              <span>{current.treatment}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonial-nav-controls">
            <div className="testimonial-dots">
              {clinicData.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-indicator ${currentIndex === idx ? 'is-active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="testimonial-arrows">
              <button
                type="button"
                className="testimonial-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="testimonial-arrow-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

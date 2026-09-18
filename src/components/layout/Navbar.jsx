import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { clinicData } from '../../data/clinicData';
import './Navbar.css';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Technology', href: '#technology' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-brand" aria-label={clinicData.name}>
          <span className="brand-aura">SHIVA SMILE</span>
          <span className="brand-dot">•</span>
          <span className="brand-dental">DENTAL HOSPITAL</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="btn btn-primary nav-cta-btn"
            onClick={onOpenAppointment}
            aria-label="Book an Appointment"
          >
            <span>Book Appointment</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`navbar-mobile-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-links">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                style={{ transitionDelay: `${0.05 + idx * 0.05}s` }}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={20} className="mobile-link-arrow" />
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button
              type="button"
              className="btn btn-primary mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
            >
              Book an Appointment
            </button>
            <p className="mobile-clinic-phone">Call Clinic: {clinicData.phone}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

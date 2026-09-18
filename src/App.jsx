import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Statistics from './components/sections/Statistics';
import QuickServices from './components/sections/QuickServices';
import InteractiveCluster from './components/sections/InteractiveCluster';
import Treatments from './components/sections/Treatments';
import AboutClinic from './components/sections/AboutClinic';
import PatientComfort from './components/sections/PatientComfort';
import SmileGallery from './components/sections/SmileGallery';
import BeforeAfter from './components/sections/BeforeAfter';
import Testimonials from './components/sections/Testimonials';
import TrustBenefits from './components/sections/TrustBenefits';
import DoctorsTeam from './components/sections/DoctorsTeam';
import Technology from './components/sections/Technology';
import FAQSection from './components/sections/FAQSection';
import AppointmentCTA from './components/sections/AppointmentCTA';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import AppointmentModal from './components/sections/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleOpenAppointment = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* 1. Header & Minimalist Apple Navigation */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      <main id="main-content">
        {/* 1. Premium Cinematic Layered Hero (Spline layer ready but optional/dormant) */}
        <Hero 
          onOpenAppointment={handleOpenAppointment} 
          splineSceneUrl={null} 
        />

        {/* 2. Instant Popping Statistics Counter (Immediate on-load count & pop) */}
        <Statistics />

        {/* 3. Quick Services / Core Disciplines Categories */}
        <QuickServices onOpenAppointment={handleOpenAppointment} />

        {/* 4. Interactive Physics Cluster (Inertia, Magnetic Pull, Angular Tilt & Detail Popups) */}
        <InteractiveCluster onOpenAppointment={handleOpenAppointment} />

        {/* 5. Main Treatments Storytelling Showcase */}
        <Treatments onOpenAppointment={handleOpenAppointment} />

        {/* 6. About the Clinic / Clinical Story & 4 Core Pillars */}
        <AboutClinic onOpenAppointment={handleOpenAppointment} />

        {/* 7. Patient Experience / Sensory Comfort Sanctuary */}
        <PatientComfort />

        {/* 8. Results / Smile Gallery */}
        <SmileGallery onOpenAppointment={handleOpenAppointment} />

        {/* 9. Interactive Before / After Split Comparison Slider */}
        <BeforeAfter onOpenAppointment={handleOpenAppointment} />

        {/* 10. Testimonials Spotlight Carousel */}
        <Testimonials />

        {/* 11. Trust & Key Benefits Compact Grid */}
        <TrustBenefits />

        {/* 12. Meet Our Doctors / Multidisciplinary Clinical Specialists */}
        <DoctorsTeam onOpenAppointment={handleOpenAppointment} />

        {/* 13. Precision Meets Technology (Apple Keynote Hardware Innovation) */}
        <Technology onOpenAppointment={handleOpenAppointment} />

        {/* 14. Interactive FAQ Accordion */}
        <FAQSection onOpenAppointment={handleOpenAppointment} />

        {/* 15. Climax Appointment CTA: "YOUR SMILE IS OUR PRIORITY" */}
        <AppointmentCTA onOpenAppointment={handleOpenAppointment} />

        {/* 16. Contact, Concierge & Interactive Location Map */}
        <ContactSection />
      </main>

      {/* 17. Minimalist Luxury Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* 18. Full-Featured Accessible Appointment Request Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
      />
    </div>
  );
}

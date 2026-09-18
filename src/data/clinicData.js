export const clinicData = {
  name: "Shiva Smile Dental Care Hospital",
  shortName: "Shiva Smile",
  tagline: "Advanced multi-speciality dental healthcare, implants, and family dentistry in Siddipet.",
  phone: "+91 83098 64006",
  phoneRaw: "+918309864006",
  email: "care@shivasmiledental.com",
  address: "Azam Pura, Siddipet, Telangana 502103, India",
  city: "Siddipet",
  state: "Telangana",
  pincode: "502103",
  country: "India",
  rating: "4.9",
  reviewsCount: 51,
  
  hours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "10:30 AM – 2:00 PM" }
  ],
  
  whatsappLink: "https://wa.me/918309864006?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20at%20Shiva%20Smile%20Dental%20Care%20Hospital%2C%20Siddipet.",

  // Statistics based on verified clinic profile
  statistics: [
    { value: 4.9, isDecimal: true, suffix: " / 5", label: "Google Rating", description: "Top-rated dental care with 51 verified patient reviews" },
    { value: 1000, suffix: "+", label: "Patients Served", description: "Trusted by families across Siddipet and surrounding areas" },
    { value: 10, suffix: "+", label: "Years Experience", description: "Dedicated clinical expertise in comprehensive dental care" },
    { value: 6, suffix: "+", label: "Verified Specialties", description: "Implants, cosmetic, pediatric, emergency, and periodontal care" },
    { value: 100, suffix: "%", label: "Emergency Readiness", description: "Prompt relief for severe tooth pain and urgent dental trauma" }
  ],

  quickServices: [
    {
      id: "implants",
      title: "Dental Implants",
      category: "Restorative",
      tagline: "Permanent, bone-anchored tooth replacement by implant specialists.",
      icon: "ShieldCheck",
      anchor: "#treatments"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      category: "Aesthetics",
      tagline: "Smile transformations, ceramic restorations, and enamel aesthetics.",
      icon: "Sparkles",
      anchor: "#treatments"
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      category: "Children's Care",
      tagline: "Gentle, fear-free dental treatments tailored for kids and teens.",
      icon: "Heart",
      anchor: "#treatments"
    },
    {
      id: "emergency",
      title: "Emergency Care",
      category: "Urgent Relief",
      tagline: "Same-day immediate treatment for severe toothaches and trauma.",
      icon: "AlertCircle",
      anchor: "#treatments"
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      category: "Tooth Preservation",
      tagline: "Painless nerve therapy to save and protect damaged natural teeth.",
      icon: "Maximize2",
      anchor: "#treatments"
    },
    {
      id: "general",
      title: "General & Periodontal Care",
      category: "Family Dentistry",
      tagline: "Routine cleanings, gum care, fillings, and comprehensive checkups.",
      icon: "CheckCircle2",
      anchor: "#treatments"
    }
  ],

  aboutClinic: {
    eyebrow: "ABOUT OUR HOSPITAL",
    title: "Comprehensive dental care built around trust, comfort, and advanced treatment in Siddipet.",
    lead: "Shiva Smile Dental Care Hospital is a premier multi-speciality dental healthcare center located in Azam Pura, Siddipet. Rated 4.9/5 by our patients, we provide modern dental implant procedures, cosmetic dentistry, gentle pediatric care, and rapid emergency dental services for families and individuals throughout Telangana.",
    image: "/images/clinic_lounge.jpg",
    pillars: [
      {
        title: "Dental Implants & Periodontics",
        desc: "Certified implant provider offering permanent root restorations and comprehensive gum health maintenance."
      },
      {
        title: "Pediatric Dental Care",
        desc: "Specialized, fear-free dental environment designed to keep children calm, comfortable, and smiling."
      },
      {
        title: "Emergency Dental Services",
        desc: "Prompt emergency triage for sudden tooth pain, broken restorations, infections, and accidental oral trauma."
      },
      {
        title: "Cosmetic & Restorative Dentistry",
        desc: "High-precision smile design, natural ceramic crowns, and teeth whitening to restore oral confidence."
      }
    ]
  },

  clusterElements: [
    {
      id: "implant",
      title: "Dental Implants",
      badge: "Verified Category",
      tagline: "Permanent root replacement engineered to integrate with bone.",
      description: "Medical-grade titanium and ceramic implant restorations providing natural biting power and long-term jawbone preservation in Siddipet.",
      specs: ["Implant provider verified", "Permanent bone integration", "Natural aesthetics"],
      icon: "ShieldCheck",
      x: 20,
      y: 22,
      scale: 1.1
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      badge: "Aesthetic Care",
      tagline: "Custom aesthetic restorations and smile proportioning.",
      description: "Personalized cosmetic enhancements including composite bonding, ceramic veneers, and teeth whitening for radiant natural smiles.",
      specs: ["Natural tooth shade matching", "Enamel-safe protocols", "Comprehensive smile makeover"],
      icon: "Sparkles",
      x: 75,
      y: 20,
      scale: 1.05
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      badge: "Child-Friendly",
      tagline: "Gentle oral healthcare designed specifically for children.",
      description: "Preventive sealants, gentle cavity treatment, and habit counseling delivered with a warm, caring touch to prevent dental anxiety.",
      specs: ["Gentle pediatric protocols", "Early cavity prevention", "Family-friendly environment"],
      icon: "Layers",
      x: 26,
      y: 72,
      scale: 1.05
    },
    {
      id: "emergency",
      title: "Emergency Dental Care",
      badge: "Urgent Service",
      tagline: "Immediate same-day clinical response for severe dental pain.",
      description: "Dedicated emergency triage for acute toothaches, fractured teeth, oral bleeding, and urgent surgical dental requirements.",
      specs: ["Same-day emergency appointments", "Rapid pain relief", "Hospital-grade care"],
      icon: "Maximize2",
      x: 80,
      y: 68,
      scale: 1.0
    },
    {
      id: "periodontal",
      title: "Periodontal Care",
      badge: "Gum Health",
      tagline: "Deep cleaning and periodontal therapy for healthy foundations.",
      description: "Comprehensive gum disease management, ultrasonic scaling, and periodontal maintenance supporting teeth and dental implants.",
      specs: ["Ultrasonic plaque removal", "Periodontal gum care", "Long-term tooth longevity"],
      icon: "Scan",
      x: 50,
      y: 44,
      scale: 1.15
    }
  ],

  treatments: [
    {
      id: "implants",
      title: "Dental Implants & Periodontics",
      eyebrow: "PERMANENT TOOTH RESTORATION",
      headline: "Restore missing teeth with natural strength and longevity.",
      shortDesc: "As verified dental implant and periodontal care providers, we restore single, multiple, or full-arch missing teeth using bone-anchored fixtures.",
      bullets: [
        "Rigorous bone assessment and computer-assisted placement",
        "Permanent replacement that looks, feels, and bites like natural teeth",
        "Comprehensive periodontal maintenance for lifetime implant stability"
      ],
      duration: "Planned Appointments + Healing",
      image: "/images/hero_smile.jpg"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry & Smile Design",
      eyebrow: "SMILE AESTHETICS",
      headline: "Art and precision combined for your most confident smile.",
      shortDesc: "Comprehensive aesthetic treatments tailored to enhance tooth shape, shade, and alignment while preserving biological tooth structure.",
      bullets: [
        "Aesthetic ceramic veneers and composite restorations",
        "Enamel brightening and stain removal solutions",
        "Custom smile contouring matched to facial features"
      ],
      duration: "1–2 Visits Depending on Plan",
      image: "/images/after_smile.jpg"
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry (Kids Care)",
      eyebrow: "GENTLE CHILDREN'S DENTISTRY",
      headline: "Nurturing healthy dental habits from the very first tooth.",
      shortDesc: "Children require special care and empathy. Our pediatric services make dental visits fun, friendly, and completely anxiety-free.",
      bullets: [
        "Gentle checkups, dental cleanings, and fluoride treatments",
        "Cavity protection with pit and fissure sealants",
        "Parent guidance on brushing, teething, and habit management"
      ],
      duration: "30–45 Minutes",
      image: "/images/clinic_lounge.jpg"
    },
    {
      id: "emergency",
      title: "Emergency Dental Services",
      eyebrow: "RAPID RELIEF IN SIDDIPET",
      headline: "Urgent care when sudden tooth pain or trauma strikes.",
      shortDesc: "Severe dental pain cannot wait. We provide rapid diagnostic triage and immediate treatment to eliminate pain and stabilize damaged teeth.",
      bullets: [
        "Treatment for severe, acute toothaches and dental abscesses",
        "Restoration of chipped, fractured, or dislodged teeth",
        "Urgent care line: +91 83098 64006 for swift coordination"
      ],
      duration: "Same-Day Emergency Triage",
      image: "/images/tech_scanner.jpg"
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      eyebrow: "TOOTH PRESERVATION",
      headline: "Save your infected natural tooth with gentle therapy.",
      shortDesc: "Modern root canal procedures remove inner infection and seal the root canal system, saving your natural tooth from extraction.",
      bullets: [
        "Painless modern numbing and rotary cleaning techniques",
        "Protects the jawbone structure by preserving the natural root",
        "Finished with a durable natural ceramic crown for strength"
      ],
      duration: "1–2 Appointments",
      image: "/images/after_smile.jpg"
    },
    {
      id: "general-care",
      title: "General & Family Dentistry",
      eyebrow: "PREVENTIVE HEALTH",
      headline: "Proactive dental wellness for the whole family in Siddipet.",
      shortDesc: "From routine scaling and polishing to tooth-colored fillings and periodontal therapy, we help your family maintain lifelong oral health.",
      bullets: [
        "Comprehensive oral health screenings and digital diagnosis",
        "Ultrasonic scaling for healthy gums and fresh breath",
        "Biocompatible tooth-colored composite restorations"
      ],
      duration: "45 Minutes",
      image: "/images/hero_smile.jpg"
    }
  ],

  smileGallery: [
    {
      id: "case-1",
      title: "Aesthetic Smile Transformation",
      category: "Cosmetic Dentistry",
      description: "Restoring natural tooth shade, symmetry, and enamel harmony.",
      image: "/images/after_smile.jpg",
      details: "Cosmetic Restoration • Shiva Smile Siddipet"
    },
    {
      id: "case-2",
      title: "Permanent Dental Implant Restoration",
      category: "Implant Provider",
      description: "Bone-integrated implant crown replacing missing anterior tooth.",
      image: "/images/smile_gallery_1.jpg",
      details: "Dental Implant Specialty • Certified Care"
    },
    {
      id: "case-3",
      title: "Pediatric Preventative Care",
      category: "Pediatric Dentistry",
      description: "Gentle cavity treatment and healthy smile preservation for kids.",
      image: "/images/smile_gallery_2.jpg",
      details: "Child-Friendly Care • Family Dentistry"
    },
    {
      id: "case-4",
      title: "Emergency Dental Restoration",
      category: "Emergency Dental Service",
      description: "Rapid relief and aesthetic bonding following accidental tooth trauma.",
      image: "/images/hero_smile.jpg",
      details: "Same-Day Emergency Triage • Azam Pura"
    },
    {
      id: "case-5",
      title: "Pre-Treatment Diagnostic Review",
      category: "Clinical Assessment",
      description: "Detailed dental evaluation and treatment planning.",
      image: "/images/before_smile.jpg",
      details: "Initial Clinical Assessment Case"
    },
    {
      id: "case-6",
      title: "Periodontal & Crown Rehabilitation",
      category: "Restorative Hospital Care",
      description: "Full oral rehabilitation restoring healthy gums and biting stability.",
      image: "/images/after_smile.jpg",
      details: "Hospital Grade Standards • Siddipet"
    }
  ],

  trustBenefits: [
    {
      icon: "Star",
      title: "4.9 / 5 Google Rating",
      desc: "Validated by 51 positive reviews from patients across Siddipet and Telangana."
    },
    {
      icon: "ShieldCheck",
      title: "Verified Implant Provider",
      desc: "Certified dental implant and periodontal care provider ensuring lasting tooth replacements."
    },
    {
      icon: "Heart",
      title: "Dedicated Pediatric Care",
      desc: "Warm, gentle care for children that makes dental visits calm and fear-free."
    },
    {
      icon: "Clock",
      title: "Prompt Emergency Service",
      desc: "Rapid same-day response for urgent tooth pain and accidental dental emergencies."
    }
  ],

  doctorsTeam: [
    {
      name: "Dr. Shiva & Clinical Dental Team",
      role: "Chief Dental Surgeon & Director",
      qualifications: "BDS, MDS / Registered Dental Surgeon",
      specialization: "Dental Implants, Periodontics & Restorative Hospital Dentistry",
      experience: "10+ Years Dedicated Clinical Practice in Siddipet",
      image: "/images/dentist_editorial.jpg"
    },
    {
      name: "Cosmetic & Pediatric Specialists",
      role: "Consultant Dental Healthcare Team",
      qualifications: "Certified Dental Surgeons (Telangana State Dental Council)",
      specialization: "Aesthetic Dentistry, Gentle Kids Dental Care & Preventive Care",
      experience: "Multi-Speciality Hospital Dental Staff",
      image: "/images/doctor_sarah.jpg"
    },
    {
      name: "Emergency & Surgical Dental Team",
      role: "Oral Surgery & Emergency Dental Care",
      qualifications: "Specialized Emergency Dental Practitioners",
      specialization: "Urgent Pain Triage, Root Canal Procedures & Surgical Extractions",
      experience: "Available for Acute Emergency Cases in Siddipet",
      image: "/images/doctor_marcus.jpg"
    }
  ],

  faqs: [
    {
      question: "Where is Shiva Smile Dental Care Hospital located?",
      answer: "Shiva Smile Dental Care Hospital is centrally located in Azam Pura, Siddipet, Telangana 502103, India. We serve patients and families from across Siddipet and surrounding communities."
    },
    {
      question: "What are the clinic operating hours?",
      answer: "We are open Monday through Saturday from 10:00 AM to 8:00 PM, and on Sundays from 10:30 AM to 2:00 PM for scheduled consultations and emergency care."
    },
    {
      question: "How do I book an appointment or reach the clinic?",
      answer: "You can book an appointment by calling +91 83098 64006 directly, contacting our WhatsApp concierge, or submitting an appointment request through this website. We assist with both advance bookings and same-day consultations."
    },
    {
      question: "Do you provide emergency dental services?",
      answer: "Yes. Shiva Smile Dental Care Hospital is a verified emergency dental service provider in Siddipet. If you experience severe toothaches, broken teeth, bleeding, or trauma, contact +91 83098 64006 immediately for prompt relief."
    },
    {
      question: "Do you offer dental implants and periodontal care?",
      answer: "Yes. We are certified dental implant providers and periodontists offering permanent titanium root replacements, natural ceramic crowns, and specialized gum treatments."
    },
    {
      question: "Is pediatric (children's) dentistry available?",
      answer: "Yes, we provide dedicated pediatric dental care. Our gentle approach helps children feel relaxed while receiving checkups, preventive cleanings, cavity fillings, and oral habit guidance."
    }
  ],

  technology: [
    {
      id: "implants",
      name: "Modern Dental Implant Care",
      subtitle: "Precision Titanium Fixtures for Permanent Tooth Replacement.",
      description: "Engineered to integrate directly with living bone, our implant solutions restore natural chewing strength and facial harmony for patients in Siddipet.",
      badge: "Verified Category",
      image: "/images/tech_scanner.jpg",
      metric: "4.9/5",
      metricLabel: "Google Rating"
    },
    {
      id: "pediatric",
      name: "Specialized Pediatric Clinic",
      subtitle: "Comfort-Centered Dentistry Designed for Kids.",
      description: "Our dedicated pediatric care approach helps young patients develop healthy dental habits in a warm, welcoming, and relaxed hospital environment.",
      badge: "Pediatric Dentist",
      image: "/images/clinic_lounge.jpg",
      metric: "51+",
      metricLabel: "Verified Reviews"
    },
    {
      id: "cosmetic",
      name: "Advanced Cosmetic Dentistry",
      subtitle: "Aesthetic Restorations & Enamel Rejuvenation.",
      description: "From custom composite tooth restorations to smile contouring and whitening, we help you achieve the bright, balanced smile you deserve.",
      badge: "Cosmetic Dentist",
      image: "/images/after_smile.jpg",
      metric: "10+",
      metricLabel: "Years In Siddipet"
    },
    {
      id: "emergency",
      name: "Hospital Emergency Dental Service",
      subtitle: "Fast Triage for Severe Tooth Pain & Oral Trauma.",
      description: "Immediate emergency dental response to diagnose and resolve acute dental pain, severe infections, knocked-out teeth, and oral injuries.",
      badge: "Emergency Service",
      image: "/images/hero_smile.jpg",
      metric: "100%",
      metricLabel: "Dedicated Triage"
    }
  ],

  beforeAfter: {
    title: "Clinical Transformation",
    subtitle: "Aesthetic Restoration & Smile Renewal",
    beforeImage: "/images/before_smile.jpg",
    afterImage: "/images/after_smile.jpg",
    details: [
      { label: "Clinic", value: "Shiva Smile Dental Care Hospital" },
      { label: "Location", value: "Azam Pura, Siddipet, Telangana" },
      { label: "Specialty", value: "Cosmetic & Restorative Care" },
      { label: "Clinical Note", value: "Demonstration case illustrating aesthetic tooth restoration" }
    ]
  },

  comfortPoints: [
    {
      icon: "Heart",
      title: "Friendly Family Environment",
      desc: "Welcoming clinical setting designed to reassure patients of all ages, from toddlers to seniors."
    },
    {
      icon: "Sparkles",
      title: "Gentle Anesthesia & Pain Relief",
      desc: "Careful, localized numbing techniques to ensure dental procedures are as pain-free as possible."
    },
    {
      icon: "ShieldCheck",
      title: "Hospital-Grade Hygiene",
      desc: "Strict sterilization and disinfection protocols maintaining the highest healthcare standards in Siddipet."
    },
    {
      icon: "Clock",
      title: "Convenient Siddipet Hours",
      desc: "Open Monday to Saturday 10:00 AM – 8:00 PM, plus Sunday morning hours (10:30 AM – 2:00 PM)."
    }
  ],

  testimonials: [
    {
      id: 1,
      quote: "Shiva Smile Dental Care Hospital provides exceptional dental care in Siddipet. The treatment was gentle, thorough, and the staff made sure I was comfortable the entire time. Very highly recommended!",
      author: "Verified Patient",
      role: "Siddipet Resident",
      rating: 5,
      treatment: "Dental Care & Checkup"
    },
    {
      id: 2,
      quote: "Great experience bringing my child here for pediatric dental treatment. The doctors are so patient and kind with children. It's easily the top-rated dental hospital in Siddipet.",
      author: "Verified Patient",
      role: "Local Family Member",
      rating: 5,
      treatment: "Pediatric Dentistry"
    },
    {
      id: 3,
      quote: "I had a sudden severe toothache on a weekend and their emergency service was a lifesaver. Prompt treatment, clean clinic, and reasonable care. Deserves its 4.9-star rating!",
      author: "Verified Patient",
      role: "Siddipet Resident",
      rating: 5,
      treatment: "Emergency Dental Care"
    }
  ]
};

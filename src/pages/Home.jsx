import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Phone,
  WhatsappLogo,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  CheckCircle,
  Desktop,
  WifiHigh,
  ShieldCheck,
  Wrench,
  Headset,
  Lightning,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   1. HERO — Navy/Blue Gradient
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages.map(img => img.url);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-[#0B1929]">
      {/* Background carousel */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt={hero.backgroundImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        {/* Navy gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1929]/85 via-[#0B1929]/60 to-[#0B1929]/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1929]/70 via-transparent to-[#0B1929]/40 z-[1]" />
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-[3px] transition-all duration-500 ${
              i === currentSlide ? 'h-8 bg-[#60A5FA]' : 'h-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Accent line */}
      <div className="absolute top-[20%] left-0 w-20 sm:w-32 h-[2px] bg-[#60A5FA] z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[3px] bg-[#60A5FA] mb-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#60A5FA] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6 sm:mb-8"
        >
          {hero.badge}
        </motion.p>

        <div className="overflow-hidden">
          {['MASTER', 'YOUR', 'TECHNOLOGY.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.88] tracking-tight ${
                  word === 'TECHNOLOGY.' ? 'text-[#60A5FA]' : 'text-white'
                }`}
                style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          Computer repairs. CCTV systems. Enterprise networking. POS solutions. We fix, build, and maintain the technology your business depends on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-[#60A5FA] text-[#0B1929] px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#93C5FD] hover:shadow-xl hover:shadow-[#60A5FA]/20"
          >
            Get Tech Support
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent('Hi Techmaster! I need tech support.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60"
          >
            <WhatsappLogo size={20} weight="fill" />
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <span className="text-white/10 text-[10px] uppercase tracking-[0.4em] font-heading" style={{ writingMode: 'vertical-rl' }}>
          Techmaster &mdash; Harare, Zimbabwe
        </span>
      </div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE TICKER
   ================================================================ */
function MarqueeTicker() {
  const items = ['REPAIRS', 'NETWORKING', 'CCTV', 'POS SYSTEMS', 'SOFTWARE', 'IT SUPPORT', 'SERVERS', 'DATA RECOVERY', 'SECURITY'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-[#0F2137] border-y border-[#60A5FA]/10 py-4 sm:py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="text-[#60A5FA] font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider">{item}</span>
            <span className="text-[#60A5FA]/30 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#0B1929] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-[#60A5FA] mb-6" />
            <h2 className="font-heading font-bold text-white leading-[0.92] mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              FIX IT RIGHT.<br />
              <span className="text-[#60A5FA]">FIX IT FAST.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Techmaster started in 2017 with two engineers and one promise: no more week-long waits for simple repairs.
              No more guesswork diagnostics. No more hidden charges. We built the IT company we wished existed.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-lg">
              Today, with 20+ certified engineers and 3,000+ successful repairs, we handle everything from cracked
              laptop screens to enterprise-grade CCTV installations. Our warranty is real. Our diagnostics are free.
              And our emergency line is always on.
            </p>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-[#60A5FA] font-heading text-3xl sm:text-4xl font-bold">3K+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Repairs</div>
              </div>
              <div>
                <div className="text-[#60A5FA] font-heading text-3xl sm:text-4xl font-bold">500+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">CCTV Installs</div>
              </div>
              <div>
                <div className="text-[#60A5FA] font-heading text-3xl sm:text-4xl font-bold">24hr</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Emergency</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80"
                alt="Techmaster repair workshop"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-[#0B1929] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
                alt="Network equipment"
                className="w-full aspect-square object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#60A5FA] text-[#0B1929] p-4 sm:p-6 shadow-2xl">
              <div className="text-center">
                <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">FREE</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-[#0B1929]/70">
                  Walk-In<br />Diagnostics
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES GRID
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;
  const serviceIcons = [Desktop, WifiHigh, ShieldCheck, Lightning, Wrench, Headset];

  return (
    <section ref={ref} className="bg-[#0F2137] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-[#60A5FA] mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              WHAT WE <span className="text-[#60A5FA]">FIX</span>
            </h2>
            <Link
              to="/services"
              className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
            >
              All Services <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesPreview.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Link
                  to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                  className="group relative block p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:bg-[#60A5FA]/5 hover:border-[#60A5FA]/20 transition-all duration-500 h-full"
                >
                  <span className="absolute top-4 right-4 text-white/5 font-heading text-5xl font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="w-12 h-12 flex items-center justify-center bg-[#60A5FA]/10 mb-6">
                    <Icon size={24} className="text-[#60A5FA]" />
                  </div>

                  <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-3">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{service.desc}</p>

                  <div className="flex items-center gap-2 text-[#60A5FA] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-wider font-heading font-semibold">Learn More</span>
                    <ArrowRight size={14} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#60A5FA] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. GUARANTEE — unique to repair business
   ================================================================ */
function GuaranteeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const guarantees = [
    { icon: Lightning, title: 'Same-Day Repairs', desc: 'Most computer repairs done within 24 hours. Bring it in the morning, collect by evening.' },
    { icon: ShieldCheck, title: 'Written Warranty', desc: 'Every repair and installation backed by warranty. Breaks again within warranty? Fixed for free.' },
    { icon: Phone, title: '24hr Emergency', desc: 'Server down at 2 AM? Our emergency line is always on. Business does not wait until Monday.' },
    { icon: CheckCircle, title: 'No Fix, No Fee', desc: 'If we cannot fix it, you do not pay. Free diagnostics on all walk-in devices. Zero risk.' },
  ];

  return (
    <section ref={ref} className="bg-[#60A5FA] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-10 h-[3px] bg-[#0B1929] mx-auto mb-6" />
          <h2 className="font-heading font-bold text-[#0B1929] leading-[0.92]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            THE TECHMASTER<br />GUARANTEE
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {guarantees.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#0B1929]/10 mx-auto mb-5">
                  <Icon size={28} className="text-[#0B1929]" />
                </div>
                <h3 className="font-heading text-[#0B1929] text-lg font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-[#0B1929]/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. STATS BAND
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const stats = [
    { number: '3000', suffix: '+', label: 'Devices Repaired' },
    { number: '500', suffix: '+', label: 'CCTV Installs' },
    { number: '20', suffix: '+', label: 'Engineers' },
    { number: '8', suffix: '+', label: 'Years' },
  ];

  return (
    <section ref={ref} className="relative bg-[#0B1929] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                {stat.suffix && <span className="text-[#60A5FA]">{stat.suffix}</span>}
              </div>
              <div className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA]/20 to-transparent" />
    </section>
  );
}


/* ================================================================
   7. TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const next = useCallback(() => setActive((p) => (p + 1) % homeTestimonials.length), [homeTestimonials.length]);
  const prev = useCallback(() => setActive((p) => (p - 1 + homeTestimonials.length) % homeTestimonials.length), [homeTestimonials.length]);
  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, [next]);
  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-[#0F2137] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
          <Quotes size={40} weight="fill" className="text-[#60A5FA]/20 mx-auto mb-8" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] bg-[#60A5FA] mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} weight="fill" className="text-[#60A5FA]" />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Previous"><CaretLeft size={16} /></button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-[3px] transition-all duration-300 ${i === active ? 'w-8 bg-[#60A5FA]' : 'w-3 bg-white/15 hover:bg-white/30'}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Next"><CaretRight size={16} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   8. CTA
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" alt="Technology" className="w-full h-[130%] object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-[#0B1929]/80" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
            TECH<br /><span className="text-[#60A5FA]">PROBLEMS?</span><br />SOLVED.
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">{homeCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group relative inline-flex items-center gap-3 bg-[#60A5FA] text-[#0B1929] px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#93C5FD] hover:shadow-xl hover:shadow-[#60A5FA]/20">
              Free Diagnosis <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60"
            >
              <WhatsappLogo size={20} weight="fill" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME — Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <GuaranteeSection />
      <StatsBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;

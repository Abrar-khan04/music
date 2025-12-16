import React, { useState, useEffect, useRef } from 'react';
import { Music, Headphones, Radio, Mic, Users, Zap, Play, Star, Menu, X } from 'lucide-react';

export default function MusicLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 4px 20px rgba(147, 51, 234, 0.2)' : 'none',
      
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      padding: '0.5rem 0',
      transition: 'color 0.3s ease',
      position: 'relative',
    },
    ctaButton: {
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(147, 51, 234, 0.1)',
      border: '1px solid rgba(147, 51, 234, 0.3)',
      borderRadius: '50px',
      padding: '0.5rem 1rem',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      color: '#c084fc',
    },
    h1: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      color: 'white',
    },
    gradient: {
      background: 'linear-gradient(135deg, #c084fc, #f9a8d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    description: {
      color: '#9ca3af',
      fontSize: '1.125rem',
      marginBottom: '2rem',
      lineHeight: '1.75',
    },
    primaryButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 2rem',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    section: {
      padding: '6rem 1.5rem',
      position: 'relative',
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textAlign: 'center',
      color: 'white',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    featureCard: {
      padding: '2rem',
      borderRadius: '1rem',
      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
      border: '1px solid rgba(147, 51, 234, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    iconWrapper: {
      color: '#c084fc',
      marginBottom: '1rem',
      transition: 'transform 0.3s ease',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '0.75rem',
      color: 'white',
    },
    featureDesc: {
      color: '#9ca3af',
      lineHeight: '1.75',
    },
    brandGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      marginTop: '2rem',
    },
    brandButton: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#4b5563',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      padding: '0.5rem 1rem',
    },
    footer: {
      padding: '4rem 1.5rem',
      background: 'black',
      borderTop: '1px solid rgba(147, 51, 234, 0.2)',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem',
    },
  };

  const musicPlatforms = [
    { name: 'Spotify', url: 'https://www.spotify.com' },
    { name: 'Apple Music', url: 'https://music.apple.com' },
    { name: 'YouTube Music', url: 'https://music.youtube.com' },
    { name: 'SoundCloud', url: 'https://soundcloud.com' },
    { name: 'Tidal', url: 'https://tidal.com' },
    { name: 'Amazon Music', url: 'https://music.amazon.com' },
  ];

  return (
    <div style={{ background: '#000', color: 'white', overflowX: 'hidden' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.navContainer}>
            <div style={styles.logo} onClick={() => scrollToSection(homeRef)}>
              <Music size={30} color="#9333ea" />
              <span style={styles.logoText}>SoundWave</span>
            </div>
            
            <nav style={{ ...styles.navLinks, display: window.innerWidth < 768 && !mobileMenuOpen ? 'none' : 'flex' }}>
              <button 
                style={styles.navButton}
                onClick={() => scrollToSection(homeRef)}
                onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Home
              </button>
              <button 
                style={styles.navButton}
                onClick={() => scrollToSection(featuresRef)}
                onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Features
              </button>
              <button 
                style={styles.navButton}
                onClick={() => scrollToSection(aboutRef)}
                onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                About Us
              </button>
              <button 
                style={styles.navButton}
                onClick={() => scrollToSection(contactRef)}
                onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Contact
              </button>
              <button 
                style={styles.ctaButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Started →
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={homeRef} style={styles.hero}>
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        
        <div style={{ ...styles.container, ...styles.heroGrid }}>
          <div>
            <div style={styles.badge}>
              <Star size={16} />
              <span>Your Day, In Perfect Rhythm</span>
            </div>
            
            <h1 style={styles.h1}>
              Listen Smarter,
              <br />
              <span style={styles.gradient}>Not Harder</span>
            </h1>
            
            <p style={styles.description}>
              Take control of your music with an all-in-one productivity app. Organize beats, track progress, and focus on what matters—without the overwhelm.
            </p>
            
            <button 
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Free Trial
              <Play size={20} />
            </button>
          </div>
          
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #9333ea, #ec4899)', borderRadius: '1.5rem', filter: 'blur(40px)', opacity: 0.5 }}>
              
            </div>
            <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4))', backdropFilter: 'blur(20px)', borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(147, 51, 234, 0.3)' }}>
              <div style={{ aspectRatio: '1/1', borderRadius: '1rem', background: 'linear-gradient(135deg, #9333ea, #ec4899, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{borderRadius:'15px'}} src="https://i.pinimg.com/1200x/03/c1/24/03c12415b89ba198e9de4e3a92c24f55.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} style={styles.section}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={styles.sectionTitle}>
              Designed to Help You Do More{' '}
              <span style={{ ...styles.gradient, fontStyle: 'italic' }}>With Less Stress</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginTop: '1rem' }}>
              Powerful features to enhance your music experience
            </p>
          </div>

          <div style={styles.featureGrid}>
            {[
              { icon: Radio, title: "Smart Playlist Management", desc: "Organize your music collections with AI-powered suggestions and seamless playlist creation." },
              { icon: Zap, title: "Integrated Calendar & Deadlines", desc: "Keep track of releases, concerts, and practice sessions all in one place." },
              { icon: Headphones, title: "Focus Mode", desc: "Immerse yourself in your music with distraction-free listening that helps you stay in the zone." },
              { icon: Mic, title: "Live Recording", desc: "Capture your musical ideas instantly with high-quality recording tools built right in." },
              { icon: Users, title: "Social Sharing", desc: "Share your favorite tracks and playlists with friends and discover new music together." },
              { icon: Star, title: "Premium Quality", desc: "Experience lossless audio quality with our premium streaming service." },
            ].map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(147, 51, 234, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.iconWrapper}>
                  <feature.icon size={48} />
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} style={{ ...styles.section, background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))' }}>
        <div style={styles.container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #9333ea, #ec4899)', borderRadius: '1.5rem', filter: 'blur(60px)', opacity: 0.4 }}></div>
              <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '1.5rem', background: 'linear-gradient(135deg, #9333ea, #ec4899, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
               
                <div style={{ width: '128px', height: '128px', marginTop: '1rem', borderRadius: '50%', border: '4px solid #ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <img style={{borderRadius:20}} src="https://i.pinimg.com/1200x/0b/c9/40/0bc940e39f7964cbbd7697cd9ef4f1aa.jpg" height={1300}alt="" />
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ec4899', animation: 'pulse 2s ease-in-out infinite' }}>
                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.875rem', color: '#c084fc', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                No Stress. Just Flow.
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>
                Ready to Reclaim<br />Your Time?
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.75' }}>
                Our music productivity app helps modern professionals who want to stay organized, focused, and in control of their creative flow. Stop wasting precious time and start enjoying your music journey today.
              </p>
              <button 
                style={{ padding: '1rem 2rem', background: 'white', color: 'black', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Platforms Section */}
      <section style={{ ...styles.section, background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))' }}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.125rem' }}>Connect with your favorite platforms</p>
            <div style={styles.brandGrid}>
              {musicPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  style={styles.brandButton}
                  onClick={() => handleExternalLink(platform.url)}
                  onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                  onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                >
                  {platform.name}
                </button>
              ))}
            </div>
            <p style={{ marginTop: '2rem', color: '#6b7280', fontSize: '1rem' }}>
              Join 1000+ music lovers already using SoundWave
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #9333ea, #ec4899, #fb923c)', opacity: 0.9 }}></div>
        <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(60px)' }}></div>
        
        <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>
            Work Smarter,<br />Not Harder
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: '1.75' }}>
            Take control of your time with our all-in-one productivity app. Organize tasks, track progress, and focus on what matters—without the overwhelm.
          </p>
          <button 
            style={{ padding: '1.25rem 2.5rem', background: 'white', color: '#9333ea', border: 'none', borderRadius: '50px', fontWeight: '700', fontSize: '1.125rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 30px 60px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <div style={styles.logo}>
                <Music size={32} color="#9333ea" />
                <span style={styles.logoText}>SoundWave</span>
              </div>
              <p style={{ color: '#9ca3af', marginTop: '1rem' }}>
                Your ultimate music productivity platform for the modern creator.
              </p>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.125rem', color: 'white' }}>Product</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Features', 'Pricing', 'Integrations', 'API'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9ca3af', cursor: 'pointer', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.125rem', color: 'white' }}>Company</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9ca3af', cursor: 'pointer', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.125rem', color: 'white' }}>Contact</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                <li style={{ marginBottom: '0.5rem' }}>Email: mohammedabrar7416@gmail.com</li>
                <li style={{ marginBottom: '0.5rem' }}>Phone: +91 8328367416</li>
                <li>Address: Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(147, 51, 234, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: '#9ca3af' }}>© 2025 SoundWave. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <span 
                  key={item}
                  style={{ color: '#9ca3af', cursor: 'pointer', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#c084fc'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
      `}</style>
    </div>
  );
}
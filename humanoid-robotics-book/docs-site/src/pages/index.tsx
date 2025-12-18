import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Chatbot from '@site/src/components/Chatbot';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{
      background: 'linear-gradient(135deg, #00F5FF 0%, #00D4FF 25%, #7B2CBF 50%, #C77DFF 75%, #E0AAFF 100%)',
      position: 'relative',
      overflow: 'hidden',
      height: '100vh', // EXACT FULL SCREEN - NO SCROLL
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.15,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 0%, transparent 50%)
        `
      }}></div>

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className="row" style={{alignItems: 'center'}}>

          {/* LEFT SIDE - Text Content */}
          <div className="col col--6" style={{padding: '2rem'}}>
            <div>
              {/* Main Title */}
              <h1 style={{
                color: 'white',
                fontSize: '2.8rem',
                fontWeight: '900',
                textShadow: '0 0 30px rgba(0, 255, 245, 0.8)',
                marginBottom: '1rem',
                lineHeight: '1.1'
              }}>
                Physical AI &<br/>Humanoid Robotics
              </h1>

              {/* Subtitle */}
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1.2rem',
                fontWeight: '500',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                marginBottom: '1.5rem',
                lineHeight: '1.5'
              }}>
                A Comprehensive Guide to Building Intelligent Humanoid Systems
              </p>

              {/* Decorative Line */}
              <div style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, #00FFF5, #FFD700)',
                marginBottom: '1.5rem',
                boxShadow: '0 0 10px rgba(0, 255, 245, 0.8)',
                borderRadius: '2px'
              }}></div>

              {/* Author Info */}
              <div style={{marginBottom: '2rem'}}>
                <p style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#00FFF5',
                  textShadow: '0 0 20px rgba(0, 255, 245, 0.9)',
                  marginBottom: '0.5rem'
                }}>
                  Aziza Siddiqui
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#E0AAFF',
                  fontWeight: '600'
                }}>
                  🎓 GIAIC Student | 🏆 Hackathon 2025
                </p>
              </div>

              {/* Stats - Compact */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '0.7rem 1.2rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(0, 255, 245, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: '#00FFF5',
                    marginRight: '0.5rem'
                  }}>20</span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'white',
                    fontWeight: '600'
                  }}>Chapters</span>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '0.7rem 1.2rem',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 215, 0, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: '#FFD700',
                    marginRight: '0.5rem'
                  }}>4</span>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'white',
                    fontWeight: '600'
                  }}>Parts</span>
                </div>
              </div>

              {/* Buttons */}
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <Link
                  to="/docs/physical-ai-humanoid-robotics/intro"
                  style={{
                    display: 'inline-block',
                    padding: '0.8rem 2rem',
                    background: 'linear-gradient(135deg, #00FFF5, #00D4FF)',
                    color: '#000',
                    fontWeight: '800',
                    fontSize: '1rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(0, 255, 245, 0.6)',
                    transition: 'all 0.3s ease',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 255, 245, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 255, 245, 0.6)';
                  }}>
                  📚 Start Reading
                </Link>

                <Link
                  to="/docs/physical-ai-humanoid-robotics/part1-foundations/chapter1-introduction"
                  style={{
                    display: 'inline-block',
                    padding: '0.8rem 2rem',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '2px solid #00FFF5',
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '1rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 8px 25px rgba(123, 44, 191, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(0, 255, 245, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}>
                  Chapter 1 →
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Compact Book */}
          <div className="col col--6" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }}>
            <div style={{
              width: '350px',
              height: '480px',
              background: 'linear-gradient(145deg, #5E60CE, #7209B7, #48CAE4)',
              borderRadius: '16px',
              boxShadow: `
                0 25px 60px rgba(123, 44, 191, 0.8),
                0 0 60px rgba(0, 255, 245, 0.6)
              `,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              border: '3px solid rgba(255, 255, 255, 0.4)',
              position: 'relative',
              transform: 'translateY(0)', // STRAIGHT - no rotation
              animation: 'floatBook 3s ease-in-out infinite', // MOVING animation
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
            }}>

              {/* Corner Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                fontSize: '1.5rem'
              }}>⚡</div>

              {/* Robot Icon - Medium Size */}
              <div style={{
                fontSize: '7rem',
                marginBottom: '1rem',
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 245, 0.9))'
              }}>
                🤖
              </div>

              {/* Book Title */}
              <h2 style={{
                color: 'white',
                fontSize: '1.8rem',
                textAlign: 'center',
                fontWeight: '900',
                textShadow: '0 0 25px rgba(0, 255, 245, 1)',
                marginBottom: '1rem',
                lineHeight: '1.15',
                letterSpacing: '1px'
              }}>
                PHYSICAL AI<br/>HUMANOID<br/>ROBOTICS
              </h2>

              {/* Line */}
              <div style={{
                width: '70%',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #00FFF5, #FFD700, #00FFF5, transparent)',
                margin: '1rem 0',
                boxShadow: '0 0 15px #00FFF5'
              }}></div>

              {/* Author */}
              <p style={{
                color: '#FFD700',
                fontSize: '1.2rem',
                fontWeight: '800',
                textShadow: '0 0 15px rgba(255, 215, 0, 1)',
                letterSpacing: '2px'
              }}>
                AZIZA SIDDIQUI
              </p>

              {/* Badge */}
              <div style={{
                marginTop: '1rem',
                padding: '0.5rem 1.2rem',
                background: 'rgba(0, 255, 245, 0.2)',
                border: '2px solid #00FFF5',
                borderRadius: '20px',
                fontSize: '0.85rem',
                color: '#00FFF5',
                fontWeight: '700',
                backdropFilter: 'blur(10px)'
              }}>
                GIAIC 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes floatBook {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 25px 60px rgba(123, 44, 191, 0.8), 0 0 60px rgba(0, 255, 245, 0.6);
          }
          50% {
            transform: translateY(-20px);
            box-shadow: 0 35px 70px rgba(123, 44, 191, 0.9), 0 0 70px rgba(0, 255, 245, 0.7);
          }
        }
      `}</style>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive guide to Physical AI and Humanoid Robotics by Aziza Siddiqui">
      <HomepageHeader />
      {/* REMOVED: HomepageFeatures - niche wala bar nahi chahiye */}
      {/* REMOVED: About Section - sirf title page chahiye */}
      <Chatbot />
    </Layout>
  );
}
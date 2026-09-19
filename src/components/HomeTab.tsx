import React from 'react';
import { TabType } from '../types';

interface HomeTabProps {
  onTabChange: (tab: TabType) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onTabChange }) => {
  return (
    <section className="tab-panel-anim" id="tab-home">
      {/* Hero */}
      <div className="hero">
        <div className="badge">
          <span>✦</span> Pune, Maharashtra · Staffing &amp; HR Services <span>✦</span>
        </div>
        <h1>
          Your Complete
          <br />
          <em>Employee Hub</em>
        </h1>
        <p className="hero-sub">Health Insurance · Spine HR Payslips · Direct HR Support</p>
        <div className="divider"></div>
        <p className="hero-msg">
          <strong>Reliable HR Solutions</strong> offers staffing and talent solutions tailored to every department's needs.
          This self-service portal brings your <strong>Health Insurance e-Card</strong>, <strong>Spine HR payslip access</strong>,
          and direct <strong>HR manager support</strong> together in one easy place.
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => onTabChange('insurance')}>
            🛡️ Insurance e-Card
          </button>
          <button className="btn btn-outline" onClick={() => onTabChange('spine')}>
            📱 Payslip &amp; Spine HR
          </button>
          <button className="btn btn-secondary" onClick={() => onTabChange('support')}>
            ☎️ Contact HR Support
          </button>
        </div>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-num">6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8</div>
            <div className="stat-label">Industry Sectors</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24×7</div>
            <div className="stat-label">HR Support</div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="card">
        <div className="card-header">
          <div className="icon-box">🚀</div>
          <h2 className="card-title">Quick Access</h2>
        </div>
        <div className="quick-grid">
          <button className="quick-card" onClick={() => onTabChange('insurance')}>
            <svg className="quick-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #c9a84c, #a8792a)' }}>
              🛡️
            </div>
            <div className="quick-title">Health Insurance</div>
            <div className="quick-desc">Download your e-Card, find hospitals &amp; file cashless or reimbursement claims.</div>
          </button>

          <button className="quick-card" onClick={() => onTabChange('spine')}>
            <svg className="quick-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #1665c1, #0d4a9e)' }}>
              📱
            </div>
            <div className="quick-title">Spine HR App</div>
            <div className="quick-desc">Download payslips, view CTC &amp; tax details, manage your HR profile.</div>
          </button>

          <button className="quick-card" onClick={() => onTabChange('support')}>
            <svg className="quick-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #1a9e3f, #0d7a2e)' }}>
              💬
            </div>
            <div className="quick-title">Get Support</div>
            <div className="quick-desc">Facing a login, payslip or claim issue? Reach the HR team directly.</div>
          </button>

          <a className="quick-card" href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20need%20assistance%20from%20Reliable%20HR%20Solutions." target="_blank" rel="noreferrer">
            <svg className="quick-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}>
              📱
            </div>
            <div className="quick-title">WhatsApp HR Desk</div>
            <div className="quick-desc">Direct chat with Gaurav Patil (HR Manager) on WhatsApp at 8999299300.</div>
          </a>

          <a className="quick-card" href="https://reliablehr.in/" target="_blank" rel="noreferrer">
            <svg className="quick-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <div className="quick-icon" style={{ background: 'linear-gradient(135deg, #7b4fc9, #5530a0)' }}>
              🌐
            </div>
            <div className="quick-title">Company Website</div>
            <div className="quick-desc">Visit reliablehr.in for job openings, clients &amp; company profile.</div>
          </a>
        </div>
      </div>

      {/* About Reliable HR Solutions */}
      <div className="card">
        <div className="card-header">
          <div className="icon-box">🏢</div>
          <h2 className="card-title">About Reliable HR Solutions</h2>
        </div>
        <p style={{ fontSize: '14px', color: 'rgba(15,23,42,0.72)', lineHeight: 1.85, marginBottom: '16px' }}>
          Reliable HR Solutions provides staffing and workforce management tailored to each department's needs,
          matching organizations with the right professionals across every functional area. Over the years the
          firm has built a strong reputation as a trusted HR partner for eminent corporates across India.
        </p>
        <div className="card-header" style={{ marginBottom: '12px' }}>
          <h2 className="card-title" style={{ fontSize: '16px' }}>
            Our Services
          </h2>
        </div>
        <div className="service-grid">
          <div className="service-tile">
            <span className="service-emoji">👥</span>
            <span className="service-name">Staffing at All Levels</span>
          </div>
          <div className="service-tile">
            <span className="service-emoji">🧾</span>
            <span className="service-name">HR Outsourcing</span>
          </div>
          <div className="service-tile">
            <span className="service-emoji">📋</span>
            <span className="service-name">HR Advisory Services</span>
          </div>
          <div className="service-tile">
            <span className="service-emoji">⚖️</span>
            <span className="service-name">Statutory / Legal Compliance</span>
          </div>
          <div className="service-tile">
            <span className="service-emoji">🧑‍💼</span>
            <span className="service-name">Manpower Consulting</span>
          </div>
          <div className="service-tile">
            <span className="service-emoji">📈</span>
            <span className="service-name">Reliable Placement Services</span>
          </div>
        </div>
        <div className="card-header" style={{ margin: '20px 0 10px' }}>
          <h2 className="card-title" style={{ fontSize: '16px' }}>
            Sectors We Serve
          </h2>
        </div>
        <div className="sector-row">
          <span className="sector-chip">FMCG</span>
          <span className="sector-chip">Automobile</span>
          <span className="sector-chip">Automotive</span>
          <span className="sector-chip">Engineering</span>
          <span className="sector-chip">Pharma</span>
          <span className="sector-chip">SCM</span>
          <span className="sector-chip">Manufacturing</span>
          <span className="sector-chip">Food</span>
        </div>
      </div>

      {/* Leadership */}
      <div className="card">
        <div className="card-header">
          <div className="icon-box">👤</div>
          <h2 className="card-title">Leadership</h2>
        </div>
        <div className="founder-row">
          <div className="founder-avatar">YP</div>
          <div>
            <div className="founder-name">Yashwant Patel</div>
            <div className="founder-role">Founder &amp; Director</div>
            <p className="founder-bio">
              Holds a postgraduate degree in Human Resources Management and an engineering degree, with 20 years
              of experience spanning client management, business operations, sales &amp; distribution, recruitment
              and training. Previously with Hero Motors before founding Reliable, he continues to lead client
              engagement, finance, people development and business expansion for the company.
            </p>
          </div>
        </div>
      </div>

      {/* Visit Our Office */}
      <div className="card">
        <div className="card-header">
          <div className="icon-box">📍</div>
          <h2 className="card-title">Visit Our Office</h2>
        </div>
        <iframe
          className="map-frame"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=18.6432937,73.7984332&z=16&output=embed"
          title="Reliable HR Solutions Office Location"
        />
        <div className="map-address">
          <span>📌</span>
          <span>Office No. 609, 610, 6th Floor, KP Square, Telco Road, Mohan Nagar, Chinchwad, Pune – 411019, Maharashtra, India</span>
        </div>
        <div className="btn-row" style={{ marginTop: '18px', justifyContent: 'flex-start' }}>
          <a className="btn btn-primary" href="https://maps.app.goo.gl/HztFM62dLNxBXwnR6" target="_blank" rel="noreferrer">
            🧭 Get Directions
          </a>
          <a
            className="btn btn-outline-card"
            href="https://api.whatsapp.com/send?phone=918805209610&text=Hello%2C%20I%20have%20a%20query%20for%20Reliable%20HR%20Solutions."
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

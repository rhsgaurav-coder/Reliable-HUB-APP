import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logomark">RHS</div>
        <div className="footer-text-group">
          <div className="footer-company">
            <em>Reliable</em> HR Solutions
          </div>
          <div className="footer-dept">Human Resources Department</div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <p className="footer-name">Gaurav Patil</p>
      <p className="footer-role">HR Manager – Reliable HR Solutions</p>
      <div className="footer-contacts">
        <a className="contact-pill" href="tel:8999299300">
          📞 8999299300
        </a>
        <a className="contact-pill" href="mailto:rhsgaurav@gmail.com">
          ✉️ rhsgaurav@gmail.com
        </a>
        <a className="contact-pill" href="https://reliablehr.in/" target="_blank" rel="noreferrer">
          🌐 reliablehr.in
        </a>
      </div>
      <p className="tagline">"Your career, our commitment."</p>
      <p className="footer-copy">© 2025 Reliable HR Solutions · All employee services managed with care</p>
      <p className="footer-copy">
        designed &amp; engineered by <b style={{ color: '#fff' }}>Gaurav Patil</b>
      </p>
    </footer>
  );
};

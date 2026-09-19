import React from 'react';

export const SupportTab: React.FC = () => {
  return (
    <section className="tab-panel-anim" id="tab-support">
      <div className="hero">
        <div className="badge">
          <span>✦</span> We're Here to Help <span>✦</span>
        </div>
        <h1>
          HR
          <br />
          <em>Support Desk</em>
        </h1>
        <p className="hero-sub">Pick the issue that matches yours — we'll route you the fastest way</p>
        <div className="divider"></div>
        <p className="hero-msg">
          Whether it's a <strong>payslip question</strong>, <strong>insurance claim</strong>, <strong>Spine login issue</strong>,
          or general HR support — connect with our HR team in one quick tap.
        </p>
        <div className="btn-row">
          <a className="btn btn-primary" href="tel:8999299300">
            📞 Call Gaurav Patil (8999299300)
          </a>
          <a
            className="btn btn-outline"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%20Gaurav%2C%20I%20need%20help%20from%20Reliable%20HR%20Solutions."
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp HR Chat
          </a>
        </div>
      </div>

      <div className="card card-support">
        <div className="card-header">
          <div className="icon-box">🧭</div>
          <h2 className="card-title">Common Issues</h2>
        </div>
        <div className="issue-grid">
          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%27m%20unable%20to%20login%20to%20Spine%20HR."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">🔑</span>
            <span className="issue-title">Spine HR Login Issue</span>
            <span className="issue-desc">Forgot password or app won't open</span>
          </a>

          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20have%20a%20question%20about%20my%20payslip."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">💰</span>
            <span className="issue-title">Payslip / Salary Query</span>
            <span className="issue-desc">Missing payslip, salary discrepancy</span>
          </a>

          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20need%20help%20with%20my%20health%20insurance%20e-Card."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">🛡️</span>
            <span className="issue-title">Insurance e-Card Issue</span>
            <span className="issue-desc">Can't download card or claim query</span>
          </a>

          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20need%20help%20filing%20an%20insurance%20claim."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">📤</span>
            <span className="issue-title">Claim Filing Help</span>
            <span className="issue-desc">Cashless or reimbursement claim support</span>
          </a>

          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20have%20a%20general%20HR%20query."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">📄</span>
            <span className="issue-title">General HR Query</span>
            <span className="issue-desc">Documents, policy or other questions</span>
          </a>

          <a
            className="issue-card"
            href="https://api.whatsapp.com/send?phone=918805209610&text=Hello%2C%20I%20have%20a%20company%20or%20placement%20enquiry%20for%20Reliable%20HR%20Solutions."
            target="_blank"
            rel="noreferrer"
          >
            <span className="issue-emoji">🏢</span>
            <span className="issue-title">Company / Placement Query</span>
            <span className="issue-desc">Job openings, clients &amp; placement enquiries</span>
          </a>
        </div>
      </div>

      <div className="card card-support">
        <div className="card-header">
          <div className="icon-box">☎️</div>
          <h2 className="card-title">Direct Contacts</h2>
        </div>
        <div className="info-box">
          <strong>HR Support (Payslip / Insurance / Login):</strong> Gaurav Patil — 8999299300
          <br />
          <strong>Company / Placement Enquiries:</strong> WhatsApp — 8805209610
          <br />
          <strong>Insurance Helpline (Bajaj Allianz):</strong> 1800-209-5858
          <br />
          <strong>Email:</strong> rhsgaurav@gmail.com
        </div>
        <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
          <a className="btn btn-primary" href="tel:8999299300">
            📞 Call HR Support
          </a>
          <a
            className="btn btn-outline-card"
            href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%2C%20I%20have%20an%20enquiry%20regarding%20Reliable%20HR%20Solutions."
            target="_blank"
            rel="noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
          <a className="btn btn-outline-card" href="mailto:rhsgaurav@gmail.com">
            ✉️ Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

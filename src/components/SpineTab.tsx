import React from 'react';

export const SpineTab: React.FC = () => {
  return (
    <section className="tab-panel-anim" id="tab-spine">
      <div className="hero">
        <div className="badge">
          <span>✦</span> Employee Self Service <span>✦</span>
        </div>
        <h1>
          Spine HR
          <br />
          <em>App Guide</em>
        </h1>
        <p className="hero-sub">Your Payslip &amp; HR Portal in Your Pocket</p>
        <div className="divider"></div>
        <p className="hero-msg">
          Use the <strong>Spine HR App</strong> to download your monthly <strong>Payslips</strong>, view CTC details, check Tax Projections and manage your HR profile — anytime, anywhere.
        </p>
        <div className="btn-row">
          <a
            className="btn btn-primary"
            href="https://play.google.com/store/apps/details?id=spine.hr.hrmobile&hl=en_IN"
            target="_blank"
            rel="noreferrer"
          >
            ▶ Download on Play Store
          </a>
          <a
            className="btn btn-outline"
            href="https://apps.apple.com/in/app/spine-hr/id1558135438"
            target="_blank"
            rel="noreferrer"
          >
            🍎 Download on App Store
          </a>
        </div>
      </div>

      <div className="card card-spine">
        <div className="card-header">
          <div className="icon-box">📱</div>
          <h2 className="card-title">How to Set Up &amp; Login</h2>
        </div>
        <div className="spine-steps">
          <div className="spine-step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h4>Download the Spine HR App</h4>
              <p>
                Open <strong>Play Store</strong> (Android) or <strong>App Store</strong> (iPhone), search <strong>"SpineHR"</strong> and install it. The app icon is a colourful triangle logo.
              </p>
            </div>
          </div>
          <div className="spine-step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h4>Enter Corporate ID</h4>
              <p>
                On the first screen, enter the Corporate ID as: <span className="code-pill">RELIAB9</span> — then tap <strong>"Go For HR"</strong> to proceed to the login page.
              </p>
            </div>
          </div>
          <div className="spine-step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h4>Enter Your User Name</h4>
              <p>
                In the <strong>User Name</strong> field, enter your <strong>Employee RHS Code</strong> that you received from HR. Example: <span className="code-pill">RHS1234</span>
              </p>
            </div>
          </div>
          <div className="spine-step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h4>Enter Your Password</h4>
              <p>
                Your default password is your <strong>Date of Birth</strong> in <span className="code-pill">DD/MM/YYYY</span> format.
                <br />
                Example — if your DOB is 23 March 1998, enter: <span className="code-pill">23/03/1998</span>
              </p>
            </div>
          </div>
          <div className="spine-step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h4>Login &amp; Navigate to Self Service</h4>
              <p>
                Tap <strong>LOGIN</strong>. After login, on the Home screen tap <strong>"Self Service"</strong> tile to access all employee documents.
              </p>
            </div>
          </div>
          <div className="spine-step">
            <div className="step-num">6</div>
            <div className="step-content">
              <h4>Download Your Payslip</h4>
              <p>
                Inside Self Service, tap <strong>"Download Payslip"</strong>. A list of months will appear — tap the month you need and your payslip will open instantly as a PDF.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-spine">
        <div className="card-header">
          <div className="icon-box">⚡</div>
          <h2 className="card-title">What You Can Do in Spine HR</h2>
        </div>
        <div className="grid2">
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Download Monthly Payslips</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>View &amp; Download CTC Breakup</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Download Tax Projection (Form 16)</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>View Personal &amp; Bank Details</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>View Nominee &amp; Family Info</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Edit Tax Eligibility Details</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Check Statutory Information</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>View Qualification Records</span>
          </div>
        </div>
      </div>

      <div className="card card-spine">
        <div className="card-header">
          <div className="icon-box">💡</div>
          <h2 className="card-title">Quick Reference</h2>
        </div>
        <div className="info-box">
          <strong>Company Code:</strong>{' '}
          <span style={{ color: 'var(--gold2)', fontWeight: 700, letterSpacing: '1px' }}>RELIAB9</span>
          <br />
          <strong>User Name:</strong> Your Employee RHS Code (e.g. RHS1234)
          <br />
          <strong>Default Password:</strong> Your Date of Birth in DD/MM/YYYY format
          <br />
          <strong>Web Access:</strong>{' '}
          <a href="https://rhs.spinehrm.in" target="_blank" rel="noreferrer" style={{ color: 'var(--gold3)' }}>
            rhs.spinehrm.in
          </a>
        </div>
        <div
          className="info-box"
          style={{
            background: 'rgba(255,80,80,0.08)',
            borderColor: 'rgba(255,100,100,0.35)',
            marginTop: '4px',
          }}
        >
          <strong style={{ color: '#b91c1c' }}>🔔 Important Note:</strong>
          <br />
          <span style={{ color: 'rgba(15,23,42,0.85)' }}>
            Your Spine HR App will open <strong style={{ color: '#dc2626' }}>only after your payment is done</strong>. Please ensure your payment is completed before attempting to log in.
          </span>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
          ⚠️ If you face a login issue or forgot password, contact{' '}
          <strong style={{ color: 'rgba(15,23,42,0.8)' }}>Gaurav Patil – 8999299300</strong> from the HR team for assistance.
        </p>
      </div>
    </section>
  );
};

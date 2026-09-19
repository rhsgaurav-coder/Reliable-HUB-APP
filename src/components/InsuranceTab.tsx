import React, { useState } from 'react';
import { ExternalLink, Shield, FileText, Phone, Building2, Smartphone } from 'lucide-react';

export const InsuranceTab: React.FC = () => {
  const [claimView, setClaimView] = useState<'all' | 'cashless' | 'reimbursement'>('all');

  return (
    <section className="tab-panel-anim" id="tab-insurance">
      <div className="hero">
        <div className="powered-strip">
          <div className="powered-avatar">RHS</div>
          <span className="powered-text">
            Issued by <strong>Reliable HR Solutions</strong>
          </span>
        </div>
        <div className="badge">
          <span>✦</span> Bajaj Allianz · Group Health Policy <span>✦</span>
        </div>
        <h1>
          Health
          <br />
          <em>Insurance e-Card</em>
        </h1>
        <p className="hero-sub">Cashless Treatment · Bajaj Allianz Network Hospitals</p>
        <div className="divider"></div>
        <p className="hero-msg">
          Your <strong>Health Insurance</strong> is provided under Bajaj Allianz. Reimbursement claims are active from Day 1, with <strong>Cashless Treatment &amp; e-Card Download</strong> applicable 45 days after joining.
        </p>
      </div>

      {/* How to Download e-Card */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">📋</div>
          <h2 className="card-title">How to Download Your e-Card</h2>
        </div>

        <div
          className="info-box"
          style={{
            background: 'rgba(255,80,80,0.08)',
            borderColor: 'rgba(255,100,100,0.35)',
            marginBottom: '18px',
          }}
        >
          <strong style={{ color: '#b91c1c' }}>🔔 Important Note:</strong>
          <br />
          <span style={{ color: 'rgba(15,23,42,0.85)' }}>
            Your health insurance coverage begins from <strong style={{ color: '#0f172a' }}>Day 1 of joining</strong> for reimbursement claims.
            However, cashless hospitalization &amp; Card Download will be applicable from <strong style={{ color: '#b91c1c' }}>45 Days</strong> after your date of joining.
          </span>
        </div>

        <ol className="steps">
          <li>
            <div className="step-text">
              Open the <strong>Download e-Card</strong> portal link below
            </div>
          </li>
          <li>
            <div className="step-text">
              Enter your official <strong>Employee RHS Code</strong>
            </div>
          </li>
          <li>
            <div className="step-text">
              Enter Policy Number:
              <div className="mt-1.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200/90 text-xs text-amber-950 font-medium leading-relaxed">
                <strong>📌 Policy Number Note:</strong> Because Group Mediclaim policy numbers change and renew every year, please tap below to message <strong>Gaurav Patil (HR Manager)</strong> on WhatsApp for the current active policy number.
                <div className="mt-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%20Gaurav%2C%20please%20share%20the%20active%20Health%20Insurance%20Policy%20Number%20for%20e-Card%20download."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                  >
                    💬 WhatsApp for Policy No.
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="step-text">
              ID Card No. is <strong>Not Required</strong> (leave blank)
            </div>
          </li>
          <li>
            <div className="step-text">
              Complete the security <strong>Captcha</strong> code
            </div>
          </li>
          <li>
            <div className="step-text">
              Click <strong>Search Details</strong>
            </div>
          </li>
          <li>
            <div className="step-text">
              Click <strong>Generate For All</strong> to download your e-Card PDF
            </div>
          </li>
        </ol>
        <div className="btn-row" style={{ marginTop: '22px' }}>
          <a
            className="btn btn-primary"
            href="https://hcm.bajajgeneral.com/BagicHCM/Health_Ecard/hlth_idcrddwn.jsp"
            target="_blank"
            rel="noreferrer"
          >
            💳 Download e-Card
          </a>
          <a
            className="btn btn-outline-card"
            href="https://www.bajajgeneralinsurance.com/branch-locator.html"
            target="_blank"
            rel="noreferrer"
          >
            🏥 Find Network Hospital
          </a>
        </div>
      </div>

      {/* e-Card Benefits */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">🛡️</div>
          <h2 className="card-title">e-Card Benefits</h2>
        </div>
        <div className="grid2">
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Cashless hospitalization</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Zero paperwork at admission</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Instant identity verification</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Covers all enrolled family members</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>Valid across 6,500+ network hospitals</span>
          </div>
          <div className="benefit-item">
            <div className="bdot"></div>
            <span>24×7 Bajaj Allianz helpline support</span>
          </div>
        </div>
      </div>

      {/* Policy Details (Mobile Aligned Grid) */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">📌</div>
          <h2 className="card-title">Policy Details &amp; Renewal Note</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
              Insurer
            </span>
            <span className="text-sm font-bold text-slate-900 mt-1 block">
              Bajaj Allianz General Insurance Co. Ltd.
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase font-bold text-amber-900 tracking-wider block">
                Policy Number (Annual Renewal)
              </span>
              <span className="text-xs sm:text-sm font-bold text-amber-950 mt-1.5 block leading-snug">
                Contact Gaurav Patil for Current Year Policy No.
              </span>
            </div>
            <div className="mt-2.5">
              <a
                href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%20Gaurav%2C%20please%20share%20the%20active%20Health%20Insurance%20Policy%20Number%20for%20e-Card%20download."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-sm"
              >
                💬 WhatsApp for Policy No.
              </a>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
              Policy Type
            </span>
            <span className="text-sm font-bold text-slate-900 mt-1 block">
              Group Mediclaim Policy
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
              Coverage
            </span>
            <span className="text-sm font-bold text-slate-900 mt-1 block">
              Employee + Dependents (Spouse &amp; Children)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 sm:col-span-2">
            <span className="text-[11px] uppercase font-bold text-indigo-700 tracking-wider block">
              Claim Settlement Type
            </span>
            <span className="text-sm font-semibold text-indigo-950 mt-1 block">
              Cashless at 6,500+ Network Hospitals &middot; Direct Reimbursement elsewhere
            </span>
          </div>
        </div>

        {/* Policy Number Renewal Notice */}
        <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <span className="text-xl mt-0.5">🔄</span>
            <div>
              <div className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                Annual Policy Renewal Notice
              </div>
              <div className="text-xs text-amber-900/90 mt-0.5 leading-relaxed">
                Group Mediclaim policy numbers are renewed annually by the company. To ensure you have the active policy number for the current year, please reach out on WhatsApp to <strong>Gaurav Patil (HR Manager)</strong>.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
            <a
              href="https://api.whatsapp.com/send?phone=918999299300&text=Hi%20Gaurav%2C%20please%20share%20the%20active%20Health%20Insurance%20Policy%20Number%20for%20e-Card%20download."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors text-center"
            >
              💬 WhatsApp for Policy No.
            </a>
          </div>
        </div>
      </div>

      {/* Online Claim Filing Procedure (Mobile Aligned) */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">🖥️</div>
          <h2 className="card-title">Online Claim Filing Procedure</h2>
        </div>

        {/* Claim Procedure Mode Filter for Mobile & Desktop */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl mb-4 text-xs font-semibold overflow-x-auto">
          <button
            type="button"
            onClick={() => setClaimView('all')}
            className={`flex-1 py-1.5 px-3 rounded-lg transition-all whitespace-nowrap text-center ${
              claimView === 'all'
                ? 'bg-white text-indigo-950 shadow-sm border border-slate-200/90 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Claim Types
          </button>
          <button
            type="button"
            onClick={() => setClaimView('cashless')}
            className={`flex-1 py-1.5 px-3 rounded-lg transition-all whitespace-nowrap text-center ${
              claimView === 'cashless'
                ? 'bg-white text-amber-900 shadow-sm border border-amber-200/90 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🏥 Cashless
          </button>
          <button
            type="button"
            onClick={() => setClaimView('reimbursement')}
            className={`flex-1 py-1.5 px-3 rounded-lg transition-all whitespace-nowrap text-center ${
              claimView === 'reimbursement'
                ? 'bg-white text-sky-900 shadow-sm border border-sky-200/90 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📤 Reimbursement
          </button>
        </div>

        {/* Cashless Claim Section */}
        {(claimView === 'all' || claimView === 'cashless') && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50/80 border border-amber-200/80 rounded-xl p-3 sm:p-3.5 mb-3 flex items-start sm:items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-base flex-shrink-0">
                  🏥
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-950">
                    Cashless Claim Procedure
                  </h3>
                  <p className="text-xs text-amber-800">
                    For Planned &amp; Emergency Treatment at Network Hospitals
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300/80 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                ⚡ 1–4 hrs Pre-Auth Approval
              </span>
            </div>

            <ol className="steps steps-claim" style={{ marginBottom: '14px' }}>
              <li>
                <div className="step-text">
                  Visit a <strong>Bajaj Allianz Network Hospital</strong> — present your insurance e-Card and photo ID at the insurance desk.
                </div>
              </li>
              <li>
                <div className="step-text">
                  The hospital's TPA / insurance desk sends a <strong>Pre-Authorization Request</strong> to Bajaj Allianz on your behalf.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Bajaj Allianz reviews &amp; sends an <strong>approval / query</strong> within <strong>2–4 hours</strong> (planned) or <strong>1 hour</strong> (emergency).
                </div>
              </li>
              <li>
                <div className="step-text">
                  Once approved, treatment proceeds with <strong>no upfront medical payment</strong> required for covered expenses.
                </div>
              </li>
              <li>
                <div className="step-text">
                  At discharge, review and sign the <strong>Final Claim Form</strong> provided by the hospital; any non-medical or uncovered items are settled directly.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Track live claim status using the <strong>Caringly Yours App</strong> or via the Bajaj Allianz web portal.
                </div>
              </li>
            </ol>

            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              <a
                href="https://www.bajajgeneralinsurance.com/branch-locator.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-100/80 text-amber-950 hover:bg-amber-200 transition-colors"
              >
                <Building2 className="w-3.5 h-3.5" /> Find Network Hospital
              </a>
              <a
                href="tel:18002095858"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Bajaj 24×7: 1800-209-5858
              </a>
            </div>
          </div>
        )}

        {/* Reimbursement Claim Section */}
        {(claimView === 'all' || claimView === 'reimbursement') && (
          <div className="mb-4">
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50/80 border border-sky-200/80 rounded-xl p-3 sm:p-3.5 mb-3 flex items-start sm:items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-base flex-shrink-0">
                  📤
                </div>
                <div>
                  <h3 className="text-sm font-bold text-sky-950">
                    Reimbursement Claim Procedure
                  </h3>
                  <p className="text-xs text-sky-800">
                    For Non-Network Hospitals or self-paid treatment
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-sky-900 bg-sky-100/90 border border-sky-300/80 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                💳 7–15 Days Direct NEFT Payout
              </span>
            </div>

            <ol className="steps steps-claim" style={{ marginBottom: '14px' }}>
              <li>
                <div className="step-text">
                  Pay hospital bills directly and collect <strong>all original bills, receipts, doctor prescriptions &amp; diagnostic reports</strong>.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Log in to <span className="highlight">www.bajajallianz.com</span> or open the official <strong>Caringly Yours App</strong>.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Navigate to <strong>Claims &rarr; Health &rarr; Intimate a Claim</strong> and enter patient and policy details.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Upload clear scanned copies of: <strong>Discharge Summary, Detailed Hospital Bills, Doctor Prescriptions, Diagnostic Reports &amp; Cancelled Cheque / NEFT Form</strong>.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Submit the online claim and save your <strong>Claim Reference Number</strong> for tracking.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Bajaj Allianz processes the claim within <strong>7–15 working days</strong>, and the approved amount is credited directly to your bank account via NEFT.
                </div>
              </li>
              <li>
                <div className="step-text">
                  Track real-time updates via the <strong>Caringly Yours App</strong>, website portal, or toll-free helpline <strong>1800-209-5858</strong>.
                </div>
              </li>
            </ol>

            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              <a
                href="https://drive.google.com/file/d/1iM64xMWss_zW2d_5VBwZahcITHW5TIvs/view"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-100/80 text-sky-950 hover:bg-sky-200 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" /> Download Reimbursement Form
              </a>
              <a
                href="https://drive.google.com/file/d/1V69TR1EyaWBo_jc_SM747DN_X7CXtrcX/view"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" /> Download NEFT Form
              </a>
            </div>
          </div>
        )}

        {/* Important Warning Notice */}
        <div className="info-box bg-amber-50/90 border border-amber-200/90 text-amber-950 mt-4 rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed" style={{ marginBottom: 0 }}>
          <div className="flex items-start gap-2.5">
            <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <strong className="font-bold text-amber-950 block mb-1">
                Mandatory Intimation Timelines:
              </strong>
              <p className="text-amber-900">
                Please intimate your claim within <strong>24 hours for emergency admission</strong> and at least <strong>72 hours prior for planned hospitalization</strong> to prevent processing delays. Keep all original physical documents safe until final settlement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bajaj Allianz Claim App & Portal */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">📱</div>
          <h2 className="card-title">Bajaj Allianz Claim App &amp; Portal</h2>
        </div>
        <div className="app-grid">
          <a
            className="app-card"
            href="https://play.google.com/store/apps/details?id=com.ba.cp.controller&hl=en_IN"
            target="_blank"
            rel="noreferrer"
          >
            <div className="app-icon green">🤖</div>
            <div>
              <div className="app-name">Caringly Yours</div>
              <div className="app-desc">Official Bajaj Allianz Health &amp; Claims App</div>
              <div className="app-tag">Android · Play Store</div>
            </div>
          </a>

          <a
            className="app-card"
            href="https://apps.apple.com/dz/app/bajaj-general/id982500448"
            target="_blank"
            rel="noreferrer"
          >
            <div className="app-icon blue">🍎</div>
            <div>
              <div className="app-name">Caringly Yours</div>
              <div className="app-desc">Official Bajaj Allianz Health &amp; Claims App</div>
              <div className="app-tag">iOS · App Store</div>
            </div>
          </a>

          <a
            className="app-card"
            href="https://www.bajajgeneralinsurance.com/health-insurance-plans/health-insurance-claim-process.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="app-icon web">🌐</div>
            <div>
              <div className="app-name">Online Claim Portal</div>
              <div className="app-desc">File &amp; track health claims on the web</div>
              <div className="app-tag">Web · bajajallianz.com</div>
            </div>
          </a>

          <a
            className="app-card"
            href="https://www.bajajgeneralinsurance.com/about-us/customer-service.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="app-icon purple">👤</div>
            <div>
              <div className="app-name">Customer Self-Service</div>
              <div className="app-desc">Policy details, e-Card &amp; claim status</div>
              <div className="app-tag">Web · Self Service Portal</div>
            </div>
          </a>
        </div>

        <div className="info-box" style={{ marginBottom: 0 }}>
          📲 <strong>App Features:</strong> Intimate a claim &middot; Upload documents &middot; Track claim status &middot; Download e-Card &middot; Find network hospitals &middot; 24×7 chat support — all from your phone.
        </div>
      </div>

      {/* Policy & Claim Documents */}
      <div className="card card-insurance">
        <div className="card-header">
          <div className="icon-box">📄</div>
          <h2 className="card-title">Policy &amp; Claim Documents</h2>
        </div>
        <div className="docs-row">
          <a
            className="btn-doc"
            href="https://drive.google.com/file/d/1V69TR1EyaWBo_jc_SM747DN_X7CXtrcX/view"
            target="_blank"
            rel="noreferrer"
          >
            📥 NEFT Form
          </a>
          <a
            className="btn-doc"
            href="https://drive.google.com/file/d/1iM64xMWss_zW2d_5VBwZahcITHW5TIvs/view"
            target="_blank"
            rel="noreferrer"
          >
            📥 Reimbursement Form
          </a>
          <a
            className="btn-doc"
            href="https://drive.google.com/file/d/1dyy4z1wUdmSEIpo3gQP1Btm3-6k3dirj/view"
            target="_blank"
            rel="noreferrer"
          >
            📥 Policy Details PPT
          </a>
        </div>
      </div>
    </section>
  );
};


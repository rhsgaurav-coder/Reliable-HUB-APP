import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Enable CORS for web, mobile apps, and external preview clients
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
});

const SYSTEM_INSTRUCTION = `You are "Reliable Agent", the brilliant, dedicated, and multi-talented AI Assistant for Reliable HR Solutions (RHS), Pune, Maharashtra, as well as an all-round intelligent workplace and professional advisor.

### Agent Personality & Core Directives:
- Your name is **Reliable Agent**.
- Always introduce yourself warmly as **Reliable Agent**.
- You are exceptionally knowledgeable, articulate, courteous, empathetic, and talented.
- You possess complete, in-depth expertise on Reliable HR Solutions, Employee Hub services, Health Insurance (Bajaj Allianz), Spine HR, and Indian HR statutory guidelines.
- In addition, you have **full open AI intelligence**—you can assist employees with general professional knowledge, drafting official emails (leaves, grievances, requests), explaining PF/ESIC/taxation/labor laws, career and interview tips, and any general inquiries with precision and clarity.
- Never refuse a question by claiming you can only answer company queries. Answer every question helpfully, thoroughly, and intelligently!

### CRITICAL GREETING & OPENING RULE (STRICT):
- When an employee greets you (e.g., "Hi", "Hello", "Hey", "Good morning", "Hi there") or starts the conversation without asking a specific question, YOUR RESPONSE MUST BE ONLY:
Hi Welcome to Reliable
How can I help you today?
- DO NOT display or dump any company data, policy details, or bullet points in your initial greeting.
- ONLY when the employee asks a specific question (e.g., about e-cards, hospital claims, Spine HR, payslips, PF, contacts, drafting emails, etc.), provide full, intelligent, and detailed answers.

---

### Company & Employee Hub Knowledge Base:

1. Reliable HR Solutions (RHS) Profile:
   - **Full Name:** Reliable HR Solutions
   - **Experience:** Over 6+ years of dedicated HR leadership & staffing excellence.
   - **Founder & Director:** Mr. Yashwant Patel (Post Graduate in HR Management & Engineering, 20+ years of industrial experience, formerly with Hero Motors).
   - **Corporate Office:** Office No. 609, 610, 6th Floor, KP Square, Telco Road, Mohan Nagar, Chinchwad, Pune – 411019, Maharashtra, India.
   - **Official Website:** https://reliablehr.in/
   - **Specialized Industry Sectors:** FMCG, Automobile, Automotive Engineering, Pharmaceuticals, Supply Chain & Logistics, Manufacturing, Food & Beverage.
   - **Core Services:** Executive Search & Permanent Staffing, Temporary/Flexi Staffing, HR Outsourcing, Payroll Processing, Statutory & Legal Compliance Management, HR Advisory & Manpower Consulting.

2. Health Insurance & Medical Coverage (Bajaj Allianz):
   - **Insurance Partner:** Bajaj Allianz General Insurance Co. Ltd.
   - **Policy Name:** Group Mediclaim Insurance Policy (GMC)
   - **Policy Number:** \`OG-26-2025-8403-00000044\`
   - **Covered Persons:** Employee + Dependents (Spouse and Children)
   - **Step-by-Step e-Card Download Procedure:**
     1. Open official Bajaj HCM e-card portal: https://hcm.bajajgeneral.com/BagicHCM/Health_Ecard/hlth_idcrddwn.jsp
     2. Enter official **Employee RHS Code**
     3. Enter Policy No: \`OG-26-2025-8403-00000044\`
     4. **ID Card No. is NOT required** (leave it blank)
     5. Complete the Captcha security code
     6. Click **Search Details**
     7. Click **Generate For All** to download the e-Card PDF
   - **Cashless Treatment (Network Hospitals):**
     - Over 6,500+ empanelled Bajaj Allianz network hospitals across India.
     - Present e-Card and government photo ID at the hospital's TPA / insurance desk.
     - Hospital submits Pre-Authorization request directly to Bajaj Allianz.
     - Pre-Auth approval timeframe: 1 hour for emergencies, 2 to 4 hours for planned admissions.
     - Zero upfront payment for all medically covered expenses.
     - Sign final claim summary at discharge; pay only non-medical exclusions.
   - **Reimbursement Claims (Non-Network Hospitals):**
     - Pay hospital bills directly and preserve all original documentation (Discharge Summary, detailed itemized bills, payment receipts, doctor prescriptions, diagnostic reports).
     - Intimate claim within **24 hours for emergency admission** or **72 hours prior for planned hospitalization** via the Caringly Yours App or bajajallianz.com.
     - Upload scanned copies of medical bills, discharge summary, diagnostic reports, along with a signed NEFT form and cancelled cheque.
     - Approved claim funds are credited directly to the employee's bank account via NEFT within 7–15 working days.
   - **Bajaj Allianz 24×7 Helplines:** 1800-209-5858 / 1800-22-5858. Mobile App: "Caringly Yours" (Google Play & iOS App Store).

3. Spine HR Mobile App & Portal:
   - **Web Portal:** https://rhs.spinehrm.in
   - **Mobile App:** "SpineHR" (Available on Android Play Store & Apple iOS App Store).
   - **Corporate ID:** \`RELIAB9\` (always in uppercase)
   - **User Name:** Employee RHS Code (e.g., RHS1001)
   - **Default Password:** Date of Birth in \`DD/MM/YYYY\` format (e.g., 23/03/1998)
   - **CRITICAL ACTIVATION RULE:** The Spine HR App and web portal will open and allow login **ONLY AFTER your first payment/salary processing cycle is completed**.
   - **Portal Capabilities:** Download monthly payslip PDFs, view detailed CTC breakup, access annual tax computation sheets (Form 16 projection), check leave balances, apply for leaves, and verify bank details and statutory information.

4. Key HR Contacts & Escalation:
   - **Gaurav Patil (HR Manager):** 📞 8999299300 | ✉️ rhsgaurav@gmail.com
     *(Direct contact for login issues, payslip queries, insurance cards, claim assistance, and onboarding)*
   - **Company & Placement Enquiries WhatsApp:** 7373524524
   - **Bajaj Allianz 24x7 Helpline:** 1800-209-5858

---

### Broad Statutory, Labor Law & HR Advisory Knowledge:

1. **Provident Fund (PF / EPF):**
   - 12% of Basic + DA contributed by employee, 12% by employer (3.67% to EPF + 8.33% to EPS pension scheme, capped at statutory wage ceiling).
   - UAN (Universal Account Number) is activated at unifiedportal-mem.epfindia.gov.in.
   - Passbook and balance checking via EPFO portal or UMANG app.
   - PF Transfer: Use Online Transfer Claim Portal (OTCP) when switching employers.
   - Withdrawals: Form 19 (full settlement after leaving employment), Form 10C (pension withdrawal/scheme certificate), Form 31 (advance for medical, house construction, marriage, illness).

2. **ESIC (Employees' State Insurance):**
   - Applies to employees with monthly gross salary up to Rs. 21,000.
   - Employee contribution: 0.75%, Employer contribution: 3.25%.
   - Full medical care for self and dependents at ESI dispensaries and empanelled hospitals, plus sickness cash benefit and maternity benefit (26 weeks).

3. **Gratuity (Payment of Gratuity Act 1972):**
   - Eligibility: Minimum 5 continuous years of service in an organization.
   - Formula: (15 * Last Drawn Basic Salary * Tenured Years) / 26.

4. **Income Tax & Form 16:**
   - Form 16 Part A & Part B issued annually by HR after financial year-end.
   - Difference between New Tax Regime (default concessional slab rates with standard deduction of Rs. 75,000) and Old Tax Regime (allowing 80C, 80D, HRA, home loan deductions).

5. **Workplace Writing & Professional Etiquette:**
   - Provide ready-to-use email templates for sick leave, casual leave, maternity leave, salary slip request, resignation with notice period, and experience certificate requests.

---

### Communication & Formatting Style:
- Professional, warm, empowering, and respectful.
- Use clean Markdown with headers, bold highlights, concise bullet points, and code snippets for reference numbers (\`RELIAB9\`, \`OG-26-2025-8403-00000044\`).
- If an employee has an urgent issue, always recommend reaching out to **Gaurav Patil (8999299300)**.
- If asked general questions, answer with full intelligence and depth!`;

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Fallback intelligent responder if API key is not yet configured
function getFallbackAnswer(question: string): string {
  const q = question.toLowerCase();

  // Greeting / Hello
  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q === "hi there" ||
    q === "good morning" ||
    q === "good afternoon" ||
    q === "good evening" ||
    q.startsWith("hi ") ||
    q.startsWith("hello ") ||
    q.startsWith("hey ") ||
    q.includes("welcome")
  ) {
    return `Hi Welcome to Reliable\nHow can I help you today?`;
  }

  // Health Insurance / e-Card
  if (q.includes("policy") || q.includes("insurance") || q.includes("ecard") || q.includes("e-card") || q.includes("card")) {
    return `### 🛡️ Health Insurance e-Card Guide
- **Insurer:** Bajaj Allianz General Insurance Co. Ltd.
- **Policy Number:** \`OG-26-2025-8403-00000044\`
- **Coverage:** Employee + Dependents (Spouse & Children)
- **Cashless Hospitals:** 6,500+ Network Hospitals across India

**How to Download Your e-Card (Step-by-Step):**
1. Open the **Download e-Card** portal: https://hcm.bajajgeneral.com/BagicHCM/Health_Ecard/hlth_idcrddwn.jsp
2. Enter your official **Employee RHS Code**
3. Enter Policy Number: \`OG-26-2025-8403-00000044\`
4. Leave ID Card No. **blank** (not required)
5. Fill the Captcha and click **Search Details** -> **Generate For All**

Need emergency hospital claim assistance? Call Bajaj Allianz 24x7 helpline: **1800-209-5858** or HR Support **Gaurav Patil: 8999299300**.`;
  }

  // Spine HR / Payslips / Salary
  if (q.includes("spine") || q.includes("payslip") || q.includes("salary") || q.includes("login") || q.includes("password") || q.includes("corporate")) {
    return `### 📱 Spine HR Login & Payslip Guide
- **Corporate ID:** \`RELIAB9\`
- **User Name:** Your Employee RHS Code (e.g. \`RHS1001\`)
- **Default Password:** Your Date of Birth in \`DD/MM/YYYY\` format (e.g. \`23/03/1998\`)
- **Web Portal:** https://rhs.spinehrm.in
- **Mobile App:** Search "SpineHR" on Google Play Store or iOS App Store

⚠️ **Important Activation Rule:**
Your Spine HR account and payslip module will open **only after your first salary/payment processing cycle is finalized**.

Need a password reset or login help? Contact **Gaurav Patil (HR): 8999299300**.`;
  }

  // Claims
  if (q.includes("claim") || q.includes("hospital") || q.includes("cashless") || q.includes("reimbursement")) {
    return `### 🏥 Bajaj Allianz Claim Filing Process

**1. Cashless Claims (Network Hospitals):**
- Visit any Bajaj Allianz network hospital (6,500+ locations).
- Present your e-Card and photo ID at the insurance/TPA desk.
- Hospital submits Pre-Auth. Approval usually arrives in **1 to 4 hours**.
- Zero upfront payment for all covered treatments; pay only non-medical items at discharge.

**2. Reimbursement Claims (Non-Network Hospitals):**
- Settle hospital bills directly and collect all original bills, payment receipts, doctor prescriptions, and discharge summary.
- Intimate within **24 hours for emergency** or **72 hours for planned** hospitalization via the **Caringly Yours App** or bajajallianz.com.
- Upload documents along with a signed NEFT form and cancelled cheque.
- Approved funds are directly credited to your bank account within **7–15 working days**.
- Helpline: **1800-209-5858**.`;
  }

  // Provident Fund / PF / UAN
  if (q.includes("pf") || q.includes("provident") || q.includes("epf") || q.includes("uan")) {
    return `### 💼 Provident Fund (EPF / UAN) Information
- **EPF Contribution:** 12% of basic wage contributed by employee, and 12% by employer (split into 3.67% EPF + 8.33% EPS pension).
- **UAN Portal:** Activate your UAN and check monthly passbook at [unifiedportal-mem.epfindia.gov.in](https://unifiedportal-mem.epfindia.gov.in).
- **PF Withdrawal / Transfer:**
  - When changing jobs, submit an online transfer request via OTCP on the member portal.
  - Form 19 (Final PF settlement), Form 10C (Pension withdrawal), Form 31 (Advance for medical/marriage/housing).
- Contact **Gaurav Patil (8999299300)** for your UAN number or PF onboarding details.`;
  }

  // ESIC
  if (q.includes("esic") || q.includes("esi")) {
    return `### 🏥 ESIC (Employees' State Insurance)
- **Eligibility:** Gross salary up to Rs. 21,000 per month.
- **Contributions:** Employee: 0.75%, Employer: 3.25%.
- **Benefits:** Full medical care for self and dependents at ESI dispensaries and hospitals, sickness benefit, and 26 weeks paid maternity benefit.
- You can obtain your **Pehchan Card** or e-Pehchan card through HR.`;
  }

  // Leave application / Email draft
  if (q.includes("leave") || q.includes("email") || q.includes("letter") || q.includes("application")) {
    return `### ✉️ Sample Leave Application Email

**Subject:** Leave Application - [Your Name] - [Employee RHS Code]

Dear [Manager's Name],

I am writing to formally request leave for [Number of Days] day(s), from [Start Date] to [End Date], due to [Reason, e.g., personal reasons / medical checkup / family emergency].

I will ensure all my urgent tasks are completed or delegated to [Colleague's Name] before my departure. In case of any emergencies, I can be reached at [Your Phone Number].

Thank you for your understanding.

Warm regards,  
**[Your Name]**  
Employee Code: [RHS Code]  
Phone: [Your Contact]`;
  }

  // Resignation
  if (q.includes("resign") || q.includes("notice period") || q.includes("f&f") || q.includes("settlement")) {
    return `### 📄 Resignation & Exit Formalities
- **Notice Period:** As per your employment appointment letter (typically 30 to 60 days).
- **Procedure:** Submit a formal resignation email to your reporting manager and HR (rhsgaurav@gmail.com).
- **Handover:** Complete transition of all responsibilities, assets, and project files.
- **Full & Final Settlement (F&F):** Cleared within 30–45 days post last working day, along with Relieving Letter & Experience Certificate.`;
  }

  // Reliable HR Solutions Company Info
  if (q.includes("reliable") || q.includes("company") || q.includes("director") || q.includes("yashwant") || q.includes("services")) {
    return `### 🏢 About Reliable HR Solutions (RHS)
- **Experience:** 6+ years of proven HR & staffing leadership.
- **Founder & Director:** Mr. Yashwant Patel (PG in HR Management & Engineering, 20+ years of industrial experience, ex-Hero Motors).
- **Services:** Executive Staffing, HR Outsourcing, Payroll Processing, Statutory & Legal Compliance, Manpower Consulting.
- **Office Location:** Office No. 609, 610, 6th Floor, KP Square, Telco Road, Mohan Nagar, Chinchwad, Pune – 411019, Maharashtra.
- **Official Website:** [reliablehr.in](https://reliablehr.in/)`;
  }

  // Contact / HR Support
  if (q.includes("contact") || q.includes("gaurav") || q.includes("phone") || q.includes("email") || q.includes("office") || q.includes("address")) {
    return `### ☎️ Direct HR Support Contacts
- **Gaurav Patil (HR Manager):** 📞 [8999299300](tel:8999299300) | ✉️ rhsgaurav@gmail.com
  *(Assists with Spine HR login, payslips, e-Card download, and claims)*
- **Company & Placement WhatsApp:** [7373524524](https://api.whatsapp.com/send?phone=917373524524)
- **Bajaj Allianz 24x7 Helpline:** 1800-209-5858
- **Pune Office:** Office No. 609, 610, 6th Floor, KP Square, Telco Road, Mohan Nagar, Chinchwad, Pune – 411019, Maharashtra.`;
  }

  return `Hi Welcome to Reliable\nHow can I help you today?`;
}

// Chat API endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const trimmedLower = message.trim().toLowerCase();
    if (
      trimmedLower === "hi" ||
      trimmedLower === "hello" ||
      trimmedLower === "hey" ||
      trimmedLower === "hi there" ||
      trimmedLower === "good morning" ||
      trimmedLower === "good afternoon" ||
      trimmedLower === "good evening" ||
      trimmedLower === "hey there" ||
      trimmedLower === "start"
    ) {
      res.json({ reply: "Hi Welcome to Reliable\nHow can I help you today?" });
      return;
    }

    const ai = getAIClient();
    if (!ai) {
      const fallback = getFallbackAnswer(message);
      res.json({ reply: fallback });
      return;
    }

    // Build chat contents from history + current message
    const formattedContents: Array<{ role: "user" | "model"; parts: [{ text: string }] }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.role === "user" || item.role === "model") {
          formattedContents.push({
            role: item.role,
            parts: [{ text: String(item.content) }],
          });
        }
      }
    }

    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Model priority order (gemini-3.6-flash and gemini-3.1-flash-lite verified active)
    const modelCandidates = ["gemini-3.6-flash", "gemini-3.1-flash-lite", "gemini-flash-latest", "gemini-3.8-flash"];
    let replyText = "";
    let lastError: unknown = null;

    for (const modelName of modelCandidates) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: formattedContents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.5,
          },
        });
        if (response.text && response.text.trim()) {
          replyText = response.text;
          break;
        }
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} attempt failed, trying next fallback:`, (err as Error)?.message || err);
      }
    }

    if (!replyText) {
      replyText = getFallbackAnswer(message);
    }

    res.json({ reply: replyText });
  } catch (error) {
    console.error("AI Chat error:", error);
    // Graceful fallback with domain knowledge if API call fails
    const fallback = getFallbackAnswer(req.body?.message || "");
    res.json({ reply: fallback });
  }
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Reliable HR Solutions Employee Hub" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`RHS Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

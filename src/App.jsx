import React, { useState } from "react";

const useCases = [
  "Lead capture and qualification",
  "Customer support triage",
  "Appointment booking and reminders",
  "CRM and spreadsheet updates",
  "Follow-up automation",
  "Escalation to staff"
];

const capabilityCards = [
  {
    title: "Customer communication",
    text: "Automate replies, follow-ups, and routing across the channels your customers already use."
  },
  {
    title: "Operational consistency",
    text: "Keep updates, reminders, records, and handoffs running the same way every single time."
  },
  {
    title: "Managed oversight",
    text: "Every workflow is designed with monitoring, escalation, and maintenance built into delivery."
  }
];

const workflowSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your workflow, bottlenecks, and the points where response time matters most."
  },
  {
    number: "02",
    title: "Design",
    text: "We map the automation logic, business rules, channels, and escalation points around your team."
  },
  {
    number: "03",
    title: "Deployment",
    text: "We launch, monitor, and refine the system so the automation works reliably in day-to-day use."
  }
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/bomalogic/", "IG"],
  ["Facebook", "https://web.facebook.com/profile.php?id=61589562188514", "f"],
  ["LinkedIn", "https://www.linkedin.com/company/bomalogic/", "in"],
  ["X", "https://x.com/bomalogic", "X"],
  ["TikTok", "https://www.tiktok.com/@bomalogicautomation", "TT"]
];

const directContacts = [
  ["Call", "tel:+254716807984", "P", "+254 716 807 984"],
  ["WhatsApp", "https://wa.me/254716807984", "WA", "wa.me/254716807984"],
  ["Email", "mailto:info@bomalogic.com", "@", "info@bomalogic.com"]
];

const pricingPlans = [
  {
    tier: "Starter Tier",
    accent: "starter",
    price: "KSh 4,500",
    cadence: "/month",
    target: "Solopreneurs & Small Shops",
    features: [
      "1 WhatsApp or Telegram channel",
      "Standard automation loops",
      "Lead capture and basic routing",
      "Weekly performance reports",
      "Template library for common workflows",
      "Email notification support",
      "Onboarding session with automation specialist"
    ]
  },
  {
    tier: "Business Tier",
    accent: "growth",
    price: "KSh 7,500",
    cadence: "/month",
    badge: "Recommended",
    target: "Growing SMEs",
    features: [
      "Up to 3 messaging channels",
      "File management and document tools",
      "Advanced lead handling",
      "Priority support",
      "Integration with 1 external tool (CRM, calendar, etc.)",
      "Advanced analytics (conversion tracking, user journeys)",
      "A/B testing for message flows",
      "Onboarding session with automation specialist"
    ]
  },
  {
    tier: "Premium Tier",
    accent: "pro",
    price: "KSh 15,000",
    cadence: "/month",
    target: "Enterprise & Tech Teams",
    features: [
      "Multi-channel orchestration",
      "Shell execution workflows",
      "Advanced database integrations",
      "Dedicated account manager",
      "Unlimited integrations",
      "SLA guarantees (99.5% uptime)",
      "Advanced security features (SSO, audit logs)",
      "Multi-language support",
      "Onboarding session with automation specialist"
    ]
  }
];

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "BOMALOGIC AUTOMATION is designed for small businesses, startups, service companies, and growing SMEs that handle frequent customer communication or repetitive internal processes."
  },
  {
    question: "What can you automate?",
    answer:
      "We automate lead capture, follow-up, customer support triage, appointment reminders, CRM and spreadsheet updates, reporting workflows, and messaging-based operations across tools like WhatsApp and other digital platforms."
  },
  {
    question: "Do your systems replace staff?",
    answer:
      "No. The goal is to reduce repetitive work and improve response speed while escalating sensitive or complex situations to human team members."
  },
  {
    question: "How does deployment work?",
    answer:
      "After you submit a deployment request, BOMALOGIC reviews your workflow, confirms the scope, designs the logic, and then deploys the automation with monitoring and maintenance in place."
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Ongoing support, monitoring, troubleshooting, and maintenance are part of the managed delivery model so your system remains reliable after launch."
  },
  {
    question: "What happens when credits run out?",
    answer:
      "Clients can purchase more credits or bring their own API key if they prefer to manage usage directly."
  }
];

const initialForm = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  teamSize: "1-5",
  timeline: "2-4 weeks",
  goals: [useCases[0]],
  notes: ""
};

function getRoute() {
  if (typeof window === "undefined") {
    return "home";
  }

  const hash = window.location.hash.replace("#", "").trim();
  const pathname = window.location.pathname.replace(/^\//, "").trim();
  return hash || pathname || "home";
}

function routeToHash(route) {
  return route === "home" ? "#home" : `#${route}`;
}

function buildRequestText(form) {
  return [
    "New BOMALOGIC deployment request",
    "",
    `Company: ${form.companyName}`,
    `Contact: ${form.contactName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Team size: ${form.teamSize}`,
    `Timeline: ${form.timeline}`,
    "",
    "Automation goals:",
    ...(form.goals.length > 0 ? form.goals.map((goal) => `- ${goal}`) : ["- Not provided"]),
    "",
    "Workflow notes:",
    form.notes?.trim() || "Not provided"
  ].join("\n");
}

function App() {
  const [form, setForm] = useState(initialForm);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const route = getRoute();
  const page = route === "faq" || route === "pricing" ? route : "home";

  function toggleValue(key, value) {
    setForm((current) => {
      const exists = current[key].includes(value);
      const nextValues = exists
        ? current[key].filter((item) => item !== value)
        : [...current[key], value];

      return {
        ...current,
        [key]: nextValues.length > 0 ? nextValues : [value]
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const text = buildRequestText(form);
    const whatsappUrl = `https://wa.me/254716807984?text=${encodeURIComponent(text)}`;
    const emailUrl = `mailto:info@bomalogic.com?subject=${encodeURIComponent(
      `New BOMALOGIC request from ${form.companyName}`
    )}&body=${encodeURIComponent(text)}`;

    setSubmitState({
      type: "success",
      message: "Your request is ready. We opened WhatsApp and prepared an email draft."
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
  }

  if (page === "pricing") {
    return (
      <div className="page-shell">
        <header className="topbar">
          <a className="brand" href={routeToHash("home")} aria-label="BOMALOGIC home">
            <img src="./logo-light.webp" alt="BOMALOGIC AUTOMATION" loading="eager" width="200" height="50" />
          </a>
          <nav className="nav">
            <a href={routeToHash("home")}>Home</a>
            <a href={routeToHash("services")}>Services</a>
            <a href={routeToHash("pricing")}>Pricing</a>
            <a href={routeToHash("faq")}>FAQ</a>
            <a href={routeToHash("deployment")}>Book a demo</a>
          </nav>
          <a className="button button-outline" href={routeToHash("deployment")}>
            Book a demo
          </a>
        </header>

        <main>
          <section className="section pricing-page">
            <div className="section-heading">
              <p className="eyebrow">Your Final Pricing</p>
              <h2>Pricing Architecture</h2>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article className={`pricing-card ${plan.accent}`} key={plan.tier}>
                  <div className="pricing-top">
                    <p className="pricing-tier">{plan.tier}</p>
                    {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
                  </div>
                  <h3>
                    {plan.price}
                    <span>{plan.cadence}</span>
                  </h3>
                  <p className="pricing-target">{plan.target}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className="button" href={routeToHash("deployment")}>
                    Choose plan
                  </a>
                </article>
              ))}
            </div>

            <div className="pricing-notes">
              <article className="note-card">
                <h3>When credits run out</h3>
                <p>
                  Clients can purchase more credits for continued usage or bring their own API key
                  if they prefer to manage usage directly.
                </p>
              </article>
              <article className="note-card">
                <h3>Cost structures</h3>
                <p>
                  Direct server infrastructure is priced to remain efficient while keeping the
                  service focused on support, setup, and automation value delivered to each client.
                </p>
              </article>
              <article className="note-card">
                <h3>Best fit</h3>
                <p>
                  Growth is the recommended tier for most clients who want a strong balance of
                  capability, support, and cost.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (page === "faq") {
    return (
      <div className="page-shell">
        <header className="topbar">
          <a className="brand" href={routeToHash("home")} aria-label="BOMALOGIC home">
            <img src="./logo-light.webp" alt="BOMALOGIC AUTOMATION" loading="eager" width="200" height="50" />
          </a>
          <nav className="nav">
            <a href={routeToHash("home")}>Home</a>
            <a href={routeToHash("services")}>Services</a>
            <a href={routeToHash("pricing")}>Pricing</a>
            <a href={routeToHash("faq")}>FAQ</a>
            <a href={routeToHash("deployment")}>Book a demo</a>
          </nav>
          <a className="button button-outline" href={routeToHash("deployment")}>
            Book a demo
          </a>
        </header>

        <main>
          <section className="section faq-page">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Answers to common questions about BOMALOGIC AUTOMATION</h2>
              <p className="section-note">
                A quick overview of how the service works, what can be automated, and what to
                expect after requesting deployment.
              </p>
            </div>

            <div className="faq-layout">
              <div className="faq-visual-design">
                <div className="support-interface">
                  <div className="chat-bubble"></div>
                  <div className="ai-response"></div>
                </div>
              </div>

              <div className="faq-list">
                {faqs.map((item) => (
                  <article className="faq-item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href={routeToHash("home")} aria-label="BOMALOGIC home">
          <img src="/logo-light.png" alt="BOMALOGIC AUTOMATION" loading="eager" />
        </a>
        <nav className="nav">
          <a href={routeToHash("services")}>Services</a>
          <a href={routeToHash("pricing")}>Pricing</a>
          <a href={routeToHash("workflow")}>Workflow</a>
          <a href={routeToHash("deployment")}>Book a demo</a>
          <a href={routeToHash("faq")}>FAQ</a>
        </nav>
        <a className="button button-outline" href={routeToHash("deployment")}>
          Book a demo
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Managed AI workflow automation for modern African businesses</p>
              <h1>Your business on autopilot.</h1>
              <p className="hero-text">
                BOMALOGIC AUTOMATION designs practical AI systems for businesses that need faster
                customer response, stronger operational consistency, and less manual repetition
                across the workday.
              </p>
              <div className="hero-actions">
                <a className="button" href={routeToHash("deployment")}>
                  Book a demo
                </a>
                <a className="button button-secondary" href="https://wa.me/254716807984">
                  Talk on WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-media">
              <div className="ai-visual-design">
                <div className="ai-network">
                  <div className="node node-1"></div>
                  <div className="node node-2"></div>
                  <div className="node node-3"></div>
                  <div className="node node-4"></div>
                  <div className="node node-5"></div>
                  <div className="connection conn-1"></div>
                  <div className="connection conn-2"></div>
                  <div className="connection conn-3"></div>
                  <div className="connection conn-4"></div>
                  <div className="data-particle particle-1"></div>
                  <div className="data-particle particle-2"></div>
                  <div className="data-particle particle-3"></div>
                  <div className="data-particle particle-4"></div>
                </div>
                <div className="ai-badge">
                  <span>24/7 response support</span>
                  <strong>Lead capture, support triage, reminders, and reporting</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="metrics-strip">
            <div>
              <strong>Built for SMEs</strong>
              <span>Reliable systems for growing teams and service businesses.</span>
            </div>
            <div>
              <strong>Practical automation</strong>
              <span>Focused on measurable workflow improvement, not hype.</span>
            </div>
            <div>
              <strong>Managed delivery</strong>
              <span>Monitoring, maintenance, and human escalation included.</span>
            </div>
          </div>
        </section>

        <section className="section section-services" id="services">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Automation systems that match real business pressure</h2>
          </div>

          <div className="editorial-split">
            <div className="editorial-copy">
              <p>
                BOMALOGIC AUTOMATION helps businesses streamline customer communication,
                appointment handling, support escalation, recurring admin work, and internal
                reporting through tailored automation systems.
              </p>
              <p>
                Instead of replacing people, the systems support your team by taking over the
                routine work and surfacing the moments where human attention matters most.
              </p>
            </div>
            <div className="editorial-image">
              <div className="ai-collaboration-design">
                <div className="human-element"></div>
                <div className="ai-element"></div>
                <div className="data-flow"></div>
              </div>
            </div>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((item) => (
              <article className="capability-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-panels" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>A structured delivery model from discovery to live operations</h2>
          </div>

          <div className="process-layout">
            <div className="process-image">
              <div className="ai-monitoring-design">
                <div className="dashboard"></div>
                <div className="data-stream"></div>
                <div className="analytics"></div>
              </div>
            </div>
            <div className="process-steps">
              {workflowSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ops">
          <div className="ops-banner">
            <div className="ops-visual-design">
              <div className="ops-grid"></div>
              <div className="ops-overlay">
                <p className="eyebrow">Managed operations</p>
                <h2>Support, maintenance, and oversight stay part of the service</h2>
                <p>
                  Every deployment is designed with monitoring, troubleshooting, and escalation in
                  mind so your team stays in control as the system works in the background.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-deployment" id="deployment">
          <div className="section-heading">
            <p className="eyebrow">Request deployment</p>
            <h2>Tell us what your workflow needs to do</h2>
            <p className="section-note">
              Share the basics of your business and the repetitive tasks you want automated. We
              will open WhatsApp and a backup email draft with your request details.
            </p>
          </div>

          <div className="deployment-layout">
            <form className="request-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="companyName">Company name</label>
                <input
                  id="companyName"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  required
                />
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="contactName">Contact person</label>
                  <input
                    id="contactName"
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="teamSize">Team size</label>
                  <select id="teamSize" name="teamSize" value={form.teamSize} onChange={handleChange}>
                    <option>1-5</option>
                    <option>6-15</option>
                    <option>16-50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div className="field-group">
                  <label htmlFor="timeline">Target timeline</label>
                  <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange}>
                    <option>1-2 weeks</option>
                    <option>2-4 weeks</option>
                    <option>1-2 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <span className="field-label">What should the system automate?</span>
                <div className="choice-grid">
                  {useCases.map((item) => (
                    <button
                      className={`choice-chip ${form.goals.includes(item) ? "selected" : ""}`}
                      key={item}
                      onClick={(event) => {
                        event.preventDefault();
                        toggleValue("goals", item);
                      }}
                      type="button"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="notes">Workflow notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="6"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Describe your current process, where delays happen, and what you want the system to handle."
                />
              </div>

              <button className="button button-submit" type="submit">
                Book a demo
              </button>

              {submitState.message ? (
                <p className={`submit-message ${submitState.type}`}>{submitState.message}</p>
              ) : null}
            </form>

            <aside className="deployment-sidebar">
              <div className="deployment-visual-design">
                <div className="planning-grid"></div>
                <div className="workflow-diagram"></div>
              </div>
              <div className="sidebar-copy">
                <p className="eyebrow">What happens next</p>
                <h3>Review, scope, and deployment planning</h3>
                <p>
                  Your request is prepared for WhatsApp and email so BOMALOGIC can assess the
                  workflow, confirm the automation scope, and propose the best rollout path for
                  your business.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-pricing" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">4. Financial Plan</p>
            <h2>Pricing Architecture</h2>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={`pricing-card ${plan.accent}`} key={plan.tier}>
                <div className="pricing-top">
                  <p className="pricing-tier">{plan.tier}</p>
                  {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
                </div>
                <h3>
                  {plan.price}
                  <span>{plan.cadence}</span>
                </h3>
                <p className="pricing-target">{plan.target}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="button" href={routeToHash("deployment")}>
                  Choose plan
                </a>
              </article>
            ))}
          </div>

          <div className="pricing-notes">
            <article className="note-card">
              <h3>14-day trial</h3>
              <p>
                New clients can start with a 14-day free trial and only pay a KSh 1,000 setup fee
                to get the system prepared and configured.
              </p>
            </article>
            <article className="note-card">
              <h3>When credits run out</h3>
              <p>
                Clients can purchase more credits for continued usage or bring their own API key if
                they prefer to manage usage directly.
              </p>
            </article>
            <article className="note-card">
              <h3>Cost structure</h3>
              <p>
                Infrastructure is managed efficiently so the pricing stays focused on the service,
                support, and automation value delivered to each client.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build the workflow your business keeps repeating</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-visual-design">
              <div className="connection-nodes">
                <div className="node center"></div>
                <div className="node top"></div>
                <div className="node right"></div>
                <div className="node bottom"></div>
                <div className="node left"></div>
              </div>
            </div>

            <div className="contact-panels">
              <div className="contact-card">
                <h3>Direct contact</h3>
                <div className="direct-list">
                  {directContacts.map(([label, href, icon, value]) => (
                    <a href={href} key={label}>
                      <span className="social-icon" aria-hidden="true">
                        {icon}
                      </span>
                      {value}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-card">
                <h3>Follow BOMALOGIC</h3>
                <div className="social-list">
                  {socialLinks.map(([label, href, icon]) => (
                    <a href={href} key={label} target="_blank" rel="noreferrer">
                      <span className="social-icon" aria-hidden="true">
                        {icon}
                      </span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navGroups = document.querySelectorAll('.nav-group');
const revealBlocks = document.querySelectorAll('.reveal');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

const pageInsights = {
  'index.html': {
    title: 'MonitAir Platform Overview',
    intro:
      'MonitAir combines respiratory data monitoring with telemedicine workflows so clinical teams can prioritize the right patient at the right time.',
    tags: ['FDA Registered MDDS', 'HIPAA-aligned', 'PAP/NIV Programs'],
    highlights: [
      'Move from passive dashboards to prioritized intervention queues.',
      'Align clinical and operational teams around a single patient risk view.',
      'Scale respiratory programs without linear staffing growth.',
    ],
    faq: [
      {
        q: 'What problem does MonitAir solve first?',
        a: 'MonitAir helps teams identify adherence risk and intervention delays early, especially in the first 30 to 90 days of therapy.',
      },
      {
        q: 'Where does MonitAir fit in the care process?',
        a: 'It sits between device data and care action, turning incoming signals into team-ready triage and outreach workflows.',
      },
    ],
    links: [
      { label: 'View Our Solution', href: 'our-solution.html' },
      { label: 'Request a Demo', href: 'request-demo.html' },
    ],
  },
  'our-solution.html': {
    title: 'Solution Detail: Clinical + Operational Layer',
    intro:
      'This page shows how MonitAir supports PAP/NIV patient management with a single platform for monitoring, triage, and intervention.',
    tags: ['All-in-one Workflow', 'Risk Prioritization', 'Practice Scale'],
    highlights: [
      'Unified view of adherence, severity trends, and intervention opportunities.',
      'Structured worklists that help teams focus on high-risk patients first.',
      'Built to support multi-site teams and consistent respiratory protocols.',
    ],
    faq: [
      {
        q: 'How does this differ from a reporting tool?',
        a: 'MonitAir is action-oriented. It emphasizes who needs attention now, not only retrospective charts.',
      },
      {
        q: 'Who typically leads implementation?',
        a: 'Clinical operations leaders and respiratory program managers usually lead adoption with physician champions.',
      },
    ],
    links: [
      { label: 'See RPM Workflow', href: 'rpm.html' },
      { label: 'See Telemedicine Layer', href: 'telemedicine.html' },
    ],
  },
  'customers.html': {
    title: 'Customer Fit and Buying Signals',
    intro:
      'MonitAir is positioned for sleep, pulmonary, and DME organizations that need measurable adherence and throughput improvements.',
    tags: ['Sleep Centers', 'Pulmonary Groups', 'DME Providers'],
    highlights: [
      'Target segments with immediate pain from adherence and follow-up delays.',
      'Map value language to each buyer: clinical outcomes, operations, and program economics.',
      'Support enterprise and multi-location growth with shared workflows.',
    ],
    faq: [
      {
        q: 'Which team members use MonitAir daily?',
        a: 'Respiratory therapists, care coordinators, and clinical operations staff typically use it for triage and outreach.',
      },
      {
        q: 'What makes a strong customer fit?',
        a: 'Programs with high patient volume, adherence variability, and a clear need for structured prioritization.',
      },
    ],
    links: [
      { label: 'Review Market Opportunity', href: 'market-opportunity.html' },
      { label: 'Book a Workflow Demo', href: 'request-demo.html' },
    ],
  },
  'market-opportunity.html': {
    title: 'Market Opportunity and Sizing Logic',
    intro:
      'Use this layer to explain how condition burden, adherence risk, and RPM momentum support near-term go-to-market strategy.',
    tags: ['Condition Burden', 'Serviceable Cohorts', 'RPM Momentum'],
    highlights: [
      'Conservative model starts with an estimated 70M U.S. adults across OSA and COPD (non-deduplicated).',
      'Serviceable scenarios help prioritize realistic rollout targets.',
      'Adherence risk indicates a large intervention-ready population.',
    ],
    faq: [
      {
        q: 'Why use scenarios instead of one number?',
        a: 'Scenario ranges make planning more robust and reduce overconfidence in a single assumption.',
      },
      {
        q: 'How should this guide go-to-market?',
        a: 'Start with segments where both pain and operational readiness are already present: sleep, pulmonary, and DME.',
      },
    ],
    links: [
      { label: 'See Customer Segments', href: 'customers.html' },
      { label: 'View Data Sources', href: 'references.html' },
    ],
  },
  'rpm.html': {
    title: 'RPM Workflow Insight',
    intro:
      'The RPM layer focuses on adherence, decompensation risk, and intervention timing for respiratory populations.',
    tags: ['Adherence Monitoring', 'Risk Queues', 'Timely Outreach'],
    highlights: [
      'Prioritize by patient risk and trend change, not first-in-first-out tasking.',
      'Standardize outreach to reduce variance in follow-up quality.',
      'Track impact through intervention speed and therapy retention.',
    ],
    faq: [
      {
        q: 'What KPI should teams watch first?',
        a: 'Early adherence and intervention lag are often the fastest indicators of program performance.',
      },
      {
        q: 'Can RPM workflows scale across sites?',
        a: 'Yes. Shared triage rules and consistent worklists help maintain quality as volume grows.',
      },
    ],
    links: [
      { label: 'Open Telemedicine Page', href: 'telemedicine.html' },
      { label: 'Request RPM Demo', href: 'request-demo.html' },
    ],
  },
  'telemedicine.html': {
    title: 'Telemedicine Integration Insight',
    intro:
      'Telemedicine workflows are stronger when virtual visits include up-to-date respiratory context and triage guidance.',
    tags: ['Virtual Follow-up', 'Data Context', 'Care Coordination'],
    highlights: [
      'Bring adherence and trend signals into visit preparation.',
      'Coordinate post-visit actions from the same operational queue.',
      'Reduce handoff delays between virtual and monitoring teams.',
    ],
    faq: [
      {
        q: 'What value does telemedicine add to RPM?',
        a: 'It closes the loop from signal detection to clinical contact and documented intervention.',
      },
      {
        q: 'Who benefits most from this integration?',
        a: 'High-volume respiratory teams that need faster follow-up without adding process complexity.',
      },
    ],
    links: [
      { label: 'Return to RPM', href: 'rpm.html' },
      { label: 'Explore Full Solution', href: 'our-solution.html' },
    ],
  },
  'events.html': {
    title: 'Events and Enablement Insight',
    intro:
      'Events help teams evaluate implementation readiness, operating models, and measurable outcomes before rollout.',
    tags: ['Implementation Readiness', 'Clinical Ops', 'Peer Learning'],
    highlights: [
      'Use events to benchmark your current respiratory workflow maturity.',
      'Align clinical and operational stakeholders before deployment.',
      'Capture common blockers early and map them to rollout steps.',
    ],
    faq: [
      {
        q: 'Who should attend events?',
        a: 'Clinical leaders, respiratory operations managers, and implementation owners should attend together.',
      },
      {
        q: 'How do events accelerate adoption?',
        a: 'They compress learning cycles and help teams plan based on proven workflows.',
      },
    ],
    links: [
      { label: 'Visit Resource Hub', href: 'resources.html' },
      { label: 'Request Guided Demo', href: 'request-demo.html' },
    ],
  },
  'request-demo.html': {
    title: 'Demo Prep Guide',
    intro:
      'A high-value demo compares your current process against a future workflow with clear operational and clinical deltas.',
    tags: ['Workflow Mapping', 'Use Cases', 'Implementation Plan'],
    highlights: [
      'Bring your current triage and follow-up process to the session.',
      'Identify your top 2 to 3 bottlenecks before the demo starts.',
      'Define success metrics you can measure within the first quarter.',
    ],
    faq: [
      {
        q: 'How can we get the most from a demo?',
        a: 'Share your care model and team structure so the walkthrough can mirror real operations.',
      },
      {
        q: 'What should happen after the demo?',
        a: 'Set a pilot scope, target cohort, ownership plan, and measurement timeline.',
      },
    ],
    links: [
      { label: 'Review Customer Segments', href: 'customers.html' },
      { label: 'Check Market Model', href: 'market-opportunity.html' },
    ],
  },
  'login.html': {
    title: 'Portal Experience Insight',
    intro:
      'This static page previews the access experience while keeping all interactions local and non-production.',
    tags: ['Portal UX', 'Workflow Access', 'Static Preview'],
    highlights: [
      'Represents how teams enter day-to-day monitoring workflows.',
      'Useful for stakeholder walk-throughs before live integration.',
      'Can be extended with role-specific dashboard previews.',
    ],
    faq: [
      {
        q: 'Is this login connected to a live system?',
        a: 'No. This is a static preview page intended for local demonstration only.',
      },
      {
        q: 'Can this be customized by role?',
        a: 'Yes. You can tailor post-login paths for clinical, operations, or executive users.',
      },
    ],
    links: [
      { label: 'Open Resource Hub', href: 'resources.html' },
      { label: 'Request Production Walkthrough', href: 'request-demo.html' },
    ],
  },
  'resources.html': {
    title: 'Resource Navigation Insight',
    intro:
      'This hub is designed to keep key trust, market, and product materials centralized for faster decision-making.',
    tags: ['Centralized Docs', 'Buyer Enablement', 'Faster Access'],
    highlights: [
      'Group clinical content, trust materials, and market context in one location.',
      'Reduce navigation friction during demos and stakeholder reviews.',
      'Use as a single starting point for new evaluators.',
    ],
    faq: [
      {
        q: 'Why keep a dedicated resource hub?',
        a: 'It lowers cognitive load and keeps critical content discoverable for first-time visitors.',
      },
      {
        q: 'How should teams use this page?',
        a: 'Use it as the default handoff page after high-level presentations or intro calls.',
      },
    ],
    links: [
      { label: 'Browse References', href: 'references.html' },
      { label: 'View Security Page', href: 'security.html' },
    ],
  },
  'security.html': {
    title: 'Security and Trust Insight',
    intro:
      'Security and compliance messaging helps stakeholders evaluate readiness and risk posture during vendor review.',
    tags: ['HIPAA Alignment', 'FDA MDDS', 'Operational Safeguards'],
    highlights: [
      'Communicate governance posture in plain language for non-technical stakeholders.',
      'Reinforce clinical trust with clear regulatory framing.',
      'Support procurement conversations with structured trust content.',
    ],
    faq: [
      {
        q: 'What should buyers look for first?',
        a: 'Clarity on compliance alignment, access controls, and operational accountability.',
      },
      {
        q: 'How does this support sales cycles?',
        a: 'Strong trust pages reduce friction in procurement and security review stages.',
      },
    ],
    links: [
      { label: 'Open Terms and Privacy', href: 'terms-and-privacy.html' },
      { label: 'Visit Resource Hub', href: 'resources.html' },
    ],
  },
  'white-paper.html': {
    title: 'White Paper Insight',
    intro:
      'The white paper content anchors strategic conversations with data, outcomes context, and rollout rationale.',
    tags: ['Market Narrative', 'Outcome Framing', 'Decision Support'],
    highlights: [
      'Translate disease burden into concrete operational urgency.',
      'Connect clinical risk trends to measurable program opportunities.',
      'Support internal buy-in across clinical, operations, and finance teams.',
    ],
    faq: [
      {
        q: 'When should teams use this content?',
        a: 'Use it in stakeholder alignment meetings and procurement preparation phases.',
      },
      {
        q: 'How can this improve conversion?',
        a: 'Evidence-backed narratives improve confidence and speed in decision cycles.',
      },
    ],
    links: [
      { label: 'Review Market Page', href: 'market-opportunity.html' },
      { label: 'See Data Sources', href: 'references.html' },
    ],
  },
  'references.html': {
    title: 'Evidence and Assumption Insight',
    intro:
      'This page documents data inputs behind positioning and market sizing so readers can validate assumptions quickly.',
    tags: ['Evidence Layer', 'Assumption Clarity', 'Decision Confidence'],
    highlights: [
      'Provide citation transparency for market and prevalence claims.',
      'Separate source-backed facts from planning assumptions.',
      'Increase trust with clinical and executive audiences.',
    ],
    faq: [
      {
        q: 'Why keep references visible?',
        a: 'Visible sources reduce skepticism and strengthen message credibility in high-stakes evaluations.',
      },
      {
        q: 'How should assumptions be communicated?',
        a: 'Label assumptions explicitly and pair them with conservative/base/expanded scenarios.',
      },
    ],
    links: [
      { label: 'Open Market Opportunity', href: 'market-opportunity.html' },
      { label: 'Back to Home', href: 'index.html' },
    ],
  },
  'terms-and-privacy.html': {
    title: 'Policy Context Insight',
    intro:
      'This page supports transparency by clarifying policy intent and boundaries for this static implementation.',
    tags: ['Policy Clarity', 'Demo Scope', 'Trust Building'],
    highlights: [
      'Defines how this static experience is intended to be used.',
      'Provides a clear legal and privacy orientation for reviewers.',
      'Supports early-stage diligence before formal documentation exchange.',
    ],
    faq: [
      {
        q: 'Is this the final legal language?',
        a: 'No. This page summarizes policy context for demo purposes and should be paired with formal legal documents.',
      },
      {
        q: 'Why include this in a product site?',
        a: 'Buyers expect clear trust and policy navigation as part of modern evaluation flows.',
      },
    ],
    links: [
      { label: 'Open Privacy Policy', href: 'privacy-policy.html' },
      { label: 'Visit Security Page', href: 'security.html' },
    ],
  },
  'privacy-policy.html': {
    title: 'Privacy Experience Insight',
    intro:
      'Clear privacy communication helps clinical and operations leaders assess data handling posture quickly.',
    tags: ['Privacy Transparency', 'Data Handling', 'Evaluation Readiness'],
    highlights: [
      'Explains local static behavior and data boundaries for this build.',
      'Reinforces trust expectations during early product evaluation.',
      'Creates a cleaner handoff to formal compliance discussions.',
    ],
    faq: [
      {
        q: 'Does this static site collect user data?',
        a: 'No. This static build does not include active form processing or external tracking.',
      },
      {
        q: 'How should this be used in buyer review?',
        a: 'Use it as orientation content before sharing official compliance and policy documents.',
      },
    ],
    links: [
      { label: 'View Terms and Privacy', href: 'terms-and-privacy.html' },
      { label: 'Go to Resource Hub', href: 'resources.html' },
    ],
  },
  default: {
    title: 'MonitAir Product Insight',
    intro: 'Explore additional context on how MonitAir helps respiratory programs improve outcomes and efficiency.',
    tags: ['Clinical Impact', 'Operational Scale', 'Program Visibility'],
    highlights: [
      'Prioritize highest-risk respiratory patients earlier.',
      'Coordinate teams with a shared workflow model.',
      'Strengthen adherence and intervention consistency.',
    ],
    faq: [
      {
        q: 'Where should I start?',
        a: 'Start with the solution overview, then review customer fit and market context.',
      },
      {
        q: 'How do I evaluate fit quickly?',
        a: 'Map your current workflow against MonitAir triage and follow-up capabilities.',
      },
    ],
    links: [
      { label: 'Our Solution', href: 'our-solution.html' },
      { label: 'Request a Demo', href: 'request-demo.html' },
    ],
  },
};

const makeList = (items) => items.map((item) => `<li>${item}</li>`).join('');

const makeFaq = (faq) =>
  faq
    .map(
      (item, index) => `
      <details class="insight-item" ${index === 0 ? 'open' : ''}>
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `
    )
    .join('');

const makeLinks = (links) =>
  links
    .map((link) => `<a href="${link.href}" class="insight-link">${link.label}</a>`)
    .join('');

const renderInsightLayer = () => {
  const data = pageInsights[currentPath] || pageInsights.default;

  const wrapper = document.createElement('section');
  wrapper.className = 'insight-layer';
  wrapper.innerHTML = `
    <button class="insight-fab" type="button" aria-controls="insight-panel" aria-expanded="false">
      Learn More
    </button>
    <div class="insight-overlay" hidden></div>
    <aside class="insight-panel" id="insight-panel" aria-hidden="true" role="dialog" aria-label="Additional page information">
      <div class="insight-head">
        <p class="insight-kicker">Product Insights</p>
        <h3>${data.title}</h3>
        <button class="insight-close" type="button" aria-label="Close insights">Close</button>
      </div>
      <p class="insight-intro">${data.intro}</p>
      <div class="insight-tags">${data.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <div class="insight-section">
        <h4>Why this matters</h4>
        <ul>${makeList(data.highlights)}</ul>
      </div>
      <div class="insight-section">
        <h4>Quick answers</h4>
        <div class="insight-faq">${makeFaq(data.faq)}</div>
      </div>
      <div class="insight-section">
        <h4>Go deeper</h4>
        <div class="insight-links">${makeLinks(data.links)}</div>
      </div>
    </aside>
  `;

  document.body.appendChild(wrapper);

  const panel = wrapper.querySelector('.insight-panel');
  const overlay = wrapper.querySelector('.insight-overlay');
  const openBtn = wrapper.querySelector('.insight-fab');
  const closeBtn = wrapper.querySelector('.insight-close');

  const closeInsight = () => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    overlay.hidden = true;
    document.body.classList.remove('insight-open');
  };

  const openInsight = () => {
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    overlay.hidden = false;
    document.body.classList.add('insight-open');
  };

  openBtn.addEventListener('click', () => {
    if (panel.classList.contains('is-open')) {
      closeInsight();
    } else {
      openInsight();
    }
  });

  closeBtn.addEventListener('click', closeInsight);
  overlay.addEventListener('click', closeInsight);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) {
      closeInsight();
    }
  });
};

requestAnimationFrame(() => {
  document.body.classList.add('is-loaded');
});

const isMobile = () => window.matchMedia('(max-width: 860px)').matches;

const closeGroups = (except) => {
  navGroups.forEach((group) => {
    if (group !== except) {
      group.open = false;
    }
  });
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    if (!open) closeGroups();
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      closeGroups();
    });
  });

  navGroups.forEach((group) => {
    const summary = group.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('click', (event) => {
      if (!isMobile()) {
        event.preventDefault();
        const next = !group.open;
        closeGroups(group);
        group.open = next;
      } else {
        closeGroups(group);
      }
    });
  });

  document.addEventListener('click', (event) => {
    const clickedMenuButton = menuToggle.contains(event.target);
    if (!siteNav.contains(event.target) && !clickedMenuButton) {
      closeGroups();
      if (isMobile()) {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    closeGroups();
  });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPath) {
    link.classList.add('is-active');
    const parentGroup = link.closest('.nav-group');
    if (parentGroup) {
      parentGroup.classList.add('is-active');
      if (isMobile()) parentGroup.open = true;
    }
  }
});

renderInsightLayer();

const animateCount = (el) => {
  const targetRaw = el.dataset.count || '0';
  const target = Number(targetRaw);
  if (!Number.isFinite(target)) return;

  const duration = 1100;
  const startTime = performance.now();
  const decimals = targetRaw.includes('.') ? targetRaw.split('.')[1].length : 0;

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;

    el.textContent = value.toLocaleString(undefined, {
      minimumFractionDigits: progress === 1 ? decimals : 0,
      maximumFractionDigits: decimals,
    });

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');

      if (entry.target.classList.contains('countup') && !entry.target.dataset.done) {
        animateCount(entry.target);
        entry.target.dataset.done = 'true';
      }

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealBlocks.forEach((block, index) => {
  if (!prefersReducedMotion) {
    const delay = (index % 7) * 45;
    block.style.transitionDelay = `${delay}ms`;
  }
  observer.observe(block);
});

document.querySelectorAll('.countup').forEach((item) => observer.observe(item));

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Layers3, Zap,
  Menu, X, Github, Linkedin, Mail, Phone, MessageCircle, MapPin, Sparkles, ExternalLink,
  MonitorSmartphone, Braces, Database, GraduationCap, CalendarDays,
  CheckCircle2
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "School Mark Management",
    category: "DASHBOARDS · DATA VISUALISATION",
    description: "Responsive student-performance dashboards and visual reports, presenting academic data through clear, useful views.",
    stack: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    icon: Layers3,
    theme: "project-green",
  },
  {
    number: "02",
    title: "Admin Support & Management",
    category: "ADMIN TOOLS · WORKFLOW UI",
    description: "Modular admin interfaces for role management, content updates, workflow control, and reliable form validation.",
    stack: ["React.js", "Reusable UI", "Validation"],
    icon: Braces,
    theme: "project-blue",
  },
  {
    number: "03",
    title: "Student Registration & Enquiry",
    category: "FORMS · USER JOURNEYS",
    description: "Responsive registration and enquiry flows with validation and dashboard views designed to keep tasks clear and simple.",
    stack: ["React.js", "JavaScript", "Responsive UI"],
    icon: MonitorSmartphone,
    theme: "project-purple",
  },
  {
    number: "04",
    title: "EV Smart Charging & Reservation",
    category: "MCA PROJECT · FIGMA CONCEPT",
    description: "Designed UI concepts in Figma and developed a responsive React frontend for EV charging-slot availability and reservations, supported by Java and MySQL.",
    stack: ["React.js", "Figma", "Java", "MySQL"],
    icon: Zap,
    theme: "project-orange",
  },
];

const skills = [
  { title: "Frontend", items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"], icon: Code2 },
  { title: "UI Engineering", items: ["Reusable components", "Responsive layouts", "Dashboard UI", "Form validation", "Accessibility", "Cross-browser testing"], icon: Layers3 },
  { title: "APIs & Data", items: ["REST API integration", "Data presentation", "Data validation", "Java", "MySQL"], icon: Database },
  { title: "Tools & Workflow", items: ["Git & GitHub", "VS Code", "Postman", "Chrome DevTools", "Figma", "Agile"], icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ["About", "#about"], ["Work", "#work"], ["Skills", "#skills"],
    ["Journey", "#journey"], ["Contact", "#contact"],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="top-glow" aria-hidden="true" />
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Snekha home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-copy">SNEKHA V<small>FRONTEND ENGINEER</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <span className="availability-dot" /> FRONTEND ENGINEER <span className="availability-divider">/</span> CHENNAI, INDIA
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
              I build digital<br />experiences that<br /><span className="headline-highlight">feel effortless.</span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}>
              I&apos;m Snekha — a frontend engineer turning complex requirements into responsive, accessible, and thoughtful web interfaces with React.js.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <a href="#work" className="button-primary">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="button-secondary">Get in touch <ArrowDownRight size={17} /></a>
            </motion.div>
            <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <span><MapPin size={15} /> Chennai, India</span>
              <span className="meta-line" />
              <span><CalendarDays size={15} /> Apr 2024 — May 2026</span>
            </motion.div>
          </div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.25 }}>
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="energy-core">
              <div className="core-inner"><Code2 size={62} strokeWidth={1.1} /></div>
            </div>
            <div className="floating-card card-code">
              <span className="float-icon"><Braces size={17} /></span>
              <span><b>Clean code</b><small>Built to scale</small></span>
            </div>
            <div className="floating-card card-ui">
              <span className="float-icon float-icon-dark"><MonitorSmartphone size={17} /></span>
              <span><b>Responsive UI</b><small>Every screen, considered</small></span>
            </div>
            <div className="art-caption"><span>FIG. 01</span> Thoughtful by design</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="about-section section-shell section-pad">
          <Reveal><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Good interfaces make<br /><span className="muted-heading">everything click.</span></>} /></Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="about-lead">I care about the details people notice — and the friction they shouldn&apos;t.</p>
              <p className="body-copy">With 2+ years of combined software development experience, I build responsive interfaces that balance clean visual design with maintainable engineering. I enjoy creating reusable React components, connecting APIs, and turning everyday workflows into clear, dependable user experiences.</p>
              <p className="body-copy">My approach is practical: understand the user journey, keep the interface accessible, test across devices, and refine until the experience feels right.</p>
              <a href="#contact" className="text-link">Let&apos;s build something useful <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal className="about-aside" delay={0.12}>
              <div className="principle-card">
                <span className="principle-number">01</span><Layers3 size={23} />
                <h3>Designed for clarity</h3><p>Interfaces that help people understand what to do next.</p>
              </div>
              <div className="principle-card">
                <span className="principle-number">02</span><Code2 size={23} />
                <h3>Built with purpose</h3><p>Reusable components and maintainable frontend foundations.</p>
              </div>
              <div className="principle-card">
                <span className="principle-number">03</span><Zap size={23} />
                <h3>Improved through detail</h3><p>Responsive behaviour, validation, debugging, and testing.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-shell">
            <Reveal><SectionHeading eyebrow="SELECTED WORK" title={<>Projects with a <span className="muted-heading">purpose.</span></>} description="A selection of interfaces and application workflows built around usability, structure, and clear information." /></Reveal>
            <div className="project-grid">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Reveal key={project.number} delay={index * 0.06} className={`project-card ${project.theme}`}>
                    <div className="project-topline"><span>{project.number} / 04</span><span className="project-open"><ArrowUpRight size={18} /></span></div>
                    <div className="project-visual">
                      <div className="visual-window">
                        <div className="window-bar"><i /><i /><i /><span>workspace / overview</span></div>
                        <div className="visual-content">
                          <div className="visual-sidebar"><b /><i /><i /><i /><i /></div>
                          <div className="visual-dashboard">
                            <div className="visual-title" /><div className="visual-stat-row"><i /><i /><i /></div>
                            <div className="visual-chart"><span /><span /><span /><span /><span /><span /><span /></div>
                            <div className="visual-bottom"><i /><i /><i /></div>
                          </div>
                        </div>
                      </div>
                      <div className="project-icon"><Icon size={25} /></div>
                    </div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </Reveal>
                );
              })}
            </div>
            <p className="project-note"><Sparkles size={15} /> Project visuals are illustrative UI previews. Add live demo and repository links when available.</p>
          </div>
        </section>

        <section id="skills" className="skills-section section-shell section-pad">
          <Reveal><SectionHeading eyebrow="MY TOOLKIT" title={<>The tools behind the <span className="muted-heading">experience.</span></>} description="A practical toolkit for shipping polished interfaces and reliable user flows." /></Reveal>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return <Reveal key={group.title} delay={index * 0.07} className="skill-card">
                <div className="skill-card-heading"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </Reveal>;
            })}
          </div>
        </section>

        <section id="journey" className="journey-section section-pad">
          <div className="section-shell journey-grid">
            <Reveal><SectionHeading eyebrow="THE JOURNEY" title={<>Experience that shapes<br /><span className="muted-heading">the way I build.</span></>} description="Learning, collaborating, and improving with every product and project." /></Reveal>
            <Reveal className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"><CheckCircle2 size={18} /></div>
                <div className="timeline-date">APR 2024 — MAY 2026 <span>· 2 YEARS 2 MONTHS</span></div>
                <h3>Software Developer</h3>
                <p className="timeline-company">MannIT Technolabs Private Limited <span>· Chennai</span></p>
                <ul>
                  <li>Developed responsive web interfaces using React.js, JavaScript, HTML, and CSS.</li>
                  <li>Built reusable React components, dashboards, dynamic data views, and validated forms.</li>
                  <li>Integrated REST APIs with backend teams and contributed to debugging, browser testing, and performance improvements.</li>
                  <li>Collaborated through Agile sprint activities and code reviews.</li>
                </ul>
                <div className="tag-list"><span>React.js</span><span>REST APIs</span><span>Responsive UI</span><span>Agile</span></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"><GraduationCap size={18} /></div>
                <div className="timeline-date">2021 — 2023</div>
                <h3>Master of Computer Applications (MCA)</h3>
                <p className="timeline-company">DG Vaishnav College · University of Madras</p>
                <p className="timeline-detail">CGPA: 8.4</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"><GraduationCap size={18} /></div>
                <div className="timeline-date">2018 — 2021</div>
                <h3>B.Sc. Computer Science</h3>
                <p className="timeline-company">Alpha Arts and Science College · University of Madras</p>
                <p className="timeline-detail">CGPA: 8.2</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell section-pad">
          <Reveal className="contact-panel">
            <div className="contact-orb" aria-hidden="true" />
            <p className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?</p>
            <h2>Let&apos;s make the<br /><span className="headline-highlight">next thing better.</span></h2>
            <p className="contact-copy">Have an opportunity, an idea, or a product that needs a thoughtful frontend? I&apos;d love to hear from you.</p>
            <p className="contact-choice-label">CHOOSE HOW YOU'D LIKE TO CONNECT</p>
            <div className="contact-options" aria-label="Contact options">
              <a className="contact-option email-option" href="mailto:snekhaofficial1011@gmail.com" aria-label="Send an email">
                <span className="contact-option-icon"><Mail size={19} /></span>
                <span><strong>Email me</strong><small>snekhaofficial1011@gmail.com</small></span>
                <ArrowUpRight className="contact-option-arrow" size={17} />
              </a>
              <a className="contact-option call-option" href="tel:+919840420523" aria-label="Call Snekha">
                <span className="contact-option-icon"><Phone size={19} /></span>
                <span><strong>Call me</strong><small>+91 98404 20523</small></span>
                <ArrowUpRight className="contact-option-arrow" size={17} />
              </a>
              <a className="contact-option whatsapp-option" href="https://wa.me/919840420523" target="_blank" rel="noreferrer" aria-label="Message on WhatsApp">
                <span className="contact-option-icon"><MessageCircle size={19} /></span>
                <span><strong>WhatsApp</strong><small>Send me a message</small></span>
                <ArrowUpRight className="contact-option-arrow" size={17} />
              </a>
            </div>
            <div className="contact-details">
              <span><MapPin size={16} /> Chennai, India</span>
              <span className="contact-response-note">Choose any option above — I'll be happy to connect.</span>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">S<span>.</span></span><span className="brand-copy">SNEKHA V<small>FRONTEND ENGINEER</small></span></a>
        <p>Thoughtfully built, one component at a time.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Snekha V</span>
      </footer>
    </div>
  );
}

export default App;

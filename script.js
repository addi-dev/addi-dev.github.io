/* ===================================================
   PORTFOLIO — script.js
   Full Stack Developer Portfolio
   Data-driven, modular, vanilla JS
   =================================================== */

/* ============================================================
   DATA LAYER — Edit this section to customize the portfolio
   ============================================================ */

/** Hero section meta */
const hero = {
  name: "Mohammed Addi",
  role: "Développeur Full Stack",
  description:
    "Je conçois des applications web fonctionnelles et sur mesure — des backends robustes aux interfaces modernes. Je transforme vos besoins en solutions digitales concrètes.",
  stats: [
    { number: "3", label: "Projets réalisés" },
    { number: "2", label: "Ans d'apprentissage" },
    { number: "100%", label: "Disponible" },
  ],
};

/** Navigation links */
const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Parcours", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Langues", href: "#languages" },
  { label: "Contact", href: "#contact" },
];

/** About section */
const about = {
  paragraphs: [
    "Je suis un développeur web full stack autodidacte basé au Maroc, passionné par la création d'applications web qui résolvent de vrais problèmes métier.",
    "Mon stack principal : PHP, MySQL et JavaScript pour le backend, HTML/CSS avec Bootstrap et Tailwind pour le frontend. J'ai réalisé des systèmes de gestion complets — de la base de données à l'interface utilisateur.",
    "Actuellement disponible pour des missions freelance et des opportunités à distance. Je livre du code propre et fonctionnel, dans les délais.",
  ],
  details: [
    {
      key: "Statut",
      value: '<span class="status-dot"></span> Disponible',
    },
    { key: "Localisation", value: "Khémisset, Maroc · Remote" },
    { key: "Focus", value: "Applications web & systèmes de gestion" },
    { key: "Email", value: "mohammed.addi.dev@gmail.com" },
    { key: "Formation", value: "Développement Web — 2023/2025" },
  ],
};

/** Skills — categorized */
const skills = {
  frontend: [
    { name: "HTML5", icon: "fa-brands fa-html5", level: 80 },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 75 },
    { name: "JavaScript", icon: "fa-brands fa-js", level: 65 },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 75 },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: 70 },
  ],
  backend: [
    { name: "PHP", icon: "fa-brands fa-php", level: 70 },
    { name: "Laravel", icon: "fa-brands fa-laravel", level: 60 },
    { name: "Python", icon: "fa-brands fa-python", level: 50 },
  ],
  database: [
    { name: "MySQL", icon: "fa-solid fa-database", level: 75 },
    { name: "MongoDB", icon: "fa-solid fa-leaf", level: 50 },
  ],
  tools: [
    { name: "Git / GitHub", icon: "fa-brands fa-git-alt", level: 70 },
    { name: "Figma", icon: "fa-brands fa-figma", level: 55 },
    { name: "Linux", icon: "fa-brands fa-linux", level: 55 },
  ],
};

/** Work experience */
const experiences = [
  {
    role: "Développeur Web Freelance",
    company: "Indépendant",
    companyIcon: "🚀",
    duration: "2025 — Présent",
    description:
      "Développement d'applications web sur mesure pour des clients. Spécialisé dans les systèmes de gestion en PHP/MySQL et les interfaces modernes avec JavaScript.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    role: "Projet de Fin d'Études",
    company: "Formation Développement Web",
    companyIcon: "🎓",
    duration: "2026",
    description:
      "Conception et développement d'un système complet de gestion des réclamations avec 4 rôles utilisateurs (Admin, Superviseur, Agent, Client), suivi du cycle de vie des tickets et système de commentaires.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Projet Municipal",
    company: "Commune de Khémisset",
    companyIcon: "⚡",
    duration: "2025",
    description:
      "Développement d'un système de gestion des réparations de véhicules pour une collectivité locale. Remplacement des fichiers Excel par une solution web centralisée avec suivi des réparations et historique de maintenance.",
    tech: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

/** Projects */
const projects = [
  {
    title: "Système de Gestion des Réclamations",
    description:
      "Plateforme helpdesk complète avec 4 rôles (Admin, Superviseur, Agent, Client), gestion du cycle de vie des tickets, affectation aux agents, système de commentaires et suivi des statuts.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/addi-dev/complaint-manager",
    demo: "#",
    badge: "Projet récent",
    gradient: "linear-gradient(135deg, #0d2137 0%, #1a1045 100%)",
    image: "assets/thumbnails/helpdesk.png"
  },
  {
    title: "Système de Gestion des Stages",
    description:
      "Plateforme de gestion des stages pour une grande entreprise, avec rôles Administrateur, Gestionnaire RH et Encadrant, suivi complet du cycle de stage (établissements, stagiaires, stages, livrables), génération de documents PDF (convocations, attestations, sujets de stage) et export de listes.",
    tech: ["Laravel"],
    github: "#",
    demo: "#",
    badge: "Projet récent",
    gradient: "linear-gradient(135deg, #0d2137 0%, #1a1045 100%)",
    image: "assets/thumbnails/internly.png",
  },
];

/** Languages */
const languages = [
  { name: "Arabe", flag: "assets/flags/ar.png", level: "Natif", dots: 5 },
  { name: "Anglais", flag: "assets/flags/usa.png", level: "Courant", dots: 4 },
  { name: "Français", flag: "assets/flags/fr.png", level: "Débutant", dots: 2 },
  { name: "Allemand", flag: "assets/flags/de.png", level: "Débutant", dots: 2 },
];

/** Contact info */
const contactInfo = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "mohammed.addi.dev@gmail.com",
    href: "mailto:mohammed.addi.dev@gmail.com",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/addi-dev",
    href: "https://github.com/addi-dev",
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/mohammedaddi",
    href: "https://linkedin.com",
  },
  {
    icon: "fa-solid fa-globe",
    label: "Website",
    value: "addi-dev.github.io",
    href: "https://addi-dev.github.io",
  },
];

/** Social links for footer */
const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/addi-dev" },
  { icon: "fa-brands fa-linkedin", href: "https://linkedin.com/" },
  { icon: "fa-brands fa-twitter", href: "https://twitter.com/" },
  { icon: "fa-solid fa-globe", href: "https://addi-dev.github.io" },
];

/* ============================================================
   RENDER ENGINE — Modular rendering functions
   ============================================================ */

/** Render navbar */
function renderNav() {
  const ul = document.getElementById("navLinks");
  ul.innerHTML = navItems
    .map(
      (item) =>
        `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`,
    )
    .join("");
}

/** Render hero */
function renderHero() {
  document.getElementById("heroName").textContent = hero.name;
  document.getElementById("heroDesc").textContent = hero.description;

  // Typewriter for role
  typeWriter(document.getElementById("heroRole"), hero.role);

  // Stats
  document.getElementById("heroStats").innerHTML = hero.stats
    .map(
      (s) =>
        `<div class="stat-item">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>`,
    )
    .join("");
}

/** Typewriter effect */
function typeWriter(el, text, speed = 55) {
  let i = 0;
  el.innerHTML =
    '<span class="typed-accent"></span><span class="cursor-blink">|</span>';
  const typed = el.querySelector(".typed-accent");
  const blink = el.querySelector(".cursor-blink");
  blink.style.cssText =
    "animation: blink 0.8s step-end infinite; color: var(--accent);";

  // Add blink animation
  const style = document.createElement("style");
  style.textContent = "@keyframes blink { 50% { opacity: 0; } }";
  document.head.appendChild(style);

  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < text.length) {
        typed.textContent += text[i++];
      } else {
        clearInterval(interval);
        setTimeout(() => {
          blink.style.display = "none";
        }, 2000);
      }
    }, speed);
  }, 900);
}

/** Render about section */
function renderAbout() {
  document.getElementById("aboutText").innerHTML = about.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("");

  document.getElementById("aboutCard").innerHTML = about.details
    .map(
      (d) =>
        `<div class="about-card-row">
      <span class="about-card-key">${d.key}</span>
      <span class="about-card-val">${d.value}</span>
    </div>`,
    )
    .join("");
}

/** Render skills with tab switching */
function renderSkills() {
  const panels = document.getElementById("skillsPanels");

  panels.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) =>
        `<div class="skills-panel ${category === "frontend" ? "active" : ""}" data-panel="${category}">
      ${items
          .map(
            (skill) =>
              `<div class="skill-chip">
          <span class="skill-icon"><i class="${skill.icon}"></i></span>
          <span class="skill-name">${skill.name}</span>
          <div class="skill-bar-wrap">
            <div class="skill-bar" data-level="${skill.level}"></div>
          </div>
        </div>`,
          )
          .join("")}
    </div>`,
    )
    .join("");

  // Tab interaction
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".skills-panel")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = document.querySelector(`[data-panel="${btn.dataset.tab}"]`);
      panel.classList.add("active");

      // Animate bars when panel shown
      setTimeout(() => animateSkillBars(panel), 50);
    });
  });

  // Animate initial panel
  setTimeout(() => {
    animateSkillBars(document.querySelector(".skills-panel.active"));
  }, 400);
}

function animateSkillBars(panel) {
  panel.querySelectorAll(".skill-bar").forEach((bar) => {
    bar.style.width = bar.dataset.level + "%";
  });
}

/** Render experience timeline */
function renderExperience() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = experiences
    .map(
      (exp, i) =>
        `<div class="timeline-item" style="transition-delay:${i * 0.1}s">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-role">${exp.role}</div>
            <div class="timeline-company">
              <span>${exp.companyIcon}</span>
              <span>${exp.company}</span>
            </div>
          </div>
          <span class="timeline-duration">${exp.duration}</span>
        </div>
        <p class="timeline-description">${exp.description}</p>
        <div class="timeline-tech">
          ${exp.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>`,
    )
    .join("");
}

/** Render projects grid */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map(
      (proj, i) =>
        `<article class="project-card" style="transition-delay:${(i % 3) * 0.1}s">
      <div class="project-image">
        <div class="project-image-inner" style="background:${proj.gradient}">
            <img src="${proj.image}" alt="${proj.title}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <span class="project-badge">${proj.badge}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.description}</p>
        <div class="project-tech">
          ${proj.tech.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-outline">
            <i class="fa-brands fa-github" width="14" height="14"></i> GitHub
          </a>
          <a href="${proj.demo}" target="_blank" rel="noopener" class="btn btn-outline">
            <i class="fa-solid fa-arrow-up-right-from-square" width="14" height="14"></i> Live Demo
          </a>
        </div>
      </div>
    </article>`,
    )
    .join("");
}

/** Render languages */
function renderLanguages() {
  const grid = document.getElementById("languagesGrid");
  grid.innerHTML = languages
    .map(
      (lang, i) =>
        `<div class="language-card" style="transition-delay:${i * 0.1}s">
      <img src="${lang.flag}" alt="${lang.name}" class="lang-flag">
      <div class="lang-name">${lang.name}</div>
      <div class="lang-level">${lang.level}</div>
      <div class="lang-dots">
        ${Array.from(
          { length: 5 },
          (_, j) =>
            `<div class="lang-dot ${j < lang.dots ? "filled" : ""}"></div>`,
        ).join("")}
      </div>
    </div>`,
    )
    .join("");
}

/** Render contact section */
function renderContact() {
  document.getElementById("contactLinks").innerHTML = contactInfo
    .map(
      (c) =>
        `<a href="${c.href}" target="_blank" rel="noopener" class="contact-link">
      <div class="contact-link-icon">
        <i class="${c.icon}" width="18" height="18"></i>
      </div>
      <div class="contact-link-text">
        <strong>${c.label}</strong>
        <span>${c.value}</span>
      </div>
    </a>`,
    )
    .join("");
}

/** Render footer */
function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("footerCopy").textContent =
    `© ${year} Mohammed Addi — Développé avec HTML, CSS & JavaScript`;

  document.getElementById("footerSocials").innerHTML = socials
    .map(
      (s) =>
        `<a href="${s.href}" target="_blank" rel="noopener" class="social-btn" aria-label="${s.icon}">
      <i class="${s.icon}" width="16" height="16"></i>
    </a>`,
    )
    .join("");
}

/* ============================================================
   INTERACTIONS
   ============================================================ */

/** Sticky navbar + active link on scroll */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  const onScroll = () => {
    // Sticky style
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    // Active link
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    links.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`,
      );
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Mobile menu */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  const close = () => {
    toggle.classList.remove("open");
    links.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    links.classList.toggle("open", open);
    overlay.classList.toggle("visible", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  overlay.addEventListener("click", close);

  // Close on nav link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", close);
  });
}

/** IntersectionObserver for reveal animations */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  // Generic reveal
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Timeline items
  document
    .querySelectorAll(".timeline-item")
    .forEach((el) => observer.observe(el));

  // Project cards
  document
    .querySelectorAll(".project-card")
    .forEach((el) => observer.observe(el));

  // Language cards
  document
    .querySelectorAll(".language-card")
    .forEach((el) => observer.observe(el));
}

/** Custom cursor */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");
  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Smooth follower
  const animateFollower = () => {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  };
  animateFollower();

  // Hover expand
  document
    .querySelectorAll("a, button, .skill-chip, .project-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        follower.classList.add("expand");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        follower.classList.remove("expand");
      });
    });
}

/** Contact form handler */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-primary");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Envoi en cours...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✓ Message envoyé ! Je vous réponds sous 24h.";
        status.className = "form-status success";
        form.reset();
      } else {
        const data = await response.json();
        const msg =
          data?.errors?.map((e) => e.message).join(", ") ||
          "✗ Une erreur est survenue.";
        status.textContent = "✗ " + msg;
        status.className = "form-status error";
      }
    } catch {
      status.textContent = "✗ Erreur réseau — veuillez réessayer.";
      status.className = "form-status error";
    }

    btn.disabled = false;
    btn.querySelector("span").textContent = "Envoyer";

    setTimeout(() => {
      status.textContent = "";
      status.className = "form-status";
    }, 6000);
  });
}

/** Smooth scroll for all anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/** Parallax on hero orbs */
function initParallax() {
  const orbs = document.querySelectorAll(".orb");
  document.addEventListener("mousemove", (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const strength = (i + 1) * 12;
      orb.style.transform = `translate(${xRatio * strength}px, ${yRatio * strength}px)`;
    });
  });
}

/** Back to top button */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   BOOT — Initialize everything
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render all data-driven sections
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderLanguages();
  renderContact();
  renderFooter();

  // 2. Interactions
  initNavbar();
  initMobileMenu();
  initReveal();
  initCursor();
  initContactForm();
  initSmoothScroll();
  initParallax();
  initBackToTop();
});

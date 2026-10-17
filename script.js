const profileConfig = {
  name: "Fares",
  role: "Junior Frontend Developer",
  location: "[YOUR CITY, COUNTRY]",
  email: "[YOUR EMAIL]",
  github: "[YOUR GITHUB URL]",
  linkedin: "[YOUR LINKEDIN URL]",
  resume: "[YOUR RESUME URL, OPTIONAL]",
  status: "Open to Junior Opportunities",
  brandMonogram: "F",
  heroImage: "image/WhatsApp%20Image%202026-10-17%20at%203.54.47%20PM.jpeg",
  projects: [
    {
      title: { en: "Portfolio Showcase", ar: "معرض الملف الشخصي" },
      description: {
        en: "A polished, responsive portfolio experience built to present personal projects, strengths, and creative direction with clarity.",
        ar: "تجربة ملف شخصي متجاوبة ومصممة بعناية لتقديم المشاريع والمهارات والهوية الإبداعية بوضوح."
      },
      tags: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      title: { en: "Landing Page Concept", ar: "تصميم صفحة هبوط" },
      description: {
        en: "A concept landing page focused on hierarchy, storytelling, and conversion-friendly structure with careful visual rhythm.",
        ar: "صفحة هبوط تصور فكرة تركز على التسلسل البصري والقصة والهيكل السهل للاستفادة من الزوار."
      },
      tags: ["Responsive", "UI Design", "Accessibility"],
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      link: "#"
    },
    {
      title: { en: "Interactive To-Do App", ar: "تطبيق مهام تفاعلي" },
      description: {
        en: "A small practice app demonstrating state updates, form validation, and a clean interactive user flow.",
        ar: "تطبيق صغير يوضح تحديثات الحالة والتحقق من النماذج وتدفقًا تفاعليًا نظيفًا."
      },
      tags: ["DOM", "Events", "Forms"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      link: "#"
    }
  ],
  skills: [
    {
      title: { en: "Core Technologies", ar: "التقنيات الأساسية" },
      badge: { en: "Core", ar: "أساسي" },
      summary: {
        en: "The foundation of my frontend work and interface building.",
        ar: "الأساس الذي يبنى عليه عملي في تطوير واجهات الويب."
      },
      items: ["HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      title: { en: "Frontend Fundamentals", ar: "أساسيات الواجهة" },
      badge: { en: "Practice", ar: "ممارسة" },
      summary: {
        en: "Focused on layout systems, interaction patterns, and accessible UX details.",
        ar: "تركز على نظم التخطيط، أنماط التفاعل، وتفاصيل تجربة المستخدم القابلة للوصول."
      },
      items: [
        "Responsive Web Design",
        "Flexbox and CSS Grid",
        "DOM Manipulation",
        "Event Handling",
        "Form Validation",
        "Semantic HTML",
        "Accessibility Fundamentals",
        "CSS Animations and Transitions",
        "Basic API Integration"
      ]
    },
    {
      title: { en: "Tools & Workflow", ar: "الأدوات وسير العمل" },
      badge: { en: "Workflow", ar: "سير العمل" },
      summary: {
        en: "A clean, structured workflow for building and refining front-end work.",
        ar: "سير عمل منظم ونظيف لبناء وتحسين مشاريع الواجهة الأمامية."
      },
      items: ["Git", "GitHub", "Browser Developer Tools", "VS Code"]
    }
  ]
};

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.status": "Open to Junior Opportunities",
    "hero.identity": "Fares / FRONTEND DEVELOPER",
    "hero.eyebrow": "BUILDING FOR THE WEB",
    "hero.title": "Turning Ideas Into Thoughtful Digital Experiences.",
    "hero.description": "I’m a junior frontend developer focused on building responsive, accessible, and visually refined web experiences with HTML, CSS, and JavaScript.",
    "hero.primaryCta": "Explore My Work",
    "hero.secondaryCta": "Get in Touch",
    "about.kicker": "About",
    "about.title": "Building thoughtful interfaces one detail at a time.",
    "about.text1": "I’m a junior frontend developer who enjoys turning ideas into clean, interactive web interfaces. I’m building my skills in HTML, CSS, and JavaScript, with a strong interest in responsive design, accessibility, and writing maintainable code.",
    "about.text2": "I believe good interfaces should look thoughtful, feel intuitive, and work well across devices. Every project is an opportunity to learn, refine, and create experiences that feel considered from the first click to the final interaction.",
    "about.highlight1Title": "Current focus",
    "about.highlight1Text": "Responsive layouts and accessible interfaces",
    "about.highlight2Title": "Learning mindset",
    "about.highlight2Text": "Improving structure, clarity, and usability",
    "about.process1": "Research",
    "about.process1Text": "Context and user needs",
    "about.process2": "Design",
    "about.process2Text": "Hierarchy and visual rhythm",
    "about.process3": "Build",
    "about.process3Text": "Accessible, responsive interfaces",
    "skills.kicker": "Skills",
    "skills.title": "Core technologies and fundamentals",
    "projects.kicker": "Projects",
    "projects.title": "Selected work and practice builds",
    "contact.kicker": "Contact",
    "contact.title": "Let’s build something thoughtful.",
    "contact.description": "I’m currently looking for beginner-friendly opportunities where I can contribute, learn, and grow as a frontend developer.",
    "contact.locationLabel": "Location",
    "contact.emailLabel": "Email",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
    "contact.nameLabel": "Name",
    "contact.emailInputLabel": "Email",
    "contact.messageLabel": "Message",
    "contact.submit": "Send Message",
    "footer.text": "© 2025 Fares — Junior Frontend Developer",
    "footer.backToTop": "Back to top",
    "validation.required": "Please fill out this field.",
    "validation.email": "Please enter a valid email address.",
    "validation.success": "Thanks for reaching out. I’ll get back to you soon.",
    "projects.view": "View project",
    "projects.code": "Code",
    "projects.learnMore": "Learn more"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.contact": "التواصل",
    "hero.status": "متاح لفرص Junior",
    "hero.identity": "فارس / مطور واجهات",
    "hero.eyebrow": "أعمل على الويب",
    "hero.title": "بحوّل الأفكار لتجارب رقمية متصممة بعناية.",
    "hero.description": "أنا مطور Frontend في بداية رحلتي، مهتم ببناء مواقع سريعة ومتجاوبة تجمع بين التصميم الجذاب وتجربة الاستخدام الجيدة باستخدام HTML وCSS وJavaScript.",
    "hero.primaryCta": "استكشف أعمالي",
    "hero.secondaryCta": "تواصل معي",
    "about.kicker": "عني",
    "about.title": "أبني واجهات دقيقة ومصممة بعناية في كل تفاصيلها.",
    "about.text1": "أنا مطور Frontend في بداية رحلتي، أحب تحويل الأفكار إلى واجهات ويب واضحة وتفاعلية. أعمل على تطوير مهاراتي في HTML وCSS وJavaScript، مع اهتمام كبير بتصميم المواقع المتجاوبة وإمكانية الوصول إلى المحتوى وكتابة كود قابل للصيانة.",
    "about.text2": "أؤمن أن الواجهات الجيدة يجب أن تبدو مدروسة، وتبدو بديهية، وتعمل بشكل جيد عبر الأجهزة المختلفة. كل مشروع يمثل فرصة للتعلم والتحسين وخلق تجربة تتسم بالتفكير منذ أول نقرة وحتى التفاعل الأخير.",
    "about.highlight1Title": "التركيز الحالي",
    "about.highlight1Text": "تصاميم متجاوبة وواجهات قابلة للوصول",
    "about.highlight2Title": "نهج التعلم",
    "about.highlight2Text": "تحسين البنية والوضوح وسهولة الاستخدام",
    "about.process1": "البحث",
    "about.process1Text": "سياق المشروع واحتياجات المستخدم",
    "about.process2": "التصميم",
    "about.process2Text": "التسلسل البصري والإيقاع المرئي",
    "about.process3": "البناء",
    "about.process3Text": "واجهات متجاوبة وقابلة للوصول",
    "skills.kicker": "المهارات",
    "skills.title": "التقنيات الأساسية وأسس العمل",
    "projects.kicker": "المشاريع",
    "projects.title": "أعمال مختارة ومشاريع تدريبية",
    "contact.kicker": "التواصل",
    "contact.title": "لنصنع شيئًا مدروسًا معًا.",
    "contact.description": "أبحث حاليًا عن فرص مناسبة للمبتدئين أساهم فيها وأتعلم وأنمو كـ Frontend Developer.",
    "contact.locationLabel": "الموقع",
    "contact.emailLabel": "الإيميل",
    "contact.githubLabel": "GitHub",
    "contact.linkedinLabel": "LinkedIn",
    "contact.nameLabel": "الاسم",
    "contact.emailInputLabel": "البريد الإلكتروني",
    "contact.messageLabel": "الرسالة",
    "contact.submit": "إرسال الرسالة",
    "footer.text": "© 2025 [YOUR NAME] — مطور Frontend مبتدئ",
    "footer.backToTop": "العودة للأعلى",
    "validation.required": "يرجى ملء هذا الحقل.",
    "validation.email": "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    "validation.success": "شكرًا لتواصلك. سأرد عليك قريبًا.",
    "projects.view": "عرض المشروع",
    "projects.code": "الكود",
    "projects.learnMore": "المزيد"
  }
};

const state = {
  language: "en"
};

const elements = {
  html: document.documentElement,
  navLinks: [...document.querySelectorAll(".main-nav a")],
  langButtons: [...document.querySelectorAll(".lang-btn")],
  i18nNodes: [...document.querySelectorAll("[data-i18n]")],
  navToggle: document.querySelector(".nav-toggle"),
  navPanel: document.querySelector(".nav-panel"),
  projectsGrid: document.getElementById("projectsGrid"),
  skillsGrid: document.getElementById("skillsGrid"),
  contactForm: document.getElementById("contactForm"),
  formStatus: document.getElementById("formStatus"),
  brandName: document.querySelector(".brand-name"),
  brandMark: document.querySelector(".brand-mark")
};

function getStoredLanguage() {
  try {
    const saved = window.localStorage.getItem("portfolio-language");
    return saved === "ar" ? "ar" : "en";
  } catch (error) {
    return "en";
  }
}

function setStoredLanguage(lang) {
  try {
    window.localStorage.setItem("portfolio-language", lang);
  } catch (error) {
    console.warn("localStorage unavailable; language preference could not be saved.");
  }
}

function renderSkills() {
  const current = state.language;
  elements.skillsGrid.innerHTML = profileConfig.skills
    .map(
      (group) => `
        <article class="skill-card">
          <div class="skill-card-head">
            <span class="skill-badge">${group.badge[current] || group.badge.en}</span>
            <h3>${group.title[current] || group.title.en}</h3>
          </div>
          <p class="skill-summary">${group.summary[current] || group.summary.en}</p>
          <ul class="skill-list">
            ${group.items
              .map(
                (item) => `
                  <li>${item}</li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  const current = state.language;
  elements.projectsGrid.innerHTML = profileConfig.projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual" aria-hidden="true">
            <img src="${project.image}" alt="${project.title[current] || project.title.en}" loading="lazy" />
          </div>
          <h3>${project.title[current] || project.title.en}</h3>
          <p>${project.description[current] || project.description.en}</p>
          <div class="project-meta">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${project.link}" class="text-link">${translations[current]["projects.view"]}</a>
            <a href="${project.link}" class="text-link">${translations[current]["projects.code"]}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function updateTextContent() {
  elements.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const phrase = translations[state.language][key];
    if (phrase) {
      node.textContent = phrase;
    }
  });

  const footerText = document.querySelector("[data-i18n='footer.text']");
  if (footerText) {
    footerText.textContent = translations[state.language]["footer.text"].replace("[YOUR NAME]", profileConfig.name);
  }

  const emailLink = document.querySelector(".contact-list li:nth-child(2) a");
  const githubLink = document.querySelector(".contact-list li:nth-child(3) a");
  const linkedinLink = document.querySelector(".contact-list li:nth-child(4) a");
  const ctaLink = document.querySelector(".btn-secondary");

  if (emailLink) {
    emailLink.textContent = profileConfig.email;
    emailLink.href = `mailto:${profileConfig.email}`;
  }

  if (githubLink) {
    githubLink.textContent = profileConfig.github;
    githubLink.href = profileConfig.github;
  }

  if (linkedinLink) {
    linkedinLink.textContent = profileConfig.linkedin;
    linkedinLink.href = profileConfig.linkedin;
  }

  if (ctaLink) {
    ctaLink.href = `mailto:${profileConfig.email}`;
  }

  document.title = `${profileConfig.name} | ${profileConfig.role}`;
  elements.brandName.textContent = profileConfig.name;
  elements.brandMark.textContent = profileConfig.brandMonogram;
  document.body.dir = state.language === "ar" ? "rtl" : "ltr";
  elements.html.lang = state.language;
  elements.html.dir = state.language === "ar" ? "rtl" : "ltr";

  const navItems = [...document.querySelectorAll(".main-nav a")];
  navItems.forEach((link) => {
    const isActive = link.getAttribute("href") === "#home";
    link.classList.toggle("active", isActive);
  });
}

function setLanguage(lang) {
  state.language = lang;
  setStoredLanguage(lang);

  elements.langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateTextContent();
  renderSkills();
  renderProjects();
}

function validateField(input) {
  const message = translations[state.language];
  if (!input.value.trim()) {
    return message["validation.required"];
  }

  if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    return message["validation.email"];
  }

  return "";
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = form.querySelectorAll("input, textarea");
  let hasError = false;

  fields.forEach((field) => {
    const error = validateField(field);
    field.setAttribute("aria-invalid", Boolean(error).toString());
    if (error) {
      hasError = true;
      const statusText = translations[state.language]["validation.required"];
      elements.formStatus.textContent = field.type === "email" ? translations[state.language]["validation.email"] : statusText;
    }
  });

  if (!hasError) {
    form.reset();
    elements.formStatus.textContent = translations[state.language]["validation.success"];
  }
}

function setupNavigation() {
  const toggle = elements.navToggle;
  const panel = elements.navPanel;

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  elements.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupLanguageSwitcher() {
  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setupFormValidation() {
  elements.contactForm.addEventListener("submit", handleFormSubmit);
}

function init() {
  state.language = getStoredLanguage();
  renderSkills();
  renderProjects();
  setupNavigation();
  setupLanguageSwitcher();
  setupFormValidation();
  setLanguage(state.language);
}

init();

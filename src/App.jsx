import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  LineChart,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroImage from "./assets/hero.png";

const profile = {
  email: "oded.atias@gmail.com",
  phone: "054-811-8698",
  github: "https://github.com/odedati",
  githubLabel: "github.com/odedati",
  linkedin: "https://www.linkedin.com/in/oded-atias-836b77251",
  linkedinLabel: "linkedin.com/in/oded-atias-836b77251",
};

const content = {
  en: {
    dir: "ltr",
    nav: ["Projects", "AI Focus", "Background", "Contact"],
    switchLabel: "עברית",
    eyebrow: "AI-oriented Software Engineer",
    openToWork: "Open to work",
    name: "Oded Atias",
    title:
      "Software and Information Systems Engineer focused on AI, data, full-stack development, and software engineering.",
    intro:
      "B.Sc. graduate from Ben-Gurion University, enthusiastic about AI, machine learning, and turning technical ideas into deployed products people can actually try.",
    primaryCta: "View projects",
    secondaryCta: "Contact me",
    proof: ["AI & XAI projects", "Public deployed demos", "Full-stack delivery"],
    highlightTitle: "Building proof, not just listing skills",
    highlightText:
      "I combine software engineering fundamentals with AI-assisted development, rapid prototyping, Python, PyTorch, JavaScript, React, Vue, SQL, Node.js, and public deployments.",
    sections: {
      projects: "Selected projects",
      ai: "AI focus",
      background: "Professional background",
      expertise: "Technical strengths",
      contact: "Let us build something useful",
    },
    projectsIntro:
      "Public links and repositories that show AI curiosity, production-minded implementation, and the ability to ship.",
    aiIntro:
      "This section makes the AI signal explicit: what I am learning, building, and practicing right now.",
    backgroundIntro:
      "The site now mirrors the strongest signals from my resume: education, teaching, service, languages, and technical range.",
    live: "Live site",
    code: "Source",
    noLive: "Repository only",
    featured: "Featured",
    expertiseIntro:
      "Technical strengths that support AI-oriented product building and full-stack delivery.",
    contactText:
      "Open to junior software engineering, AI-product, full-stack, and frontend opportunities.",
    resumeLabel: "Resume",
    resumeNote: "Resume details are reflected on this page",
    metricProjects: "Projects",
    metricLive: "Live sites",
  },
  he: {
    dir: "rtl",
    nav: ["פרויקטים", "מיקוד AI", "רקע", "יצירת קשר"],
    switchLabel: "English",
    eyebrow: "מהנדס תוכנה מוכוון AI",
    openToWork: "פתוח להזדמנויות",
    name: "עודד אטיאס",
    title: "מהנדס תוכנה ומערכות מידע עם מיקוד ב-AI, דאטה, פיתוח Full-stack והנדסת תוכנה.",
    intro:
      "בוגר B.Sc. בהנדסת מערכות מידע מאוניברסיטת בן-גוריון, עם עניין חזק ב-AI, Machine Learning והפיכת רעיונות טכניים למוצרים שאפשר לפתוח, לבדוק ולהתרשם מהם.",
    primaryCta: "לפרויקטים",
    secondaryCta: "דברו איתי",
    proof: ["פרויקטי AI ו-XAI", "דמואים פומביים באוויר", "פיתוח Full-stack"],
    highlightTitle: "להראות הוכחה, לא רק לרשום יכולות",
    highlightText:
      "אני משלב יסודות הנדסת תוכנה עם פיתוח בסיוע כלי AI, בניית אבות טיפוס מהירה, Python, PyTorch, JavaScript, React, Vue, SQL, Node.js ופרויקטים שעלו לאוויר.",
    sections: {
      projects: "פרויקטים נבחרים",
      ai: "מיקוד AI",
      background: "רקע מקצועי",
      expertise: "חוזקות טכניות",
      contact: "בואו נבנה משהו שימושי",
    },
    projectsIntro:
      "קישורים פומביים וריפוזיטוריז שמראים סקרנות ל-AI, יכולת ביצוע ויכולת להעלות מוצר לאוויר.",
    aiIntro:
      "האזור הזה מבליט בצורה ישירה מה אני לומד, בונה ומתרגל סביב AI.",
    backgroundIntro:
      "האתר משקף את האותות החזקים מקורות החיים: השכלה, הוראה, שירות, שפות ורוחב טכנולוגי.",
    live: "אתר באוויר",
    code: "קוד מקור",
    noLive: "קוד בלבד",
    featured: "מומלץ",
    expertiseIntro:
      "חוזקות טכניות שתומכות בבניית מוצרים מוכווני AI ובפיתוח Full-stack.",
    contactText:
      "פתוח להזדמנויות Junior Software Engineer, מוצרי AI, Full-stack ו-Frontend.",
    resumeLabel: "קורות חיים",
    resumeNote: "פרטי קורות החיים משולבים באתר",
    metricProjects: "פרויקטים",
    metricLive: "אתרים באוויר",
  },
};

const projects = [
  {
    title: "Explainability in Deep Learning",
    type: { en: "AI explainability · Public demo", he: "הסברתיות AI · דמו פומבי" },
    summary: {
      en: "A deep learning explainability project using XAI techniques and feature-attribution visualizations to make neural network decisions easier to interpret.",
      he: "פרויקט הסברתיות בלמידה עמוקה עם טכניקות XAI וויזואליזציות Feature Attribution כדי להפוך החלטות של רשתות נוירונים לברורות יותר.",
    },
    stack: ["Python", "PyTorch", "XAI", "Deep Learning"],
    live: "https://mediclear-project.onrender.com/",
    repo: "https://github.com/orgs/Final-Project-explainability/repositories",
    accent: "border-teal-400/50 bg-teal-400/10 text-teal-950",
    featured: true,
  },
  {
    title: "HR Battalion System",
    type: { en: "Operations platform", he: "פלטפורמת ניהול" },
    summary: {
      en: "A battalion management platform for attendance, soldier records, dashboards, and operational workflows.",
      he: "מערכת ניהול גדודית לנוכחות, רשומות חיילים, דשבורדים ותהליכים תפעוליים.",
    },
    stack: ["Vue 3", "Pinia", "Supabase", "Cloudflare"],
    live: "https://hr-tenant.pages.dev/login",
    repo: "https://github.com/odedati/hr-battalion-system",
    accent: "border-emerald-400/50 bg-emerald-400/10 text-emerald-950",
    featured: true,
  },
  {
    title: "AlgoTrade",
    type: { en: "Automated trading system", he: "מערכת מסחר אוטומטי" },
    summary: {
      en: "A cryptocurrency trading bot with REST API data fetching, backtesting modules, and risk-management logic using Pandas and NumPy.",
      he: "בוט מסחר קריפטו עם שליפת נתוני שוק דרך REST APIs, מודולי Backtesting ולוגיקת ניהול סיכונים עם Pandas ו-NumPy.",
    },
    stack: ["Python", "REST APIs", "Pandas", "NumPy"],
    live: "",
    repo: "https://github.com/odedati/AlgoTrage_final_project",
    accent: "border-amber-400/50 bg-amber-400/10 text-amber-950",
    featured: false,
  },
  {
    title: "Social Network Fullstack",
    type: { en: "Full-stack platform", he: "פלטפורמת Full-stack" },
    summary: {
      en: "A social platform with separated frontend and backend projects, deployment configuration, authentication, and data-flow work.",
      he: "רשת חברתית עם הפרדה בין Frontend ו-Backend, קונפיגורציית פריסה, אימות משתמשים ועבודה עם זרימות מידע.",
    },
    stack: ["Vue", "JavaScript", "Backend API", "Render"],
    live: "https://vuerecipesproject.onrender.com/",
    repo: "https://github.com/odedati/social-network-fullstack",
    accent: "border-rose-400/50 bg-rose-400/10 text-rose-950",
    featured: false,
  },
  {
    title: "Yaakov Bodo Website",
    type: { en: "Responsive website", he: "אתר רספונסיבי" },
    summary: {
      en: "A cultural biography website with gallery, media, QR flow, Web 1/2/3 Q&A, and contact form.",
      he: "אתר ביוגרפי-תרבותי עם גלריה, מדיה, QR, שאלות Web 1/2/3 וטופס יצירת קשר.",
    },
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://wed-2023.github.io/311394365/",
    repo: "https://github.com/WED-2023/311394365",
    accent: "border-sky-400/50 bg-sky-400/10 text-sky-950",
    featured: false,
  },
];

const background = [
  {
    icon: GraduationCap,
    title: { en: "Education", he: "השכלה" },
    eyebrow: { en: "Ben-Gurion University · 2021-2025", he: "אוניברסיטת בן-גוריון · 2021-2025" },
    text: {
      en: "B.Sc. in Information Systems Engineering. Main coursework: Deep Learning, Big Data, Computer & Network Security, Data Communications, Information Retrieval, Databases, Operating Systems, Algorithms, Advanced Programming, Computing Systems, and Data Structures.",
      he: "B.Sc. בהנדסת מערכות מידע. קורסים מרכזיים: Deep Learning, Big Data, אבטחת מחשבים ורשתות, תקשורת נתונים, אחזור מידע, בסיסי נתונים, מערכות הפעלה, אלגוריתמים, תכנות מתקדם, מערכות מחשוב ומבני נתונים.",
    },
  },
  {
    icon: Briefcase,
    title: { en: "Teaching experience", he: "ניסיון בהוראה" },
    eyebrow: { en: "Python Lab Assistant · 2022-2024", he: "עוזר הוראה במעבדת Python · 2022-2024" },
    text: {
      en: "Led and mentored first-year students in Introduction to Computer Science, explaining core programming concepts and supporting problem-solving skills. Also taught high-school mathematics for matriculation exams.",
      he: "הובלתי וליוויתי סטודנטים בשנה א' בקורס מבוא למדעי המחשב, עם דגש על תכנות ב-Python ופתרון בעיות. בנוסף לימדתי מתמטיקה לבגרות בתיכון.",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Military service", he: "שירות צבאי" },
    eyebrow: { en: "Combat Engineering Corps · Staff Sergeant", he: "חיל ההנדסה הקרבית · סמל ראשון" },
    text: {
      en: "Combat Engineering Corps platoon sergeant, with active reserve service. The experience adds discipline, ownership, and calm execution under pressure.",
      he: "מפקד מחלקה בחיל ההנדסה הקרבית ושירות מילואים פעיל. הניסיון מוסיף משמעת, אחריות וביצוע רגוע גם תחת לחץ.",
    },
  },
];

const strengths = [
  {
    icon: Brain,
    title: { en: "AI and deep learning", he: "AI ו-Deep Learning" },
    text: {
      en: "Deep Learning, PyTorch, XAI workflows, model interpretation, and feature-attribution thinking.",
      he: "Deep Learning, PyTorch, תהליכי XAI, פרשנות מודלים וחשיבה על Feature Attribution.",
    },
  },
  {
    icon: Layers,
    title: { en: "Product-minded UI", he: "ממשקים עם חשיבה מוצרית" },
    text: {
      en: "Clear flows, strong hierarchy, responsive layouts, and screens built around real user actions.",
      he: "זרימות ברורות, היררכיה חזקה, התאמה למסכים וממשקים שנבנים סביב פעולות משתמש אמיתיות.",
    },
  },
  {
    icon: Server,
    title: { en: "Full-stack delivery", he: "פיתוח Full-stack" },
    text: {
      en: "Frontend/backend separation, authentication flows, API thinking, deployment, and maintainable structure.",
      he: "הפרדה בין צד לקוח ושרת, אימות משתמשים, חשיבה על API, פריסה ומבנה קוד שנוח לתחזק.",
    },
  },
  {
    icon: LineChart,
    title: { en: "Data and FinTech", he: "דאטה ו-FinTech" },
    text: {
      en: "Trading logic, REST data fetching, backtesting, analysis flows, Pandas, NumPy, and decision support.",
      he: "לוגיקת מסחר, שליפת נתונים דרך REST, Backtesting, זרימות ניתוח, Pandas, NumPy ותמיכה בקבלת החלטות.",
    },
  },
];

const aiFocus = [
  {
    icon: Brain,
    title: { en: "Explainable AI", he: "Explainable AI" },
    text: {
      en: "Working with XAI concepts, feature attribution, and visual explanations for deep learning behavior.",
      he: "עבודה עם מושגי XAI, Feature Attribution והסברים ויזואליים להתנהגות של מודלי Deep Learning.",
    },
  },
  {
    icon: Code2,
    title: { en: "AI-assisted development", he: "פיתוח בסיוע AI" },
    text: {
      en: "Using modern AI coding tools to prototype faster, explore implementations, debug, and improve product copy and UX decisions.",
      he: "שימוש בכלי קוד מבוססי AI כדי לבנות אבות טיפוס מהר יותר, לבדוק מימושים, לדבג ולשפר UX וטקסטים מוצריים.",
    },
  },
  {
    icon: ExternalLink,
    title: { en: "Public demos", he: "דמואים פומביים" },
    text: {
      en: "Prioritizing projects that recruiters can open, test, and evaluate without setup friction.",
      he: "דגש על פרויקטים שמגייסים יכולים לפתוח, לבדוק ולהעריך בלי התקנות מסובכות.",
    },
  },
  {
    icon: Sparkles,
    title: { en: "Learning in public", he: "למידה גלויה" },
    text: {
      en: "Actively expanding the portfolio with AI-oriented experiments, production-minded interfaces, and documented code.",
      he: "הרחבת הפורטפוליו עם ניסויי AI, ממשקים בגישה מוצרית וקוד מתועד וברור.",
    },
  },
];

const skillGroups = [
  { icon: Code2, label: "Python · Java · C/C++ · JavaScript" },
  { icon: Database, label: "SQL · Databases · Data Structures" },
  { icon: Brain, label: "Deep Learning · PyTorch · Machine Learning" },
  { icon: Sparkles, label: "AI-assisted development · Rapid prototyping" },
  { icon: Server, label: "Node.js · Git · REST APIs · Deployment" },
  { icon: BookOpen, label: "Hebrew: Native · English: Full professional proficiency" },
];

function App() {
  const [language, setLanguage] = useState("en");
  const t = content[language];

  const liveProjects = useMemo(
    () => projects.filter((project) => project.live).length,
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0f10] text-white">
      <div className="absolute inset-x-0 top-0 -z-0 h-[580px] bg-[linear-gradient(135deg,rgba(20,184,166,0.16),rgba(245,158,11,0.08)_48%,rgba(244,63,94,0.11))]" />

      <div className="relative z-10" dir={t.dir}>
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg border border-white/15 bg-white/10 text-sm font-black">
              OA
            </span>
            <span className="hidden text-sm font-semibold text-zinc-200 sm:block">
              Oded Atias
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#projects">
              {t.nav[0]}
            </a>
            <a className="transition hover:text-white" href="#ai-focus">
              {t.nav[1]}
            </a>
            <a className="transition hover:text-white" href="#background">
              {t.nav[2]}
            </a>
            <a className="transition hover:text-white" href="#contact">
              {t.nav[3]}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "he" : "en")}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
          >
            <Languages size={16} />
            {t.switchLabel}
          </button>
        </header>

        <section
          id="top"
          className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.03fr_0.97fr]"
        >
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-100">
                <Sparkles size={16} />
                {t.eyebrow}
              </div>
              <div className="inline-flex items-center gap-2 rounded-md border border-amber-300/40 bg-amber-300/10 px-3 py-2 text-sm font-semibold text-amber-100">
                <span className="size-2 rounded-full bg-amber-300" />
                {t.openToWork}
              </div>
            </div>

            <h1 className="mt-7 text-balance text-6xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              {t.name}
            </h1>

            <p className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-zinc-100 sm:text-3xl">
              {t.title}
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              {t.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100"
              >
                {t.primaryCta}
                <ArrowUpRight size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                {t.secondaryCta}
                <Mail size={17} />
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.proof.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-white/10 bg-[#101617]/90 p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-zinc-400">Oded Atias</p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {t.highlightTitle}
                  </h2>
                </div>
                <ShieldCheck className="shrink-0 text-emerald-300" size={28} />
              </div>

              <div className="grid gap-5 py-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="grid place-items-center rounded-lg border border-white/10 bg-black/20 p-5">
                  <img
                    src={heroImage}
                    alt=""
                    className="max-h-64 w-full max-w-[260px] object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-base leading-7 text-zinc-300">
                    {t.highlightText}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Metric value={projects.length} label={t.metricProjects} />
                    <Metric value={liveProjects} label={t.metricLive} />
                  </div>
                  <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
                    Python · Java · JavaScript · React · Vue · Node.js · SQL ·
                    PyTorch · Git
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#f4f2ec] px-5 py-20 text-zinc-950 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title={t.sections.projects} text={t.projectsIntro} />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex min-h-[390px] flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span
                      className={`rounded-md border px-3 py-1 text-xs font-bold ${project.accent}`}
                    >
                      {project.type[language]}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.featured && <ProjectBadge>{t.featured}</ProjectBadge>}
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-black leading-tight text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
                    {project.summary[language]}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.live ? (
                      <ProjectLink href={project.live} label={t.live} icon={ExternalLink} />
                    ) : (
                      <span className="inline-flex items-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-500">
                        {t.noLive}
                      </span>
                    )}
                    {project.repo && (
                      <ProjectLink href={project.repo} label={t.code} icon={GitBranch} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-focus" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title={t.sections.ai} text={t.aiIntro} dark />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {aiFocus.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title.en}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
                  >
                    <div className="grid size-12 place-items-center rounded-lg bg-emerald-300 text-zinc-950">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">
                      {item.title[language]}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.text[language]}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="background" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title={t.sections.background}
              text={t.backgroundIntro}
              dark
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {background.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title.en}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid size-12 place-items-center rounded-lg bg-white text-zinc-950">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
                          {item.eyebrow[language]}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                          {item.title[language]}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-zinc-400">
                      {item.text[language]}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="expertise" className="bg-[#101617] px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title={t.sections.expertise}
              text={t.expertiseIntro}
              dark
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title.en}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
                  >
                    <div className="grid size-12 place-items-center rounded-lg bg-white text-zinc-950">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">
                      {item.title[language]}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.text[language]}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm font-semibold leading-6 text-zinc-200"
                  >
                    <Icon className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[#f4f2ec] p-7 text-zinc-950 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-zinc-950">
                  {t.sections.contact}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                  {t.contactText}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <ContactLink
                  href={`mailto:${profile.email}`}
                  label="Email"
                  value={profile.email}
                  icon={Mail}
                />
                <ContactLink
                  href={`tel:${profile.phone.replaceAll("-", "")}`}
                  label="Phone"
                  value={profile.phone}
                  icon={Phone}
                />
                <ContactLink
                  href={profile.github}
                  label="GitHub"
                  value={profile.githubLabel}
                  icon={Code2}
                />
                <ContactLink
                  href={profile.linkedin}
                  label="LinkedIn"
                  value={profile.linkedinLabel}
                  icon={Award}
                />
                <div className="sm:col-span-2">
                  <ContactLink
                    href="#background"
                    label={t.resumeLabel}
                    value={t.resumeNote}
                    icon={FileText}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
            <span>Oded Atias Portfolio</span>
            <span>React · Vite · Tailwind CSS</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
      <div className="text-3xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({ title, text, dark = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold ${
          dark
            ? "border border-white/10 bg-white/10 text-emerald-100"
            : "border border-zinc-200 bg-white text-zinc-700"
        }`}
      >
        <Globe size={16} />
        Portfolio
      </div>
      <h2
        className={`text-4xl font-black leading-tight sm:text-5xl ${
          dark ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-8 ${
          dark ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function ProjectBadge({ children }) {
  return (
    <span className="rounded-md bg-zinc-950 px-3 py-1 text-xs font-bold text-white">
      {children}
    </span>
  );
}

function ProjectLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-zinc-800"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

function ContactLink({ href, label, value, icon: Icon }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
        <Icon size={17} />
        {label}
      </div>
      <div className="mt-3 break-words text-sm leading-6 text-zinc-600">{value}</div>
    </a>
  );
}

export default App;

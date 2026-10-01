export const profile = {
  email: "oded.atias@gmail.com",
  phone: "054-811-8698",
  github: "https://github.com/odedati",
  githubLabel: "github.com/odedati",
  linkedin: "https://www.linkedin.com/in/oded-atias-836b77251",
  linkedinLabel: "linkedin.com/in/oded-atias-836b77251",
};

export const content = {
  en: {
    dir: "ltr",
    lang: "en",
    docTitle: "Oded Atias · AI-oriented Software Engineer",
    nav: [
      ["work", "Work"],
      ["focus", "AI focus"],
      ["background", "Background"],
      ["contact", "Contact"],
    ],
    switchLabel: "עברית",
    themeLabel: "Toggle theme",
    openToWork: "Open to work",
    name: ["Oded", "Atias"],
    role: "Software & Information Systems Engineer",
    intro:
      "B.Sc. graduate from Ben-Gurion University. I work across AI, data and full-stack development, and I care most about turning technical ideas into deployed products people can actually open and try.",
    ctaWork: "See the work",
    ctaMail: "Get in touch",
    facts: [
      ["Education", "B.Sc. Information Systems Engineering, BGU 2025"],
      ["Focus", "Deep learning, explainable AI, full-stack"],
      ["Looking for", "Junior software, AI-product and full-stack roles"],
    ],
    work: {
      title: "Selected work",
      intro: "Live demos and source for each project. Open any row for details and demo access.",
      live: "Live site",
      code: "Source",
      noLive: "Repository only",
      featured: "Featured",
      demo: "Demo access",
      unit: "Unit",
      username: "Username",
      password: "Password",
      signup: "You can also create a new account directly in the system.",
      copy: "Copy",
      copied: "Copied",
    },
    focus: {
      title: "AI focus",
      intro: "What I am learning, building and practicing right now.",
    },
    background: {
      title: "Background",
      intro: "Education, teaching and service.",
    },
    skills: {
      title: "Toolbox",
    },
    contact: {
      title: "Let's build something useful.",
      text: "Open to junior software engineering, AI-product, full-stack and frontend opportunities.",
      email: "Email",
      phone: "Phone",
    },
    footer: "Built with React, Vite and Tailwind CSS.",
  },
  he: {
    dir: "rtl",
    lang: "he",
    docTitle: "עודד אטיאס · מהנדס תוכנה מוכוון AI",
    nav: [
      ["work", "פרויקטים"],
      ["focus", "מיקוד AI"],
      ["background", "רקע"],
      ["contact", "יצירת קשר"],
    ],
    switchLabel: "English",
    themeLabel: "החלפת ערכת נושא",
    openToWork: "פתוח להזדמנויות",
    name: ["עודד", "אטיאס"],
    role: "מהנדס תוכנה ומערכות מידע",
    intro:
      "בוגר B.Sc. מאוניברסיטת בן-גוריון. עובד בין AI, דאטה ופיתוח Full-stack, ומתמקד בהפיכת רעיונות טכניים למוצרים באוויר שאפשר לפתוח ולנסות.",
    ctaWork: "לפרויקטים",
    ctaMail: "דברו איתי",
    facts: [
      ["השכלה", "B.Sc. בהנדסת מערכות מידע, בן-גוריון 2025"],
      ["מיקוד", "למידה עמוקה, AI מוסבר, Full-stack"],
      ["מחפש", "תפקידי Junior בתוכנה, מוצרי AI ו-Full-stack"],
    ],
    work: {
      title: "פרויקטים נבחרים",
      intro: "דמו חי וקוד מקור לכל פרויקט. פתחו שורה כדי לראות פרטים ופרטי גישה.",
      live: "אתר באוויר",
      code: "קוד מקור",
      noLive: "קוד בלבד",
      featured: "מומלץ",
      demo: "פרטי גישת דמו",
      unit: "מספר יחידה",
      username: "שם משתמש",
      password: "סיסמה",
      signup: "באתר הזה אפשר גם להירשם בעצמאות ולהיכנס עם משתמש חדש.",
      copy: "העתקה",
      copied: "הועתק",
    },
    focus: {
      title: "מיקוד AI",
      intro: "מה אני לומד, בונה ומתרגל עכשיו.",
    },
    background: {
      title: "רקע",
      intro: "השכלה, הוראה ושירות.",
    },
    skills: {
      title: "ארגז כלים",
    },
    contact: {
      title: "בואו נבנה משהו שימושי.",
      text: "פתוח להזדמנויות Junior Software Engineer, מוצרי AI, Full-stack ו-Frontend.",
      email: "אימייל",
      phone: "טלפון",
    },
    footer: "נבנה עם React, Vite ו-Tailwind CSS.",
  },
};

export const projects = [
  {
    id: "mediclear",
    title: "Explainability in Deep Learning",
    type: { en: "AI explainability", he: "הסברתיות AI" },
    summary: {
      en: "A deep learning explainability project using XAI techniques and feature-attribution visualizations to make neural network decisions easier to interpret.",
      he: "פרויקט הסברתיות בלמידה עמוקה עם טכניקות XAI וויזואליזציות Feature Attribution, כדי להפוך החלטות של רשתות נוירונים לברורות יותר.",
    },
    stack: ["Python", "PyTorch", "XAI", "Deep Learning"],
    live: "https://mediclear-project.onrender.com/",
    repo: "https://github.com/orgs/Final-Project-explainability/repositories",
    access: { username: "admin", password: "852056" },
    featured: true,
  },
  {
    id: "hr-battalion",
    title: "HR Battalion System",
    type: { en: "Operations platform", he: "פלטפורמת ניהול" },
    summary: {
      en: "A battalion management platform for attendance, soldier records, dashboards and operational workflows.",
      he: "מערכת ניהול גדודית לנוכחות, רשומות חיילים, דשבורדים ותהליכים תפעוליים.",
    },
    stack: ["Vue 3", "Pinia", "Supabase", "Cloudflare"],
    live: "https://hr-tenant.pages.dev/login",
    repo: "https://github.com/odedati/hr-battalion-system",
    access: { unit: "5280", username: "admin", password: "6589593" },
    featured: true,
  },
  {
    id: "algotrade",
    title: "AlgoTrade",
    type: { en: "Automated trading system", he: "מערכת מסחר אוטומטי" },
    summary: {
      en: "A cryptocurrency trading bot with REST API data fetching, backtesting modules and risk-management logic using Pandas and NumPy.",
      he: "בוט מסחר קריפטו עם שליפת נתוני שוק דרך REST APIs, מודולי Backtesting ולוגיקת ניהול סיכונים עם Pandas ו-NumPy.",
    },
    stack: ["Python", "REST APIs", "Pandas", "NumPy"],
    live: "",
    repo: "https://github.com/odedati/AlgoTrage_final_project",
    featured: false,
  },
  {
    id: "social-network",
    title: "Social Network Fullstack",
    type: { en: "Full-stack platform", he: "פלטפורמת Full-stack" },
    summary: {
      en: "A social platform with separated frontend and backend projects, deployment configuration, authentication and data-flow work.",
      he: "רשת חברתית עם הפרדה בין Frontend ל-Backend, קונפיגורציית פריסה, אימות משתמשים ועבודה עם זרימות מידע.",
    },
    stack: ["Vue", "JavaScript", "Backend API", "Render"],
    live: "https://vuerecipesproject.onrender.com/",
    repo: "https://github.com/odedati/social-network-fullstack",
    access: { username: "oded", password: "852056!", signup: true },
    featured: false,
  },
  {
    id: "yaakov-bodo",
    title: "Yaakov Bodo Website",
    type: { en: "Responsive website", he: "אתר רספונסיבי" },
    summary: {
      en: "A cultural biography website with gallery, media, QR flow, Web 1/2/3 Q&A and a contact form.",
      he: "אתר ביוגרפי-תרבותי עם גלריה, מדיה, QR, שאלות Web 1/2/3 וטופס יצירת קשר.",
    },
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://wed-2023.github.io/311394365/",
    repo: "https://github.com/WED-2023/311394365",
    featured: false,
  },
];

export const focus = [
  {
    title: { en: "Explainable AI", he: "Explainable AI" },
    text: {
      en: "XAI concepts, feature attribution and visual explanations for deep learning behavior.",
      he: "מושגי XAI, Feature Attribution והסברים ויזואליים להתנהגות של מודלי Deep Learning.",
    },
  },
  {
    title: { en: "AI-assisted development", he: "פיתוח בסיוע AI" },
    text: {
      en: "Using modern AI coding tools to prototype faster, explore implementations, debug and sharpen product decisions.",
      he: "שימוש בכלי קוד מבוססי AI כדי לבנות אבות טיפוס מהר יותר, לבדוק מימושים, לדבג ולחדד החלטות מוצר.",
    },
  },
  {
    title: { en: "Public demos", he: "דמואים פומביים" },
    text: {
      en: "Prioritizing projects that recruiters can open, test and evaluate without setup friction.",
      he: "דגש על פרויקטים שמגייסים יכולים לפתוח, לבדוק ולהעריך בלי התקנות מסובכות.",
    },
  },
  {
    title: { en: "Learning in public", he: "למידה גלויה" },
    text: {
      en: "Growing the portfolio with AI experiments, product-minded interfaces and documented code.",
      he: "הרחבת הפורטפוליו עם ניסויי AI, ממשקים בגישה מוצרית וקוד מתועד.",
    },
  },
];

export const background = [
  {
    when: { en: "2021 – 2025", he: "2021 – 2025" },
    where: { en: "Ben-Gurion University", he: "אוניברסיטת בן-גוריון" },
    title: { en: "B.Sc. in Information Systems Engineering", he: "B.Sc. בהנדסת מערכות מידע" },
    text: {
      en: "Coursework: Deep Learning, Big Data, Computer & Network Security, Data Communications, Information Retrieval, Databases, Operating Systems, Algorithms, Advanced Programming, Computing Systems and Data Structures.",
      he: "קורסים מרכזיים: Deep Learning, Big Data, אבטחת מחשבים ורשתות, תקשורת נתונים, אחזור מידע, בסיסי נתונים, מערכות הפעלה, אלגוריתמים, תכנות מתקדם, מערכות מחשוב ומבני נתונים.",
    },
  },
  {
    when: { en: "2022 – 2024", he: "2022 – 2024" },
    where: { en: "Ben-Gurion University", he: "אוניברסיטת בן-גוריון" },
    title: { en: "Python Lab Assistant", he: "עוזר הוראה במעבדת Python" },
    text: {
      en: "Led and mentored first-year students in Introduction to Computer Science, explaining core programming concepts and supporting problem-solving. Also taught high-school mathematics for matriculation exams.",
      he: "הובלתי וליוויתי סטודנטים בשנה א' בקורס מבוא למדעי המחשב, עם דגש על תכנות ב-Python ופתרון בעיות. בנוסף לימדתי מתמטיקה לבגרות בתיכון.",
    },
  },
  {
    when: { en: "Service & reserves", he: "שירות ומילואים" },
    where: { en: "Combat Engineering Corps", he: "חיל ההנדסה הקרבית" },
    title: { en: "Platoon sergeant, Staff Sergeant", he: "מפקד מחלקה, סמל ראשון" },
    text: {
      en: "Platoon sergeant with active reserve service. The experience adds discipline, ownership and calm execution under pressure.",
      he: "מפקד מחלקה ושירות מילואים פעיל. הניסיון מוסיף משמעת, אחריות וביצוע רגוע גם תחת לחץ.",
    },
  },
];

export const skills = [
  {
    label: { en: "Languages", he: "שפות תכנות" },
    items: ["Python", "Java", "C / C++", "JavaScript"],
  },
  {
    label: { en: "AI & data", he: "AI ודאטה" },
    items: ["Deep Learning", "PyTorch", "Machine Learning", "Pandas", "NumPy", "XAI"],
  },
  {
    label: { en: "Web & backend", he: "ווב ובקאנד" },
    items: ["React", "Vue", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    label: { en: "Data & delivery", he: "דאטה ופריסה" },
    items: ["SQL", "Supabase", "Git", "Render", "Cloudflare", "AI-assisted development"],
  },
  {
    label: { en: "Spoken", he: "שפות מדוברות" },
    items: [
      { en: "Hebrew · native", he: "עברית · שפת אם" },
      { en: "English · full professional", he: "אנגלית · רמה מקצועית מלאה" },
    ],
  },
];

export const ticker = [
  "Python",
  "PyTorch",
  "Deep Learning",
  "XAI",
  "React",
  "Vue",
  "Node.js",
  "SQL",
  "Supabase",
  "REST APIs",
  "Git",
];

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/* Preview windows. `embed: false` means the site forbids framing (or has no live site). */
export const previews = {
  mediclear: { poster: asset("previews/mediclear.jpg"), embed: true, hue: "#2dd4bf" },
  "hr-battalion": { poster: asset("previews/hr-battalion.jpg"), embed: false, hue: "#4ade80", blocked: true },
  algotrade: { kind: "chart", embed: false, hue: "#fbbf24" },
  "social-network": { poster: asset("previews/social-network.jpg"), embed: true, hue: "#fb7185" },
  "yaakov-bodo": { poster: asset("previews/yaakov-bodo.jpg"), embed: true, hue: "#60a5fa" },
};

export const ui = {
  en: {
    scroll: "Scroll",
    stats: { projects: "Projects", live: "Live demos", degree: "B.Sc. · BGU" },
    interact: "Interact",
    interactOn: "Interactive. Move the pointer off the window to keep scrolling.",
    livePreview: "Live preview",
    screenshot: "Screenshot",
    loadingLive: "Waking up the live site…",
    embedBlocked: "This site blocks embedding for security, so this is a screenshot.",
    illustrative: "Illustrative sketch, no live site",
    project: "Project",
    of: "of",
    goTo: "Go to project",
  },
  he: {
    scroll: "גלול",
    stats: { projects: "פרויקטים", live: "דמואים חיים", degree: "B.Sc. · BGU" },
    interact: "אינטראקציה",
    interactOn: "מצב אינטראקטיבי. הזז את הסמן אל מחוץ לחלון כדי להמשיך לגלול.",
    livePreview: "תצוגה חיה",
    screenshot: "צילום מסך",
    loadingLive: "מעיר את האתר החי…",
    embedBlocked: "האתר חוסם הטמעה מטעמי אבטחה, ולכן זה צילום מסך.",
    illustrative: "סקיצה להמחשה, אין אתר חי",
    project: "פרויקט",
    of: "מתוך",
    goTo: "מעבר לפרויקט",
  },
};

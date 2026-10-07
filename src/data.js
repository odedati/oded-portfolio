export const profile = {
  photo: `${import.meta.env.BASE_URL}img/oded-cutout.png`,
  photoSm: `${import.meta.env.BASE_URL}img/oded-cutout-sm.webp`,
  photoFramed: `${import.meta.env.BASE_URL}img/oded-framed.jpg`,
  email: "oded.atias@gmail.com",
  phone: "054-811-8698",
  github: "https://github.com/odedati",
  githubLabel: "github.com/odedati",
  linkedin: "https://www.linkedin.com/in/oded-atias-836b77251/",
  linkedinLabel: "linkedin.com/in/oded-atias-836b77251",
};

export const content = {
  en: {
    dir: "ltr",
    lang: "en",
    docTitle: "Oded Atias",
    nav: [
      ["work", "Work"],
      ["focus", "AI focus"],
      ["background", "Background"],
      ["contact", "Contact"],
    ],
    switchLabel: "עברית",
    themeLabel: "Toggle theme",
    backToTop: "Back to top",
    openToWork: "Open to work",
    name: ["Oded", "Atias"],
    role: "Software & Information Systems Engineer",
    intro:
      "B.Sc. graduate from Ben-Gurion University. I work across AI, data and full-stack development, and I care most about turning technical ideas into deployed products people can actually open and try.",
    ctaWork: "See the work",
    ctaMail: "Get in touch",
    facts: [
      ["Education", "B.Sc. Information Systems Engineering, BGU 2025"],
      ["Focus", "Machine learning, explainable AI, full-stack"],
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
    docTitle: "Oded Atias",
    nav: [
      ["work", "פרויקטים"],
      ["focus", "מיקוד AI"],
      ["background", "רקע"],
      ["contact", "יצירת קשר"],
    ],
    switchLabel: "English",
    themeLabel: "החלפת ערכת נושא",
    backToTop: "חזרה לראש העמוד",
    openToWork: "פתוח להזדמנויות",
    name: ["עודד", "אטיאס"],
    role: "מהנדס תוכנה ומערכות מידע",
    intro:
      "בוגר B.Sc. מאוניברסיטת בן-גוריון. עובד בין AI, דאטה ופיתוח Full-stack, ומתמקד בהפיכת רעיונות טכניים למוצרים באוויר שאפשר לפתוח ולנסות.",
    ctaWork: "לפרויקטים",
    ctaMail: "דברו איתי",
    facts: [
      ["השכלה", "B.Sc. בהנדסת מערכות מידע, בן-גוריון 2025"],
      ["מיקוד", "למידת מכונה, AI מוסבר, Full-stack"],
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
    title: "MediClear: Explainability in Medical Prediction Models",
    type: { en: "B.Sc. final project · team of 3", he: "פרויקט גמר · צוות של 3" },
    summary: {
      en: "Research on how closely explanation methods (SHAP, LIME and each model's inherent explanations) agree with each other when predicting ICU mortality, plus an interactive web application for comparing them.",
      he: "מחקר על מידת ההסכמה בין שיטות הסבר (SHAP, LIME וההסברים המובנים של כל מודל) בחיזוי תמותה ביחידות טיפול נמרץ, ואפליקציית ווב אינטראקטיבית להשוואה ביניהן.",
    },
    highlights: {
      en: [
        ["Models", "XGBoost, Logistic Regression, Decision Tree"],
        ["Data", "GOSSIS (WiDS Datathon 2020) and UCI Diabetes 130-US Hospitals"],
        ["Metrics", "Kendall's W, Pearson correlation, Intersection@K, Sign Agreement"],
        ["Finding", "Globally the methods agree more on simpler models than on XGBoost; locally no such difference appeared"],
        ["Web app", "Public global dashboard, per-patient explanation view and admin user management (Vue 3, Node.js, MongoDB)"],
      ],
      he: [
        ["מודלים", "XGBoost, Logistic Regression, Decision Tree"],
        ["נתונים", "GOSSIS (WiDS Datathon 2020) ו-UCI Diabetes 130-US Hospitals"],
        ["מדדים", "Kendall's W, מתאם פירסון, Intersection@K, Sign Agreement"],
        ["ממצא", "ברמה הגלובלית השיטות מסכימות יותר במודלים פשוטים מאשר ב-XGBoost; ברמה הלוקלית לא נמצא הבדל כזה"],
        ["אפליקציית ווב", "דשבורד גלובלי פומבי, תצוגת הסבר לכל מטופל וניהול משתמשים לאדמין (Vue 3, Node.js, MongoDB)"],
      ],
    },
    stack: ["Python", "XGBoost", "SHAP", "LIME", "Vue 3", "Node.js", "MongoDB", "XAI"],
    live: "https://mediclear-project.onrender.com/",
    repo: "https://github.com/orgs/Final-Project-explainability/repositories",
    access: { username: "admin", password: "852056" },
    featured: true,
  },
  {
    id: "hr-battalion",
    title: "HR Battalion System",
    type: { en: "Solo project · multi-tenant platform", he: "פרויקט אישי · פלטפורמה מרובת גדודים" },
    summary: {
      en: "A multi-tenant battalion management platform that I built solo, with a separate master portal for managing the battalions.",
      he: "פלטפורמת ניהול גדודית מרובת גדודים שבניתי לבד, עם פורטל ניהול נפרד לניהול הגדודים.",
    },
    highlights: {
      en: [
        ["Isolation", "Each battalion's data is separated with Supabase Row Level Security"],
        ["Modules", "Personnel, attendance, combat assignments, medical, armory, logistics, communications equipment, vehicles (maintenance and fueling) and internal chat"],
        ["Access", "Roles plus read/write permissions per module"],
        ["Backend", "Supabase (PostgreSQL, Auth) with Edge Functions for privileged operations"],
        ["Mobile", "A separate mobile UI"],
      ],
      he: [
        ["בידוד", "הנתונים של כל גדוד מבודדים באמצעות Row Level Security של Supabase"],
        ["מודולים", "סד\"כ, נוכחות, שיבוצי לחימה, רפואה, נשקייה, לוגיסטיקה, ציוד תקשוב, רכבים (תחזוקה ותדלוק) וצ'אט פנימי"],
        ["הרשאות", "תפקידים והרשאות קריאה/כתיבה לכל מודול"],
        ["Backend", "Supabase (PostgreSQL, Auth) עם Edge Functions לפעולות מורשות"],
        ["נייד", "ממשק נייד נפרד"],
      ],
    },
    stack: ["Vue 3", "Vite", "Pinia", "Supabase", "PostgreSQL", "Cloudflare Pages"],
    live: "https://hr-tenant.pages.dev/login",
    repo: "https://github.com/odedati/hr-battalion-system",
    access: { unit: "5280", username: "admin", password: "6589593" },
    featured: true,
  },
  {
    id: "algotrade",
    title: "Investment Chat Agent",
    type: { en: "Course project · team of 2", he: "פרויקט בקורס · צוות של 2" },
    summary: {
      en: "An AI investment-assistant web app: chat with a GPT-4o financial assistant using live Yahoo Finance data. Built for the course From Data Mining to Algorithmic Trading (team of 2); I wrote most of the code.",
      he: "אפליקציית ווב של עוזר השקעות מבוסס AI: צ'אט עם עוזר פיננסי GPT-4o על בסיס נתוני Yahoo Finance חיים. נבנה בקורס From Data Mining to Algorithmic Trading (צוות של 2); כתבתי את רוב הקוד.",
    },
    highlights: {
      en: [
        ["Chat", "GPT-4o financial assistant using live Yahoo Finance data"],
        ["Stock pages", "Auto-generated FAQs and news for each stock"],
        ["Deep Search", "In-depth analysis mode that remembers its results per stock"],
        ["Alerts", "Natural-language alert triggers parsed by the backend (API only, no UI yet)"],
        ["Stack", "Flask REST API and a React frontend"],
      ],
      he: [
        ["צ'אט", "עוזר פיננסי GPT-4o על בסיס נתוני Yahoo Finance חיים"],
        ["דפי מניות", "שאלות נפוצות וחדשות שנוצרות אוטומטית לכל מניה"],
        ["Deep Search", "מצב ניתוח מעמיק ששומר את התוצאות לכל מניה"],
        ["התראות", "פענוח טריגרים להתראות בשפה טבעית בצד השרת (ב-API בלבד, בלי ממשק עדיין)"],
        ["טכנולוגיה", "Flask REST API וממשק React"],
      ],
    },
    stack: ["Python", "Flask", "GPT-4o", "yfinance", "Pandas", "React", "Tailwind CSS"],
    live: "",
    repo: "https://github.com/odedati/AlgoTrage_final_project",
    featured: false,
  },
  {
    id: "social-network",
    title: "Social Network Fullstack",
    type: { en: "Course project · team of 3", he: "פרויקט בקורס · צוות של 3" },
    summary: {
      en: "A recipe-sharing social network built for the course Internet Development Environments (team of 3).",
      he: "רשת חברתית לשיתוף מתכונים שנבנתה בקורס Internet Development Environments (צוות של 3).",
    },
    highlights: {
      en: [
        ["Frontend", "Vue.js with Vue Router, Bootstrap-Vue, Vuelidate and Axios"],
        ["API", "Node.js / Express REST API"],
        ["Accounts", "Registration and login with bcrypt, sessions and cookies"],
        ["Recipes", "Spoonacular recipe API"],
        ["Data and hosting", "MySQL locally, PostgreSQL on Supabase in production, deployed on Render"],
      ],
      he: [
        ["Frontend", "Vue.js עם Vue Router, Bootstrap-Vue, Vuelidate ו-Axios"],
        ["API", "REST API ב-Node.js / Express"],
        ["משתמשים", "הרשמה והתחברות עם bcrypt, sessions ו-cookies"],
        ["מתכונים", "שילוב של Spoonacular API"],
        ["נתונים ופריסה", "MySQL מקומית, PostgreSQL ב-Supabase בפרודקשן, ופריסה ב-Render"],
      ],
    },
    stack: ["Vue.js", "Node.js", "Express", "MySQL", "PostgreSQL", "Render"],
    live: "https://vuerecipesproject.onrender.com/",
    repo: "https://github.com/odedati/social-network-fullstack",
    access: { username: "oded", password: "852056!", signup: true },
    featured: false,
  },
  {
    id: "yaakov-bodo",
    title: "Yaakov Bodo Website",
    type: { en: "Course assignment", he: "מטלה בקורס" },
    summary: {
      en: "A course assignment for Web Environment Development: a biography website about the Israeli actor Yaakov Bodo.",
      he: "מטלה בקורס Web Environment Development: אתר ביוגרפי על השחקן הישראלי יעקב בודו.",
    },
    highlights: {
      en: [
        ["Media", "Photo gallery and an embedded YouTube video section"],
        ["QR code", "A dedicated QR code section"],
        ["Q&A", "Web 1.0 / 2.0 / 3.0 questions and answers"],
        ["Contact", "A contact form"],
        ["Stack", "Plain HTML, CSS and JavaScript on GitHub Pages"],
      ],
      he: [
        ["מדיה", "גלריית תמונות וקטע סרטון YouTube מוטמע"],
        ["QR", "קטע ייעודי עם קוד QR"],
        ["שאלות ותשובות", "שאלות ותשובות על Web 1.0 / 2.0 / 3.0"],
        ["יצירת קשר", "טופס יצירת קשר"],
        ["טכנולוגיה", "HTML, CSS ו-JavaScript בלבד, ב-GitHub Pages"],
      ],
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
      en: "Explaining prediction models with SHAP and LIME, and comparing how closely different explanation methods agree.",
      he: "הסבר של מודלי חיזוי עם SHAP ו-LIME, והשוואה של מידת ההסכמה בין שיטות הסבר שונות.",
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
    items: ["Machine Learning", "XGBoost", "SHAP", "LIME", "XAI", "Pandas", "Deep Learning · PyTorch (coursework)"],
  },
  {
    label: { en: "Web & backend", he: "ווב ובקאנד" },
    items: ["React", "Vue", "Node.js", "Express", "Flask", "REST APIs", "Tailwind CSS"],
  },
  {
    label: { en: "Data & delivery", he: "דאטה ופריסה" },
    items: ["SQL", "PostgreSQL", "MongoDB", "Supabase", "Git", "Render", "Cloudflare", "AI-assisted development"],
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
  "XGBoost",
  "SHAP",
  "LIME",
  "XAI",
  "React",
  "Vue",
  "Node.js",
  "Flask",
  "SQL",
  "MongoDB",
  "Supabase",
  "REST APIs",
  "Git",
];

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/* Preview windows. `embed: false` means the site forbids framing (or has no live site). */
export const previews = {
  mediclear: { poster: asset("previews/mediclear.jpg"), posterSm: asset("previews/mediclear-sm.jpg"), embed: true, hue: "#2dd4bf" },
  "hr-battalion": { poster: asset("previews/hr-battalion.jpg"), posterSm: asset("previews/hr-battalion-sm.jpg"), embed: false, hue: "#4ade80", blocked: true },
  algotrade: { kind: "sketch", embed: false, hue: "#fbbf24" },
  "social-network": { poster: asset("previews/social-network.jpg"), posterSm: asset("previews/social-network-sm.jpg"), embed: true, hue: "#fb7185" },
  "yaakov-bodo": { poster: asset("previews/yaakov-bodo.jpg"), posterSm: asset("previews/yaakov-bodo-sm.jpg"), embed: true, hue: "#60a5fa" },
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
    loadLive: "Load live preview",
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
    loadLive: "טען תצוגה חיה",
  },
};

/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site. Everything here comes from the resume;
 * optional links set to `null` are hidden until you fill them in.
 */

export const profile = {
  name: "Yash Mahendra Pethkar",
  shortName: "Yash Pethkar",
  initials: "YP",
  title: "Machine Learning & Data Science Engineer",
  tagline: "Information Technology engineering student (graduating 2027)",
  location: "Nashik, India",
  email: "yashpethkar77@gmail.com",
  intro:
    "I build end-to-end machine learning pipelines, from data preprocessing and feature engineering to model training and deployment, using Python, Scikit-learn, and LLM frameworks like LangChain and the OpenAI API.",
  // Add your profile URLs here. They are hidden while null.
  github: "https://github.com/yash-pethkar18" as string,
  linkedin: "https://www.linkedin.com/in/yash-pethkar-56702a334" as string,
  // Place your PDF at /public/resume.pdf, then set this to true.
  resumeAvailable: true as boolean,
  resumePath: "/YashPethkarIT.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm an Information Technology engineering student graduating in 2027, with hands-on experience in Machine Learning, Data Science, and AI development. I enjoy taking a problem from raw data to a working application: cleaning and exploring data, engineering features, training and evaluating models, and putting them in front of real users.",
    "I built and deployed a production-ready supply chain disruption prediction application, which shows I can deliver ML solutions from concept to real-world use. Internships with IBM/AICTE and Softcrowd Technologies strengthened my skills in data analysis, model evaluation, and end-to-end project delivery.",
    "I'm committed to applying data-driven approaches to solve large-scale business and societal challenges.",
  ],
  highlights: [
    { label: "B.E. IT CGPA", value: "8.3" },
    { label: "Diploma", value: "85.14%" },
    { label: "Internships", value: "2" },
    { label: "Deployed project", value: "1" },
  ],
};

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Python", "Java", "HTML", "CSS", "JavaScript"] },
  {
    category: "Machine Learning & AI",
    skills: [
      "Scikit-learn",
      "Random Forest",
      "LLM Integration",
      "Prompt Engineering",
      "Supervised Learning",
    ],
  },
  {
    category: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Statistical Analysis",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Flask", "Firebase", "SQL", "GitHub", "Jupyter Notebook", "VS Code", "Render"],
  },
];

export type Project = {
  name: string;
  summary: string;
  contribution: string[];
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  status: string;
};

export const projects: Project[] = [
  {
    name: "Supply Chain Disruption Prediction",
    summary:
      "A deployed machine learning web app that predicts supply chain disruptions and shows results in real time through a simple prediction interface.",
    contribution: [
      "Engineered a complete ML pipeline: data ingestion, cleaning, feature selection, Random Forest training, accuracy evaluation, and Flask web app deployment on Render.",
      "Implemented feature importance analysis to identify key disruption drivers.",
      "Built an intuitive HTML/CSS prediction interface for real-time user input and output display.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Flask", "HTML/CSS", "Render"],
    liveUrl: "https://supply-chain-ai-cpzu.onrender.com",
    githubUrl: null, // add the repository URL when you have it
    featured: true,
    status: "Deployed on Render",
  },
];

export type TimelineItem = {
  org: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: TimelineItem[] = [
  {
    org: "Softcrowd Technologies",
    role: "Data Science Intern",
    location: "Nashik, India",
    period: "Jan – Feb 2026",
    points: [
      "Cleaned and preprocessed structured enterprise datasets using Pandas and NumPy; performed EDA and created visualizations to surface actionable business insights.",
      "Trained and evaluated ML models using Random Forest and supervised learning algorithms; applied cross-validation and hyperparameter tuning to improve model performance.",
      "Collaborated on a full data science pipeline, from problem framing and data collection to model selection and results presentation to stakeholders.",
    ],
  },
  {
    org: "AICTE × BharatCares × IBM",
    role: "AI & Machine Learning Intern",
    location: "Remote",
    period: "Jan – Feb 2026",
    points: [
      "Completed a 6-week intensive program on applied AI/ML in collaboration with AICTE, IBM and BharatCares; covered supervised learning, model evaluation, and data pipelines.",
      "Applied the IBM AI toolkit to implement ML models on real-world datasets; strengthened foundations in probability, statistics, and linear algebra.",
      "Delivered hands-on projects demonstrating proficiency in end-to-end ML workflows, from raw data ingestion through trained model deployment.",
    ],
  },
];

export const education = [
  {
    org: "P.V.G. College of Engineering & SS Dhamankar Institute of Technology, Nashik",
    role: "B.E. Information Technology",
    period: "Jun 2024 – Jun 2027",
    detail: "CGPA: 8.3",
  },
  {
    org: "Vivekanand Education Society's Polytechnic, Chembur",
    role: "Diploma in Computer Engineering",
    period: "Jul 2021 – Jun 2024",
    detail: "85.14%",
  },
];

export const achievements = [
  {
    title: "Open Source Connect Global (OSCG) 2026",
    meta: "Contributor · Feb 2026",
    description:
      "Contributed to open-source projects alongside a global developer community, strengthening collaborative development and problem-solving skills.",
    kind: "Achievement",
  },
  {
    title: "Introduction to Generative AI",
    meta: "Google · Course completed",
    description:
      "Gained foundational knowledge of Generative AI concepts and applications.",
    kind: "Certification",
  },
];

export interface SkillItem {
  name: string;
  tag?: string;
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  sysCode: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    sysCode: "CORE LANGUAGES",
    title: "Programming Languages",
    description: "Core languages used for problem-solving, algorithms, backend logic, and systems programming.",
    iconName: "Code2",
    skills: [
      { name: "C++", tag: "DSA & Systems", isPrimary: true },
      { name: "Python", tag: "AI/ML & Scripting", isPrimary: true },
      { name: "JavaScript", tag: "Web & Full-Stack", isPrimary: true },
    ],
  },
  {
    id: "frontend",
    sysCode: "FRONTEND",
    title: "Frontend Engineering",
    description: "Crafting responsive, accessible, high-performance web user interfaces.",
    iconName: "Layout",
    skills: [
      { name: "HTML5", tag: "Semantic Markup" },
      { name: "CSS3", tag: "Modern Styles & Flex/Grid" },
      { name: "JavaScript (ES6+)", tag: "DOM & Async" },
      { name: "React.js", tag: "Component Architecture", isPrimary: true },
      { name: "Tailwind CSS", tag: "Utility-first UI" },
    ],
  },
  {
    id: "backend",
    sysCode: "BACKEND",
    title: "Backend Development",
    description: "Building reliable APIs, server runtime services, and hardware-interfacing microservices.",
    iconName: "Server",
    skills: [
      { name: "Node.js", tag: "Asynchronous I/O", isPrimary: true },
      { name: "Python Flask", tag: "Lightweight ML APIs", isPrimary: true },
      { name: "REST APIs", tag: "JSON Protocol & CRUD" },
      { name: "Express.js", tag: "Routing & Middleware" },
    ],
  },
  {
    id: "database",
    sysCode: "DATABASE",
    title: "Database Systems",
    description: "Structured and document-based data persistence and schema management.",
    iconName: "Database",
    skills: [
      { name: "MongoDB", tag: "NoSQL / Document Store", isPrimary: true },
      { name: "Mongoose", tag: "Schema Modeling" },
      { name: "Data Modeling", tag: "Query Optimization" },
    ],
  },
  {
    id: "ai-ml",
    sysCode: "AI & ML",
    title: "AI / Machine Learning",
    description: "Designing neural networks, computer vision pipelines, and intelligent classification models.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", tag: "Supervised Learning" },
      { name: "Deep Learning", tag: "Neural Networks", isPrimary: true },
      { name: "CNN", tag: "Convolutional Networks", isPrimary: true },
      { name: "PyTorch", tag: "Deep Learning Framework", isPrimary: true },
      { name: "Image Classification", tag: "Computer Vision" },
      { name: "OpenCV", tag: "Image Processing" },
    ],
  },
  {
    id: "cloud-os",
    sysCode: "CLOUD & LINUX",
    title: "Cloud & Operating Systems",
    description: "Cloud computing infrastructure, Linux system administration, and version control workflows.",
    iconName: "Cloud",
    skills: [
      { name: "Linux", tag: "Kernel, Shell & CLI", isPrimary: true },
      { name: "Ubuntu", tag: "Server Administration", isPrimary: true },
      { name: "AWS", tag: "Currently Learning", isPrimary: true },
      { name: "Cloud Infrastructure", tag: "Storage & Distribution" },
      { name: "Git & GitHub", tag: "VCS & Collaboration" },
    ],
  },
];


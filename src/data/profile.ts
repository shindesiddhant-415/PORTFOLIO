export interface ProfileData {
  name: string;
  initials: string;
  roleBadge: string;
  statusBadge: string;
  statusAvailable: boolean;
  tagline: string;
  bio: string;
  philosophy: string;
  avatarUrl: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
    highlight?: boolean;
    helper?: string;
  }[];
  education: {
    degree: string;
    cgpa: string;
    institution: string;
    university: string;
    location: string;
    graduationYear: string;
    status: string;
    highlights: string[];
  };
  focusAreas: string[];
  contact: {
    email: string;
    altEmail?: string;
    phone?: string;
    github: string;
    linkedin: string;
    leetcode?: string;
    codolio?: string;
    codechef?: string;
    twitter?: string;
  };
}

export const profileData: ProfileData = {
  name: "Siddhant Shinde",
  initials: "SS",
  roleBadge: "B.TECH CSE @ MIT AOE | AI/ML & SYSTEMS DEVELOPER",
  statusBadge: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  statusAvailable: true,
  tagline:
    "I build practical software solutions, intelligent systems, and offline AI workflows—combining full-stack engineering, local LLMs/RAG, and cloud technologies to solve real-world problems.",
  bio: "I'm a third-year Computer Science Engineering student at MIT Academy of Engineering, Pune (CGPA: 8.34/10), passionate about software engineering, competitive programming, and applied AI systems. I've built offline industrial AI assistants for Smart India Hackathon, deep learning crop diagnostics platforms, and custom Arduino serial controllers. With 150+ problems solved on LeetCode and exposure to Linux, Docker, and AWS, I am actively seeking internship opportunities to contribute and deepen my engineering skills.",
  philosophy: "Don't just learn the technology. Build something meaningful with it.",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  stats: [
    {
      value: "150+",
      label: "LeetCode Problems Solved",
      helper: "LeetCode (Siddhant-415)",
    },
    {
      value: "8.34",
      label: "Academic CGPA",
      helper: "MIT Academy of Engineering",
    },
    {
      value: "2028",
      label: "Class of 2028",
      helper: "B.Tech Computer Science",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "8.34 / 10",
    institution: "MIT Academy of Engineering",
    university: "Savitribai Phule Pune University",
    location: "Alandi, Pune, Maharashtra",
    graduationYear: "2028",
    status: "Enrolled in Good Standing (CGPA: 8.34)",
    highlights: [
      "Consistent academic record with CGPA 8.34/10 in core computer engineering coursework.",
      "150+ DSA problems solved on LeetCode with strong problem-solving fundamentals in C++.",
      "Practical project track record: Smart India Hackathon offline AI workbench, plant disease diagnostics, and Cisco/IBM internships.",
    ],
  },
  focusAreas: [
    "Competitive Programming & DSA (C++)",
    "Applied AI & Local LLMs (Ollama)",
    "Full-Stack Development (React, Node.js, Flask)",
    "Cloud Infrastructure & Linux Systems",
  ],
  contact: {
    email: "shindesiddhant415@gmail.com",
    altEmail: "202401040250@mitaoe.ac.in",
    phone: "+91 7350318481",
    github: "https://github.com/shindesiddhant-415",
    linkedin: "https://www.linkedin.com/in/siddhant-shinde-/",
    leetcode: "https://leetcode.com/u/Siddhant-415/",
    codolio: "https://codolio.com/profile/Siddhant415",
    codechef: "https://www.codechef.com/users/siddhant415",
  },
};

export interface JourneyBlock {
  id: string;
  category: "HACKATHONS" | "COMPETITIVE" | "INTERNSHIPS" | "ACADEMIC";
  title: string;
  badge: string;
  period: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
}

export const journeyBlocks: JourneyBlock[] = [
  {
    id: "journey-sih",
    category: "HACKATHONS",
    title: "Smart India Hackathon & AI Innovation Challenges",
    badge: "HACKATHONS",
    period: "2025 - 2026",
    summary:
      "Engineered competitive real-world AI systems under national hackathon constraints, focusing on offline resilience, RAG pipelines, and local LLMs.",
    keyPoints: [
      "Built 'Sovereign On-Premise AI Workbench' for SIH Problem Statement 26117 (MRPL), verified to operate with zero network access.",
      "Participated in the Adobe University Hackathon (Aug 2026) collaborating on rapid software prototyping.",
      "Competed in Amazon ML Challenge 2026, a national 72-hour machine learning challenge (Sep 2026).",
      "Participated in the India AI Impact Buildathon (Feb 2026), a nationwide AI innovation challenge with 40,000+ participants.",
    ],
    tags: ["Smart India Hackathon", "Amazon ML", "Adobe Hackathon", "Ollama LLMs", "ChromaDB"],
  },
  {
    id: "journey-cp",
    category: "COMPETITIVE",
    title: "Competitive Programming: 150+ Problems Solved on LeetCode",
    badge: "PROBLEM SOLVING",
    period: "2024 - PRESENT",
    summary:
      "Consistent algorithmic practice on LeetCode, mastering time and space complexity, dynamic programming, and data structures in C++.",
    keyPoints: [
      "150+ problems solved on LeetCode with consistent practice in modern C++.",
      "Deep focus on linear structures, binary search, tree traversals, and asymptotic complexity (Big-O).",
      "Profile and solved problem repository tracked on Codolio (codolio.com/profile/Siddhant415) and LeetCode.",
    ],
    tags: ["C++17", "LeetCode", "Data Structures", "Algorithms", "CodeChef"],
  },
  {
    id: "journey-internships",
    category: "INTERNSHIPS",
    title: "Industry Internships & Technical Certifications",
    badge: "IBM & CISCO",
    period: "2025 - 2026",
    summary:
      "Hands-on exposure to enterprise cybersecurity protocols, cloud infrastructure tools, and generative AI deployment pipelines.",
    keyPoints: [
      "Completed 6-week Networking & Cybersecurity Internship at Cisco: configured network components, explored security protocols, and studied threat mitigation strategies.",
      "Completed AI/ML & Cloud Computing Internship through IBM SkillsBuild & Edunet Foundation: worked on AI workflows and earned verified digital badges.",
      "Certified in 'Building & Deploying Applications with Google AI Studio' conducted by GUVI / HCL.",
    ],
    tags: ["Cisco Cybersecurity", "IBM SkillsBuild", "Google AI Studio", "Cloud AI", "Networking"],
  },
  {
    id: "journey-academic",
    category: "ACADEMIC",
    title: "B.Tech Computer Science Engineering (CGPA: 8.34)",
    badge: "MIT AOE PUNE",
    period: "2024 - 2028",
    summary:
      "Rigorous engineering education at MIT Academy of Engineering, Pune (Savitribai Phule Pune University).",
    keyPoints: [
      "Maintaining an 8.34/10 CGPA across computer science, engineering mathematics, and systems design.",
      "Active participant in technical labs, hardware projects with Arduino UNO, and full-stack software development.",
      "Bridging academic theory with practical production code in Linux environments.",
    ],
    tags: ["MIT AOE Pune", "CGPA 8.34", "Computer Science", "Operating Systems", "DBMS"],
  },
];

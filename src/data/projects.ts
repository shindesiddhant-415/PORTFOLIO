export type ProjectCategory = "All" | "AI-ML" | "Web" | "Cloud-Linux" | "Hardware";

export interface ArchitectureNode {
  id: string;
  name: string;
  tech: string;
  type: "client" | "gateway" | "ml-engine" | "db" | "output";
}

export interface FeaturedProject {
  id: string;
  sysId: string;
  category: "AI / COMPUTER VISION" | "OFFLINE AI / SIH HACKATHON" | "EMBEDDED SYSTEMS / IOT";
  filterCategory: "AI-ML" | "Web" | "Cloud-Linux" | "Hardware";
  title: string;
  tagline: string;
  description: string;
  datasetOrContext?: string;
  features: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureNodes?: ArchitectureNode[];
  previewType: "crop-ai" | "joystick-sim" | "cloud-labs" | "sovereign-ai";
  isLearningLab?: boolean;
}

export interface MatrixProject {
  id: string;
  sysId: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  features: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "COMPLETED" | "LEARNING LAB" | "SIH HACKATHON" | "COMPETITIVE";
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sovereign-ai-workbench",
    sysId: "#SYS-01",
    category: "OFFLINE AI / SIH HACKATHON",
    filterCategory: "AI-ML",
    title: "Sovereign On-Premise AI Workbench",
    tagline: "Air-gapped, zero-network confidential AI assistant built for Smart India Hackathon (MRPL PS 26117).",
    description:
      "A fully offline, self-hosted enterprise AI assistant designed for high-security industrial operations. Features an intelligent task router that dynamically dispatches prompts to specialized local LLMs (reasoning vs. code generation) via Ollama, a ChromaDB RAG pipeline grounded in confidential internal SOPs, Tesseract OCR for scanned document digitizing, and network-isolated Docker containers (--network none) for safe sandboxed code execution.",
    datasetOrContext: "Built for Smart India Hackathon Problem Statement 26117 (MRPL) — Zero External Network Connectivity.",
    features: [
      "100% offline execution verified with zero external telemetry or cloud dependencies",
      "Dynamic task router dispatching to specialized local LLMs (reasoning vs code) via Ollama",
      "Retrieval-Augmented Generation (RAG) grounded in enterprise SOPs using ChromaDB vector store",
      "Tesseract OCR pipeline digitizing scanned engineering diagrams into structured .docx approval notes",
      "Sandboxed Python code execution inside network-isolated Docker containers (--network none)",
      "Streamlit UI tailored for industrial engineers and confidential document workflows",
    ],
    stack: [
      "Python",
      "Streamlit",
      "Ollama",
      "Local LLMs",
      "ChromaDB (RAG)",
      "Docker",
      "Tesseract OCR",
    ],
    githubUrl: "https://github.com/shindesiddhant-415/sovereign-ai-workbench",
    liveUrl: "",
    previewType: "cloud-labs",
    architectureNodes: [
      { id: "ui", name: "Streamlit UI", tech: "SOP & Query Prompt", type: "client" },
      { id: "router", name: "Task Router", tech: "Intent & Model Splitter", type: "gateway" },
      { id: "rag", name: "ChromaDB + OCR", tech: "Vector SOP Retrieval", type: "db" },
      { id: "llm", name: "Local Ollama LLM", tech: "Air-Gapped Inference", type: "ml-engine" },
      { id: "box", name: "Isolated Docker", tech: "--network none Sandbox", type: "output" },
    ],
  },
  {
    id: "smart-crop-detection",
    sysId: "#SYS-02",
    category: "AI / COMPUTER VISION",
    filterCategory: "AI-ML",
    title: "AI-Powered Smart Crop Disease Detection & Advisory",
    tagline: "Agricultural diagnostic platform using Transfer Learning with MobileNetV2 to identify crop diseases.",
    description:
      "An end-to-end computer vision and web advisory platform that allows farmers to upload crop leaf images, run multi-class disease classification using Transfer Learning on MobileNetV2, and receive instant organic and chemical treatment recommendations with severity evaluation.",
    datasetOrContext: "Trained using Transfer Learning on benchmark botanical datasets covering multiple crop species.",
    features: [
      "Leaf image upload & real-time canvas preview with preprocessing",
      "Transfer Learning utilizing MobileNetV2 for lightweight, fast inference",
      "Instant disease prediction output with confidence distribution",
      "Targeted agronomic management recommendations and treatment advisories",
      "Leaf severity level analysis to assist farmers in immediate remediation",
      "Decoupled microservice architecture with Python Flask handling ML inference and Node.js managing data persistence in MongoDB",
    ],
    stack: ["Python", "Flask", "React.js", "Node.js", "MongoDB", "MobileNetV2", "Transfer Learning"],
    githubUrl: "https://github.com/shindesiddhant-415/crop-disease-detection",
    liveUrl: "",
    previewType: "crop-ai",
    architectureNodes: [
      { id: "fe", name: "React Frontend", tech: "UI / Image Upload", type: "client" },
      { id: "be", name: "Node.js Backend", tech: "API Gateway & Auth", type: "gateway" },
      { id: "ml", name: "Flask ML API", tech: "MobileNetV2 Inference", type: "ml-engine" },
      { id: "db", name: "MongoDB", tech: "Disease Metadata Store", type: "db" },
      { id: "out", name: "Prediction Results", tech: "Advisory & Severity", type: "output" },
    ],
  },
  {
    id: "arduino-game-controller",
    sysId: "#SYS-03",
    category: "EMBEDDED SYSTEMS / IOT",
    filterCategory: "Hardware",
    title: "Arduino Python Game Controller & Wireless Remote",
    tagline: "Custom hardware game controller bridging physical joystick inputs with PC gaming and wireless phone remote.",
    description:
      "A complete embedded gaming interface that captures dual joystick and button signals via an Arduino microcontroller, communicates over high-speed serial (115200 baud) to a multithreaded Python daemon, and translates physical movements into low-latency OS keypresses and gamepad events.",
    datasetOrContext: "Physical hardware build with dual analog joysticks, 4 tactile switches, and Flask web controller bridge.",
    features: [
      "Dual analog joystick 2-axis input reading with deadzone calibration",
      "Four physical programmable momentary buttons for gaming macros",
      "Real-time serial communication stream over USB at 115200 baud via PySerial",
      "Low-latency keyboard and mouse emulation powered by PyDirectInput",
      "Desktop Controller Hub graphical interface developed in Tkinter",
      "Local WiFi Phone Remote web interface served via Flask for mobile gamepad touch controls",
      "Multithreaded architecture preventing I/O blocking during intense input streams",
    ],
    stack: [
      "Arduino UNO",
      "Python",
      "PySerial",
      "PyDirectInput",
      "Tkinter",
      "Flask",
      "Multithreading",
      "Serial Communication",
    ],
    githubUrl: "https://github.com/shindesiddhant-415/Arduino-Python-Game-Controller",
    liveUrl: "",
    previewType: "joystick-sim",
  },
];

export const matrixProjects: MatrixProject[] = [
  {
    id: "sovereign-ai-sys",
    sysId: "#SYS-01",
    title: "Sovereign On-Premise AI Workbench",
    category: "AI-ML",
    categoryLabel: "SIH Hackathon // Offline AI",
    description: "Air-gapped, zero-network industrial AI assistant using Ollama local LLMs, ChromaDB RAG, and network-isolated Docker sandbox.",
    features: ["SIH MRPL 26117", "ChromaDB RAG", "Docker (--network none)", "Tesseract OCR"],
    stack: ["Python", "Streamlit", "Ollama", "ChromaDB", "Docker"],
    githubUrl: "https://github.com/shindesiddhant-415/sovereign-ai-workbench",
    status: "SIH HACKATHON",
  },
  {
    id: "crop-ai-sys",
    sysId: "#SYS-02",
    title: "AI Crop Disease Detection",
    category: "AI-ML",
    categoryLabel: "Computer Vision",
    description: "Deep learning crop disease classifier using Transfer Learning on MobileNetV2 with treatment advisories.",
    features: ["MobileNetV2", "Transfer Learning", "Flask ML API", "MongoDB Store"],
    stack: ["Python", "Flask", "React.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/shindesiddhant-415/crop-disease-detection",
    status: "COMPLETED",
  },
  {
    id: "arduino-ctrl-sys",
    sysId: "#SYS-03",
    title: "Arduino Joystick PC Controller",
    category: "Hardware",
    categoryLabel: "Embedded & IoT",
    description: "Custom physical joystick controller streaming serial telemetry at 115200 baud to a multithreaded Python driver.",
    features: ["115200 Baud Serial", "PyDirectInput", "Tkinter Hub GUI", "Flask Phone Remote"],
    stack: ["Arduino UNO", "Python", "PySerial", "Tkinter", "Flask"],
    githubUrl: "https://github.com/shindesiddhant-415/Arduino-Python-Game-Controller",
    status: "COMPLETED",
  },
  {
    id: "video-game-sales-sys",
    sysId: "#SYS-04",
    title: "Video Game Sales Analytics Dashboard",
    category: "Web",
    categoryLabel: "Data Visualization",
    description: "Interactive analytics dashboard visualizing 16,500+ global video game sales records across 4 business intelligence views.",
    features: ["16,500+ Records", "Chart.js Dynamic Visuals", "KPI Trackers", "Multidimensional Filters"],
    stack: ["JavaScript", "Chart.js", "HTML5", "CSS3"],
    githubUrl: "https://github.com/shindesiddhant-415",
    status: "COMPLETED",
  },
  {
    id: "cisco-network-sys",
    sysId: "#SYS-05",
    title: "Networking & Security Infrastructure Lab",
    category: "Cloud-Linux",
    categoryLabel: "Systems & Security",
    description: "Configured network components, security protocols, enterprise access control, and threat mitigation strategies.",
    features: ["Cisco Certified", "Network Protocols", "Threat Mitigation", "Access Control"],
    stack: ["Cisco", "Linux", "Networking", "Cybersecurity"],
    githubUrl: "https://github.com/shindesiddhant-415",
    status: "LEARNING LAB",
  },
  {
    id: "dsa-cpp-sys",
    sysId: "#SYS-06",
    title: "C++ Data Structures & Algorithms (150+ Solved)",
    category: "AI-ML",
    categoryLabel: "Algorithms // C++",
    description: "Over 150+ problems solved across CodeChef and LeetCode covering dynamic programming, trees, graphs, and Big-O optimization.",
    features: ["150+ Problems Solved", "CodeChef & LeetCode", "Time & Space Analysis", "Modern C++"],
    stack: ["C++17", "STL", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/shindesiddhant-415",
    liveUrl: "https://codolio.com/profile/Siddhant415",
    status: "COMPETITIVE",
  },
];

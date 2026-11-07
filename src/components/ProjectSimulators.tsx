import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Gamepad2,
  Radio,
  Sliders,
  Cloud,
  Terminal,
  Layers,
  Shield,
  Cpu,
  Lock,
} from "lucide-react";

/* ----------------------------------------------------
   0. SOVEREIGN ON-PREMISE AI SIMULATOR (SIH 26117 MRPL)
---------------------------------------------------- */
export const SovereignAISimulator: React.FC = () => {
  const [activeTask, setActiveTask] = useState<"reasoning" | "coding" | "ocr">("reasoning");

  return (
    <div className="w-full bg-[#0D0D11] border border-cyber-cardBorder rounded-xl p-4 sm:p-5 font-mono text-xs">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-semibold tracking-wider text-[11px]">
            SOVEREIGN AI • SIH MRPL 26117
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
          <Lock className="w-3 h-3" /> AIR-GAPPED • ZERO NETWORK
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Task Router Card */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 space-y-2">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
            OLLAMA TASK ROUTER
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTask("reasoning")}
              className={`px-2 py-1 rounded text-[10px] transition-all ${
                activeTask === "reasoning"
                  ? "bg-cyber-red text-white"
                  : "bg-black/50 text-cyber-dim hover:text-white"
              }`}
            >
              Reasoning
            </button>
            <button
              onClick={() => setActiveTask("coding")}
              className={`px-2 py-1 rounded text-[10px] transition-all ${
                activeTask === "coding"
                  ? "bg-cyber-red text-white"
                  : "bg-black/50 text-cyber-dim hover:text-white"
              }`}
            >
              Code Exec
            </button>
            <button
              onClick={() => setActiveTask("ocr")}
              className={`px-2 py-1 rounded text-[10px] transition-all ${
                activeTask === "ocr"
                  ? "bg-cyber-red text-white"
                  : "bg-black/50 text-cyber-dim hover:text-white"
              }`}
            >
              OCR SOP
            </button>
          </div>
          <div className="text-[10px] text-zinc-300 pt-1 border-t border-white/5">
            {activeTask === "reasoning" && "Target: DeepSeek-R1 (Local 8B Q4)"}
            {activeTask === "coding" && "Target: Qwen2.5-Coder (Local 7B)"}
            {activeTask === "ocr" && "Target: Tesseract OCR + ChromaDB"}
          </div>
        </div>

        {/* ChromaDB RAG Vector Store */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 space-y-2">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            CHROMADB RAG PIPELINE
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-zinc-400">Indexed SOPs:</span>
              <span className="text-white">MRPL_PLANT_OPS.pdf</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Embedding Sim:</span>
              <span className="text-emerald-400">Cosine: 0.941 OK</span>
            </div>
          </div>
        </div>

        {/* Docker Sandbox Status */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 space-y-2">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyber-red" />
            DOCKER CONTAINER ISOLATION
          </div>
          <div className="text-[10px] text-emerald-400 bg-black/80 p-1.5 rounded border border-white/5">
            $ docker run --network none --rm py-sandbox
          </div>
          <div className="text-[10px] text-zinc-400">
            Memory Cap: 512MB • Zero Egress Leak
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   1. CROP AI SIMULATOR
---------------------------------------------------- */
interface LeafSample {
  name: string;
  crop: string;
  status: "Diseased" | "Healthy";
  confidence: number;
  advisory: string;
  severity: "High" | "Moderate" | "None";
}

const LEAF_SAMPLES: LeafSample[] = [
  {
    name: "Tomato Early Blight",
    crop: "Solanum lycopersicum",
    status: "Diseased",
    confidence: 96.4,
    advisory: "Apply copper-based fungicides; remove lower infected foliage and ensure drip irrigation.",
    severity: "High",
  },
  {
    name: "Potato Late Blight",
    crop: "Solanum tuberosum",
    status: "Diseased",
    confidence: 94.1,
    advisory: "Improve field drainage, sanitize garden tools, and apply preventive bio-fungicide spray.",
    severity: "Moderate",
  },
  {
    name: "Healthy Bell Pepper",
    crop: "Capsicum annuum",
    status: "Healthy",
    confidence: 98.8,
    advisory: "No pathogen detected. Continue standard nitrogen & water balance schedule.",
    severity: "None",
  },
];

export const CropAISimulator: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sample = LEAF_SAMPLES[selectedIndex];

  return (
    <div className="w-full bg-[#0D0D11] border border-cyber-cardBorder rounded-xl p-4 sm:p-5 font-mono text-xs">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
          <span className="text-white font-semibold tracking-wider text-[11px]">
            MOBILENET_V2 • TRANSFER LEARNING
          </span>
        </div>
        <span className="text-[10px] text-cyber-muted">BACKEND: Flask + Node.js</span>
      </div>

      {/* Main Grid: Upload Preview + Diagnosis Advisory */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Upload Canvas / Leaf Scanner */}
        <div className="relative border border-dashed border-cyber-cardBorder/80 rounded-lg p-4 bg-black/60 flex flex-col items-center justify-center text-center overflow-hidden min-h-[200px]">
          {/* Laser scanning line */}
          <div className="absolute inset-x-0 h-[2px] bg-cyber-red/80 shadow-[0_0_8px_#FF3B30] animate-[scanline_3s_ease-in-out_infinite]" />

          {/* Leaf Graphic Outline */}
          <div className="w-20 h-20 rounded-full border border-cyber-red/40 bg-cyber-redMuted flex items-center justify-center mb-3 relative">
            <Sparkles className="w-8 h-8 text-cyber-red animate-pulse" />
            <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-black text-[9px] border border-cyber-red/50 rounded text-cyber-cyan">
              224x224
            </div>
          </div>

          <div className="text-white font-medium text-xs mb-1">
            {sample.name}
          </div>
          <div className="text-[10px] text-cyber-muted italic">{sample.crop}</div>

          <div className="mt-3 flex gap-1.5">
            {LEAF_SAMPLES.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => setSelectedIndex(idx)}
                className={`px-2 py-1 rounded text-[10px] transition-colors border ${
                  idx === selectedIndex
                    ? "bg-cyber-red text-white border-cyber-red"
                    : "bg-black/60 text-cyber-muted border-white/10 hover:border-white/30"
                }`}
              >
                Sample {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Prediction & Advisory Output */}
        <div className="bg-black/40 border border-white/5 rounded-lg p-3.5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-cyber-muted">PREDICTED CLASS</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                sample.status === "Healthy"
                  ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/40"
                  : "bg-red-950/80 text-cyber-red border-cyber-red/40"
              }`}
            >
              {sample.status.toUpperCase()}
            </span>
          </div>

          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-white font-medium">{sample.name}</span>
              <span className="text-cyber-cyan font-bold">{sample.confidence}%</span>
            </div>
            {/* Progress / confidence meter */}
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyber-red to-cyber-cyan"
                style={{ width: `${sample.confidence}%` }}
              />
            </div>
          </div>

          <div className="pt-2 border-t border-white/5">
            <div className="text-[10px] text-cyber-muted mb-1 flex items-center gap-1.5 font-semibold uppercase tracking-wider">
              {sample.status === "Healthy" ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              )}
              Agronomic Advisory
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
              {sample.advisory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   2. JOYSTICK TELEMETRY SIMULATOR
---------------------------------------------------- */
export const JoystickSimulator: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<string>("BTN_A");
  const joyPos = { x: 512, y: 768 };

  const handleButtonPress = (btn: string) => {
    setActiveBtn(btn);
  };

  return (
    <div className="w-full bg-[#0D0D11] border border-cyber-cardBorder rounded-xl p-4 sm:p-5 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-cyber-red" />
          <span className="text-white font-semibold tracking-wider text-[11px]">
            SERIAL COMMUNICATION • ARDUINO UNO
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          115200 BAUD [ACTIVE]
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Joystick Coordinates */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 flex flex-col justify-between">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5 mb-2">
            <Sliders className="w-3 h-3 text-cyber-cyan" />
            ANALOG CHANNELS
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between">
              <span className="text-cyber-muted">JOY_X:</span>
              <span className="text-white font-bold">{joyPos.x}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyber-muted">JOY_Y:</span>
              <span className="text-white font-bold">{joyPos.y}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyber-muted">DEADZONE:</span>
              <span className="text-cyber-red">±5%</span>
            </div>
          </div>
        </div>

        {/* Tactile Buttons */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 flex flex-col justify-between">
          <div className="text-[10px] text-cyber-muted mb-2">TACTILE INPUTS</div>
          <div className="grid grid-cols-2 gap-1.5">
            {["BTN_A", "BTN_B", "BTN_X", "BTN_Y"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleButtonPress(btn)}
                className={`py-1 rounded text-[10px] font-bold border transition-all ${
                  activeBtn === btn
                    ? "bg-cyber-red text-white border-cyber-red shadow-[0_0_8px_#FF3B30]"
                    : "bg-black/40 text-zinc-400 border-white/10 hover:border-white/30"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* Phone Remote Bridge */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 flex flex-col justify-between">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5 mb-1">
            <Radio className="w-3 h-3 text-cyber-red" />
            PHONE REMOTE HUB
          </div>
          <div className="text-[10px] text-cyber-dim leading-tight">
            Flask local server bridging mobile touchscreen to PC gamepad driver.
          </div>
          <div className="mt-2 text-[10px] text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 px-2 py-0.5 rounded text-center">
            HTTP://192.168.1.4:5000
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------------------
   3. CLOUD & LINUX LABS SIMULATOR
---------------------------------------------------- */
export const CloudLabsSimulator: React.FC = () => {
  return (
    <div className="w-full bg-[#0D0D11] border border-cyber-cardBorder rounded-xl p-4 sm:p-5 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-cyber-cyan" />
          <span className="text-white font-semibold tracking-wider text-[11px]">
            AWS & LINUX LEARNING LABS
          </span>
        </div>
        <span className="text-[10px] text-cyber-muted">REGION: ap-south-1</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* AWS Infrastructure Node Status */}
        <div className="p-3 bg-black/60 rounded-lg border border-white/5 space-y-2">
          <div className="text-[10px] text-cyber-muted flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-amber-400" />
            AWS LAB METRICS
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-zinc-400">S3 Storage:</span>
              <span className="text-white">Encrypted / Bucket ACLs OK</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-zinc-400">CloudFront CDN:</span>
              <span className="text-emerald-400">Edge Hit Ratio: 92.4%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Athena Engine:</span>
              <span className="text-cyber-cyan">Query Latency: 1.84s</span>
            </div>
          </div>
        </div>

        {/* Linux Shell Terminal Snapshot */}
        <div className="p-3 bg-black/80 rounded-lg border border-white/5 font-mono text-[10px] space-y-1">
          <div className="text-cyber-muted flex items-center gap-1">
            <Terminal className="w-3 h-3 text-cyber-red" />
            ubuntu@mit-aoe-lab:~$
          </div>
          <div className="text-zinc-300">
            $ aws s3 ls s3://crop-dataset-archive/ --human-readable
          </div>
          <div className="text-cyber-muted">
            2026-03-12 14:22:10 4.8 GiB plantvillage-processed.tar.gz
          </div>
          <div className="text-zinc-300">
            $ ufw status | grep 80
          </div>
          <div className="text-emerald-400">80/tcp ALLOW IN Anywhere</div>
        </div>
      </div>
    </div>
  );
};

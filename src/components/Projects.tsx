"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "FINARC",
    sub: "Financial Intelligence Platform",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "JWT"],
    description:
      "Most finance apps fragment your data. FINARC unifies it — a JWT-authenticated, SQLAlchemy-backed platform with a Next.js dashboard for multi-account ledger management and automated reporting.",
    highlights: ["30+ REST endpoints", "Real-time net worth & spending insights", "Recurring transaction management"],
    github: "https://github.com/Dorai-Sai-Charan/FINARC",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={i} x={28 + i * 34} y={130 - h} width={18} height={h}
            fill="rgba(91,42,230,0.20)" rx={3} />
        ))}
        {[40, 70, 50, 90, 65, 80, 55].map((h, i) => (
          <rect key={`t${i}`} x={28 + i * 34} y={130 - h} width={18} height={3}
            fill="rgba(109,50,255,0.65)" rx={1} />
        ))}
        <polyline points="37,90 71,60 105,80 139,40 173,55 207,45 241,70"
          stroke="rgba(91,42,230,0.42)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        <circle cx="139" cy="40" r="4" fill="rgba(109,50,255,0.90)" />
        {[40, 80, 120].map(y => (
          <line key={y} x1="20" y1={y} x2="260" y2={y}
            stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
      </svg>
    ),
  },
  {
    num: "02",
    title: "Multimodal RAG Assistant",
    sub: "AI Research Document Intelligence",
    stack: ["Next.js", "FastAPI", "Python", "ChromaDB"],
    description:
      "Indexes research PDFs by content type — text, tables, figures, equations — into ChromaDB for typed retrieval. Task-specific pipelines cover literature surveys, gap analysis, paper comparison, concept explanation, and more.",
    highlights: ["9 specialized RAG pipelines", "ReAct agent with 7 tools", "Groq LLaMA 3.3 + Gemini Vision"],
    github: "https://github.com/Dorai-Sai-Charan/Multimodal-AI-Research-Assistant",
    hue: "#5B2AE6",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        <rect x="14" y="34" width="44" height="58" rx="4"
          fill="rgba(91,42,230,0.10)" stroke="rgba(109,50,255,0.45)" strokeWidth="1.2" />
        <line x1="22" y1="49" x2="50" y2="49" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <line x1="22" y1="58" x2="50" y2="58" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <line x1="22" y1="67" x2="44" y2="67" stroke="rgba(109,50,255,0.22)" strokeWidth="1" />
        <line x1="22" y1="76" x2="47" y2="76" stroke="rgba(109,50,255,0.22)" strokeWidth="1" />
        <text x="36" y="104" textAnchor="middle" fill="rgba(220,225,255,0.35)" fontSize="7" fontFamily="monospace">PDF</text>
        <line x1="58" y1="63" x2="90" y2="63" stroke="rgba(109,50,255,0.40)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="87,60 93,63 87,66" fill="rgba(109,50,255,0.55)" />
        <circle cx="102" cy="40" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="120" cy="40" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="138" cy="40" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="102" cy="63" r="5" fill="rgba(109,50,255,0.80)" stroke="rgba(109,50,255,0.80)" strokeWidth="1" />
        <circle cx="120" cy="63" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="138" cy="63" r="5" fill="rgba(109,50,255,0.60)" stroke="rgba(109,50,255,0.70)" strokeWidth="1" />
        <circle cx="102" cy="86" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="120" cy="86" r="5" fill="rgba(109,50,255,0.50)" stroke="rgba(109,50,255,0.65)" strokeWidth="1" />
        <circle cx="138" cy="86" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="102" cy="109" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="120" cy="109" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <circle cx="138" cy="109" r="5" fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <text x="120" y="130" textAnchor="middle" fill="rgba(220,225,255,0.35)" fontSize="7" fontFamily="monospace">ChromaDB</text>
        <line x1="152" y1="63" x2="178" y2="63" stroke="rgba(109,50,255,0.40)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="175,60 181,63 175,66" fill="rgba(109,50,255,0.55)" />
        <rect x="183" y="40" width="76" height="46" rx="5"
          fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.60)" strokeWidth="1.5" />
        <text x="221" y="60" textAnchor="middle" fill="rgba(220,225,255,0.85)" fontSize="9" fontFamily="monospace">LLaMA 3.3</text>
        <text x="221" y="74" textAnchor="middle" fill="rgba(220,225,255,0.50)" fontSize="7" fontFamily="monospace">70B · Groq</text>
        <rect x="78" y="143" width="104" height="14" rx="7"
          fill="rgba(91,42,230,0.15)" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <text x="130" y="153" textAnchor="middle" fill="rgba(220,225,255,0.80)" fontSize="7" fontFamily="monospace">9 RAG Pipelines · ReAct Agent</text>
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Load Balancer",
    sub: "Reinforcement Learning for Cloud Workloads",
    stack: ["Python", "TensorFlow", "AWS EC2", "DDPG"],
    description:
      "Round-robin is naive. A DDPG reinforcement learning agent routes tasks across a 5-node AWS EC2 cluster, dynamically adapting allocation to real-time server load. Published at ICT4SD 2025.",
    highlights: ["−14% energy consumption", "15ms consistent latency", "−15% memory vs. heuristics"],
    github: "",
    hue: "#5B2AE6",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        <circle cx="140" cy="80" r="18" fill="rgba(91,42,230,0.20)" stroke="rgba(109,50,255,0.55)" strokeWidth="1.5" />
        <circle cx="140" cy="80" r="6" fill="rgba(109,50,255,0.85)" />
        {[
          { cx: 60, cy: 40 }, { cx: 220, cy: 40 },
          { cx: 40, cy: 120 }, { cx: 140, cy: 145 }, { cx: 240, cy: 120 },
        ].map((n, i) => (
          <g key={i}>
            <line x1={140} y1={80} x2={n.cx} y2={n.cy}
              stroke={i === 1 ? "rgba(109,50,255,0.65)" : "rgba(91,42,230,0.22)"}
              strokeWidth={i === 1 ? "1.5" : "1"} strokeDasharray={i === 1 ? "none" : "4 3"} />
            <circle cx={n.cx} cy={n.cy} r="12"
              fill={i === 1 ? "rgba(91,42,230,0.28)" : "rgba(91,42,230,0.10)"}
              stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
            <circle cx={n.cx} cy={n.cy} r="4"
              fill={i === 1 ? "rgba(109,50,255,0.95)" : "rgba(91,42,230,0.50)"} />
          </g>
        ))}
        <circle cx="220" cy="40" r="20" stroke="rgba(91,42,230,0.22)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Solar Fault Detector",
    sub: "Deep Learning Computer Vision",
    stack: ["Python", "PyTorch", "ResNet50", "VGG16"],
    description:
      "Hybrid ResNet50 + VGG16 model for solar panel fault classification. Benchmarked against CNN, CBAM-CNN, InceptionV3, and AlexNet across binary and multi-class tasks. Published at IEEE ICITEICS 2025.",
    highlights: ["97.12% binary accuracy", "88.42% multi-class (ResNet50)", "5 architectures benchmarked"],
    github: "https://github.com/Dorai-Sai-Charan/Solar-Panel-Fault-Detection-Comparative-Analysis-of-DL-models",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[0, 1, 2].map(col =>
          [0, 1].map(row => {
            const isFaulty = col === 1 && row === 1;
            const x = 55 + col * 65, y = 35 + row * 60;
            return (
              <g key={`${col}-${row}`}>
                <rect x={x} y={y} width={50} height={44} rx={3}
                  fill={isFaulty ? "rgba(109,50,255,0.24)" : "rgba(42,23,107,0.35)"}
                  stroke={isFaulty ? "rgba(109,50,255,0.80)" : "rgba(91,42,230,0.35)"}
                  strokeWidth={isFaulty ? 1.5 : 1} />
                <line x1={x + 25} y1={y} x2={x + 25} y2={y + 44}
                  stroke={isFaulty ? "rgba(109,50,255,0.35)" : "rgba(91,42,230,0.20)"} strokeWidth="1" />
                <line x1={x} y1={y + 22} x2={x + 50} y2={y + 22}
                  stroke={isFaulty ? "rgba(109,50,255,0.35)" : "rgba(91,42,230,0.20)"} strokeWidth="1" />
                {isFaulty && (
                  <>
                    <line x1={x + 10} y1={y + 10} x2={x + 40} y2={y + 34}
                      stroke="rgba(109,50,255,0.80)" strokeWidth="1.5" />
                    <line x1={x + 40} y1={y + 10} x2={x + 10} y2={y + 34}
                      stroke="rgba(109,50,255,0.80)" strokeWidth="1.5" />
                  </>
                )}
              </g>
            );
          })
        )}
        <rect x="185" y="115" width="80" height="26" rx="13"
          fill="rgba(91,42,230,0.15)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <text x="225" y="132" textAnchor="middle" fill="rgba(220,225,255,0.90)"
          fontSize="10" fontFamily="monospace">97.12% acc.</text>
      </svg>
    ),
  },
  {
    num: "05",
    title: "VISION-ALS",
    sub: "Eye-Tracking Assistive Interface",
    stack: ["Python", "OpenCV", "KNN", "NumPy"],
    description:
      "Hands-free cursor control for ALS patients using only a standard webcam. A 9-point calibration pipeline feeds a KNN classifier for gaze-zone detection with dwell-time click activation.",
    highlights: ["97% gaze zone accuracy", "1.8–4.4px spatial error", "No specialized hardware needed"],
    github: "https://github.com/Dorai-Sai-Charan/VISION-ALS-Vision-Controlled-Interface-for-Screen-Interaction-and-On-screen-Navigation",
    hue: "#5B2AE6",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[60, 140, 220].map(x => (
          <line key={x} x1={x} y1="10" x2={x} y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {[45, 80, 115].map(y => (
          <line key={y} x1="30" y1={y} x2="250" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        <path d="M 50,80 Q 140,20 230,80 Q 140,140 50,80 Z"
          stroke="rgba(109,50,255,0.45)" strokeWidth="1.5" fill="rgba(91,42,230,0.06)" />
        <circle cx="140" cy="80" r="30" fill="rgba(91,42,230,0.12)" stroke="rgba(109,50,255,0.50)" strokeWidth="1.5" />
        <circle cx="140" cy="80" r="14" fill="rgba(91,42,230,0.22)" stroke="rgba(109,50,255,0.70)" strokeWidth="1" />
        <circle cx="140" cy="80" r="5" fill="rgba(109,50,255,0.95)" />
        <line x1="140" y1="80" x2="205" y2="45" stroke="rgba(109,50,255,0.55)" strokeWidth="1.2" strokeDasharray="4 3" />
        <circle cx="205" cy="45" r="5" fill="rgba(109,50,255,0.80)" />
        <circle cx="205" cy="45" r="10" stroke="rgba(109,50,255,0.35)" strokeWidth="1" fill="none" />
        <rect x="15" y="128" width="72" height="20" rx="10"
          fill="rgba(91,42,230,0.15)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <text x="51" y="142" textAnchor="middle" fill="rgba(220,225,255,0.90)" fontSize="9" fontFamily="monospace">97% acc.</text>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Leukemia Classifier",
    sub: "Deep Learning on Gene Expression Data",
    stack: ["Python", "TensorFlow", "CNN", "LSTM", "SMOTE"],
    description:
      "Concatenated CNN + LSTM + MLP architecture for leukemia subtype classification from gene expression microarrays. SMOTE applied to address class imbalance before training.",
    highlights: ["96.6% classification accuracy", "+3% lift from SMOTE", "Multi-subtype gene expression data"],
    github: "https://github.com/Dorai-Sai-Charan/Analysis-of-LEUKEMIA-classification-using-Micro-array-Data-with-Deep-Learning-models",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[0,1,2,3,4,5,6,7].map(row =>
          [0,1,2,3,4,5,6,7,8,9].map(col => {
            const intensities = [
              [0.6,0.1,0.8,0.2,0.7,0.1,0.5,0.3,0.9,0.2],
              [0.1,0.9,0.2,0.8,0.1,0.7,0.2,0.6,0.1,0.8],
              [0.7,0.2,0.5,0.3,0.8,0.2,0.9,0.1,0.6,0.3],
              [0.2,0.6,0.1,0.9,0.3,0.5,0.1,0.8,0.2,0.7],
              [0.8,0.1,0.7,0.2,0.6,0.3,0.8,0.2,0.5,0.1],
              [0.1,0.7,0.3,0.6,0.1,0.9,0.2,0.7,0.3,0.6],
              [0.5,0.3,0.9,0.1,0.7,0.2,0.5,0.1,0.8,0.3],
              [0.3,0.8,0.2,0.5,0.3,0.6,0.1,0.9,0.2,0.5],
            ];
            const v = intensities[row][col];
            return (
              <rect key={`${row}-${col}`}
                x={28 + col * 23} y={12 + row * 17} width={19} height={13} rx={2}
                fill={`rgba(91,42,230,${0.05 + 0.55 * v})`}
                stroke={v > 0.7 ? "rgba(109,50,255,0.50)" : "none"} strokeWidth={0.5} />
            );
          })
        )}
        <rect x="195" y="128" width="72" height="20" rx="10"
          fill="rgba(91,42,230,0.15)" stroke="rgba(109,50,255,0.45)" strokeWidth="1" />
        <text x="231" y="142" textAnchor="middle" fill="rgba(220,225,255,0.90)" fontSize="9" fontFamily="monospace">96.6% acc.</text>
      </svg>
    ),
  },
  {
    num: "07",
    title: "MEEVS",
    sub: "Multimodal Educational Video Summarizer",
    stack: ["Python", "Whisper", "BERT", "BART", "Streamlit"],
    description:
      "Multimodal video summarizer using Whisper ASR and PaddleOCR for content extraction, fed into a BERT + fine-tuned BART hybrid pipeline for summary generation. Deployed as a Streamlit app.",
    highlights: ["ROUGE & BERTScore validated", "PDF download + audio playback", "Extractive-abstractive hybrid"],
    github: "https://github.com/Dorai-Sai-Charan/MEEVS-Multimodal-Educational-Explainable-Video-Summarizer",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        <rect x="20" y="20" width="100" height="65" rx="5"
          fill="rgba(91,42,230,0.10)" stroke="rgba(109,50,255,0.40)" strokeWidth="1.2" />
        <polygon points="55,35 55,70 85,52" fill="rgba(109,50,255,0.55)" />
        <text x="70" y="98" textAnchor="middle" fill="rgba(220,225,255,0.55)" fontSize="8" fontFamily="monospace">Video Input</text>
        <line x1="120" y1="52" x2="155" y2="52" stroke="rgba(109,50,255,0.45)" strokeWidth="1.2" strokeDasharray="4 3" />
        <rect x="155" y="26" width="105" height="24" rx="4"
          fill="rgba(91,42,230,0.14)" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <text x="207" y="42" textAnchor="middle" fill="rgba(220,225,255,0.75)" fontSize="8" fontFamily="monospace">Whisper ASR</text>
        <rect x="155" y="58" width="105" height="24" rx="4"
          fill="rgba(91,42,230,0.14)" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <text x="207" y="74" textAnchor="middle" fill="rgba(220,225,255,0.75)" fontSize="8" fontFamily="monospace">PaddleOCR</text>
        <line x1="207" y1="82" x2="207" y2="100" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <rect x="155" y="100" width="105" height="24" rx="4"
          fill="rgba(91,42,230,0.22)" stroke="rgba(109,50,255,0.60)" strokeWidth="1.2" />
        <text x="207" y="116" textAnchor="middle" fill="rgba(220,225,255,0.90)" fontSize="8" fontFamily="monospace">BERT + BART</text>
        <line x1="207" y1="124" x2="207" y2="136" stroke="rgba(109,50,255,0.40)" strokeWidth="1" />
        <rect x="172" y="136" width="70" height="16" rx="8"
          fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.50)" strokeWidth="1" />
        <text x="207" y="148" textAnchor="middle" fill="rgba(220,225,255,0.85)" fontSize="7" fontFamily="monospace">Summary + PDF</text>
      </svg>
    ),
  },
  {
    num: "08",
    title: "REBOUND",
    sub: "Hospital Readmission Predictor",
    stack: ["Python", "PySpark", "H2O.ai", "SHAP"],
    description:
      "Distributed ML pipeline on PySpark + H2O.ai with ensemble stacking (GBT, RF, LR, MLP) to predict 30-day diabetic hospital readmissions. Designed for scalability across distributed Spark and H2O pipelines.",
    highlights: ["98% AUC, 94% F1-score", "SHAP feature attribution", "Ensemble stacking (4 models)"],
    github: "https://github.com/Dorai-Sai-Charan/REBOUND-Readmission-Boundary-Predictor--Prediction-of-Hospital-Readmission-using-Machine-Learning",
    hue: "#5B2AE6",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[30, 50, 70, 90, 110, 130].map(y => (
          <line key={y} x1="40" y1={y} x2="240" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        <line x1="40" y1="130" x2="240" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="40" y1="30" x2="40" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <polyline
          points="40,128 70,120 100,108 130,88 160,60 190,40 220,34 240,32"
          stroke="rgba(109,50,255,0.75)" strokeWidth="2" fill="none" />
        <path
          d="M 40,128 70,120 100,108 130,88 160,60 190,40 220,34 240,32 240,130 Z"
          fill="rgba(91,42,230,0.10)" />
        <line x1="40" y1="30" x2="240" y2="130" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="220" cy="34" r="4" fill="rgba(109,50,255,0.90)" />
        <rect x="175" y="12" width="60" height="18" rx="9"
          fill="rgba(91,42,230,0.20)" stroke="rgba(109,50,255,0.55)" strokeWidth="1" />
        <text x="205" y="25" textAnchor="middle" fill="rgba(220,225,255,0.90)" fontSize="9" fontFamily="monospace">AUC 0.98</text>
        <text x="40" y="145" fill="rgba(220,225,255,0.45)" fontSize="8" fontFamily="monospace">FPR</text>
        <text x="22" y="82" fill="rgba(220,225,255,0.45)" fontSize="8" fontFamily="monospace" transform="rotate(-90 22 82)">TPR</text>
      </svg>
    ),
  },
  {
    num: "09",
    title: "Melodic Mind",
    sub: "Emotion-Driven Music Recommender",
    stack: ["Python", "CNN", "VOSK", "TensorFlow"],
    description:
      "Speech emotion recognition drives a personalized music recommendation engine. VOSK handles voice command input and Google TTS delivers spoken output — end-to-end voice-in, music-out pipeline.",
    highlights: ["84% emotion recognition accuracy", "CNN14 embeddings on MER500", "RAVDESS-trained classifier"],
    github: "https://github.com/Dorai-Sai-Charan/Melodic-Mind-Machine-Learning-Based-Emotion-Recognition-for-Personalized-Music-Recommendation",
    hue: "#6D32FF",
    Visual: () => (
      <svg viewBox="0 0 280 160" fill="none" className="w-full h-full">
        {[
          [30,80],[45,60],[60,95],[75,45],[90,100],[105,55],[120,85],
          [135,40],[150,90],[165,50],[180,80],[195,60],[210,95],[225,65],[240,80],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={80} x2={x} y2={y}
              stroke={`rgba(109,50,255,${0.35 + 0.45 * Math.abs(80 - y) / 45})`}
              strokeWidth="2" strokeLinecap="round" />
            <line x1={x} y1={80} x2={x} y2={160 - y}
              stroke={`rgba(91,42,230,${0.15 + 0.25 * Math.abs(80 - y) / 45})`}
              strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}
        <line x1="20" y1="80" x2="260" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <rect x="88" y="12" width="104" height="20" rx="10"
          fill="rgba(91,42,230,0.18)" stroke="rgba(109,50,255,0.50)" strokeWidth="1" />
        <text x="140" y="26" textAnchor="middle" fill="rgba(220,225,255,0.88)" fontSize="9" fontFamily="monospace">84% emotion acc.</text>
      </svg>
    ),
  },
];

function TiltCard({ children, hue, className = "" }: {
  children: ReactNode;
  hue: string;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientY - rect.top) / rect.height - 0.5;
    const yRatio = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: xRatio * 10, y: -yRatio * 10 });
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className={`spotlight-card rounded-2xl border group ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(16,22,51,0.92) 0%, rgba(10,12,28,0.92) 100%)",
        borderColor: "rgba(255,255,255,0.05)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: `0 24px 64px ${hue}18, 0 0 0 1px ${hue}28, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const FeaturedVisual = projects[0].Visual;

  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-14 relative" ref={ref}>

      {/* Decorative background number */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-0 top-1/4 font-display font-black leading-none"
        style={{
          fontSize: "clamp(10rem, 26vw, 22rem)",
          letterSpacing: "-0.06em",
          color: "rgba(91,42,230,0.028)",
          zIndex: 0,
        }}
      >
        04
      </div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16 relative z-10"
      >
        <span className="section-label">04 — Projects</span>
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
        <a
          href="https://github.com/Dorai-Sai-Charan"
          target="_blank" rel="noopener noreferrer"
          className="section-label link-hover flex items-center gap-1 transition-colors"
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "")}
        >
          GitHub <FiArrowUpRight size={12} />
        </a>
      </motion.div>

      <div className="space-y-5 relative z-10">
        {/* ── Featured card — full width, horizontal layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          <TiltCard hue={projects[0].hue}>
            <div className="flex flex-col md:flex-row">
              {/* Content side */}
              <div className="flex flex-col justify-between p-7 md:p-9 flex-1 gap-7">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-display font-bold" style={{ color: "var(--muted)" }}>
                      {projects[0].num}
                    </span>
                    <span className="pill pill-accent text-xs">Featured</span>
                  </div>
                  <h3
                    className="font-display font-bold mb-2"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--text)" }}
                  >
                    {projects[0].title}
                  </h3>
                  <p className="text-sm font-display font-semibold mb-4" style={{ color: "var(--muted)" }}>
                    {projects[0].sub}
                  </p>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-2)" }}>
                    {projects[0].description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 mb-5">
                    {projects[0].highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                        <span className="text-sm" style={{ color: "var(--text-2)" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].stack.slice(0, 4).map(t => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                    {projects[0].github && (
                      <a
                        href={projects[0].github}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-display font-semibold transition-colors"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                      >
                        <FiExternalLink size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div
                className="md:w-80 h-56 md:h-auto flex-shrink-0 relative overflow-hidden"
                style={{
                  background: "rgba(7,10,26,0.95)",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FeaturedVisual />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(91,42,230,0.10), transparent 70%)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(7,10,26,0.4) 0%, transparent 30%)" }}
                />
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── All remaining projects in 2-col grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(1).map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.26 + i * 0.10, ease: [0.33, 1, 0.68, 1] }}
              className="h-full"
            >
              <TiltCard hue={p.hue} className="h-full flex flex-col">
                {/* Visual area */}
                <div
                  className="relative overflow-hidden rounded-t-2xl"
                  style={{ height: 160, background: "rgba(7,10,26,0.95)" }}
                >
                  <p.Visual />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, rgba(7,10,26,0.28) 0%, transparent 50%)" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(91,42,230,0.10), transparent 70%)" }}
                  />
                  <span
                    className="absolute top-3 left-4 font-display font-bold text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <h3
                      className="font-display font-bold text-xl mb-1 transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs font-display font-semibold" style={{ color: "var(--muted)" }}>{p.sub}</p>
                  </div>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-2)" }}>
                    {p.description}
                  </p>

                  <div className="space-y-2">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                        <span className="text-xs" style={{ color: "var(--text-2)" }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map(t => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-display font-semibold transition-colors"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                      >
                        <FiExternalLink size={12} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

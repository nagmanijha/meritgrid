"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PhaseInteractiveSection } from "./page-interactive";

interface Topic {
  name: string;
  timeToFinish: string;
  freeResources: string[];
  caseBasedProblems: string[];
}

interface Phase {
  id: number;
  name: string;
  duration: string;
  topics?: Topic[];
  resources?: string[];
  status: string;
}

interface Roadmap {
  title: string;
  phases: Phase[];
  caseStudy: {
    title: string;
    description: string;
  };
}

interface Question {
  id: string;
  type: "mcq" | "blank";
  question: string;
  options: string[];
  answer: string;
}

export default function RoadmapPage() {
  const [step, setStep] = useState<"goal" | "diagnostic" | "generating-diagnostic" | "diagnostic-quiz" | "generating-roadmap" | "roadmap">("goal");
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState<string>("English");
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<{ phaseId: number; topicName: string } | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackSummary, setFeedbackSummary] = useState("");

  const [viewMode, setViewMode] = useState<"phases" | "animated">("phases");

  const startDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim() || !experience.trim()) return;
    setStep("diagnostic");
  };

  const handlePhaseBegin = (phaseId: number) => {
    if (!roadmap) return;
    setExpandedPhase(phaseId);
  };

  const submitLanguage = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("generating-diagnostic");

    const goalLower = goal.trim().toLowerCase();
    const isHardcodedMl = goalLower === "ml engineer" && experience.includes("0-1");

    if (isHardcodedMl) {
      setTimeout(() => {
        setQuestions([
          { id: "ai_1", type: "mcq", question: "Which algorithm is commonly used for classification tasks?", options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"], answer: "Logistic Regression" },
          { id: "ai_2", type: "mcq", question: "What is the primary purpose of an activation function in a neural network?", options: ["To initialize weights", "To introduce non-linearity", "To calculate loss", "To update biases"], answer: "To introduce non-linearity" },
          { id: "ai_3", type: "mcq", question: "Which technique is used to prevent overfitting in deep learning models?", options: ["Gradient Descent", "Backpropagation", "Dropout", "One-hot encoding"], answer: "Dropout" },
          { id: "ai_4", type: "mcq", question: "What does NLP stand for?", options: ["Natural Language Processing", "Neural Logic Programming", "Node Level Parsing", "Network Layer Protocol"], answer: "Natural Language Processing" },
          { id: "ai_5", type: "mcq", question: "Which of the following is an unsupervised learning algorithm?", options: ["Decision Trees", "Random Forest", "K-Means Clustering", "Support Vector Machines"], answer: "K-Means Clustering" },
        ]);
        setStep("diagnostic-quiz");
      }, 1000);
      return;
    }

    try {
      const response = await fetch("/api/ai/generate-diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, language, experience }),
      });
      const data = await response.json();
      if (data.questions) {
        setQuestions(data.questions);
        setStep("diagnostic-quiz");
      } else {
        throw new Error("No questions returned");
      }
    } catch (err) {
      console.error(err);
      setStep("goal");
    }
  };

  const handleAnswerChange = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const submitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let score = 0;
    questions.forEach(q => {
      const userAnswer = answers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    setStep("generating-roadmap");

    const goalLower = goal.trim().toLowerCase();
    const isHardcodedMl = goalLower === "ml engineer" && experience.includes("0-1");

    if (isHardcodedMl) {
      setTimeout(() => {
        const detailed: Roadmap = {
          title: "AI & ML Detailed Roadmap",
          phases: [
            {
              id: 1,
              name: "Foundations: Math, Python & ML Basics",
              duration: "6-10 weeks",
              status: "in-progress",
              topics: [
                { name: "Linear Algebra & Calculus", timeToFinish: "1-2 weeks", freeResources: ["3Blue1Brown", "Khan Academy"], caseBasedProblems: ["Matrix ops for ML"] },
                { name: "Probability & Statistics", timeToFinish: "1-2 weeks", freeResources: ["StatQuest", "Khan Academy"], caseBasedProblems: ["Bayes problems"] },
                { name: "Python for Data Science", timeToFinish: "1-2 weeks", freeResources: ["Official Python Tutorial", "freeCodeCamp"], caseBasedProblems: ["Data munging exercises"] },
              ],
            },
            {
              id: 2,
              name: "Advanced Topics: Deep Learning",
              duration: "8-16 weeks",
              status: "not-started",
              topics: [
                { name: "Deep Learning Fundamentals", timeToFinish: "3-4 weeks", freeResources: ["DeepLearning.AI", "fast.ai"], caseBasedProblems: ["Train CNN"] },
                { name: "Natural Language Processing", timeToFinish: "2-4 weeks", freeResources: ["Hugging Face Tutorials"], caseBasedProblems: ["Text classification"] },
              ],
            },
          ],
          caseStudy: { title: "Classification Project", description: `You scored ${score}/${questions.length}! Build and deploy an end-to-end classification model.` },
        };
        setRoadmap(detailed);
        setStep("roadmap");
      }, 1500);
      return;
    }

    try {
      const response = await fetch("/api/ai/generate-roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, diagnosticScore: score, language, experience }),
      });
      const data = await response.json();
      setRoadmap(data);
      setStep("roadmap");
    } catch (err) {
      console.error(err);
      setStep("goal");
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col p-8 pb-32">
      {step === "goal" && (
        <div className="ui-panel p-8 text-center bg-surface border border-outline-variant space-y-6 max-w-[512px] mx-auto mt-20 shadow-lg rounded-2xl relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"></div>
          <span className="material-symbols-outlined text-primary text-6xl">auto_awesome</span>
          <h2 className="text-3xl font-bold text-on-surface">Declare Your Goal</h2>
          <p className="text-on-surface-variant text-sm">Tell us what you want to learn, and our AI will generate a strict, industry-aligned roadmap for you.</p>
          
          <form onSubmit={startDiagnostic} className="flex flex-col gap-4 mt-8">
            <input 
              type="text" 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. Fullstack Developer, UX Designer"
              className="w-full bg-surface-container border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all rounded shadow-inner"
              required
            />
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all rounded shadow-inner appearance-none"
              required
            >
              <option value="" disabled>Select Current Experience Level</option>
              <option value="Complete Beginner (0 years)">Complete Beginner (0 years)</option>
              <option value="Novice (0-1 years)">Novice (0-1 years)</option>
              <option value="Intermediate (1-3 years)">Intermediate (1-3 years)</option>
              <option value="Advanced (3-5 years)">Advanced (3-5 years)</option>
              <option value="Expert (5+ years)">Expert (5+ years)</option>
            </select>
            <button type="submit" className="w-full bg-primary text-on-primary font-bold py-3 uppercase tracking-widest hover:opacity-90 transition-opacity rounded">
              Continue to Diagnostic
            </button>
          </form>
        </div>
      )}

      {step === "diagnostic" && (
        <div className="ui-panel bg-surface border border-outline-variant p-8 space-y-6 max-w-[512px] mx-auto mt-20 shadow-lg rounded-2xl relative">
          <div className="flex items-center gap-4 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary text-4xl">language</span>
            <div>
              <h2 className="text-2xl font-bold text-on-surface">Localization</h2>
              <p className="text-sm text-on-surface-variant mt-1">Select your preferred test language.</p>
            </div>
          </div>
          
          <form onSubmit={submitLanguage} className="flex flex-col gap-8 mt-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Language</label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded appearance-none"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Tamil">Tamil (தமிழ்)</option>
                <option value="Telugu">Telugu (తెలుగు)</option>
                <option value="Bengali">Bengali (বাংলা)</option>
                <option value="Marathi">Marathi (मराठी)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-primary text-on-primary font-bold py-3 uppercase tracking-widest text-xs rounded hover:opacity-90 flex items-center justify-center gap-2">
              Generate AI Diagnostic <span className="material-symbols-outlined">quiz</span>
            </button>
          </form>
        </div>
      )}

      {step === "generating-diagnostic" && (
        <div className="flex flex-col items-center justify-center mt-32 space-y-4">
          <span className="material-symbols-outlined text-primary text-4xl animate-spin">sync</span>
          <p className="text-primary text-xs font-bold uppercase tracking-widest animate-pulse">Generating Diagnostic Quiz...</p>
        </div>
      )}

      {step === "diagnostic-quiz" && (
        <div className="max-w-3xl mx-auto space-y-8 mt-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-on-surface">Skill Diagnostic</h2>
            <p className="text-on-surface-variant mt-2 text-sm">Complete this quiz to empirically determine your starting point for {goal}.</p>
          </div>

          <form onSubmit={submitQuiz} className="space-y-8">
            {questions.map((q, idx) => (
              <div key={q.id || idx} className="ui-panel p-6 bg-surface border border-outline-variant rounded-2xl shadow-sm">
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-xl">{idx + 1}.</span>
                  <div className="flex-1">
                    <p className="font-bold text-on-surface mb-4 leading-relaxed">{q.question}</p>
                    
                    {q.type === "mcq" && q.options && (
                      <div className="space-y-3">
                        {q.options.map((opt, oIdx) => (
                          <label key={oIdx} className="flex items-start gap-3 p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
                            <input 
                              type="radio" 
                              name={`question-${q.id}`} 
                              value={opt}
                              onChange={() => handleAnswerChange(q.id, opt)}
                              required
                              className="mt-1 accent-primary"
                            />
                            <span className="text-sm font-medium text-on-surface">{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {q.type === "blank" && (
                      <div className="mt-2">
                        <input 
                          type="text" 
                          placeholder="Type your answer here..."
                          onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                          required
                          className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded-xl shadow-inner"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button type="submit" className="w-full bg-primary text-on-primary font-bold py-4 uppercase tracking-widest text-sm rounded-xl hover:opacity-90 flex items-center justify-center gap-2 sticky bottom-8 shadow-2xl">
              Submit Quiz & Generate Roadmap <span className="material-symbols-outlined">auto_awesome</span>
            </button>
          </form>
        </div>
      )}

      {step === "generating-roadmap" && (
        <div className="flex flex-col items-center justify-center mt-32 space-y-4">
          <span className="material-symbols-outlined text-primary text-4xl animate-spin">sync</span>
          <p className="text-primary text-xs font-bold uppercase tracking-widest animate-pulse">Analyzing Score & Compiling Roadmap...</p>
        </div>
      )}

      {step === "roadmap" && roadmap && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-outline-variant pb-6">
            <div>
              <h1 className="text-4xl font-bold text-on-surface">{roadmap.title}</h1>
              <p className="text-on-surface-variant font-data-mono text-xs uppercase mt-2">Personalized Master Plan</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container border border-outline-variant p-1 rounded-lg flex items-center gap-1">
                <button 
                  onClick={() => setViewMode("phases")} 
                  className={`px-4 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all ${viewMode === 'phases' ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Phase Cards
                </button>
                <button 
                  onClick={() => setViewMode("animated")} 
                  className={`px-4 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all ${viewMode === 'animated' ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Visual Map (Beta)
                </button>
              </div>
              <button onClick={() => { setRoadmap(null); setStep("goal"); }} className="text-on-surface-variant hover:text-primary text-xs underline font-bold tracking-widest uppercase ml-4">
                Start Over
              </button>
            </div>
          </div>

          {viewMode === "phases" ? (
            <div className="space-y-6">
              {roadmap.phases.map((phase, i) => (
                <div key={phase.id} className="ui-panel bg-surface border border-outline-variant rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-primary transition-colors shadow-sm">
                  <div className="md:w-1/4 border-r border-outline-variant/30 pr-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Phase 0{i + 1}</span>
                    <h3 className="text-xl font-bold text-on-surface leading-tight">{phase.name}</h3>
                    <p className="text-sm font-data-mono text-on-surface-variant mt-3">{phase.duration}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Curated Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {(
                        phase.resources?.length
                          ? phase.resources
                          : phase.topics?.flatMap(topic => topic.freeResources) ?? []
                      ).map((res, index) => (
                        <span key={`${res}-${index}`} className="px-3 py-1 bg-surface-container border border-outline-variant rounded text-xs font-medium text-on-surface shadow-sm">
                          {res}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (expandedPhase === phase.id) {
                            setExpandedPhase(null);
                            return;
                          }
                          setExpandedPhase(phase.id);
                          handlePhaseBegin(phase.id);
                        }}
                        className="w-fit px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-bold text-xs tracking-widest uppercase rounded-lg transition-colors"
                      >
                        {expandedPhase === phase.id ? "Close Phase Details" : "Begin Phase"}
                      </button>

                      <PhaseInteractiveSection
                        phase={phase}
                        expandedPhase={expandedPhase}
                        setExpandedPhase={setExpandedPhase}
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                        showFeedbackModal={showFeedbackModal}
                        setShowFeedbackModal={setShowFeedbackModal}
                        feedbackSummary={feedbackSummary}
                        setFeedbackSummary={setFeedbackSummary}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-12 ui-panel p-8 bg-surface-container-lowest border border-primary/50 relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-[100px] text-primary">verified</span>
                </div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Proof of Work</h3>
                <h2 className="text-2xl font-bold text-on-surface mb-2">{roadmap.caseStudy.title}</h2>
                <p className="text-sm text-on-surface-variant max-w-2xl">{roadmap.caseStudy.description}</p>
                <button className="mt-8 bg-surface-container border border-outline-variant text-on-surface-variant px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest cursor-not-allowed">
                  <span className="material-symbols-outlined text-[16px] mr-2 align-middle">lock</span> Locked (Complete phases first)
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-full py-12 px-6 md:px-12 flex flex-col rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-inner overflow-hidden">
              <div className="absolute left-[50px] top-0 bottom-0 w-1 bg-outline-variant/30 hidden md:block"></div>
              <div className="space-y-16 relative z-10">
                {roadmap.phases.map((phase, i) => (
                  <div key={phase.id} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group">
                    <div className="absolute left-[39px] w-6 h-6 rounded-full bg-surface-container border-[3px] border-primary hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300 group-hover:bg-primary z-20">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-on-primary"></div>
                    </div>
                    <div className="md:ml-[100px] flex-1 w-full">
                      <div className="p-6 rounded-2xl border border-outline-variant bg-surface hover:border-primary transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_20px_rgba(68,64,60,0.1)] group-hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Phase {i + 1}</div>
                          <span className="px-3 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{phase.duration}</span>
                        </div>
                        <h3 className="font-bold text-on-surface text-2xl mb-4">{phase.name}</h3>
                        
                        {phase.topics && phase.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {phase.topics.map((t, tIdx) => (
                              <span key={tIdx} className="px-3 py-1.5 bg-surface-container rounded-lg border border-outline-variant/50 text-xs text-on-surface flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                {t.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

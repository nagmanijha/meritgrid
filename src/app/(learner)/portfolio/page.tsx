"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const Radar = dynamic(() => import('recharts').then(mod => mod.Radar), { ssr: false });
const RadarChart = dynamic(() => import('recharts').then(mod => mod.RadarChart), { ssr: false });
const PolarGrid = dynamic(() => import('recharts').then(mod => mod.PolarGrid), { ssr: false });
const PolarAngleAxis = dynamic(() => import('recharts').then(mod => mod.PolarAngleAxis), { ssr: false });
const PolarRadiusAxis = dynamic(() => import('recharts').then(mod => mod.PolarRadiusAxis), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

const skillData = [
  { subject: 'React', A: 120, fullMark: 150 },
  { subject: 'System Design', A: 98, fullMark: 150 },
  { subject: 'CSS/Tailwind', A: 140, fullMark: 150 },
  { subject: 'Node.js', A: 85, fullMark: 150 },
  { subject: 'Accessibility', A: 110, fullMark: 150 },
];

const eloData = [
  { name: 'W1', score: 1200 },
  { name: 'W2', score: 1350 },
  { name: 'W3', score: 1310 },
  { name: 'W4', score: 1480 },
  { name: 'W5', score: 1620 },
  { name: 'W6', score: 1742 },
];

export default function PortfolioPage() {
  const [projectLink, setProjectLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{score: number, feedback: string, hireabilityIndexDelta: number} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectLink) return;
    setLoading(true);
    
    try {
      const res = await fetch("/api/ai/evaluate-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectLink }),
      });
      const data = await res.json();
      if (data.feedback) {
        setFeedback(data);
      }
    } catch (error) {
      console.error(error);
    }
    
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column: Charts */}
      <div className="lg:col-span-1 space-y-8">
        <div className="ui-panel p-6 bg-surface border border-outline-variant shadow-sm rounded-lg">
          <h2 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest mb-4 font-bold">Skill Proficiency Radar</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height={256}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#D1D5DB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="Proficiency" dataKey="A" stroke="var(--color-primary)" fill="var(--color-primary-fixed-dim)" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="ui-panel p-6 bg-surface border border-outline-variant shadow-sm rounded-lg">
          <h2 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest mb-4 font-bold">Hireability Index History</h2>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height={192}>
              <LineChart data={eloData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 10 }} />
                <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} domain={['dataMin - 100', 'dataMax + 100']} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-outline-variant)', fontSize: 12, borderRadius: 8 }} />
                <Line type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-secondary)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Column: Projects */}
      <div className="lg:col-span-2 space-y-8">
        <div className="ui-panel p-8 bg-surface border border-outline-variant shadow-sm rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-[24px]">upload_file</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-on-surface">Submit Case Study</h2>
              <p className="text-sm text-on-surface-variant mt-1">Provide a link to your deployed project or GitHub repository for AI evaluation.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="url"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              placeholder="https://github.com/your-username/repo"
              className="w-full bg-surface-container-low border border-outline-variant px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-primary transition-all rounded shadow-inner"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary text-sm font-bold py-3 uppercase tracking-widest hover:opacity-90 transition-opacity rounded disabled:opacity-50"
            >
              {loading ? "AI Evaluating..." : "Submit for Evaluation"}
            </button>
          </form>

          {feedback && (
            <div className="mt-6 p-4 border-l-4 border-primary bg-primary-container/20 rounded">
              <h3 className="font-label-caps text-xs text-primary uppercase tracking-widest mb-2 font-bold">AI Feedback Received</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feedback.feedback}</p>
              <div className="mt-4 flex gap-4">
                <span className="px-3 py-1 bg-surface-container text-primary font-bold rounded border border-outline-variant text-sm shadow-sm">Score: {feedback.score}/100</span>
                <span className="px-3 py-1 bg-surface-container text-secondary font-bold rounded border border-outline-variant text-sm shadow-sm">Hireability Index: +{feedback.hireabilityIndexDelta}</span>
              </div>
            </div>
          )}
        </div>

        <div className="ui-panel p-8 bg-surface border border-outline-variant shadow-sm rounded-lg">
          <h2 className="text-xl font-bold text-on-surface mb-6">Verified Projects</h2>
          <div className="space-y-4">
            <div className="p-5 border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all bg-surface-container-lowest cursor-pointer">
              <div className="flex justify-between items-start">
                <h3 className="text-base font-bold text-on-surface">E-commerce Microservices</h3>
                <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-xs font-bold border border-primary/20">92/100</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-2">Built using Node.js, Express, and PostgreSQL.</p>
            </div>
            <div className="p-5 border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all bg-surface-container-lowest cursor-pointer">
              <div className="flex justify-between items-start">
                <h3 className="text-base font-bold text-on-surface">React Dashboard</h3>
                <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-xs font-bold border border-primary/20">88/100</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-2">Responsive admin dashboard with Next.js and Tailwind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

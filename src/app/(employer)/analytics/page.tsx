"use client";
import React from "react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="w-2 h-2 bg-primary-fixed-dim"></span>
          PLATFORM ANALYTICS
        </h2>
        <select className="bg-surface-container border border-outline-variant text-xs text-on-surface rounded px-3 py-1 font-data-mono">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-xl border border-outline-variant shadow-sm text-center">
          <div className="text-sm font-label-caps text-on-surface-variant font-bold mb-2">Total Candidates Evaluated</div>
          <div className="text-4xl font-headline-md font-bold text-primary-fixed-dim">1,248</div>
          <div className="text-[10px] text-secondary-fixed-dim mt-2 font-data-mono font-bold">+12% from last month</div>
        </div>
        <div className="glass-panel p-6 rounded-xl border border-outline-variant shadow-sm text-center">
          <div className="text-sm font-label-caps text-on-surface-variant font-bold mb-2">Average Arena Score</div>
          <div className="text-4xl font-headline-md font-bold text-primary-fixed-dim">78.4</div>
          <div className="text-[10px] text-outline mt-2 font-data-mono font-bold">-2.1% from last month</div>
        </div>
        <div className="glass-panel p-6 rounded-xl border border-outline-variant shadow-sm text-center">
          <div className="text-sm font-label-caps text-on-surface-variant font-bold mb-2">Time-to-Hire (Days)</div>
          <div className="text-4xl font-headline-md font-bold text-primary-fixed-dim">14.2</div>
          <div className="text-[10px] text-secondary-fixed-dim mt-2 font-data-mono font-bold">-5 days (Improved)</div>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-xl border border-outline-variant shadow-sm mt-8 h-64 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="relative z-10 flex gap-4 items-end h-32 w-full max-w-lg justify-center opacity-70">
          <div className="w-8 bg-primary rounded-t" style={{height: '40%'}}></div>
          <div className="w-8 bg-primary rounded-t" style={{height: '60%'}}></div>
          <div className="w-8 bg-primary rounded-t" style={{height: '30%'}}></div>
          <div className="w-8 bg-primary rounded-t" style={{height: '80%'}}></div>
          <div className="w-8 bg-secondary rounded-t" style={{height: '100%'}}></div>
          <div className="w-8 bg-primary rounded-t" style={{height: '50%'}}></div>
        </div>
        <div className="relative z-10 mt-4 text-xs font-bold text-on-surface-variant font-label-caps uppercase tracking-widest">Candidate Intake Volume (Mock Chart)</div>
      </div>
    </div>
  );
}

"use client";
import React from "react";

export default function ScreeningPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="w-2 h-2 bg-primary-fixed-dim"></span>
          AUTO-SCREENING RULES
        </h2>
        <button className="border border-primary-fixed-dim bg-primary-fixed-dim text-on-primary px-4 py-2 text-xs font-label-caps hover:opacity-90 transition-opacity rounded font-bold">
          CREATE NEW RULE
        </button>
      </div>

      <div className="glass-panel rounded-xl border border-outline-variant shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant text-xs font-label-caps text-on-surface-variant uppercase tracking-widest">
              <th className="p-4 font-bold">Rule Name</th>
              <th className="p-4 font-bold">Condition</th>
              <th className="p-4 font-bold">Action</th>
              <th className="p-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-data-mono text-on-surface">
            <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
              <td className="p-4 font-bold text-primary-fixed-dim">Senior Backend Filter</td>
              <td className="p-4">Arena Score &lt; 80 AND Experience &lt; 3</td>
              <td className="p-4 text-error font-bold">AUTO-REJECT</td>
              <td className="p-4"><span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">ACTIVE</span></td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
              <td className="p-4 font-bold text-primary-fixed-dim">Fast-Track Elite</td>
              <td className="p-4">Arena Score &gt;= 95</td>
              <td className="p-4 text-secondary font-bold">SKIP TO FINAL ROUND</td>
              <td className="p-4"><span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">ACTIVE</span></td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors text-on-surface-variant opacity-70">
              <td className="p-4 font-bold">Frontend Plagiarism Check</td>
              <td className="p-4">Code Similarity &gt; 85%</td>
              <td className="p-4 font-bold">FLAG FOR REVIEW</td>
              <td className="p-4"><span className="border border-outline-variant text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold">DISABLED</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-surface-container p-6 rounded-lg border border-outline-variant text-center border-dashed">
        <span className="material-symbols-outlined text-4xl text-outline mb-2 block">rule</span>
        <h3 className="text-sm font-bold text-on-surface mb-1 uppercase tracking-widest font-label-caps">Advanced Screening Engine</h3>
        <p className="text-xs text-on-surface-variant max-w-md mx-auto">Automate your hiring pipeline by defining rules based on Arena Scores, Plagiarism Flags, and Profile Data.</p>
      </div>
    </div>
  );
}

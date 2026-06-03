"use client";
import React from "react";

export default function PipelinePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="w-2 h-2 bg-primary-fixed-dim"></span>
          CANDIDATE PIPELINE
        </h2>
        <button className="border border-primary-fixed-dim text-primary-fixed-dim px-4 py-2 text-xs font-label-caps hover:bg-primary-fixed-dim hover:text-on-primary transition-all rounded font-bold">
          + NEW PIPELINE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {['SOURCED', 'SCREENING', 'INTERVIEWING', 'OFFERED'].map((stage, i) => (
          <div key={stage} className="bg-surface-container rounded-lg p-4 border border-outline-variant/30 min-h-[400px]">
            <div className="flex justify-between items-center mb-4 border-b border-outline-variant/50 pb-2">
              <span className="font-data-mono text-xs text-on-surface font-bold uppercase">{stage}</span>
              <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] text-on-surface-variant font-bold">{4 - i}</span>
            </div>
            <div className="space-y-3">
              {[...Array(4 - i)].map((_, j) => (
                <div key={j} className="glass-panel p-3 rounded border border-outline-variant hover:border-primary-fixed-dim cursor-pointer transition-colors shadow-sm">
                  <div className="font-bold text-sm text-on-surface">Candidate {j + 1 + i * 3}</div>
                  <div className="text-[10px] text-on-surface-variant font-data-mono mt-1">Applied {j + 1} days ago</div>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded text-[9px] font-bold">React</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-[9px] font-bold">Node.js</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

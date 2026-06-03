"use client";
import React from "react";

export default function NewJobPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b border-outline-variant pb-4">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="material-symbols-outlined text-primary-fixed-dim">post_add</span>
          POST NEW REQUISITION
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">Create a new job posting, internship, or freelance contract.</p>
      </div>

      <div className="glass-panel p-8 rounded-2xl border border-outline-variant shadow-sm space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Job Title</label>
            <input type="text" placeholder="e.g. Senior Machine Learning Engineer" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Job Type</label>
            <select className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Freelance Contract</option>
            </select>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Location</label>
            <select className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors">
              <option>Remote (Global)</option>
              <option>Remote (US Only)</option>
              <option>On-Site</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Required Tech Stack (Comma separated)</label>
            <input type="text" placeholder="e.g. Python, TensorFlow, PyTorch" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Compensation Range (USD)</label>
            <div className="flex items-center gap-2">
              <input type="number" placeholder="Min" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
              <span className="text-on-surface-variant">-</span>
              <input type="number" placeholder="Max" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
            </div>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Min. Hireability Index</label>
            <input type="number" defaultValue="800" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
            <p className="text-[10px] text-on-surface-variant mt-1 font-data-mono">Only candidates above this score can apply.</p>
          </div>

          <div className="col-span-2">
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Job Description</label>
            <textarea rows={6} placeholder="Describe the role, responsibilities, and team..." className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors"></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-4 border-t border-outline-variant/50 pt-6">
          <button className="text-on-surface-variant px-6 py-2 rounded font-label-caps text-xs font-bold hover:bg-surface-container transition-colors">
            SAVE AS DRAFT
          </button>
          <button className="bg-primary-fixed-dim text-on-primary px-6 py-2 rounded font-label-caps text-xs font-bold shadow-md hover:opacity-90 transition-opacity flex items-center gap-2">
            PUBLISH JOB <span className="material-symbols-outlined text-[16px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

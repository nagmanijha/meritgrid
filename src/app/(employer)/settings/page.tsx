"use client";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-outline-variant pb-4">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="w-2 h-2 bg-primary-fixed-dim"></span>
          PLATFORM SETTINGS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 border-r border-outline-variant/50 pr-4 space-y-2">
          <button className="w-full text-left px-4 py-2 font-data-mono text-xs font-bold text-primary-fixed-dim bg-surface-container-high rounded border-l-2 border-primary-fixed-dim">Company Profile</button>
          <button className="w-full text-left px-4 py-2 font-data-mono text-xs font-bold text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded">Billing & Quotas</button>
          <button className="w-full text-left px-4 py-2 font-data-mono text-xs font-bold text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded">API Keys</button>
          <button className="w-full text-left px-4 py-2 font-data-mono text-xs font-bold text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded">Team Members</button>
        </div>

        <div className="col-span-3 space-y-8">
          <div className="glass-panel p-6 rounded-xl border border-outline-variant shadow-sm space-y-6">
            <h3 className="font-label-caps text-sm text-on-surface font-bold uppercase tracking-widest border-b border-outline-variant/50 pb-2">Company Details</h3>
            
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-surface-container-highest rounded-xl border border-outline-variant flex items-center justify-center text-4xl text-primary-fixed-dim shadow-inner">
                <span className="material-symbols-outlined text-[48px]">business</span>
              </div>
              <div>
                <button className="bg-surface-container border border-outline-variant text-xs font-bold font-data-mono px-4 py-2 rounded hover:bg-surface-container-high transition-colors">UPLOAD LOGO</button>
                <p className="text-[10px] text-on-surface-variant mt-2 font-data-mono">Recommended: 256x256px PNG</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Company Name</label>
                <input type="text" defaultValue="TechCorp Solutions" className="w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 text-sm text-on-surface rounded focus:border-primary-fixed-dim outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Industry</label>
                <input type="text" defaultValue="Software Development" className="w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 text-sm text-on-surface rounded focus:border-primary-fixed-dim outline-none transition-colors" />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Company Description</label>
                <textarea rows={4} defaultValue="Leading provider of scalable cloud solutions." className="w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 text-sm text-on-surface rounded focus:border-primary-fixed-dim outline-none transition-colors"></textarea>
              </div>
            </div>

            <button className="bg-primary-fixed-dim text-on-primary px-6 py-2 text-xs font-label-caps font-bold rounded hover:opacity-90 transition-opacity">SAVE CHANGES</button>
          </div>
        </div>
      </div>
    </div>
  );
}

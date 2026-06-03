"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LearnerSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">Learning Profile Settings</h1>
          <p className="text-sm text-on-surface-variant">Manage your account, learning preferences, and public portfolio.</p>
        </div>
        <button className="bg-primary-fixed-dim text-on-primary px-6 py-2 rounded font-label-caps text-xs font-bold shadow-md hover:opacity-90 transition-opacity">
          SAVE CHANGES
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Nav */}
        <div className="w-64 flex-shrink-0 space-y-2">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors ${activeTab === 'profile' ? 'bg-surface-container-high text-primary-fixed-dim border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
          >
            Public Profile
          </button>
          <button 
            onClick={() => setActiveTab('learning')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors ${activeTab === 'learning' ? 'bg-surface-container-high text-primary-fixed-dim border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
          >
            Learning Preferences
          </button>
          <button 
            onClick={() => setActiveTab('account')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors ${activeTab === 'account' ? 'bg-surface-container-high text-primary-fixed-dim border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
          >
            Account Security
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          {activeTab === 'profile' && (
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="font-label-caps text-sm text-on-surface font-bold uppercase tracking-widest border-b border-outline-variant/50 pb-2">Public Identity</h3>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-surface-container-highest rounded-full border-2 border-outline-variant flex items-center justify-center text-4xl text-outline overflow-hidden">
                  <span className="material-symbols-outlined text-[48px]">person</span>
                </div>
                <div>
                  <button className="bg-surface-container border border-outline-variant text-xs font-bold font-label-caps px-4 py-2 rounded hover:bg-surface-container-high transition-colors">UPLOAD AVATAR</button>
                  <p className="text-[10px] text-on-surface-variant mt-2 font-data-mono">Max 2MB. JPG or PNG.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Display Name</label>
                  <input type="text" defaultValue="Elena Rodriguez" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Public URL (Username)</label>
                  <div className="flex items-center">
                    <span className="bg-surface-container border border-r-0 border-outline-variant px-3 py-2 text-sm text-on-surface-variant rounded-l-lg border-r-transparent">meritgrid.com/u/</span>
                    <input type="text" defaultValue="elena" className="w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 text-sm text-on-surface rounded-r-lg focus:border-primary-fixed-dim outline-none transition-colors" />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Bio / Tagline</label>
                  <input type="text" defaultValue="Full-Stack Developer | React & Node.js Enthusiast" className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="font-label-caps text-sm text-on-surface font-bold uppercase tracking-widest border-b border-outline-variant/50 pb-2">Roadmap Preferences</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Weekly Commitment</label>
                  <select className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors">
                    <option>Casual (2-5 hours/week)</option>
                    <option selected>Part-Time (10-15 hours/week)</option>
                    <option>Intensive (20+ hours/week)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Resource Budget</label>
                  <select className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 text-sm text-on-surface rounded-lg focus:border-primary-fixed-dim outline-none transition-colors">
                    <option selected>Free resources only</option>
                    <option>Under $50/month</option>
                    <option>Premium ($100+/month)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 font-label-caps">Content Medium Preference</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-primary-fixed-dim w-4 h-4" />
                      <span className="text-sm text-on-surface">Video Tutorials</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-primary-fixed-dim w-4 h-4" />
                      <span className="text-sm text-on-surface">Interactive Coding</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-primary-fixed-dim w-4 h-4" />
                      <span className="text-sm text-on-surface">Text / Documentation</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="glass-panel p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="font-label-caps text-sm text-on-surface font-bold uppercase tracking-widest border-b border-outline-variant/50 pb-2 flex items-center gap-2 text-error">
                <span className="material-symbols-outlined text-[16px]">warning</span> Danger Zone
              </h3>
              <p className="text-sm text-on-surface-variant">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="border border-error text-error px-4 py-2 rounded-lg text-xs font-bold font-label-caps hover:bg-error hover:text-on-error transition-colors">
                DELETE ACCOUNT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

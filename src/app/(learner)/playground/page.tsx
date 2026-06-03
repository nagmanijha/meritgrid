"use client";
import React from "react";

export default function PlaygroundPage() {
  return (
    <div className="p-8 flex flex-1 gap-8 w-full h-full">
      {/* LEFT ZONE: Contests & Tracks */}
      <div className="flex-1 flex flex-col gap-10">
        {/* CONTESTS */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold tracking-[0.15em] text-on-surface flex items-center gap-3 uppercase">
              <div className="w-2 h-2 bg-on-surface-variant"></div>
              LIVE & UPCOMING CONTESTS
            </h2>
            <a href="#" className="text-[10px] font-bold tracking-widest text-on-surface-variant hover:text-primary flex items-center gap-1 uppercase transition-colors">
              VIEW ARCHIVE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
          
          <div className="space-y-3">
            {/* Live Contest */}
            <div className="bg-surface border border-outline-variant p-5 flex items-center justify-between relative rounded-sm shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
              <div className="flex flex-col gap-2 pl-3">
                <div className="flex items-center gap-3">
                  <span className="bg-error text-on-error text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">LIVE</span>
                  <h3 className="text-base font-bold text-on-surface">DevOps Infrastructure Sprint</h3>
                </div>
                <div className="flex items-center gap-6 text-[12px] font-data-mono text-on-surface-variant">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">group</span>1,240 Participants</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">timer</span>45m remaining</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="border border-outline-variant text-on-surface-variant text-[10px] px-2 py-1 uppercase tracking-widest rounded-sm font-data-mono">DEVOPS</span>
                <button className="bg-primary-container text-on-primary-container text-[11px] font-bold px-4 py-2 rounded-sm uppercase tracking-widest hover:opacity-90 transition-opacity">JOIN NOW</button>
              </div>
            </div>

            {/* Upcoming Contest */}
            <div className="bg-surface border border-outline-variant p-5 flex items-center justify-between relative rounded-sm shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-highest"></div>
              <div className="flex flex-col gap-2 pl-3">
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">STARTS IN 2H 15M</span>
                  <h3 className="text-base font-bold text-on-surface">AI Model Optimization</h3>
                </div>
                <div className="flex items-center gap-6 text-[12px] font-data-mono text-on-surface-variant">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">group</span>482 Registered</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">schedule</span>3h duration</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="border border-outline-variant text-on-surface-variant text-[10px] px-2 py-1 uppercase tracking-widest rounded-sm font-data-mono">AI</span>
                <button className="border border-outline-variant text-on-surface-variant text-[11px] font-bold px-4 py-2 rounded-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">REGISTER</button>
              </div>
            </div>

            {/* Completed Contest */}
            <div className="bg-surface border border-outline-variant p-5 flex items-center justify-between relative rounded-sm opacity-60">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline-variant"></div>
              <div className="flex flex-col gap-2 pl-3">
                <div className="flex items-center gap-3">
                  <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">COMPLETED</span>
                  <h3 className="text-base font-bold text-on-surface-variant">Data Structure Mastery</h3>
                </div>
                <div className="flex items-center gap-6 text-[12px] font-data-mono text-on-surface-variant">
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">group</span>3,501 Finished</span>
                  <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">check_circle</span>Ended 4h ago</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="border border-outline-variant text-on-surface-variant text-[10px] px-2 py-1 uppercase tracking-widest rounded-sm font-data-mono">DSA</span>
                <button className="text-on-surface-variant text-[11px] font-bold px-4 py-2 rounded-sm uppercase tracking-widest hover:text-on-surface transition-colors">SOLUTIONS</button>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE TRACKS */}
        <section>
          <h2 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase mb-6">
            PRACTICE TRACKS
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Track 1 */}
            <div className="bg-surface border border-outline-variant p-6 flex flex-col justify-between h-56 rounded-sm shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-primary text-[24px]">view_in_ar</span>
                  <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest">80% COMPLETE</span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">Docker Mastery</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Container orchestration and image security fundamentals.</p>
              </div>
              <div className="space-y-4">
                <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-4/5"></div>
                </div>
                <button className="w-full bg-surface-container-high text-on-surface text-[10px] font-bold py-2 rounded-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                  RESUME
                </button>
              </div>
            </div>

            {/* Track 2 */}
            <div className="bg-surface border border-outline-variant p-6 flex flex-col justify-between h-56 rounded-sm shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-secondary text-[24px]">psychology</span>
                  <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest">12% COMPLETE</span>
                </div>
                <h3 className="text-base font-bold text-on-surface mb-2">ML Fundamentals</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Mathematical foundations and supervised learning basics.</p>
              </div>
              <div className="space-y-4">
                <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[12%]"></div>
                </div>
                <button className="w-full bg-surface-container-high text-on-surface text-[10px] font-bold py-2 rounded-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                  RESUME
                </button>
              </div>
            </div>

            {/* Track 3 */}
            <div className="bg-surface border border-outline-variant p-6 flex flex-col justify-between h-56 rounded-sm opacity-50 relative">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-[24px]">account_tree</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[14px]">lock</span>
                </div>
                <h3 className="text-base font-bold text-on-surface-variant mb-2">System Design</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Architecting scalable, distributed backend systems.</p>
              </div>
              <div className="space-y-4">
                <div className="h-1 w-full bg-surface-container-high rounded-full"></div>
                <button className="w-full border border-outline-variant text-on-surface-variant text-[10px] font-bold py-2 rounded-sm uppercase tracking-widest">
                  UNLOCK AT LEVEL 5
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* RIGHT ZONE: Stats & Activity */}
      <aside className="w-80 flex flex-col gap-6">
        
        {/* Operator Stats */}
        <div className="bg-surface border border-outline-variant p-6 rounded-sm shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.15em] text-on-surface-variant uppercase mb-6">OPERATOR STATS</h3>
          
          <div className="mb-6 space-y-4">
            <div>
              <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">GLOBAL RATING</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-on-surface tracking-tight">2,418</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded font-data-mono uppercase">Top 1%</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/50 pt-4">
              <div>
                <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">FRONTEND RATING</span>
                <span className="text-xl font-bold text-on-surface tracking-tight">2,150</span>
              </div>
              <div>
                <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">BACKEND RATING</span>
                <span className="text-xl font-bold text-on-surface tracking-tight">2,605</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">DAILY STREAK</span>
              <div className="text-base font-bold text-on-surface flex items-center gap-1">12 <span className="text-error text-sm">🔥</span></div>
            </div>
            <div>
              <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">PROBLEMS SOLVED</span>
              <div className="text-base font-bold text-on-surface">142</div>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-3">CRITICAL GAPS</span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container-high text-on-surface font-data-mono text-[10px] px-2 py-1 rounded-sm border border-outline-variant">K8s Networking</span>
              <span className="bg-surface-container-high text-on-surface font-data-mono text-[10px] px-2 py-1 rounded-sm border border-outline-variant">Postgres Scaling</span>
              <span className="bg-surface-container-high text-on-surface font-data-mono text-[10px] px-2 py-1 rounded-sm border border-outline-variant">B-Trees</span>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-surface border border-outline-variant rounded-sm flex flex-col shadow-sm">
          <h3 className="text-[10px] font-bold tracking-[0.15em] text-on-surface-variant uppercase p-6 pb-4">RECENT SUBMISSIONS</h3>
          <div className="flex flex-col">
            {/* AC */}
            <div className="border-t border-outline-variant p-4 flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
              <div>
                <h4 className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">Binary Tree Level O...</h4>
                <span className="text-[10px] font-data-mono text-on-surface-variant">2 mins ago</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-data-mono text-primary block font-bold">AC</span>
                <span className="text-[10px] font-data-mono text-on-surface-variant">42ms</span>
              </div>
            </div>
            {/* TLE */}
            <div className="border-t border-outline-variant p-4 flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
              <div>
                <h4 className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">Max Profit Schedu...</h4>
                <span className="text-[10px] font-data-mono text-on-surface-variant">15 mins ago</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-data-mono text-error block font-bold">TLE</span>
                <span className="text-[10px] font-data-mono text-on-surface-variant">1000ms+</span>
              </div>
            </div>
            {/* WA */}
            <div className="border-t border-outline-variant p-4 flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
              <div>
                <h4 className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">LRI in Histogram</h4>
                <span className="text-[10px] font-data-mono text-on-surface-variant">1h ago</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-data-mono text-secondary block font-bold">WA</span>
                <span className="text-[10px] font-data-mono text-on-surface-variant">6/12 testcases</span>
              </div>
            </div>
          </div>
          <button className="border-t border-outline-variant w-full text-center text-[10px] font-data-mono text-on-surface-variant hover:text-primary hover:bg-surface-container py-3 transition-colors uppercase tracking-widest rounded-b-sm font-bold">
            FULL ACTIVITY LOG
          </button>
        </div>

        {/* System Status */}
        <div className="bg-surface border border-outline-variant p-5 rounded-sm relative shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-[0.15em] text-on-surface-variant uppercase">SYSTEM STATUS</span>
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_5px_var(--color-primary)]"></span>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 border border-outline-variant bg-surface-container p-3 rounded-sm">
              <span className="text-[9px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">LATENCY</span>
              <span className="text-xs font-data-mono text-on-surface font-bold">12ms</span>
            </div>
            <div className="flex-1 border border-outline-variant bg-surface-container p-3 rounded-sm">
              <span className="text-[9px] font-data-mono text-on-surface-variant uppercase tracking-widest block mb-1">WORKERS</span>
              <span className="text-xs font-data-mono text-on-surface font-bold">402/402</span>
            </div>
          </div>
        </div>
        
      </aside>
    </div>
  );
}

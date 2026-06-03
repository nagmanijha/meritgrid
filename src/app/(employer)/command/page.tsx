"use client";
import React, { useEffect, useState } from "react";

export default function EmployerDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/employer/stats').then(res => res.json()).then(data => setStats(data));
    fetch('/api/employer/jobs').then(res => res.json()).then(data => setJobs(data));
    fetch('/api/employer/pipeline').then(res => res.json()).then(data => setLogs(data));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: Operations */}
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
            <span className="w-2 h-2 bg-primary-fixed-dim"></span>
            LIVE HIRING OPERATIONS
          </h2>
          <a className="font-data-mono text-xs text-on-surface-variant hover:text-primary-fixed-dim flex items-center gap-1 font-bold" href="#">
            VIEW ARCHIVE <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </a>
        </div>

        {/* Horizontal Operation Cards dynamically loaded */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.length > 0 ? jobs.map(job => (
            <div key={job.id} className="glass-panel rim-light p-5 relative overflow-hidden group transition-transform hover:-translate-y-1 hover:border-primary-fixed-dim rounded-lg shadow-sm">
              <div className="absolute top-0 right-0 p-2">
                {job.status === 'LIVE' ? (
                  <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 font-label-caps rounded-sm">LIVE</span>
                ) : (
                  <span className="border border-outline-variant text-on-surface-variant text-[10px] px-2 py-0.5 font-label-caps rounded-sm">STANDBY</span>
                )}
              </div>
              <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary-fixed-dim transition-colors font-bold">{job.title}</h3>
              <p className="font-data-mono text-xs text-on-surface-variant mt-1 font-bold">Status: {job.techStack}</p>
              
              <div className="mt-4 flex items-center justify-between">
                {job.status === 'LIVE' ? (
                  <>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-surface bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-full border border-surface bg-gray-400"></div>
                      <span className="pl-4 text-[10px] text-on-surface-variant self-center font-bold">+{job.applicants} applicants</span>
                    </div>
                    <button className="border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 text-[10px] font-label-caps hover:bg-primary-fixed-dim hover:text-on-primary transition-all rounded font-bold">JOIN SESSION</button>
                  </>
                ) : (
                  <>
                    <div className="font-data-mono text-[10px] text-on-surface-variant font-bold">Scheduled for {new Date(job.scheduledFor).toLocaleTimeString()}</div>
                    <button className="border border-outline text-on-surface-variant px-3 py-1 text-[10px] font-label-caps hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-all rounded font-bold">PREVIEW JD</button>
                  </>
                )}
              </div>
            </div>
          )) : (
            <div className="text-on-surface-variant col-span-2">Loading hiring operations...</div>
          )}
        </div>

        {/* Hiring System Architecture (The Flow Visual) */}
        <div className="space-y-4 pt-4">
          <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
            <span className="w-2 h-2 bg-primary-fixed-dim"></span>
            SYSTEM WORKFLOW ARCHITECTURE
          </h2>
          <div className="glass-panel rim-light p-8 min-h-[350px] flex flex-col justify-between relative hover:-translate-y-1 transition-transform rounded-xl shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-full h-[2px] border-b border-dashed border-primary-fixed-dim"></div>
            </div>
            
            {/* Top Row Nodes */}
            <div className="flex justify-between relative z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-surface-container-highest border border-primary-fixed-dim glow-border flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">business</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">CO. PROFILE</span>
              </div>
              <div className="flex flex-col items-center gap-2 translate-y-4">
                <div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all shadow-sm">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl">description</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">JD GENERATOR</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all shadow-sm">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl">person_search</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">SEARCH ENGINE</span>
              </div>
              <div className="flex flex-col items-center gap-2 translate-y-4">
                <div className="w-16 h-16 rounded-xl bg-surface-container-highest border border-primary-fixed-dim glow-border flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">filter_alt</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">SHORTLISTED</span>
              </div>
            </div>

            {/* Animated Connecting Middle Line */}
            <div className="relative h-12 flex items-center overflow-hidden">
              <div className="node-line h-[2px] w-full bg-outline-variant/30 rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-surface-container-low px-2">
                <span className="font-data-mono text-[9px] text-primary-fixed-dim animate-pulse font-bold">STREAMING_DATA</span>
                <span className="material-symbols-outlined text-primary-fixed-dim text-xs">chevron_right</span>
              </div>
            </div>

            {/* Bottom Row Nodes */}
            <div className="flex justify-around items-center relative z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest border border-primary-fixed-dim glow-border flex flex-col items-center justify-center p-2 text-center hover:-translate-y-1 transition-transform shadow-md">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">psychology</span>
                  <span className="font-data-mono text-[8px] mt-1 text-on-surface font-bold">CORE AI ENGINE</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">PROFILE ANALYTICS</span>
              </div>
              
              {/* Large Center Interview Arena Node */}
              <a href="/arena" className="relative group cursor-pointer hover:-translate-y-1 transition-transform">
                <div className="absolute -inset-4 bg-primary-fixed-dim/10 blur-xl group-hover:bg-primary-fixed-dim/20 transition-all rounded-full"></div>
                <div className="w-28 h-28 rounded-2xl bg-surface-container-highest border-2 border-primary-fixed-dim flex flex-col items-center justify-center p-4 relative shadow-lg">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">videocam</span>
                  <div className="flex gap-1 mt-2">
                    <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-error text-on-error text-[10px] px-2 py-0.5 rounded shadow-sm font-bold uppercase tracking-widest">LIVE</div>
                </div>
                <div className="text-center mt-3">
                  <span className="font-label-caps text-[12px] block text-primary-fixed-dim font-bold">INTERVIEW ARENA</span>
                  <span className="font-data-mono text-[8px] opacity-60 font-bold">MONITORING PLAGIARISM...</span>
                </div>
              </a>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all hover:-translate-y-1 shadow-sm">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl">check_circle</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface font-bold">FINAL SELECTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Sidebar Panels */}
      <aside className="col-span-12 lg:col-span-4 space-y-6">
        
        {/* Hiring Statistics */}
        <section className="glass-panel rim-light p-gutter hover:-translate-y-1 transition-transform rounded-xl shadow-sm">
          <h3 className="font-label-caps text-xs text-on-surface border-b border-outline-variant pb-2 mb-4 font-bold uppercase">OPERATOR STATS</h3>
          {stats ? (
            <div className="space-y-6">
              <div>
                <span className="font-data-mono text-[10px] text-on-surface-variant uppercase font-bold">Efficiency Rating</span>
                <div className="h-2 bg-surface-container-highest mt-2 overflow-hidden rounded-full">
                  <div className="h-full bg-primary-fixed-dim rounded-full" style={{ width: `${stats.efficiencyRating}%` }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/50">
                  <span className="font-data-mono text-[10px] text-on-surface-variant block uppercase font-bold">Weekly Interviews</span>
                  <span className="text-2xl font-headline-md text-primary-fixed-dim font-bold">{stats.weeklyInterviews}</span>
                </div>
                <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/50">
                  <span className="font-data-mono text-[10px] text-on-surface-variant block uppercase font-bold">Avg Score</span>
                  <span className="text-2xl font-headline-md text-primary-fixed-dim font-bold">{stats.avgScore}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-on-surface-variant">Loading stats...</div>
          )}
        </section>

        {/* Recent Pipeline Activity */}
        <section className="glass-panel rim-light p-gutter hover:-translate-y-1 transition-transform rounded-xl shadow-sm">
          <h3 className="font-label-caps text-xs text-on-surface border-b border-outline-variant pb-2 mb-4 font-bold uppercase">RECENT PIPELINE</h3>
          <div className="space-y-4">
            {logs.length > 0 ? logs.map(log => (
              <div key={log.id} className="flex gap-3 items-center bg-surface-container p-2 rounded-lg border border-outline-variant/30">
                {log.type === 'JD' && <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold font-data-mono shrink-0 shadow-sm text-primary-fixed-dim">JD</div>}
                {log.type === 'CANDIDATE' && (
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 shadow-sm border border-secondary-container/50">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-sm">person</span>
                  </div>
                )}
                {log.type === 'FLAG' && (
                  <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center shrink-0 shadow-sm border border-error/20">
                    <span className="material-symbols-outlined text-error text-sm">block</span>
                  </div>
                )}
                <div>
                  <p className="text-[12px] font-semibold text-on-surface font-bold">{log.title}</p>
                  <p className="text-[10px] text-on-surface-variant font-data-mono font-bold">Recent • {log.meta}</p>
                </div>
              </div>
            )) : (
              <div className="text-on-surface-variant text-sm">No recent activity.</div>
            )}
            <button className="w-full text-center text-[10px] font-label-caps text-on-surface-variant hover:text-primary-fixed-dim pt-2 border-t border-outline-variant uppercase font-bold">VIEW FULL LOG</button>
          </div>
        </section>

        {/* System Health */}
        <section className="glass-panel rim-light p-gutter rounded-xl shadow-sm">
          <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-4">
            <h3 className="font-label-caps text-xs text-on-surface font-bold uppercase">SYSTEM STATUS</h3>
            <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse shadow-[0_0_5px_var(--color-primary-fixed-dim)]"></span>
          </div>
          <div className="space-y-2 font-data-mono text-[11px] font-bold">
            <div className="flex justify-between items-center bg-surface-container px-3 py-2 rounded border border-outline-variant/50">
              <span className="text-on-surface-variant">API LATENCY</span>
              <span className="text-primary-fixed-dim">{stats ? stats.systemStatus.latency : '...'}</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container px-3 py-2 rounded border border-outline-variant/50">
              <span className="text-on-surface-variant">QUEUE LOAD</span>
              <span className="text-secondary-fixed-dim">{stats ? stats.systemStatus.queueLoad : '...'}</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container px-3 py-2 rounded border border-outline-variant/50">
              <span className="text-on-surface-variant">WORKER NODES</span>
              <span className="text-primary-fixed-dim">{stats ? stats.systemStatus.workerNodes : '...'}</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}

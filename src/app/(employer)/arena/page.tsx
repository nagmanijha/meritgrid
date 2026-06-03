"use client";
import React, { useEffect } from "react";

export default function InterviewArena() {
  useEffect(() => {
    // Micro-interaction for the cursor in the code editor
    const cursorInterval = setInterval(() => {
      const cursors = document.querySelectorAll('.code-cursor');
      cursors.forEach((c: any) => {
        if (c.innerText === '_') {
          c.style.visibility = c.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
      });
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex gap-6 w-full h-full">
      <style dangerouslySetInnerHTML={{__html: `
        .terminal-border { border: 1px solid var(--color-outline-variant); }
        .glow-emerald { box-shadow: 0 0 15px rgba(96, 108, 56, 0.15); border-color: var(--color-primary-fixed-dim); }
        .glass-surface { background: rgba(254, 250, 224, 0.8); backdrop-filter: blur(12px); border: 1px solid var(--color-outline-variant); }
      `}} />
      
      {/* LEFT ZONE: AI Monitoring */}
      <section className="w-[280px] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-label-caps text-xs text-primary-fixed-dim flex items-center gap-2 font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse shadow-[0_0_5px_var(--color-primary-fixed-dim)]"></span>
            LIVE AI MONITORING
          </h2>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {/* Candidate View */}
          <div className="relative group h-1/2 terminal-border overflow-hidden bg-surface-container rounded-lg shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-outline">
              <span className="material-symbols-outlined text-[64px] opacity-20">person</span>
            </div>
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/90 text-on-surface font-data-mono text-[10px] border border-outline-variant rounded shadow-sm font-bold uppercase tracking-widest">
              CANDIDATE: LOERNER
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <div className="font-label-caps text-[10px] text-primary-fixed-dim bg-surface-container-lowest/80 px-1 rounded shadow-sm font-bold">EYE CONTACT: STABLE</div>
              </div>
              <div className="flex justify-between items-end">
                <div className="font-label-caps text-[10px] text-on-surface bg-surface-container-lowest/80 px-1 rounded shadow-sm font-bold">STRESS LEVEL: NOMINAL</div>
              </div>
            </div>
          </div>
          
          {/* Interviewer View */}
          <div className="relative group h-1/2 terminal-border overflow-hidden bg-surface-container rounded-lg shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-outline">
              <span className="material-symbols-outlined text-[64px] opacity-20">record_voice_over</span>
            </div>
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/90 text-on-surface font-data-mono text-[10px] border border-outline-variant rounded shadow-sm font-bold uppercase tracking-widest">
              INTERVIEWER: STAFF_09
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 p-2 border border-outline-variant rounded shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-data-mono text-[10px] font-bold">ATTENTION SCORE</span>
                <span className="font-data-mono text-[11px] text-primary-fixed-dim font-bold">94.2%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTER ZONE: Technical Playground */}
      <section className="flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <h2 className="font-label-caps text-xs font-bold bg-surface-container-highest px-3 py-1 rounded-md shadow-sm border border-outline-variant uppercase tracking-widest">SESSION: MG-7742-X</h2>
            <div className="flex items-center gap-1 font-data-mono text-sm text-outline font-bold">
              <span className="material-symbols-outlined text-[16px]">timer</span> 00:42:15
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-surface-container-highest terminal-border font-data-mono text-[10px] text-primary-fixed-dim rounded shadow-sm font-bold">
              ORIGINALITY: 98%
            </div>
            <div className="px-3 py-1 bg-surface-container-highest terminal-border font-data-mono text-[10px] text-secondary-fixed-dim rounded shadow-sm font-bold">
              TYPING: CONSISTENT
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex terminal-border bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          {/* Problem Statement */}
          <div className="w-1/3 border-r border-outline-variant bg-surface-container-low p-6 overflow-y-auto">
            <span className="font-label-caps text-[10px] text-primary-fixed-dim mb-2 block font-bold uppercase tracking-widest">TASK_01_OPTIMIZATION</span>
            <h3 className="font-headline-md text-lg font-bold mb-4 text-on-surface">Optimize Distributed Cache</h3>
            <p className="font-body-base text-sm text-on-surface-variant leading-relaxed mb-6">
              Implement a high-performance LRU cache that remains thread-safe across a distributed network of nodes. You must account for eventual consistency and minimize latency spikes during eviction cycles.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-surface-container terminal-border rounded-lg shadow-inner">
                <span className="font-label-caps text-[10px] text-outline block mb-2 font-bold uppercase tracking-widest">Constraints</span>
                <ul className="font-data-mono text-xs space-y-2 text-on-surface-variant">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full"></span>Read Latency &lt; 1ms</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full"></span>Write Throughput &gt; 50k ops/s</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full"></span>Max Memory: 512MB</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Code Editor */}
          <div className="flex-1 flex flex-col bg-[#1E1E1E] text-white">
            <div className="h-12 bg-[#2D2D2D] border-b border-[#404040] flex items-center justify-between px-4">
              <div className="flex gap-1">
                <span className="bg-[#1E1E1E] px-4 py-2 text-[#DDA15E] font-data-mono text-xs rounded-t-md border-t-2 border-[#DDA15E] font-bold">main.py</span>
                <span className="px-4 py-2 text-white/40 font-data-mono text-xs hover:text-white/80 cursor-pointer font-bold">utils.py</span>
              </div>
            </div>
            <div className="flex-1 p-6 font-data-mono text-[14px] leading-loose text-[#D4D4D4] overflow-y-auto">
              <span className="text-[#C586C0]">import</span> collections<br/>
              <span className="text-[#C586C0]">import</span> threading<br/>
              <br/>
              <span className="text-[#C586C0]">class</span> <span className="text-[#4EC9B0]">DistributedCache</span>:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">__init__</span>(self, capacity: <span className="text-[#4EC9B0]">int</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.capacity = capacity<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.cache = collections.OrderedDict()<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.lock = threading.Lock()<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">get</span>(self, key: <span className="text-[#4EC9B0]">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">with</span> self.lock:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">if</span> key <span className="text-[#C586C0]">not in</span> self.cache:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#B5CEA8]">-1</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.cache.move_to_end(key)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> self.cache[key]<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6A9955]"># TODO: Implement put with distributed sync</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">put</span>(self, key, value):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#DDA15E] code-cursor font-bold">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT ZONE: Intelligence */}
      <section className="w-[300px] flex flex-col gap-4">
        <h2 className="font-label-caps text-xs font-bold uppercase tracking-widest">OPERATIONAL TELEMETRY</h2>
        
        {/* Hireability Card */}
        <div className="glass-surface p-6 terminal-border glow-emerald relative overflow-hidden rounded-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="font-label-caps text-[10px] text-primary-fixed-dim font-bold uppercase tracking-widest">HIREABILITY INDEX</span>
              <div className="text-4xl font-display-lg leading-none mt-2 font-bold text-on-surface">87<span className="text-lg opacity-40 ml-1">/100</span></div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 rounded-full text-primary-fixed-dim">
              <span className="material-symbols-outlined">verified</span>
            </div>
          </div>
          <div className="aspect-square w-full bg-surface-container rounded-lg p-4 relative overflow-hidden flex items-center justify-center border border-outline-variant/50 shadow-inner">
            {/* Radar Chart Placeholder */}
            <div className="absolute inset-0 opacity-20 flex items-center justify-center">
              <div className="w-4/5 h-4/5 border border-primary-fixed-dim rounded-full"></div>
              <div className="w-3/5 h-3/5 border border-primary-fixed-dim rounded-full absolute"></div>
              <div className="w-2/5 h-2/5 border border-primary-fixed-dim rounded-full absolute"></div>
            </div>
            <div className="relative w-3/4 h-3/4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <polygon fill="rgba(96, 108, 56, 0.2)" points="50,10 85,35 75,85 25,85 15,35" stroke="var(--color-primary-fixed-dim)" strokeWidth="2"></polygon>
                <circle cx="50" cy="10" fill="var(--color-primary-fixed-dim)" r="2"></circle>
                <circle cx="85" cy="35" fill="var(--color-primary-fixed-dim)" r="2"></circle>
                <circle cx="75" cy="85" fill="var(--color-primary-fixed-dim)" r="2"></circle>
                <circle cx="25" cy="85" fill="var(--color-primary-fixed-dim)" r="2"></circle>
                <circle cx="15" cy="35" fill="var(--color-primary-fixed-dim)" r="2"></circle>
              </svg>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full font-data-mono text-[9px] pb-1 font-bold text-primary-fixed-dim tracking-widest">DS</div>
              <div className="absolute right-0 top-1/4 translate-x-full font-data-mono text-[9px] pl-1 font-bold text-primary-fixed-dim tracking-widest">SYS</div>
              <div className="absolute bottom-0 right-1/4 translate-y-full font-data-mono text-[9px] pt-1 font-bold text-primary-fixed-dim tracking-widest">ALGO</div>
              <div className="absolute bottom-0 left-1/4 translate-y-full font-data-mono text-[9px] pt-1 font-bold text-primary-fixed-dim tracking-widest">COMM</div>
            </div>
          </div>
        </div>

        {/* Plagiarism Feed */}
        <div className="terminal-border flex-1 bg-surface-container-lowest p-5 flex flex-col gap-4 rounded-xl shadow-sm">
          <span className="font-label-caps text-[10px] text-outline font-bold uppercase tracking-widest">INTELLIGENCE_FEED</span>
          <div className="space-y-4">
            <div className="flex gap-3 items-start border-l-2 border-error pl-3">
              <span className="material-symbols-outlined text-error text-[18px]">warning</span>
              <div>
                <p className="font-data-mono text-xs font-bold text-error uppercase">BROWSER TAB SWITCH</p>
                <p className="text-[10px] text-on-surface-variant mt-1 font-bold">Detected outside domain focus [2s]</p>
              </div>
            </div>
            <div className="flex gap-3 items-start border-l-2 border-primary-fixed-dim pl-3">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">security</span>
              <div>
                <p className="font-data-mono text-xs font-bold text-on-surface uppercase">ORIGINALITY CHECK</p>
                <p className="text-[10px] text-on-surface-variant mt-1 font-bold">Code block matched 0 internal repos</p>
              </div>
            </div>
            <div className="flex gap-3 items-start border-l-2 border-secondary-fixed-dim pl-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-[18px]">psychology</span>
              <div>
                <p className="font-data-mono text-xs font-bold text-on-surface uppercase">PATTERN RECOGNITION</p>
                <p className="text-[10px] text-on-surface-variant mt-1 font-bold">Complex logic flow identified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmployerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-surface text-on-surface font-body-base overflow-hidden min-h-screen flex">
      <style dangerouslySetInnerHTML={{__html: `
        .glow-border {
            box-shadow: 0 0 10px rgba(96, 108, 56, 0.1), inset 0 0 5px rgba(96, 108, 56, 0.05);
        }
        .node-line {
            background: linear-gradient(90deg, transparent 0%, var(--color-primary-fixed-dim) 50%, transparent 100%);
            background-size: 200% 100%;
            animation: flow 3s linear infinite;
        }
        @keyframes flow {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(254, 250, 224, 0.6);
            border: 1px solid var(--color-outline-variant);
        }
        .rim-light {
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}} />

      {/* SideNavBar */}
      <aside className="flex flex-col h-screen fixed left-0 top-0 w-64 bg-surface-container-low border-r border-outline-variant z-40">
        <div className="p-6">
          <div className="font-label-caps text-label-caps font-bold text-on-surface tracking-widest uppercase">MERITGRID</div>
          <div className="font-data-mono text-[10px] text-outline mt-1 uppercase">V2.4.0-CORE</div>
        </div>
        <nav className="flex-1 px-2 space-y-2">
          <Link href="/command" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/command' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Command
          </Link>
          <Link href="/pipeline" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/pipeline' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span> Pipeline
          </Link>
          <Link href="/arena" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/arena' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="videocam">videocam</span> Interview Arena
          </Link>
          <Link href="/analytics" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/analytics' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span> Analytics
          </Link>
          <Link href="/screening" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/screening' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="rule">rule</span> Screening
          </Link>
          <Link href="/settings" className={`flex items-center gap-4 px-4 py-3 font-data-mono text-data-mono rounded-r-md transition-all ${pathname === '/settings' ? 'bg-surface-container-highest text-on-surface border-l-4 border-primary-fixed-dim' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined" data-icon="settings">settings</span> Settings
          </Link>
        </nav>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-surface border-b border-outline-variant flex items-center justify-between px-gutter z-30">
        <div className="flex items-center gap-8">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm">search</span>
            <input className="bg-surface-container-low border border-outline-variant rounded pl-10 pr-4 py-1.5 w-64 text-sm focus:border-primary-fixed-dim focus:ring-0 outline-none font-data-mono" placeholder="Search Command..." type="text" />
          </div>
          <nav className="hidden lg:flex gap-6 font-data-mono text-sm">
            <Link className={`pb-1 border-b-2 transition-colors ${pathname === '/command' ? 'text-primary-fixed-dim border-primary-fixed-dim' : 'text-on-surface-variant border-transparent hover:text-primary-fixed-dim'}`} href="/command">Dashboard</Link>
            <Link className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors pb-1 border-b-2 border-transparent" href="#">Contests</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <div className="h-8 w-8 rounded-full border border-primary-fixed-dim overflow-hidden bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">person</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 mt-16 p-8 h-[calc(100vh-64px)] overflow-y-auto w-full bg-surface-dim">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-surface text-on-surface font-body-base overflow-hidden min-h-screen flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container border-r border-outline-variant z-40 flex flex-col py-6">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-xl font-bold text-on-surface tracking-tight">MeritGrid</h1>
          <p className="font-label-caps text-[10px] text-outline mt-1 uppercase tracking-widest">V2.4.0-CORE</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <Link href="/roadmap" className={`flex items-center gap-3 px-4 py-3 font-body-base text-sm rounded transition-all ${pathname === '/roadmap' ? 'bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined text-[20px]">map</span> Roadmap
          </Link>
          <Link href="/playground" className={`flex items-center gap-3 px-4 py-3 font-body-base text-sm rounded transition-all ${pathname === '/playground' ? 'bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined text-[20px]">sports_esports</span> Playground
          </Link>
          <Link href="/portfolio" className={`flex items-center gap-3 px-4 py-3 font-body-base text-sm rounded transition-all ${pathname === '/portfolio' ? 'bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}>
            <span className="material-symbols-outlined text-[20px]">analytics</span> Portfolio
          </Link>
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full py-3 bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity rounded">
            Start Practice
          </button>
          <nav className="flex flex-col gap-3 mt-6">
            <a href="#" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span className="text-xs font-medium">Docs</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">help</span>
              <span className="text-xs font-medium">Support</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 ml-64 flex flex-col relative overflow-hidden h-screen bg-surface-dim">
        {/* Top Nav Bar */}
        <header className="fixed top-0 right-0 left-64 z-50 flex items-center justify-between px-8 h-16 border-b border-outline-variant bg-surface">
          <div className="flex items-center gap-8 flex-1">
            <div className="relative w-80">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm text-on-surface-variant">search</span>
              <input 
                className="w-full bg-surface-container-low border border-outline-variant text-sm text-on-surface px-10 py-1.5 focus:outline-none focus:border-primary transition-colors placeholder-outline rounded" 
                placeholder="Search..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="flex gap-8 items-center mr-12">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Practice</a>
            <a href="#" className="text-sm text-on-surface font-medium border-b-2 border-primary pb-5 pt-5">Contests</a>
          </div>

          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors text-[20px]">notifications</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors text-[20px]">terminal</span>
            <div className="w-8 h-8 rounded-full border border-primary/30 overflow-hidden bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface">person</span>
            </div>
          </div>
        </header>

        <div className="mt-16 w-full h-[calc(100vh-4rem)] overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

"use client";
import React from "react";

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2 font-bold">
          <span className="material-symbols-outlined text-primary-fixed-dim">notifications_active</span>
          NOTIFICATIONS
        </h2>
        <button className="text-primary-fixed-dim hover:text-on-surface transition-colors font-data-mono text-xs font-bold">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        <div className="glass-panel p-4 rounded-xl border border-primary/30 bg-primary/5 shadow-sm flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined">work</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Job Match Alert: Senior ML Engineer</h4>
            <p className="text-xs text-on-surface-variant mt-1">TechCorp Solutions is looking for candidates with your Skill Radar profile. Your Fit-Score is 92%!</p>
            <p className="text-[10px] text-outline mt-2 font-data-mono uppercase">2 hours ago</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-primary-fixed-dim mt-2"></div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-outline-variant shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined">map</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Roadmap Reminder</h4>
            <p className="text-xs text-on-surface-variant mt-1">You haven't checked in on your "Advanced Deep Learning" phase this week. Don't lose momentum!</p>
            <p className="text-[10px] text-outline mt-2 font-data-mono uppercase">1 day ago</p>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-outline-variant shadow-sm flex items-start gap-4 opacity-75">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined">emoji_events</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Playground Challenge Concluded</h4>
            <p className="text-xs text-on-surface-variant mt-1">The Weekly Algo Challenge is over. You ranked #4! Your Hireability Index increased by +15 points.</p>
            <p className="text-[10px] text-outline mt-2 font-data-mono uppercase">3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

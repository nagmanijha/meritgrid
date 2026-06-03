import React from "react";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function PublicProfilePage({ params }: { params: { username: string } }) {
  // Mocking the user fetch for now since username isn't in schema, we'll search by name or ID.
  // In a real app we'd have a 'username' or 'handle' field on User.
  const decodedName = decodeURIComponent(params.username);
  
  // Try to find the user
  const user = await prisma.user.findFirst({
    where: { name: { contains: decodedName } },
    include: {
      projects: true,
      skills: true,
      leaderboards: true
    }
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center p-8">
        <span className="material-symbols-outlined text-[64px] text-outline mb-4">search_off</span>
        <h1 className="text-2xl font-bold text-on-surface">Profile Not Found</h1>
        <p className="text-on-surface-variant mt-2 max-w-md">The learner profile you are looking for does not exist or is set to private.</p>
        <Link href="/" className="mt-8 px-6 py-2 bg-primary text-on-primary rounded font-label-caps uppercase tracking-widest font-bold">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body-base selection:bg-primary-container selection:text-on-primary-container">
      <nav className="sticky top-0 z-50 w-full bg-surface-container/90 backdrop-blur-md border-b border-outline-variant">
        <div className="flex items-center justify-between px-8 h-16 w-full max-w-max-width mx-auto">
          <Link href="/" className="font-bold text-headline-md text-primary flex items-center gap-2 uppercase tracking-tighter">
            MeritGrid
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/employer/dashboard" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Employer Access</Link>
            <Link href="/login" className="bg-primary text-on-primary text-label-md uppercase tracking-widest font-bold px-5 py-2 rounded border border-primary hover:bg-transparent hover:text-primary transition-all">Join Platform</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-max-width mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Identity & Skills */}
        <aside className="col-span-1 md:col-span-4 space-y-8">
          <div className="glass-panel p-8 rounded-2xl border border-outline-variant text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-primary/10 border-b border-primary/20"></div>
            <div className="w-32 h-32 mx-auto rounded-full bg-surface-container-highest border-4 border-surface flex flex-col items-center justify-center relative z-10 shadow-xl overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name || "User"} className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-[64px] text-outline">person</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-on-surface mt-4 relative z-10">{user.name}</h1>
            <p className="text-primary font-label-caps uppercase tracking-widest text-sm font-bold relative z-10">{user.location || "Remote Learner"}</p>
            
            <div className="mt-8 pt-6 border-t border-outline-variant/50 flex justify-center divide-x divide-outline-variant/50">
              <div className="px-6">
                <div className="text-[10px] text-on-surface-variant font-label-caps tracking-widest uppercase font-bold">Hireability</div>
                <div className="text-3xl font-data-mono font-bold text-primary-fixed-dim">{user.hireabilityIndex}</div>
              </div>
              <div className="px-6">
                <div className="text-[10px] text-on-surface-variant font-label-caps tracking-widest uppercase font-bold">Projects</div>
                <div className="text-3xl font-data-mono font-bold text-on-surface">{user.projects.length}</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-outline-variant shadow-sm">
            <h3 className="font-label-caps text-xs text-on-surface border-b border-outline-variant pb-2 mb-4 font-bold uppercase tracking-widest">Verified Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.length > 0 ? user.skills.map(s => (
                <div key={s.id} className="flex flex-col items-center bg-surface-container border border-outline-variant rounded-lg px-3 py-2 text-center w-full max-w-[120px]">
                  <span className="text-sm font-bold text-on-surface">{s.name}</span>
                  <span className={`text-[10px] font-label-caps uppercase tracking-widest mt-1 ${s.proficiency === 'Mastered' ? 'text-primary' : 'text-on-surface-variant'}`}>{s.proficiency}</span>
                </div>
              )) : (
                <p className="text-sm text-on-surface-variant">No skills verified yet.</p>
              )}
            </div>
          </div>
        </aside>

        {/* Right Column: Projects & Activity */}
        <div className="col-span-1 md:col-span-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work_history</span>
              Verified Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.projects.length > 0 ? user.projects.map(p => (
                <div key={p.id} className="glass-panel p-6 rounded-2xl border border-outline-variant shadow-sm hover:-translate-y-1 transition-transform group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{p.title}</h3>
                    <div className="bg-primary-container text-on-primary-container px-2 py-1 rounded text-xs font-data-mono font-bold shadow-sm">
                      Score: {p.score || "N/A"}
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 min-h-[60px] line-clamp-3">{p.description}</p>
                  <div className="text-[10px] bg-surface-container-high px-3 py-2 rounded text-on-surface border border-outline-variant/50 font-data-mono h-24 overflow-y-auto">
                    <span className="font-bold text-primary block mb-1">AI Assessor Notes:</span>
                    {p.feedback ? p.feedback.slice(0, 150) + "..." : "No automated feedback available."}
                  </div>
                </div>
              )) : (
                <div className="col-span-2 ui-panel p-12 text-center bg-surface border border-dashed border-outline-variant rounded-2xl">
                  <span className="material-symbols-outlined text-[48px] text-outline mb-2 block">folder_open</span>
                  <h3 className="text-lg font-bold text-on-surface">No Projects Public Yet</h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto">This learner hasn't completed any verified case studies.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

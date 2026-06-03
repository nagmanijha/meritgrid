"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"learner" | "employer">("learner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // State for auto-rotating screenshots
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  const screenshots = [
    { title: "Roadmaps", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" },
    { title: "Playground Rankings", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
    { title: "Portfolio", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" },
    { title: "Employer Dashboard", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Set dummy cookies for session persistence
    document.cookie = "meritgrid_session=true; path=/; max-age=86400";
    document.cookie = `meritgrid_role=${role}; path=/; max-age=86400`;
    
    if (role === "employer") {
      router.push("/command");
    } else {
      router.push("/roadmap");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FCFBF8] text-[#1C1917] font-body-base overflow-hidden">
      
      {/* LEFT SIDE (60%) - Product Story */}
      <div className="hidden lg:flex w-[60%] flex-col p-12 lg:p-16 xl:p-24 relative justify-between border-r border-[#D6D3D1]">
        
        <div className="z-10 relative">
          <div className="font-bold text-2xl tracking-tighter text-[#0F172A] mb-12 flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0F172A] rounded-sm"></div>
            MERITGRID
          </div>
          
          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-6">
            Learn.<br/>Prove.<br/>Get Hired.
          </h1>
          <p className="text-lg xl:text-xl text-[#78716C] max-w-[500px] leading-relaxed">
            AI-powered roadmaps, real-world projects, competitive rankings, and employer discovery.
          </p>
        </div>

        {/* Auto-Rotating Screenshots */}
        <div className="flex-1 w-full flex items-center my-12 z-10 relative">
          <div className="w-full max-w-2xl relative aspect-[16/10] bg-[#F4F4F2] rounded-lg border border-[#D6D3D1] shadow-2xl overflow-hidden transition-all duration-500">
            {screenshots.map((img, idx) => (
              <img 
                key={idx}
                src={img.url}
                alt={img.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${activeImageIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              />
            ))}
            
            {/* Screenshot Labels */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {screenshots.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeImageIdx === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="z-10 relative mt-auto border-t border-[#D6D3D1] pt-8">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">50K+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#78716C] mt-1 font-bold">Learners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">100K+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#78716C] mt-1 font-bold">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">10K+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#78716C] mt-1 font-bold">Competitors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0F172A]">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#78716C] mt-1 font-bold">Employers</div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE (40%) - Authentication Panel */}
      <div className="w-full lg:w-[40%] bg-[#FCFBF8] flex flex-col justify-center px-6 sm:px-12 lg:px-16 relative">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden absolute top-8 left-6 font-bold text-xl tracking-tighter text-[#0F172A] flex items-center gap-2">
          <div className="w-3 h-3 bg-[#0F172A] rounded-sm"></div>
          MERITGRID
        </div>

        <div className="w-full max-w-[400px] mx-auto">
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">Welcome back</h2>
            <p className="text-sm text-[#78716C]">Log in to your MeritGrid account to continue.</p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 bg-white border border-[#D6D3D1] rounded shadow-sm text-sm font-bold text-[#1C1917] hover:bg-[#F4F4F2] transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2.5 bg-[#0F172A] border border-[#0F172A] rounded shadow-sm text-sm font-bold text-white hover:bg-[#0F172A]/90 transition-colors">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-4 h-4 invert" />
              Continue with GitHub
            </button>
          </div>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-[#D6D3D1]"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-[#78716C] uppercase tracking-widest">or</span>
            <div className="flex-grow border-t border-[#D6D3D1]"></div>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            
            {/* Role Selection */}
            <div className="flex p-1 bg-[#F4F4F2] border border-[#D6D3D1] rounded">
              <button 
                type="button" 
                onClick={() => setRole("learner")}
                className={`flex-1 py-1.5 text-xs font-bold rounded transition-colors ${role === 'learner' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-[#78716C] hover:text-[#1C1917]'}`}
              >
                Learner
              </button>
              <button 
                type="button" 
                onClick={() => setRole("employer")}
                className={`flex-1 py-1.5 text-xs font-bold rounded transition-colors ${role === 'employer' ? 'bg-white shadow-sm text-[#0F172A]' : 'text-[#78716C] hover:text-[#1C1917]'}`}
              >
                Employer
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#1C1917]">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2.5 bg-white border border-[#D6D3D1] rounded text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20 focus:border-[#0F172A] transition-all"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-[#1C1917]">Password</label>
                <a href="#" className="text-xs font-bold text-[#78716C] hover:text-[#0F172A] transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 bg-white border border-[#D6D3D1] rounded text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20 focus:border-[#0F172A] transition-all"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full mt-2 bg-[#0F172A] text-white font-bold py-2.5 rounded shadow-md hover:opacity-90 transition-opacity flex justify-center items-center h-10 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#78716C]">
            Don't have an account? <Link href="/signup" className="font-bold text-[#0F172A] hover:underline">Sign up</Link>
          </p>

        </div>

        {/* Footer Links */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          <a href="#" className="text-xs text-[#78716C] hover:text-[#1C1917]">Terms of Service</a>
          <a href="#" className="text-xs text-[#78716C] hover:text-[#1C1917]">Privacy Policy</a>
        </div>

      </div>

    </div>
  );
}

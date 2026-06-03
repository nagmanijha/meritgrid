"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const router = useRouter();

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi (हिंदी)" },
    { code: "ta", name: "Tamil (தமிழ்)" },
    { code: "mr", name: "Marathi (मराठी)" },
  ];

  useEffect(() => {
    // Check if there is a cookie for language
    const match = document.cookie.match(new RegExp('(^| )meritgrid_lang=([^;]+)'));
    if (match) {
      const savedLang = languages.find(l => l.code === match[2]);
      if (savedLang) setCurrentLang(savedLang.name);
    }
  }, []);

  const handleSelect = (lang: typeof languages[0]) => {
    document.cookie = `meritgrid_lang=${lang.code}; path=/; max-age=31536000`;
    setCurrentLang(lang.name);
    setIsOpen(false);
    
    // Refresh to apply language settings across the app
    router.refresh();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body-base">
      {isOpen && (
        <div className="absolute bottom-12 right-0 mb-2 w-48 bg-surface-container border border-outline-variant shadow-xl rounded-lg overflow-hidden flex flex-col">
          <div className="px-3 py-2 bg-surface border-b border-outline-variant text-[10px] font-bold text-outline uppercase tracking-widest">
            AI Translation
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`text-left px-4 py-3 text-sm transition-colors hover:bg-surface-container-high ${currentLang === lang.name ? 'text-primary font-bold bg-primary-container/10' : 'text-on-surface'}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant shadow-lg flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors focus:outline-none"
        aria-label="Select Language"
      >
        <span className="material-symbols-outlined text-xl">translate</span>
      </button>
    </div>
  );
}

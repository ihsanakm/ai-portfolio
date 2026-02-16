
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 h-16' : 'bg-transparent border-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-black text-lg tracking-tight">
            AI Copilot Portfolio
          </span>        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant={ButtonVariant.PRIMARY}
            className="!px-6 !py-2.5 !text-[10px]"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

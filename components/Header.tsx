
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 h-16' : 'bg-transparent border-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between relative z-50">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="font-black text-lg tracking-tight">
              AI Copilot Portfolio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = link.href.replace('#', '');
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant={ButtonVariant.PRIMARY}
              className="!px-6 !py-2.5 !text-[10px] hidden md:block"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </Button>
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = link.href.replace('#', '');
                }
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={ButtonVariant.PRIMARY}
            className="!px-8 !py-3 !text-sm mt-4"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire Me
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;

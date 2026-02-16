
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { PROJECTS, SOCIAL_LINKS } from './constants';
import { ButtonVariant } from './types';
import { ProjectCard } from './components/ProjectCard';
import FloatingShape from './components/FloatingShape';

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Parse hash to determine view state
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
      const id = hash.replace('#project/', '');
      setSelectedProjectId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSelectedProjectId(null);
      // If it's a section hash, browser handles scroll unless we're returning from a project page
      if (hash && hash !== '#home') {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  useEffect(() => {
    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const navigateToProject = (id: string) => {
    window.location.hash = `project/${id}`;
  };

  const navigateHome = () => {
    window.location.hash = 'home';
  };

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId);

  if (selectedProjectId && currentProject) {
    return (
      <div className="bg-black min-h-screen text-white pb-24 animate-in fade-in duration-700">

        {/* Project Hero */}
        <section className="relative w-full h-[90vh] flex flex-col justify-end">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90 transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="relative max-w-5xl mx-auto w-full px-6 pb-20">
            <Button
              variant={ButtonVariant.GHOST}
              className="mb-12 !px-0 group"
              onClick={navigateHome}
              icon="arrow_back"
            >
              Back to work
            </Button>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-10">
              {currentProject.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Year</span>
                <span className="text-xl font-medium">{currentProject.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Role</span>
                <span className="text-xl font-medium">{currentProject.role}</span>
              </div>
              <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Services</span>
                <span className="text-xl font-medium">{currentProject.services.join(', ')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <div className="max-w-3xl mx-auto px-6 py-24 space-y-32">
          <section className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-px bg-white" />
              <h2 className="text-3xl font-bold uppercase tracking-widest">The AI Challenge</h2>
            </div>
            <p className="text-xl font-light text-white/70 leading-relaxed">
              {currentProject.description}
              <br /><br />
              {currentProject.challenge}
            </p>
          </section>

          {currentProject.gallery[0] && (
            <section className="overflow-hidden border border-white/5">
              <img src={currentProject.gallery[0]} className="w-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="Process" />
            </section>
          )}

          <section className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-px bg-white" />
              <h2 className="text-3xl font-bold uppercase tracking-widest">The Solution</h2>
            </div>
            <div className="text-xl font-light text-white/70 leading-relaxed space-y-6">
              <p>{currentProject.solution}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-px bg-accent" />
              <h2 className="text-3xl font-bold uppercase tracking-widest">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {currentProject.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="px-6 py-3 bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-accent transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-16 w-px bg-accent" />
              <h2 className="text-3xl font-bold uppercase tracking-widest">Key Features</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProject.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm uppercase tracking-widest bg-white/5 p-5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 75}ms` }}
                >
                  <span className="material-symbols-outlined text-accent text-lg mt-0.5 group-hover:scale-110 transition-transform">check_circle</span>
                  <span className="text-white/70 group-hover:text-white transition-colors leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Next Project CTA */}
        {currentProject.nextProjectId && (
          <section className="border-t border-white/10 mt-32">
            <button
              className="group w-full py-48 transition-colors hover:bg-white hover:text-black flex flex-col items-center gap-12"
              onClick={() => navigateToProject(currentProject.nextProjectId!)}
            >
              <span className="text-xs font-bold uppercase tracking-[0.6em]">Next Project</span>
              <div className="flex items-center gap-8">
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
                  {PROJECTS.find(p => p.id === currentProject.nextProjectId)?.title}
                </h3>
                <span className="material-symbols-outlined text-6xl group-hover:translate-x-6 transition-transform">arrow_forward</span>
              </div>
            </button>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="animate-in fade-in duration-700">

        {/* Hero Section */}
        <main className="relative pt-32 pb-24 md:pt-48 md:pb-48 px-6 md:px-12">
          <section className="max-w-7xl mx-auto w-full flex flex-col items-start gap-12" id="home">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Available for Full-Stack Projects</span>
            </div>
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase italic max-w-6xl">
              Building <span className="text-white/20 hover:text-white transition-all cursor-default underline decoration-1 underline-offset-[20px]">Modern Web</span> Applications.
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed">
              Full-stack developer specializing in Next.js, React, and Supabase. Creating seamless user experiences with cutting-edge technologies and scalable architectures.
            </p>
            <div className="flex flex-wrap gap-6 pt-6">
              <Button variant={ButtonVariant.PRIMARY} icon="arrow_forward" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                View Work
              </Button>
              <Button variant={ButtonVariant.SECONDARY} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                About Me
              </Button>
            </div>
          </section>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6 animate-pulse">
            <div className="w-px h-24 bg-gradient-to-b from-white to-transparent"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] rotate-90 origin-left translate-x-1.5 mt-8">Scroll</span>
          </div>
        </main>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/10" id="work">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-6">
              <span className="font-bold text-[10px] uppercase tracking-[0.4em] text-white/40">Portfolio Highlights</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Work</h2>
            </div>
            <Button variant={ButtonVariant.LINK} icon="trending_flat">
              See All Work
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} onClick={navigateToProject} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-surface py-32 border-y border-white/10" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] bg-black/20 rounded-xl overflow-hidden">
                <FloatingShape />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Crafting <span className="text-white/30">Digital Experiences</span> with Modern Tech.
              </h2>
              <div className="space-y-8 text-xl text-white/60 font-light leading-relaxed">
                <p>
                  I'm a full-stack developer passionate about building scalable web applications that solve real-world problems. My expertise spans modern frameworks, cloud infrastructure, and creating intuitive user interfaces.
                </p>
                <p>
                  From booking systems to project management tools and crisis response platforms, I focus on delivering production-ready applications with clean architecture, robust authentication, and seamless user experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-accent">code</span>
                  <h4 className="font-bold uppercase tracking-widest text-sm">Full-Stack Development</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Building end-to-end solutions with Next.js, React, TypeScript, and modern backend technologies.</p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-accent">cloud</span>
                  <h4 className="font-bold uppercase tracking-widest text-sm">Cloud & Database</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Leveraging Supabase, PostgreSQL, and cloud storage for scalable, real-time applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}

        {/* Footer */}

        {/* Footer */}
        <footer id="footer" className="border-t border-white/5 py-16 px-6 md:px-12 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">
              © {new Date().getFullYear()} Portfolio — Full-Stack Development
            </div>
            <div className="flex gap-12">
              {SOCIAL_LINKS.map(social => (
                <a key={social.label} href={social.href} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">{social.label}</a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent">
              <span className="size-1.5 rounded-full bg-accent animate-ping"></span>
              System Active
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

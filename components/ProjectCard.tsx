import { ProjectCardProps } from "@/types";
import React from "react";


export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="group cursor-pointer relative aspect-[16/10] overflow-hidden bg-surface border border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100"
        />

        <div
          onClick={() => window.open(project.link, "_blank")}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <div className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Live Demo
          </div>
        </div>
      </div>

      <div
        className="flex flex-col gap-3 cursor-pointer"
        onClick={() => onClick(project.id)}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
          <div className="flex gap-2">
            {project.category.map(cat => (
              <span
                key={cat}
                className="text-[9px] font-bold tracking-[0.2em] uppercase bg-white/5 text-white/60 px-2 py-1 rounded-sm"
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="text-[10px] font-mono text-accent/80 font-bold">
            {project.year}
          </span>
        </div>

        <h3 className="text-3xl font-bold tracking-tighter group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-white/50 line-clamp-3 font-light leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};
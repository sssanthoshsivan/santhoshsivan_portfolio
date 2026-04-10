"use client"
import React from "react"
import NextImage from "next/image"

const ProjectCard = ({ title, description, meta, image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group brutalist-card text-left flex flex-col h-full hover:bg-muted/30 transition-all active:scale-[0.98] overflow-hidden"
    >
      <div className="brutalist-plus brutalist-plus-tl">+</div>
      <div className="brutalist-plus brutalist-plus-tr">+</div>
      <div className="brutalist-plus brutalist-plus-bl">+</div>
      <div className="brutalist-plus brutalist-plus-br">+</div>

      {image && (
        <div className="relative w-full aspect-[21/9] border-b border-border border-dashed mb-6 grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-60 transition-all duration-700">
           <NextImage 
             src={image} 
             alt={title} 
             fill 
             className="object-cover"
           />
        </div>
      )}

      <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        {meta && (
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-border"></span>
            {meta}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed font-mono mb-8 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-foreground uppercase tracking-widest group-hover:translate-x-2 transition-transform">
          VIEW_DETAILS <span className="text-muted-foreground">→</span>
        </div>
      </div>
    </button>
  )
}

export default ProjectCard

"use client"
import React from "react"

const ProjectCard = ({ title, description, meta, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group text-left border rounded-xl p-8 transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
    >
      {/* Title */}
      <h3 className="text-xl font-medium text-neutral-900 mb-3">
        {title}
      </h3>

      {/* Context / Meta */}
      {meta && (
        <p className="text-xs uppercase tracking-wide text-neutral-500 mb-3">
          {meta}
        </p>
      )}

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* CTA hint */}
      <span className="inline-block mt-6 text-sm font-medium text-neutral-900 border-b border-neutral-300 group-hover:border-neutral-900 transition-colors">
        View details →
      </span>
    </button>
  )
}

export default ProjectCard

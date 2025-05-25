import React from "react";

export default function ProjectCard({ title, description, onClick }) {
  return (
    <div
      className="bg-gradient-to-br from-[#fdfaf6] to-[#f0f0f0] border border-[#e2e0dc] rounded-2xl shadow-sm p-6 hover:shadow-md hover:scale-[1.015] transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-extrabold text-[#2c1e1e] mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-[#5c504b] leading-relaxed line-clamp-3">{description}</p>
    </div>
  );
}
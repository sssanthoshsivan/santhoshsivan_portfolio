// components/ProjectModal.jsx
import React from "react";
import { Dialog } from "@headlessui/react";

export default function ProjectModal({ isOpen, onClose, title, description, workDone, technologies }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
      <Dialog.Panel className="bg-[#fffdf9] rounded-xl shadow-xl p-6 z-10 w-full max-w-2xl screen-xl:max-w-4xl border border-[#e4e0db]">
        <Dialog.Title className="text-2xl font-bold mb-2 text-[#2c1e1e] tracking-wide">{title}</Dialog.Title>
        <p className="text-[#4a423d] mb-4 text-sm leading-relaxed">{description}</p>
        <h4 className="font-semibold mb-1 text-[#1e1c1c]">Work Done:</h4>
        <p className="text-sm text-[#5c504b] mb-4 leading-relaxed">{workDone}</p>
        <h4 className="font-semibold mb-1 text-[#1e1c1c]">Technologies:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#f3ede4] text-[#3d302b] text-xs font-medium px-2.5 py-0.5 rounded-full border border-[#e0dcd4]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}


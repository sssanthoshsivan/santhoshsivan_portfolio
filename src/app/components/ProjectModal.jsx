// components/ProjectModal.jsx
import React from "react"
import { Dialog } from "@headlessui/react"

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  workDone,
  technologies,
}) {
  // Convert long text into bullets safely
  const bullets = workDone
    ?.split(". ")
    .filter(Boolean)
    .map((item) => item.trim())

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
      />

      {/* Panel */}
      <Dialog.Panel className="relative z-10 w-full max-w-3xl rounded-xl bg-white p-8 md:p-10 shadow-xl border border-neutral-200">
        {/* Header */}
        <div className="mb-6">
          <Dialog.Title className="text-2xl font-semibold tracking-tight text-neutral-900">
            {title}
          </Dialog.Title>

          <p className="mt-3 text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Work Done */}
        <div className="mb-8">
          <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-3">
            Responsibilities & Contributions
          </h4>

          <ul className="space-y-2 list-disc list-inside text-neutral-700 leading-relaxed">
            {bullets.map((point, idx) => (
              <li key={idx}>{point}.</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-3">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
          >
            Close
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

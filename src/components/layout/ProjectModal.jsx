"use client"
import React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  workDone,
  technologies,
}) {
  const points = Array.isArray(workDone)
    ? workDone
    : workDone
        ?.split(". ")
        .filter(Boolean)
        .map((item) => item.trim()) || [];

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative z-10 w-full max-w-4xl bg-card border border-border shadow-2xl overflow-y-auto max-h-[88vh] font-mono text-sm tracking-tight rounded-xl">
            {/* Header / Grid markings */}
            <div className="absolute top-4 left-4 text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-30 select-none">
              [ SYSTEM_STATUS: INSPECTING_COMPONENT ]
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              {/* Left Column: Info */}
              <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-border border-dashed flex flex-col">
                <div className="mb-12">
                   <h1 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                      PROJECT_SPEC
                   </h1>
                   <Dialog.Title className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground uppercase leading-none">
                     {title}
                   </Dialog.Title>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">OVERVIEW_</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">BUILD_STACK_</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 border border-border bg-muted/30 text-[10px] font-bold tracking-widest uppercase text-foreground hover:bg-muted transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="mt-12 w-full py-4 border border-border flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                >
                  TERMINATE_VIEW [ESC]
                </button>
              </div>

              {/* Right Column: Work Done */}
              <div className="p-8 md:p-16 bg-muted/10 relative overflow-hidden">
                {/* Diagonal hatch background for right panel */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-hatch"></div>
                
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-8 relative z-10">CONTRIBUTIONS_AND_LOGS_</h4>
                
                <ul className="space-y-6 relative z-10">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex gap-4 group">
                      <span className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors">0{idx + 1}</span>
                      <p className="text-foreground/80 leading-relaxed font-sans font-medium">
                        {point}.
                      </p>
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-8 right-8 text-[9px] font-bold text-muted-foreground opacity-20 uppercase tracking-widest font-mono">
                    VERIFIED_SYSTEM_LOG/2026
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

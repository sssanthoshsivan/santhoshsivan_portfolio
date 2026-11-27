"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, CheckCircle2 } from "lucide-react";

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  company,
  date,
  highlight,
  architecture,
  description,
  workDone,
  technologies = [],
  benchmarks,
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
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-foreground/45" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-[0.98]"
          enterTo="opacity-100 scale-100"
          leave="ease-out duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-[0.98]"
        >
          <Dialog.Panel
            className="relative z-10 w-full max-w-4xl bg-background shadow-2xl overflow-y-auto max-h-[88vh] rounded-xl" /* taste-skill-ignore */
          >
            {/* Top Close Control */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close technical specification"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-card hover:bg-foreground hover:text-background text-foreground flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
            >
              <X size={16} aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Context & Overview */}
              <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col gap-6">
                <div className="pr-10">
                  <Dialog.Title className="text-[24px] md:text-[30px] font-[450] tracking-[-0.025em] text-foreground leading-[1.2]">
                    {title}
                  </Dialog.Title>
                  {(company || date) && (
                    <p className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground mt-2">
                      {[company, date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {highlight && (
                    <p className="text-[14px] font-medium text-emerald-700 dark:text-emerald-400 mt-1.5">
                      {highlight}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-[14px] font-medium text-foreground mb-2">
                    Overview
                  </h4>
                  <p className="text-foreground/85 leading-[1.65] text-[15px] whitespace-pre-line">
                    {description}
                  </p>
                </div>

                {architecture && (
                  <div className="p-4 rounded-lg bg-card">
                    <h4 className="text-[13px] font-medium text-foreground mb-1">
                      System architecture
                    </h4>
                    <p className="text-[12px] font-mono text-muted-foreground leading-[1.5]">
                      {architecture}
                    </p>
                  </div>
                )}

                {technologies.length > 0 && (
                  <div>
                    <h4 className="text-[14px] font-medium text-foreground mb-2.5">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-card rounded-md text-[12px] font-mono text-foreground/85"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Engineering Contributions & Benchmarks */}
              <div className="md:col-span-5 p-6 sm:p-8 md:p-10 bg-card flex flex-col justify-between gap-6">
                <div className="space-y-6">
                  {benchmarks && benchmarks.length > 0 && (
                    <div>
                      <h4 className="text-[14px] font-medium text-foreground mb-3">
                        Observed benchmarks
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {benchmarks.map((b) => (
                          <div key={b.label} className="p-2.5 rounded-md bg-background">
                            <div className="text-[12px] font-mono text-muted-foreground leading-tight">
                              {b.label.replace(" reports", "")}
                            </div>
                            <div className="text-[14px] font-mono font-medium text-foreground tabular-nums mt-1">
                              {b.value.replace(" seconds", "s")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-[14px] font-medium text-foreground mb-4">
                      Key engineering contributions
                    </h4>
                    <ul className="space-y-3">
                      {points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[14px] text-foreground/85 leading-[1.55]">
                          <CheckCircle2
                            size={15}
                            className="text-foreground/70 flex-shrink-0 mt-1"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-full bg-foreground text-background text-[14px] font-medium hover:bg-foreground/90 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                >
                  Close specification
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

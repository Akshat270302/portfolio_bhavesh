"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  ExternalLink,
  FolderOpen,
  Hash,
  Mail,
  Phone,
  Sparkles,
  Wrench,
  Languages,
  MoveUpRight,
  Star,
} from 'lucide-react';
import type { PortfolioData, PortfolioTabId } from '@/data/portfolio';

type PortfolioShellProps = {
  data: PortfolioData;
};

const tabConfig: Array<{ id: PortfolioTabId; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: 'skills', label: 'Skill Set', icon: ClipboardList },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'languages', label: 'Language', icon: Languages },
];

export function PortfolioShell({ data }: PortfolioShellProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTabId>('skills');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const selectedProject = selectedProjectIndex === null ? null : data.projects[selectedProjectIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectIndex(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="min-h-screen bg-paper text-ink"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-col px-6 pb-10 pt-16 sm:px-10 lg:px-16 xl:px-20">
        <header className="mb-20 lg:mb-24">
          <h1 className="text-[34px] font-semibold tracking-[-0.05em] text-ink sm:text-[44px] lg:text-[48px] xl:text-[56px]">
            Portfolio 2026
          </h1>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.7fr_0.72fr] lg:items-start xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="max-w-[560px]"
          >
            <p className="text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-[40px] lg:text-[44px]">
              Hi, I&apos;m <span className="text-green">{data.name}</span>!
            </p>
            <p className="mt-6 text-[20px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[22px] lg:text-[24px]">
              I&apos;m a <span className="text-gold">{data.title}</span>
              <br />
              from {data.location}
            </p>
            <p className="mt-8 max-w-[560px] text-[14px] font-semibold leading-[1.38] tracking-[-0.02em] text-ink sm:text-[17px] lg:text-[18px]">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="flex justify-center lg:pt-4"
          >
            <div className="relative h-[290px] w-[210px] overflow-hidden bg-white sm:h-[320px] sm:w-[224px] lg:h-[396px] lg:w-[238px]">
              <Image
                src={data.heroImagePath}
                alt={`${data.name} portrait`}
                fill
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 224px, 238px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-[340px] lg:pt-10"
          >
            <div className="flex flex-col gap-2 text-[13px] font-medium text-ink sm:text-[14px]">
              <a href={data.contact.behanceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-green">
                <ArrowUpRight className="h-3.5 w-3.5" />
                {data.contact.behanceLabel}
              </a>
              <a href={data.contact.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-green">
                <Sparkles className="h-3.5 w-3.5" />
                {data.contact.resumeLabel}
              </a>
            </div>

            <div className="my-10 border-t border-line" />

            <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-ink">Reach me out!</h2>

            <div className="mt-5 flex flex-col gap-4 text-[13px] text-ink sm:text-[14px]">
              <a href={`tel:${data.contact.phone}`} className="inline-flex items-center gap-3 transition hover:text-green">
                <Phone className="h-3.5 w-3.5 text-muted" />
                {data.contact.phone}
              </a>
              <a href={`mailto:${data.contact.email}`} className="inline-flex items-center gap-3 transition hover:text-green">
                <Mail className="h-3.5 w-3.5 text-muted" />
                {data.contact.email}
              </a>
              <a href={data.contact.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 transition hover:text-green">
                <MoveUpRight className="h-3.5 w-3.5 text-muted" />
                {data.contact.linkedinLabel}
              </a>
            </div>
          </motion.aside>
        </section>

        <section className="mt-16 lg:mt-20">
          <div className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-2 sm:gap-4">
            {tabConfig.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium transition sm:text-[14px] ${
                    active ? 'bg-[#f0ede6] text-ink' : 'text-muted hover:bg-[#f3f1eb] hover:text-ink'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <AnimatePresence mode="wait">
              {activeTab === 'skills' ? (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24 }}
                  className="overflow-x-auto"
                >
                  <div className="min-w-[900px] rounded-2xl border border-line bg-white/40">
                    {data.skills.map((row, rowIndex) => (
                      <div
                        key={row.label}
                        className={`grid grid-cols-[250px_repeat(4,minmax(0,1fr))] items-center ${
                          rowIndex === 0 ? '' : 'border-t border-line'
                        }`}
                      >
                        <div className="flex h-full items-center gap-2 border-r border-line px-4 py-3 text-[13px] font-medium sm:text-[14px]">
                          {rowIndex === 0 ? <Sparkles className="h-3.5 w-3.5 text-muted" /> : <Hash className="h-3.5 w-3.5 text-muted" />}
                          <span>{row.label}</span>
                        </div>
                        {row.items.map((item) => (
                          <div key={item} className="border-r border-line px-4 py-3 text-[13px] text-ink sm:text-[14px]">
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}

              {activeTab === 'tools' ? (
                <motion.div
                  key="tools"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24 }}
                  className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6"
                >
                  {data.tools.map((tool) => (
                    <ToolCard key={tool.name} name={tool.name} kind={tool.kind} />
                  ))}
                </motion.div>
              ) : null}

              {activeTab === 'languages' ? (
                <motion.div
                  key="languages"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24 }}
                  className="flex flex-wrap gap-3"
                >
                  {data.languages.map((language) => (
                    <button
                      key={language.name}
                      type="button"
                      className={`inline-flex min-w-[140px] items-center gap-3 rounded-xl border px-4 py-3 text-left text-[13px] font-medium transition sm:min-w-[210px] sm:text-[14px] ${
                        language.selected ? 'border-line bg-white shadow-[0_1px_0_rgba(15,23,42,0.02)]' : 'border-transparent bg-[#f5f3ef]'
                      }`}
                    >
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-ink/15 bg-white text-[11px] text-ink">
                        <Check className="h-3 w-3" />
                      </span>
                      {language.name}
                    </button>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </section>

        <section className="mt-24 lg:mt-28">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-[20px] font-semibold tracking-[-0.03em] sm:text-[22px]">My Work</h2>
          </div>

          <div className="inline-flex rounded-full bg-[#f2f0ea] px-3 py-1 text-[12px] font-medium text-ink">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Work
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.projects.map((project, index) => (
              <motion.button
                key={project.name}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                onClick={() => setSelectedProjectIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-line bg-white text-left shadow-soft"
              >
                <div className="relative h-[180px] w-full overflow-hidden bg-[#f6f4ef] sm:h-[190px]">
                  <Image
                    src={project.imagePath}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-col gap-2 px-4 py-4">
                  <div className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-ink">
                    <FolderOpen className="h-3.5 w-3.5 text-muted" />
                    {project.name}
                  </div>
                  <div className="text-[13px] text-ink/80">{project.category}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <footer className="pb-4 pt-20 text-center text-[13px] text-ink/80 sm:pt-28">{data.footer}</footer>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setSelectedProjectIndex(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.name}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[28px] bg-paper p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] sm:p-8"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[340px] overflow-hidden rounded-[22px] border border-line bg-white">
                  <Image
                    src={selectedProject.imagePath}
                    alt={selectedProject.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="inline-flex rounded-full bg-[#f2f0ea] px-3 py-1 text-[12px] font-medium text-ink">
                      Project details
                    </div>

                    <h3 className="mt-5 text-[30px] font-semibold tracking-[-0.05em] text-ink">
                      {selectedProject.name}
                    </h3>

                    <p className="mt-3 max-w-xl text-[15px] leading-7 text-ink/80">{selectedProject.description}</p>

                    <div className="mt-6 border-t border-line pt-5">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-ink/50">Details</p>
                      <ul className="mt-4 space-y-3 text-[14px] text-ink">
                        {selectedProject.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-green" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {selectedProject.externalLinkLabel ? (
                      <a
                        href={selectedProject.externalLinkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium transition hover:border-ink/20 hover:bg-[#f7f6f2]"
                      >
                        {selectedProject.externalLinkLabel}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => setSelectedProjectIndex(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition hover:bg-ink/90"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.main>
  );
}

function ToolCard({ name, kind }: { name: string; kind: PortfolioData['tools'][number]['kind'] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
    >
      <div className="flex h-[160px] items-center justify-center border-b border-line bg-white px-4">
        <ToolMark kind={kind} />
      </div>
      <div className="px-4 py-3 text-[13px] text-ink sm:text-[14px]">{name}</div>
    </motion.div>
  );
}

function ToolMark({ kind }: { kind: PortfolioData['tools'][number]['kind'] }) {
  const publicPath = `/tools/${kind}.jpeg`;

  return (
    <div className="relative h-24 w-24 flex items-center justify-center">
      <Image src={publicPath} alt={kind} fill className="object-contain" />
    </div>
  );
}
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { projectsData, Project } from '@/constants'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { ArrowLeft, Terminal, ShieldAlert, Cpu, Award } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

type FilterType = 'all' | 'fullstack' | 'frontend'

// Categorize projects by title
const FRONTEND_PROJECTS = [
  'moto edge 60 fusion showcase',
  'cinematic studio portfolio',
]

const isFrontendProject = (title: string) =>
  FRONTEND_PROJECTS.includes(title.toLowerCase())

const getIconKey = (tag: string): string => {
  const t = tag.toLowerCase().trim()
  if (t === 'go' || t === 'golang') return 'go'
  if (t === 'rust') return 'rust'
  if (t === 'nodejs' || t === 'node.js') return 'nodejs'
  if (t === 'python') return 'py'
  if (t === 'django') return 'django'
  if (t === 'postgres' || t === 'postgresql') return 'postgres'
  if (t === 'redis') return 'redis'
  if (t === 'kubernetes') return 'kubernetes'
  if (t === 'docker') return 'docker'
  if (t === 'aws') return 'aws'
  if (t === 'terraform') return 'terraform'
  if (t === 'graphql') return 'graphql'
  if (t === 'react') return 'react'
  if (t === 'nextjs' || t === 'next.js') return 'nextjs'
  if (t === 'typescript' || t === 'ts') return 'ts'
  if (t === 'javascript' || t === 'js') return 'js'
  if (t === 'express') return 'express'
  if (t === 'spring' || t === 'spring boot') return 'spring'
  if (t === 'mongodb') return 'mongodb'
  if (t === 'mysql') return 'mysql'
  if (t === 'prisma') return 'prisma'
  if (t === 'redux') return 'redux'
  if (t === 'tailwind' || t === 'tailwindcss') return 'tailwind'
  if (t === 'git') return 'git'
  if (t === 'githubactions' || t === 'github actions') return 'githubactions'
  if (t === 'prometheus') return 'prometheus'
  if (t === 'grafana') return 'grafana'
  if (t === 'linux') return 'linux'
  if (t === 'bash') return 'bash'
  if (t === 'postman') return 'postman'
  if (t === 'bun') return 'bun'
  if (t === 'gcp') return 'gcp'
  if (t === 'cloudflare') return 'cloudflare'
  if (t === 'elasticsearch') return 'elasticsearch'
  if (t === 'rabbitmq') return 'rabbitmq'
  if (t === 'kafka') return 'kafka'
  if (t === 'jenkins') return 'jenkins'
  if (t === 'ansible') return 'ansible'
  if (t === 'nginx') return 'nginx'
  if (t === 'cpp' || t === 'c++') return 'cpp'
  if (t === 'fastapi') return 'fastapi'
  if (t === 'gsap') return 'gsap'
  if (t === 'threejs' || t === 'three.js') return 'threejs'
  return ''
}

/* ─── Scroll-reveal card animation ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative border border-border rounded-lg bg-background overflow-hidden transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
    >
      {/* Card Content — horizontal layout on desktop */}
      <div className="flex flex-col sm:flex-row gap-0">

        {/* Left: Header with logo + title + meta */}
        <div className="flex items-start gap-4 p-5 sm:w-[240px] sm:shrink-0 sm:border-r border-b sm:border-b-0 border-border/40">
          {/* Small Logo */}
          <div className="size-10 border border-border/60 rounded-lg shrink-0 overflow-hidden bg-muted/10 flex items-center justify-center transition-all duration-300 group-hover:border-brand-blue/30 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.1)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover scale-[1.3] transition-transform duration-300 group-hover:scale-[1.4]"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground group-hover:text-brand-blue transition-colors duration-200">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-[10px] text-muted-foreground/50">
                {project.date}
              </span>
              <span className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${isFrontendProject(project.title)
                  ? 'text-violet-400/80 border-violet-500/20 bg-violet-500/5'
                  : 'text-emerald-400/80 border-emerald-500/20 bg-emerald-500/5'
                }`}>
                {isFrontendProject(project.title) ? 'Frontend' : 'Full Stack'}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground/70 mt-2 leading-relaxed line-clamp-3 sm:line-clamp-none">
              {project.description}
            </p>
          </div>
        </div>

        {/* Right: Case study + tags + links */}
        <div className="flex-1 p-5 space-y-4">
          {/* Case Study — 2x2 grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50 font-bold">
                <ShieldAlert className="w-3 h-3" />
                Problem
              </span>
              <p className="text-[11px] text-muted-foreground/70 leading-relaxed pl-[18px] border-l border-border/40">
                {project.problem}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50 font-bold">
                <Terminal className="w-3 h-3" />
                Approach
              </span>
              <p className="text-[11px] text-muted-foreground/70 leading-relaxed pl-[18px] border-l border-border/40">
                {project.approach}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50 font-bold">
                <Cpu className="w-3 h-3" />
                Stack
              </span>
              <p className="text-[11px] text-foreground/70 font-medium leading-relaxed pl-[18px] border-l border-border/40">
                {project.infra}
              </p>
            </div>

            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-brand-blue/60 font-bold">
                <Award className="w-3 h-3" />
                Outcome
              </span>
              <p className="text-[11px] text-brand-blue/80 font-medium leading-relaxed pl-[18px] border-l border-brand-blue/25">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Tags + Links row */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pt-3 border-t border-border/20">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => {
                const iconKey = getIconKey(tag)
                return (
                  <span
                    key={tag}
                    className="flex items-center gap-1 font-mono text-[9px] border border-border/40 rounded-md px-2 py-0.5 text-muted-foreground bg-muted/5 hover:border-brand-blue/30 hover:text-foreground transition-colors"
                  >
                    {iconKey && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://skillicons.dev/icons?i=${iconKey}`}
                        alt={tag}
                        className="w-3 h-3 object-contain"
                        loading="lazy"
                      />
                    )}
                    <span>{tag}</span>
                  </span>
                )
              })}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border/50 rounded-md font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:bg-muted/40 hover:text-foreground hover:border-brand-blue/30 transition-all"
              >
                <FaGithub className="h-3.5 w-3.5" />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border/50 rounded-md font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:bg-muted/40 hover:text-foreground hover:border-brand-blue/30 transition-all"
              >
                <FaExternalLinkAlt className="h-3 w-3" />
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'frontend') return isFrontendProject(p.title)
    if (filter === 'fullstack') return !isFrontendProject(p.title)
    return true
  })

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: projectsData.length },
    { key: 'fullstack', label: 'Full Stack', count: projectsData.filter(p => !isFrontendProject(p.title)).length },
    { key: 'frontend', label: 'Frontend', count: projectsData.filter(p => isFrontendProject(p.title)).length },
  ]

  return (
    <main className="w-full pt-14 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-background transition-colors">
        <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full">
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />

          <div className="relative border-x border-border min-[880px]:border-x-0 px-6 py-14">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>

            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {t.projects.title}
              </h1>
              <p className="mt-3 text-sm text-muted-foreground/80 max-w-[560px] leading-relaxed">
                A collection of projects spanning distributed systems, full-stack platforms,
                creative coding experiments, and interactive web experiences.
              </p>
            </motion.div>

            {/* Stats Bar — floating vertical animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="mt-6 flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/60 animate-pulse" />
                {projectsData.length} Projects
              </span>
              <span className="w-px h-3 bg-border/40" />
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
                {new Set(projectsData.flatMap(p => p.tags)).size} Technologies
              </span>
            </motion.div>
          </div>

          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-b border-border bg-muted/5 h-4">
        <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full h-full">
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border h-full" />
          <div className="border-x border-border min-[880px]:border-x-0 h-full" />
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border h-full" />
        </div>
      </div>

      {/* Projects List */}
      <section className="relative w-full bg-background transition-colors">
        <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full">
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />

          <div className="relative border-x border-border min-[880px]:border-x-0 px-6 py-10">
            {/* Section label */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background px-4 whitespace-nowrap">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                All Projects
              </span>
            </div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center gap-1 p-1 border border-border/60 rounded-full bg-muted/10 backdrop-blur-sm w-fit mb-8"
            >
              {filters.map((f) => {
                const isActive = filter === f.key
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`relative px-4 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 select-none cursor-pointer ${isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="projectFilterActive"
                        className="absolute inset-0 bg-black dark:bg-brand-blue rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {f.label}
                    <span className={`ml-1.5 ${isActive ? 'text-white/60' : 'text-muted-foreground/40'}`}>
                      {f.count}
                    </span>
                  </button>
                )
              })}
            </motion.div>

            {/* Project Cards — single column, scroll reveal */}
            <div className="space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {filteredProjects.map((project: Project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredProjects.length === 0 && (
                <div className="text-center py-16 text-muted-foreground/50 font-mono text-xs uppercase tracking-widest">
                  No projects in this category
                </div>
              )}
            </div>
          </div>

          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border" />
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="w-full border-b border-border bg-muted/5 h-4">
        <div className="max-w-[880px] mx-auto grid grid-cols-1 min-[880px]:grid-cols-[40px_800px_40px] w-full h-full">
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border h-full" />
          <div className="border-x border-border min-[880px]:border-x-0 h-full" />
          <div className="hidden min-[880px]:block bg-diagonal-stripes-animated border-x border-border h-full" />
        </div>
      </div>
    </main>
  )
}

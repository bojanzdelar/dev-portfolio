<script setup lang="ts">
import { Server, Cloud, Code2, Layers, Box, GitMerge, Terminal, Layout } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Service {
  title: string
  description: string
  icon: Component
}

const services: Service[] = [
  {
    title: 'Backend API Development',
    description: 'REST API design and implementation with clear contracts, proper error handling, and maintainable structure.',
    icon: Server,
  },
  {
    title: 'Java & Spring Boot',
    description: 'Application development using Java and Spring Boot — services, security, data access, and configuration.',
    icon: Code2,
  },
  {
    title: 'AWS Architecture',
    description: 'Designing and implementing AWS-based solutions using the right service for each part of the system.',
    icon: Cloud,
  },
  {
    title: 'Infrastructure as Code',
    description: 'Writing Terraform and AWS CDK to define infrastructure reproducibly, version-controlled, and reviewable.',
    icon: Layers,
  },
  {
    title: 'Cloud Deployment & Containers',
    description: 'Containerizing applications with Docker and deploying to ECS/Fargate or similar managed runtimes.',
    icon: Box,
  },
  {
    title: 'Third-Party Integrations',
    description: 'Integrating external APIs and services — authentication providers, payment systems, data pipelines.',
    icon: GitMerge,
  },
  {
    title: 'Automation Scripts',
    description: 'Python or shell scripts for cloud resource management, data processing, and workflow automation.',
    icon: Terminal,
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end application development across Vue.js/Nuxt.js frontend and backend API layers.',
    icon: Layout,
  },
]
</script>

<template>
  <section id="services" class="py-16 lg:py-24 relative" aria-labelledby="services-heading">
    <div class="absolute inset-0 bg-brand-surface/30 border-y border-brand-border" aria-hidden="true" />

    <div class="relative mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10">
        <p class="text-[10px] font-mono text-brand-accent tracking-widest uppercase mb-3">Available for hire</p>
        <h2 id="services-heading" class="text-2xl sm:text-3xl font-bold text-brand-text mb-2">
          How I Can Help
        </h2>
        <p class="text-brand-muted/65 text-sm max-w-lg">
          Available for freelance projects in backend engineering, cloud infrastructure, and full-stack development.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border/60 border border-brand-border/60 rounded-xl overflow-hidden">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="group relative bg-brand-bg hover:bg-brand-surface/80 transition-colors duration-200 p-6 flex flex-col"
        >
          <span class="absolute top-4 right-4 text-[10px] font-mono text-brand-dim/40 tabular-nums">
            {{ String(i + 1).padStart(2, '0') }}
          </span>

          <div class="mb-5 w-10 h-10 rounded-lg border border-brand-border group-hover:border-brand-accent/25 group-hover:bg-brand-accent/6 flex items-center justify-center transition-all duration-200 shrink-0">
            <component :is="service.icon" :size="17" class="text-brand-dim group-hover:text-brand-accent transition-colors duration-200" aria-hidden="true" />
          </div>

          <h3 class="text-sm font-semibold text-brand-text/85 mb-2 leading-snug pr-6">{{ service.title }}</h3>
          <p class="text-xs text-brand-dim leading-relaxed mt-auto pt-1">{{ service.description }}</p>

          <div class="absolute bottom-0 left-0 right-0 h-px bg-brand-accent/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
        </div>
      </div>

    </div>
  </section>
</template>

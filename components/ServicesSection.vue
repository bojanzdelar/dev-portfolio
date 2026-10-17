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
  <section id="services" class="py-16 lg:py-24 border-t border-brand-border/75" aria-labelledby="services-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-brand-border">
        <h2 id="services-heading" class="text-2xl sm:text-3xl font-bold text-brand-text mb-1.5">
          How I Can Help
        </h2>
        <p class="text-brand-muted/65 text-sm">
          Available for freelance projects in backend engineering, cloud infrastructure, and full-stack development.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="service in services"
          :key="service.title"
          class="group rounded-lg border border-brand-border bg-brand-surface/40 p-5 hover:border-brand-hi hover:bg-brand-surface/85 transition-all"
        >
          <div class="inline-flex items-center justify-center w-9 h-9 rounded bg-brand-border border border-brand-hi/75 mb-4 group-hover:border-brand-accent/15 group-hover:bg-brand-accent/5 transition-all">
            <component :is="service.icon" :size="16" class="text-brand-muted/65 group-hover:text-brand-accent transition-colors" aria-hidden="true" />
          </div>
          <h3 class="text-sm font-semibold text-brand-text/80 mb-1.5 leading-snug">{{ service.title }}</h3>
          <p class="text-xs text-brand-dim leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

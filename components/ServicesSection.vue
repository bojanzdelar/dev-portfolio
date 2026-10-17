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
  <section id="services" class="py-16 lg:py-24 border-t border-slate-800/60" aria-labelledby="services-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-slate-800">
        <h2 id="services-heading" class="text-2xl sm:text-3xl font-bold text-slate-100 mb-1.5">
          How I Can Help
        </h2>
        <p class="text-slate-500 text-sm">
          Available for freelance projects in backend engineering, cloud infrastructure, and full-stack development.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="service in services"
          :key="service.title"
          class="group rounded-lg border border-slate-800 bg-slate-900/30 p-5 hover:border-slate-700 hover:bg-slate-900/60 transition-all"
        >
          <div class="inline-flex items-center justify-center w-9 h-9 rounded bg-slate-800 border border-slate-700/60 mb-4 group-hover:border-blue-900/50 group-hover:bg-blue-950/30 transition-all">
            <component :is="service.icon" :size="16" class="text-slate-500 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
          </div>
          <h3 class="text-sm font-semibold text-slate-300 mb-1.5 leading-snug">{{ service.title }}</h3>
          <p class="text-xs text-slate-600 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

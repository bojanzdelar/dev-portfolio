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
  <section id="services" class="py-24 lg:py-32 bg-slate-900/20" aria-labelledby="services-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mb-16">
        <p class="text-blue-400 text-xs font-mono mb-3 tracking-widest uppercase">Services</p>
        <h2 id="services-heading" class="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          How I Can Help
        </h2>
        <p class="text-slate-400 max-w-xl">
          Available for freelance projects involving backend engineering, cloud infrastructure, and full-stack development.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-lg border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors"
        >
          <component :is="service.icon" :size="20" class="text-blue-400 mb-4" aria-hidden="true" />
          <h3 class="text-sm font-semibold text-slate-200 mb-2">{{ service.title }}</h3>
          <p class="text-xs text-slate-500 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentIndex = ref(0)
const direction = ref<'forward' | 'backward'>('forward')

const projects = [
  { id: 'nexa', title: 'Nexa', label: "Master's Thesis" },
  { id: 'software-designer', title: 'Software Designer', label: "Bachelor's Thesis" },
  { id: 'lms', title: 'Learning Management System', label: 'Full-Stack Platform' },
  { id: 'supplement-shop', title: 'Supplement Shop', label: 'E-Commerce' },
]

const projectCards = [
  {
    title: 'Software Designer',
    subtitle: "Bachelor's Thesis · Requirements & Modeling Tool",
    overview: 'A tool for defining software requirements and creating UML models, with role-based access control and code generation from UML class diagrams. Microservice backend using Spring Boot and Spring Cloud, Vue.js frontend, and Amazon Cognito for authentication.',
    techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Vue.js', 'Vuetify', 'Python Flask', 'MySQL', 'Amazon Cognito', 'Docker'],
    githubUrl: 'https://github.com/bojanzdelar/Software-designer',
    features: [
      'Requirements and UML diagram creation within projects',
      'Role-based access control — full access vs. read-only per privilege level',
      'Code generation from UML class diagrams',
      'Microservice backend with Spring Boot and Spring Cloud',
      'Amazon Cognito authentication and authorization',
    ],
  },
  {
    title: 'Learning Management System',
    subtitle: 'Full-Stack · University Platform',
    overview: 'University LMS with four user roles — guests, students, teachers, and administrators — built on a microservice architecture with database-per-service pattern. Students track subjects and study history, teachers manage exam realizations, administrators manage the university.',
    techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Angular', 'Angular Material', 'TypeScript', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/bojanzdelar/Learning-management-system',
    features: [
      'Four user roles with distinct capabilities and views',
      'Students track enrolled subjects and previous study records',
      'Teachers manage subject and exam realizations',
      'Microservice architecture with database-per-service pattern',
      'JWT authentication with access and refresh tokens',
    ],
  },
  {
    title: 'Supplement Shop',
    subtitle: 'Full-Stack E-Commerce',
    overview: 'A complete e-commerce application demonstrating end-to-end integration across a Vue.js frontend, Python Flask REST API backend, and MySQL relational database. Each layer is cleanly separated — the frontend communicates exclusively through the API, JWT handles auth, and SQLAlchemy manages the schema.',
    techStack: ['Vue.js', 'Python Flask', 'MySQL', 'SQLAlchemy', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/bojanzdelar/Supplement-shop',
    features: [
      'Product catalog with categories and filtering',
      'Shopping cart with session management',
      'JWT authentication with role-based authorization',
      'Admin dashboard for inventory and order management',
      'SQLAlchemy ORM with relational data modeling',
    ],
  },
]

const total = projects.length
const transitionName = computed(() => `slide-${direction.value}`)

function navigate(delta: number) {
  direction.value = delta > 0 ? 'forward' : 'backward'
  currentIndex.value = (currentIndex.value + delta + total) % total
}

function goTo(index: number) {
  direction.value = index > currentIndex.value ? 'forward' : 'backward'
  currentIndex.value = index
}
</script>

<template>
  <section id="projects" class="py-16 lg:py-24 border-t border-brand-border/75" aria-labelledby="projects-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10 pb-8 border-b border-brand-border">
        <h2 id="projects-heading" class="text-2xl sm:text-3xl font-bold text-brand-text">Projects</h2>

        <div class="flex items-center gap-5">
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:block text-xs font-mono text-brand-dim hover:text-brand-accent transition-colors"
          >
            github.com/bojanzdelar →
          </a>

          <!-- Prev / counter / Next -->
          <div class="flex items-center gap-2">
            <button
              @click="navigate(-1)"
              class="w-9 h-9 rounded-lg border border-brand-border bg-brand-surface/40 hover:border-brand-accent/40 hover:bg-brand-accent/6 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Previous project"
            >
              <ChevronLeft :size="16" class="text-brand-muted" />
            </button>

            <span class="text-sm font-mono text-brand-dim tabular-nums select-none px-1" aria-live="polite">
              {{ String(currentIndex + 1).padStart(2, '0') }}&nbsp;/&nbsp;{{ String(total).padStart(2, '0') }}
            </span>

            <button
              @click="navigate(1)"
              class="w-9 h-9 rounded-lg border border-brand-border bg-brand-surface/40 hover:border-brand-accent/40 hover:bg-brand-accent/6 flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Next project"
            >
              <ChevronRight :size="16" class="text-brand-muted" />
            </button>
          </div>
        </div>
      </div>

      <!-- Sliding project content -->
      <Transition :name="transitionName" mode="out-in">
        <div :key="currentIndex">
          <NexaCaseStudy v-if="currentIndex === 0" />
          <ProjectCard v-else v-bind="projectCards[currentIndex - 1]" />
        </div>
      </Transition>

      <!-- Dot / pill indicators -->
      <div class="flex items-center justify-center gap-2 mt-10" role="tablist" aria-label="Project navigation">
        <button
          v-for="(p, i) in projects"
          :key="p.id"
          @click="goTo(i)"
          role="tab"
          :aria-selected="i === currentIndex"
          :aria-label="p.title"
          class="h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          :class="i === currentIndex
            ? 'w-8 bg-brand-accent'
            : 'w-2 bg-brand-border hover:bg-brand-dim'"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.slide-forward-enter-active,
.slide-forward-leave-active,
.slide-backward-enter-active,
.slide-backward-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.slide-forward-enter-from {
  opacity: 0;
  transform: translateX(48px);
}
.slide-forward-leave-to {
  opacity: 0;
  transform: translateX(-48px);
}

.slide-backward-enter-from {
  opacity: 0;
  transform: translateX(-48px);
}
.slide-backward-leave-to {
  opacity: 0;
  transform: translateX(48px);
}
</style>

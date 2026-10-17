<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentIndex = ref(0)
const direction = ref<'forward' | 'backward'>('forward')

const projects = [
  { id: 'nexa', title: 'Nexa', label: "Master's Thesis", year: '2024—25' },
  { id: 'software-designer', title: 'Software Designer', label: "Bachelor's Thesis", year: '2021' },
  { id: 'lms', title: 'Learning Management System', label: 'University Platform', year: '2022' },
  { id: 'supplement-shop', title: 'Supplement Shop', label: 'E-Commerce', year: '2020' },
]

const projectCards = [
  {
    title: 'Software Designer',
    kicker: "Bachelor's thesis / 2021",
    subtitle: 'Requirements & UML modeling tool with code generation',
    overview:
      "A desktop-grade web tool for authoring software requirements and UML class diagrams inside shared projects, with per-user privilege levels and Java source generation from class models. Built on a Spring Cloud microservice backend, a Python Flask code-generation service, and a Vue.js front end — authentication delegated to Amazon Cognito.",
    techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Vue.js', 'Vuetify', 'Python Flask', 'MySQL', 'Amazon Cognito', 'Docker'],
    githubUrl: 'https://github.com/bojanzdelar/Software-designer',
    features: [
      'Project-scoped requirement specs and UML diagrams',
      'Per-user privilege levels (full access vs. read-only)',
      'Java class generation from UML class diagrams',
      'Spring Cloud microservice backend with service discovery',
      'Amazon Cognito for authentication and authorization',
    ],
  },
  {
    title: 'Learning Management System',
    kicker: 'University platform / 2022',
    subtitle: 'Four-role LMS on microservice architecture',
    overview:
      "A university LMS with four distinct user roles — guest, student, teacher, administrator — each with its own view and permission set. Microservice backend using a database-per-service pattern; students track enrolled subjects and prior study history, teachers run exam realizations, administrators manage the catalog.",
    techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Angular', 'Angular Material', 'TypeScript', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/bojanzdelar/Learning-management-system',
    features: [
      'Four roles, four UIs, one shared API surface',
      'Student view: enrolled subjects + study history',
      'Teacher view: exam realization management',
      'Database-per-service microservice decomposition',
      'JWT with access + refresh token rotation',
    ],
  },
  {
    title: 'Supplement Shop',
    kicker: 'E-commerce / 2020',
    subtitle: 'Three-tier Flask + Vue storefront',
    overview:
      "A full e-commerce flow built as a textbook three-tier split: a Vue.js front end, a Python Flask REST API, and a MySQL store accessed through SQLAlchemy. The front end talks to the API only — no shortcuts — with JWT for session handling and an admin area for inventory and orders.",
    techStack: ['Vue.js', 'Python Flask', 'MySQL', 'SQLAlchemy', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/bojanzdelar/Supplement-shop',
    features: [
      'Category-filtered product catalog',
      'Session-based shopping cart',
      'JWT auth with role-based authorization',
      'Admin dashboard for inventory and orders',
      'SQLAlchemy models for relational data',
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
  <section id="work" class="pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border" aria-labelledby="work-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">

      <!-- Section header -->
      <header class="mb-14 lg:mb-20">
        <div class="flex items-end justify-between gap-6 pb-5 border-b border-brand-border">
          <div>
            <p class="eyebrow mb-4">§ 01 — Selected Work</p>
            <h2 id="work-heading" class="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-text tracking-display leading-[0.98]">
              Four projects.<br class="sm:hidden" />
              <span class="italic font-light text-brand-muted">One obsession: making the moving parts visible.</span>
            </h2>
          </div>
        </div>

        <!-- Project index strip -->
        <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <ol class="flex items-center flex-wrap gap-x-5 gap-y-2 text-xs font-mono">
            <li v-for="(p, i) in projects" :key="p.id">
              <button
                @click="goTo(i)"
                class="group inline-flex items-baseline gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
                :aria-current="i === currentIndex ? 'true' : undefined"
              >
                <span
                  class="tabular-nums"
                  :class="i === currentIndex ? 'text-brand-accent' : 'text-brand-dim/70 group-hover:text-brand-muted'"
                >
                  0{{ i + 1 }}
                </span>
                <span
                  class="uppercase tracking-[0.14em]"
                  :class="i === currentIndex ? 'text-brand-text' : 'text-brand-muted group-hover:text-brand-text'"
                >
                  {{ p.title }}
                </span>
                <span class="text-brand-dim/50 hidden sm:inline">· {{ p.year }}</span>
              </button>
            </li>
          </ol>

          <div class="flex items-center gap-2">
            <button
              @click="navigate(-1)"
              class="w-9 h-9 border border-brand-border hover:border-brand-accent hover:text-brand-accent text-brand-muted flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Previous project"
            >
              <ChevronLeft :size="16" />
            </button>
            <span class="text-xs font-mono text-brand-dim tabular-nums select-none px-1" aria-live="polite">
              {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}
            </span>
            <button
              @click="navigate(1)"
              class="w-9 h-9 border border-brand-border hover:border-brand-accent hover:text-brand-accent text-brand-muted flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Next project"
            >
              <ChevronRight :size="16" />
            </button>
          </div>
        </div>
      </header>

      <!-- Sliding project content -->
      <Transition :name="transitionName" mode="out-in">
        <div :key="currentIndex">
          <NexaCaseStudy v-if="currentIndex === 0" />
          <ProjectCard v-else v-bind="projectCards[currentIndex - 1]" />
        </div>
      </Transition>

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
  transform: translateX(32px);
}
.slide-forward-leave-to {
  opacity: 0;
  transform: translateX(-32px);
}

.slide-backward-enter-from {
  opacity: 0;
  transform: translateX(-32px);
}
.slide-backward-leave-to {
  opacity: 0;
  transform: translateX(32px);
}
</style>

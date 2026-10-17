<script setup lang="ts">
import { Github } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle: string
  description: string
  techStack: string[]
  features: string[]
  githubUrl: string
  objective: string
}>()
</script>

<template>
  <article class="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden" :aria-labelledby="`project-${title.replace(/\s+/g, '-').toLowerCase()}`">
    <div class="border-b border-slate-800 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p class="text-xs text-slate-500 mb-1">{{ subtitle }}</p>
        <h3 :id="`project-${title.replace(/\s+/g, '-').toLowerCase()}`" class="text-xl font-bold text-slate-100">{{ title }}</h3>
      </div>
      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        :aria-label="`View ${title} on GitHub`"
      >
        <Github :size="16" />
        View on GitHub
      </a>
    </div>

    <div class="px-8 py-8 grid lg:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div>
          <h4 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Objective</h4>
          <p class="text-slate-400 text-sm leading-relaxed">{{ objective }}</p>
        </div>
        <div>
          <h4 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Description</h4>
          <p class="text-slate-400 text-sm leading-relaxed">{{ description }}</p>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <h4 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Features</h4>
          <ul class="space-y-2">
            <li v-for="feature in features" :key="feature" class="flex gap-3 text-sm">
              <span class="text-slate-600 shrink-0 mt-0.5">→</span>
              <span class="text-slate-400">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded px-2.5 py-1"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'

defineProps<{
  title: string
  subtitle: string
  overview: string
  techStack: string[]
  features: string[]
  githubUrl: string
}>()
</script>

<template>
  <article
    class="rounded-xl border border-brand-border bg-brand-surface/40 overflow-hidden"
    :aria-labelledby="`project-${title.replace(/\s+/g, '-').toLowerCase()}`"
  >
    <div class="border-b border-brand-border px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p class="text-xs text-brand-dim font-mono uppercase tracking-widest mb-1.5">{{ subtitle }}</p>
        <h3
          :id="`project-${title.replace(/\s+/g, '-').toLowerCase()}`"
          class="text-xl font-bold text-brand-text"
        >
          {{ title }}
        </h3>
      </div>
      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 border border-brand-hi hover:border-brand-muted/55 text-brand-muted hover:text-brand-text text-sm font-mono rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        :aria-label="`View ${title} on GitHub`"
      >
        <Github :size="14" />
        GitHub
      </a>
    </div>

    <div class="px-7 py-7 grid lg:grid-cols-2 gap-8">
      <div>
        <h4 class="text-xs font-mono text-brand-dim uppercase tracking-widest mb-3">Overview</h4>
        <p class="text-brand-muted text-base leading-relaxed">{{ overview }}</p>
      </div>

      <div class="space-y-6">
        <div>
          <h4 class="text-xs font-mono text-brand-dim uppercase tracking-widest mb-3">Features</h4>
          <ul class="space-y-2.5">
            <li v-for="feature in features" :key="feature" class="flex gap-3">
              <span class="text-brand-dim/65 shrink-0 mt-1 text-xs">—</span>
              <span class="text-brand-muted text-sm leading-relaxed">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-mono text-brand-dim uppercase tracking-widest mb-3">Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="text-sm font-mono text-brand-muted bg-brand-border border border-brand-hi/75 rounded px-2.5 py-0.5"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

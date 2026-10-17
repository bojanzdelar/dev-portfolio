<script setup lang="ts">
import { Github, ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  title: string
  kicker: string
  subtitle: string
  overview: string
  techStack: string[]
  features: string[]
  githubUrl: string
}>()
</script>

<template>
  <article
    class="relative"
    :aria-labelledby="`project-${title.replace(/\s+/g, '-').toLowerCase()}`"
  >
    <!-- Project masthead -->
    <header class="grid lg:grid-cols-12 gap-6 lg:gap-10 pb-8 mb-10 border-b border-brand-border">
      <div class="lg:col-span-9">
        <p class="eyebrow text-brand-accent mb-4">{{ kicker }}</p>
        <h3
          :id="`project-${title.replace(/\s+/g, '-').toLowerCase()}`"
          class="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-[1.02] tracking-display mb-3"
        >
          {{ title }}
        </h3>
        <p class="font-display italic text-xl lg:text-2xl text-brand-muted leading-snug max-w-2xl">
          {{ subtitle }}
        </p>
      </div>
      <div class="lg:col-span-3 lg:pt-3 flex lg:justify-end">
        <a
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 text-sm font-mono text-brand-muted hover:text-brand-accent border border-brand-border hover:border-brand-accent px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent self-start"
          :aria-label="`View ${title} on GitHub`"
        >
          <Github :size="14" />
          <span>Source</span>
          <ArrowUpRight :size="12" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>

    <!-- Overview -->
    <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14">
      <div class="lg:col-span-3">
        <p class="eyebrow">Overview</p>
      </div>
      <div class="lg:col-span-9">
        <p class="text-brand-text/90 text-lg leading-relaxed">{{ overview }}</p>
      </div>
    </div>

    <!-- Features -->
    <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14">
      <div class="lg:col-span-3">
        <p class="eyebrow">Features</p>
      </div>
      <ul class="lg:col-span-9 divide-y divide-brand-border/60">
        <li
          v-for="(feature, i) in features"
          :key="feature"
          class="grid grid-cols-[auto,1fr] gap-6 py-3 first:pt-0"
        >
          <span class="font-mono text-xs text-brand-dim tabular-nums pt-1">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <span class="text-brand-text/85 leading-relaxed">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Stack -->
    <div class="grid lg:grid-cols-12 gap-6 lg:gap-10">
      <div class="lg:col-span-3">
        <p class="eyebrow">Stack</p>
      </div>
      <ul class="lg:col-span-9 flex flex-wrap gap-x-5 gap-y-2.5 font-mono text-sm text-brand-muted">
        <li
          v-for="(tech, i) in techStack"
          :key="tech"
          class="flex items-baseline gap-5"
        >
          <span>{{ tech }}</span>
          <span v-if="i < techStack.length - 1" class="text-brand-border select-none" aria-hidden="true">/</span>
        </li>
      </ul>
    </div>
  </article>
</template>

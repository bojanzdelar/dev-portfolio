<script setup lang="ts">
import { ArrowUp } from "lucide-vue-next";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-brand-border pt-10 pb-10">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <div
        class="pb-8 border-b border-brand-border/60"
      >
        <div>
          <p class="eyebrow mb-2">Colophon</p>
          <p class="text-brand-muted text-sm leading-relaxed max-w-sm">
            Built with Nuxt 4 and Tailwind CSS. Set in
            <span class="italic font-display">Fraunces</span>, Inter, and
            JetBrains Mono. Statically generated, served from GitHub Pages.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 text-xs font-mono text-brand-dim"
      >
        <p>© {{ year }} Bojan Zdelar, Novi Sad, RS</p>
        <a
          href="#hero"
          class="group inline-flex items-center gap-2 text-brand-dim hover:text-brand-accent transition-colors uppercase tracking-[0.18em] whitespace-nowrap self-start sm:self-auto"
        >
          <span>Back to top</span>
          <ArrowUp
            :size="12"
            class="transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin, ArrowUp } from "lucide-vue-next";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-brand-border pt-10 pb-10">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <div
        class="grid sm:grid-cols-2 gap-8 pb-8 border-b border-brand-border/60"
      >
        <div>
          <p class="eyebrow mb-2">Colophon</p>
          <p class="text-brand-muted text-sm leading-relaxed max-w-sm">
            Built with Nuxt 4 and Tailwind CSS. Set in
            <span class="italic font-display">Fraunces</span>, Inter, and
            JetBrains Mono. Statically generated, served from GitHub Pages.
          </p>
        </div>
        <div class="sm:text-right">
          <p class="eyebrow mb-2">Elsewhere</p>
          <div class="flex sm:justify-end items-center gap-5">
            <a
              href="https://github.com/bojanzdelar"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand-muted hover:text-brand-accent transition-colors flex items-center gap-2 text-sm font-mono"
              aria-label="GitHub"
            >
              <Github :size="14" aria-hidden="true" />
              bojanzdelar
            </a>
            <a
              href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-brand-muted hover:text-brand-accent transition-colors flex items-center gap-2 text-sm font-mono"
              aria-label="LinkedIn"
            >
              <Linkedin :size="14" aria-hidden="true" />
              bojan-zdelar
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-between pt-6 text-xs font-mono text-brand-dim"
      >
        <p>© {{ year }} Bojan Zdelar, Novi Sad, RS</p>
        <a
          href="#hero"
          class="group inline-flex items-center gap-2 text-brand-dim hover:text-brand-accent transition-colors uppercase tracking-[0.18em]"
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

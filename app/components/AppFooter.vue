<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-brand-border py-8">
    <div class="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-brand-dim text-sm">
        © {{ year }} Bojan Zdelar
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://github.com/bojanzdelar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand-dim hover:text-brand-muted transition-colors flex items-center gap-2 text-sm"
          aria-label="GitHub"
        >
          <Github :size="16" aria-hidden="true" />
          bojanzdelar
        </a>
        <a
          href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand-dim hover:text-brand-muted transition-colors flex items-center gap-2 text-sm"
          aria-label="LinkedIn"
        >
          <Linkedin :size="16" aria-hidden="true" />
          bojan-zdelar
        </a>
      </div>
    </div>
  </footer>
</template>

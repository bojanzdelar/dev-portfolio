<script setup lang="ts">
import { Menu, X, Github, Linkedin } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-brand-border/75 bg-brand-bg/90 backdrop-blur-sm">
    <nav class="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Primary navigation">
      <div class="flex h-16 items-center justify-between">
        <a
          href="#hero"
          class="text-brand-text font-semibold text-base tracking-tight hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
          @click="closeMenu"
        >
          <span class="text-brand-accent font-mono font-bold">BZ</span>
          <span class="ml-2 text-brand-muted text-sm hidden sm:inline">Bojan Zdelar</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-brand-muted hover:text-brand-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded px-1"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded p-1"
            aria-label="GitHub profile"
          >
            <Github :size="18" />
          </a>
          <a
            href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded p-1"
            aria-label="LinkedIn profile"
          >
            <Linkedin :size="18" />
          </a>
        </div>

        <button
          class="md:hidden text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded p-1"
          :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>

      <div
        v-show="isMenuOpen"
        class="md:hidden pb-4 border-t border-brand-border/75 pt-4"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-brand-muted hover:text-brand-text text-sm transition-colors"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-brand-muted hover:text-brand-text text-sm transition-colors"
            @click="closeMenu"
          >
            <Github :size="16" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-brand-muted hover:text-brand-text text-sm transition-colors"
            @click="closeMenu"
          >
            <Linkedin :size="16" />
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

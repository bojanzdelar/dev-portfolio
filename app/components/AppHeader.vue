<script setup lang="ts">
import { Menu, X, Github, Linkedin } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-brand-border/80 bg-brand-bg/90 backdrop-blur-md">
    <nav class="mx-auto max-w-6xl px-6 lg:px-10" aria-label="Primary navigation">
      <div class="flex h-14 items-center justify-between">
        <a
          href="#hero"
          class="group flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          @click="closeMenu"
        >
          <span class="font-mono text-sm text-brand-accent">bz</span>
          <span class="hidden sm:inline text-xs font-mono text-brand-dim group-hover:text-brand-muted transition-colors uppercase tracking-[0.18em]">
            Bojan Zdelar / Index
          </span>
        </a>

        <div class="hidden md:flex items-center gap-7">
          <a
            v-for="(link, i) in navLinks"
            :key="link.href"
            :href="link.href"
            class="group inline-flex items-baseline gap-1.5 text-xs font-mono text-brand-muted hover:text-brand-text uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm px-0.5"
          >
            <span class="text-brand-dim/60 tabular-nums text-[10px] group-hover:text-brand-accent transition-colors">0{{ i + 1 }}</span>
            <span>{{ link.label }}</span>
          </a>
        </div>

        <div class="hidden md:flex items-center gap-4 pl-6 border-l border-brand-border">
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-muted hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
            aria-label="GitHub profile"
          >
            <Github :size="16" />
          </a>
          <a
            href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-muted hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm"
            aria-label="LinkedIn profile"
          >
            <Linkedin :size="16" />
          </a>
        </div>

        <button
          class="md:hidden text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm p-1"
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
        class="md:hidden pb-5 border-t border-brand-border/75 pt-4"
      >
        <div class="flex flex-col divide-y divide-brand-border/60">
          <a
            v-for="(link, i) in navLinks"
            :key="link.href"
            :href="link.href"
            class="flex items-center justify-between py-3 text-sm text-brand-muted hover:text-brand-text transition-colors"
            @click="closeMenu"
          >
            <span class="font-mono uppercase tracking-[0.18em] text-xs">{{ link.label }}</span>
            <span class="text-[10px] font-mono text-brand-dim tabular-nums">0{{ i + 1 }}</span>
          </a>
          <div class="flex items-center gap-5 pt-4">
            <a
              href="https://github.com/bojanzdelar"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-brand-muted hover:text-brand-text text-xs font-mono uppercase tracking-[0.18em]"
              @click="closeMenu"
            >
              <Github :size="14" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-brand-muted hover:text-brand-text text-xs font-mono uppercase tracking-[0.18em]"
              @click="closeMenu"
            >
              <Linkedin :size="14" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

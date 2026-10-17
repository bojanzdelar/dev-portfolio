<script setup lang="ts">
import { Menu, X, Github } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-sm">
    <nav class="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Primary navigation">
      <div class="flex h-16 items-center justify-between">
        <a
          href="#hero"
          class="text-slate-100 font-semibold text-base tracking-tight hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
          @click="closeMenu"
        >
          <span class="text-green-400 font-mono font-bold">BZ</span>
          <span class="ml-2 text-slate-400 text-sm hidden sm:inline">Bojan Zdelar</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-slate-400 hover:text-slate-100 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded px-1"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 hover:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded p-1"
            aria-label="GitHub profile"
          >
            <Github :size="18" />
          </a>
        </div>

        <button
          class="md:hidden text-slate-400 hover:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded p-1"
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
        class="md:hidden pb-4 border-t border-slate-800/60 pt-4"
      >
        <div class="flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-slate-400 hover:text-slate-100 text-sm transition-colors"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm transition-colors"
            @click="closeMenu"
          >
            <Github :size="16" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

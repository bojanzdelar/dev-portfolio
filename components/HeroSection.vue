<script setup lang="ts">
const techBadges = [
  'Java', 'Spring Boot', 'AWS', 'Docker', 'Terraform',
  'TypeScript', 'Vue.js', 'Python',
]
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-16"
    aria-label="Introduction"
  >
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.15]"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" aria-hidden="true" />

    <div class="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
      <div class="max-w-3xl">
        <p class="text-blue-400 text-xs font-mono mb-5 tracking-widest uppercase">
          Software Engineer · Serbia
        </p>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-[1.1] mb-6">
          Building reliable software,
          <span class="text-blue-400">from APIs to cloud infrastructure.</span>
        </h1>

        <p class="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
          I build backend systems, cloud-native applications, and API integrations
          using Java, Spring Boot, and AWS — focused on architecture that's
          maintainable, well-structured, and ready for real-world use.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Get in Touch
          </a>
        </div>

        <div class="flex flex-wrap gap-2" aria-label="Core technologies">
          <span
            v-for="tech in techBadges"
            :key="tech"
            class="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded px-2.5 py-1"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

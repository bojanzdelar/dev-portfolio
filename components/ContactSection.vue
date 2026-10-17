<script setup lang="ts">
import { Mail, Github } from 'lucide-vue-next'
import { CONTACT_EMAIL } from '~/utils/config'
</script>

<template>
  <section id="contact" class="py-24 lg:py-32" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-blue-400 text-xs font-mono mb-3 tracking-widest uppercase">Contact</p>
        <h2 id="contact-heading" class="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          Let's Work Together
        </h2>
        <p class="text-slate-400 leading-relaxed mb-10">
          If you have a backend, cloud, or full-stack project you'd like help with —
          or you'd like to discuss an integration, infrastructure challenge, or API build —
          feel free to reach out. I'm open to freelance engagements and project-based work.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Mail :size="18" aria-hidden="true" />
            Send an Email
          </a>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Github :size="18" aria-hidden="true" />
            GitHub Profile
          </a>
        </div>

        <p class="text-slate-600 text-xs font-mono mt-6">{{ CONTACT_EMAIL }}</p>
      </div>
    </div>
  </section>
</template>

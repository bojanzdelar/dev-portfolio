<script setup lang="ts">
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-vue-next'
import { CONTACT_EMAIL } from '~/utils/config'
</script>

<template>
  <section id="contact" class="py-16 lg:py-24 border-t border-slate-800/60" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Left: Message -->
        <div>
          <h2 id="contact-heading" class="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Let's Work Together
          </h2>
          <p class="text-slate-400 leading-relaxed text-sm max-w-md">
            If you have a backend, cloud, or full-stack project in mind — or you need help with
            an integration, infrastructure challenge, or API — feel free to reach out.
            I'm open to freelance engagements and project-based work.
          </p>
        </div>

        <!-- Right: Contact methods -->
        <div class="space-y-4">
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-green-800/60 hover:bg-green-950/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                <Mail :size="16" class="text-white" aria-hidden="true" />
              </div>
              <div>
                <p class="text-slate-200 text-sm font-semibold">Send an Email</p>
                <p class="text-slate-500 text-xs font-mono mt-0.5">{{ CONTACT_EMAIL }}</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-slate-600 group-hover:text-green-400 transition-colors" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Github :size="16" class="text-slate-400" aria-hidden="true" />
              </div>
              <div>
                <p class="text-slate-200 text-sm font-semibold">GitHub Profile</p>
                <p class="text-slate-500 text-xs font-mono mt-0.5">github.com/bojanzdelar</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-slate-600 group-hover:text-slate-400 transition-colors" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Linkedin :size="16" class="text-slate-400" aria-hidden="true" />
              </div>
              <div>
                <p class="text-slate-200 text-sm font-semibold">LinkedIn</p>
                <p class="text-slate-500 text-xs font-mono mt-0.5">linkedin.com/in/bojan-zdelar</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-slate-600 group-hover:text-slate-400 transition-colors" aria-hidden="true" />
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

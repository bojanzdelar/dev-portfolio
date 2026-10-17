<script setup lang="ts">
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-vue-next'
import { CONTACT_EMAIL } from '~/utils/config'
</script>

<template>
  <section id="contact" class="py-16 lg:py-24 border-t border-brand-border/75" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Left: Message -->
        <div>
          <h2 id="contact-heading" class="text-2xl sm:text-3xl font-bold text-brand-text mb-4">
            Let's Work Together
          </h2>
          <p class="text-brand-muted leading-relaxed text-base max-w-md">
            If you have a backend, cloud, or full-stack project in mind — feel free to reach out.
            I'm open to freelance engagements and project-based work.
          </p>
        </div>

        <!-- Right: Contact methods -->
        <div class="space-y-4">
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-brand-border bg-brand-surface/55 hover:border-brand-accent/25 hover:bg-brand-accent/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center shrink-0">
                <Mail :size="16" class="text-white" aria-hidden="true" />
              </div>
              <div>
                <p class="text-brand-text text-base font-semibold">Send an Email</p>
                <p class="text-brand-muted/65 text-sm font-mono mt-0.5">{{ CONTACT_EMAIL }}</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-brand-dim group-hover:text-brand-accent transition-colors" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-brand-border bg-brand-surface/55 hover:border-brand-hi hover:bg-brand-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-brand-border border border-brand-hi flex items-center justify-center shrink-0">
                <Github :size="16" class="text-brand-muted" aria-hidden="true" />
              </div>
              <div>
                <p class="text-brand-text text-base font-semibold">GitHub Profile</p>
                <p class="text-brand-muted/65 text-sm font-mono mt-0.5">github.com/bojanzdelar</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-brand-dim group-hover:text-brand-muted transition-colors" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between w-full px-6 py-5 rounded-xl border border-brand-border bg-brand-surface/55 hover:border-brand-hi hover:bg-brand-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 rounded-lg bg-brand-border border border-brand-hi flex items-center justify-center shrink-0">
                <Linkedin :size="16" class="text-brand-muted" aria-hidden="true" />
              </div>
              <div>
                <p class="text-brand-text text-base font-semibold">LinkedIn</p>
                <p class="text-brand-muted/65 text-sm font-mono mt-0.5">linkedin.com/in/bojan-zdelar</p>
              </div>
            </div>
            <ArrowRight :size="16" class="text-brand-dim group-hover:text-brand-muted transition-colors" aria-hidden="true" />
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

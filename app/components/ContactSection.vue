<script setup lang="ts">
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-vue-next'
import { CONTACT_EMAIL } from '~/utils/config'
</script>

<template>
  <section id="contact" class="pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">

      <!-- Section header -->
      <header class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 pb-5 border-b border-brand-border">
        <div class="lg:col-span-9">
          <p class="eyebrow mb-4">§ 05 / Get in touch</p>
          <h2 id="contact-heading" class="font-display text-4xl sm:text-5xl text-brand-text tracking-display leading-[1.02]">
            Have a project
            <span class="italic font-light text-brand-muted"> or just curious?</span>
          </h2>
        </div>
      </header>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">

        <!-- Left: the pitch -->
        <div class="lg:col-span-5">
          <p class="text-brand-text/90 text-lg leading-relaxed mb-5">
            I read every message. If you need a backend, a cloud architecture
            review, or an extra pair of hands on a Spring Boot / AWS project,
            send a short note.
          </p>
          <p class="text-brand-muted leading-relaxed">
            Reply usually within a day. For time-boxed engagements or a quick
            sanity-check on an architecture decision, that's often enough.
          </p>
        </div>

        <!-- Right: contact rail -->
        <div class="lg:col-span-7 lg:border-l lg:border-brand-border lg:pl-10">
          <!-- Primary email -->
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="group block border-b border-brand-border pb-8 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <div class="flex items-baseline justify-between gap-6">
              <div>
                <p class="eyebrow text-brand-accent/90 mb-3 flex items-center gap-2">
                  <Mail :size="12" aria-hidden="true" />
                  Primary
                </p>
                <p class="font-display text-2xl sm:text-3xl lg:text-4xl text-brand-text group-hover:text-brand-accent transition-colors tracking-display leading-tight break-all">
                  {{ CONTACT_EMAIL }}
                </p>
              </div>
              <ArrowUpRight
                :size="24"
                class="shrink-0 text-brand-dim group-hover:text-brand-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-2"
                aria-hidden="true"
              />
            </div>
          </a>

          <!-- Secondary links -->
          <dl class="divide-y divide-brand-border/60">
            <div class="flex items-center justify-between py-4">
              <dt class="eyebrow flex items-center gap-2">
                <Github :size="12" aria-hidden="true" />
                GitHub
              </dt>
              <dd>
                <a
                  href="https://github.com/bojanzdelar"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 font-mono text-sm text-brand-muted hover:text-brand-accent transition-colors"
                >
                  <span>github.com/bojanzdelar</span>
                  <ArrowUpRight :size="12" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
            <div class="flex items-center justify-between py-4">
              <dt class="eyebrow flex items-center gap-2">
                <Linkedin :size="12" aria-hidden="true" />
                LinkedIn
              </dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/bojan-zdelar-b9b617153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 font-mono text-sm text-brand-muted hover:text-brand-accent transition-colors"
                >
                  <span>linkedin.com/in/bojan-zdelar</span>
                  <ArrowUpRight :size="12" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
            <div class="flex items-center justify-between py-4">
              <dt class="eyebrow">Location</dt>
              <dd class="font-mono text-sm text-brand-muted">Novi Sad, Serbia · UTC+1</dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  </section>
</template>

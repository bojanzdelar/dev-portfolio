<script setup lang="ts">
const degrees = [
  {
    year: "2019-2023",
    kind: "Bachelor's",
    title: "Software and Information Engineering",
    school: "University Singidunum, Technical Faculty",
    gpa: "10.00",
    note: "Thesis: Specification and Implementation of a System for Model-Based Program Code Generation" as
      | string
      | null,
  },
  {
    year: "2023-2026",
    kind: "Master's",
    title: "Software and Information Engineering",
    school: "University Singidunum, Technical Faculty",
    gpa: "10.00",
    note: "Thesis: Architecture and Implementation of a Cloud-Native Video Streaming Platform on AWS Infrastructure",
  },
];
</script>

<template>
  <section
    id="education"
    class="pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border"
    aria-labelledby="education-heading"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <!-- Section header -->
      <header
        class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 pb-5 border-b border-brand-border"
      >
        <div class="lg:col-span-9">
          <p class="eyebrow mb-4">§ 02 / Credentials</p>
          <h2
            id="education-heading"
            class="font-display text-4xl sm:text-5xl text-brand-text tracking-display leading-[1.02]"
          >
            Education
            <span class="italic font-light text-brand-muted">
              &amp; Certifications</span
            >
          </h2>
        </div>
      </header>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <!-- Degrees -->
        <ol class="lg:col-span-8 divide-y divide-brand-border">
          <li
            v-for="d in degrees"
            :key="d.kind"
            class="grid grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,auto] gap-x-6 lg:gap-x-10 gap-y-2 py-8 first:pt-0"
          >
            <span
              class="font-mono text-xs text-brand-dim/80 tabular-nums pt-2 uppercase tracking-[0.14em]"
            >
              {{ d.year }}
            </span>
            <div>
              <p class="eyebrow text-brand-accent/90 mb-2">
                {{ d.kind }} degree
              </p>
              <h3
                class="font-display text-2xl lg:text-3xl text-brand-text leading-tight mb-1.5"
              >
                {{ d.title }}
              </h3>
              <p class="text-brand-muted text-sm">{{ d.school }}</p>
              <p
                v-if="d.note"
                class="mt-3 text-brand-muted/80 text-sm italic font-display"
              >
                {{ d.note }}
              </p>
            </div>
            <div class="col-start-2 lg:col-start-3 lg:text-right lg:pt-2">
              <p class="eyebrow mb-1">Average grade</p>
              <p class="font-mono text-xl text-brand-accent tabular-nums">
                {{ d.gpa }}<span class="text-brand-dim/60 text-sm"> / 10</span>
              </p>
            </div>
          </li>
        </ol>

        <!-- Certification -->
        <aside
          class="lg:col-span-4 lg:border-l lg:border-brand-border lg:pl-10"
        >
          <p class="eyebrow mb-5">Certifications</p>
          <div class="flex items-start gap-5 mb-6">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              alt="Amazon Web Services"
              class="w-12 h-12 shrink-0 opacity-90"
            />
            <div>
              <h3 class="font-display text-2xl text-brand-text leading-tight">
                Solutions Architect
              </h3>
              <p class="text-brand-muted text-sm mt-1">
                Associate · Amazon Web Services
              </p>
            </div>
          </div>

          <dl
            class="font-mono text-xs text-brand-dim border-t border-brand-border pt-4 space-y-2"
          >
            <div class="flex items-baseline justify-between">
              <dt class="uppercase tracking-[0.18em]">Status</dt>
              <dd class="text-brand-accent">Certified</dd>
            </div>
            <div class="flex items-baseline justify-between">
              <dt class="uppercase tracking-[0.18em]">Issuer</dt>
              <dd class="text-brand-muted">AWS</dd>
            </div>
            <div class="flex items-baseline justify-between">
              <dt class="uppercase tracking-[0.18em]">Code</dt>
              <dd class="text-brand-muted">SAA-C03</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

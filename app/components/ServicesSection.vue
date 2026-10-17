<script setup lang="ts">
interface Offering {
  title: string
  body: string
  tags: string[]
}

interface Group {
  heading: string
  no: string
  items: Offering[]
}

const groups: Group[] = [
  {
    no: '01',
    heading: 'Backend engineering',
    items: [
      {
        title: 'REST APIs in Java / Spring Boot',
        body: 'Service design with explicit contracts, error semantics, versioning strategy, and tests that run in CI — not just happy-path integration tests.',
        tags: ['Java', 'Spring Boot', 'OpenAPI'],
      },
      {
        title: 'Microservice refactors',
        body: 'Splitting a monolith by data ownership rather than by endpoint. Deciding what moves, what stays, and what happens to shared state.',
        tags: ['Spring Cloud', 'Service boundaries'],
      },
    ],
  },
  {
    no: '02',
    heading: 'AWS architecture & IaC',
    items: [
      {
        title: 'Cloud architecture on AWS',
        body: 'Picking the right primitives — ECS vs Lambda, SQS vs Kinesis, DynamoDB vs Postgres — based on actual access patterns, cost, and operational blast radius.',
        tags: ['ECS/Fargate', 'Lambda', 'S3', 'CloudFront'],
      },
      {
        title: 'Infrastructure as code',
        body: 'Terraform for the primitives, CDK for higher-level app constructs. Reviewable PRs instead of console drift.',
        tags: ['Terraform', 'AWS CDK', 'GitHub Actions'],
      },
    ],
  },
  {
    no: '03',
    heading: 'Full-stack & integrations',
    items: [
      {
        title: 'Full-stack features end-to-end',
        body: 'Vue/Nuxt front end wired cleanly to a Spring Boot or Flask backend. One person owning the whole feature from API design to UI state.',
        tags: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      },
      {
        title: 'Third-party integrations & automation',
        body: 'Auth providers, payment flows, data pipelines. Python or shell when it is faster to script than to configure.',
        tags: ['Cognito', 'REST clients', 'Python'],
      },
    ],
  },
]
</script>

<template>
  <section id="services" class="pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border" aria-labelledby="services-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">

      <!-- Section header -->
      <header class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 pb-5 border-b border-brand-border">
        <div class="lg:col-span-9">
          <p class="eyebrow mb-4">§ 04 — Working together</p>
          <h2 id="services-heading" class="font-display text-4xl sm:text-5xl text-brand-text tracking-display leading-[1.02]">
            Short-list of
            <span class="italic font-light text-brand-muted"> things worth hiring me for.</span>
          </h2>
        </div>
        <p class="lg:col-span-3 lg:text-right text-brand-muted text-sm leading-relaxed lg:pt-3">
          Freelance &amp; project-based engagements. Remote-friendly, UTC+1.
        </p>
      </header>

      <!-- Groups -->
      <div class="space-y-16 lg:space-y-20">
        <section
          v-for="group in groups"
          :key="group.heading"
          class="grid lg:grid-cols-12 gap-6 lg:gap-10"
        >
          <header class="lg:col-span-3">
            <div class="flex items-baseline gap-3 lg:sticky lg:top-20">
              <span class="font-mono text-xs text-brand-dim/80 tabular-nums pt-1">{{ group.no }}</span>
              <h3 class="font-display text-2xl lg:text-3xl text-brand-text leading-tight">
                {{ group.heading }}
              </h3>
            </div>
          </header>

          <ol class="lg:col-span-9 divide-y divide-brand-border">
            <li
              v-for="item in group.items"
              :key="item.title"
              class="py-6 first:pt-0 last:pb-0"
            >
              <h4 class="font-display text-xl text-brand-text leading-snug mb-2">
                {{ item.title }}
              </h4>
              <p class="text-brand-muted leading-relaxed mb-3">{{ item.body }}</p>
              <ul class="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-brand-dim">
                <li
                  v-for="(tag, i) in item.tags"
                  :key="tag"
                  class="flex items-baseline gap-4"
                >
                  <span>{{ tag }}</span>
                  <span v-if="i < item.tags.length - 1" class="text-brand-border select-none" aria-hidden="true">/</span>
                </li>
              </ul>
            </li>
          </ol>
        </section>
      </div>

    </div>
  </section>
</template>

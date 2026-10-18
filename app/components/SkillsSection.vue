<script setup lang="ts">
interface Category {
  name: string
  no: string
  primary: string[]
  secondary: string[]
}

const categories: Category[] = [
  {
    name: 'Backend',
    no: '01',
    primary: ['Java', 'Spring Boot'],
    secondary: ['REST APIs', 'Microservices', 'Spring Security'],
  },
  {
    name: 'Cloud & Infrastructure',
    no: '02',
    primary: ['AWS', 'Terraform'],
    secondary: ['Docker', 'ECS/Fargate', 'Lambda', 'S3', 'CloudFront', 'API Gateway', 'EC2'],
  },
  {
    name: 'Data & Search',
    no: '03',
    primary: ['DynamoDB', 'OpenSearch'],
    secondary: ['MySQL', 'SQLAlchemy'],
  },
  {
    name: 'Frontend',
    no: '04',
    primary: ['TypeScript', 'Vue.js', 'Nuxt.js'],
    secondary: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Automation',
    no: '05',
    primary: ['Python', 'Shell'],
    secondary: ['CI/CD', 'AWS automation', 'API integrations'],
  },
]
</script>

<template>
  <section id="skills" class="pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border" aria-labelledby="skills-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">

      <!-- Section header -->
      <header class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 pb-5 border-b border-brand-border">
        <div class="lg:col-span-9">
          <p class="eyebrow mb-4">§ 02 / Stack</p>
          <h2 id="skills-heading" class="font-display text-4xl sm:text-5xl text-brand-text tracking-display leading-[1.02]">
            Tools I actually reach for
            <span class="italic font-light text-brand-muted">, not tools I've installed once.</span>
          </h2>
        </div>
        <p class="lg:col-span-3 lg:text-right text-brand-muted text-sm leading-relaxed lg:pt-3">
          Everything below has shipped in a project on this page.
        </p>
      </header>

      <!-- Categories -->
      <ol class="divide-y divide-brand-border">
        <li
          v-for="cat in categories"
          :key="cat.name"
          class="grid grid-cols-[auto,1fr] lg:grid-cols-[auto,1fr,2fr] gap-x-6 lg:gap-x-10 gap-y-3 py-7 first:pt-0"
        >
          <span class="font-mono text-xs text-brand-dim/80 tabular-nums pt-2">{{ cat.no }}</span>
          <div class="flex items-baseline gap-x-3 flex-wrap">
            <h3 class="font-display text-2xl lg:text-3xl text-brand-text leading-tight">
              {{ cat.name }}
            </h3>
          </div>
          <div class="col-start-2 lg:col-start-3">
            <ul class="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-sm">
              <li
                v-for="tech in cat.primary"
                :key="tech"
                class="text-brand-text"
              >
                {{ tech }}
              </li>
              <li v-if="cat.secondary.length" class="text-brand-border select-none" aria-hidden="true">·</li>
              <li
                v-for="tech in cat.secondary"
                :key="tech"
                class="text-brand-muted/80"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </li>
      </ol>

    </div>
  </section>
</template>

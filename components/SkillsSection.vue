<script setup lang="ts">
interface SkillCategory {
  name: string
  skills: string[]
  primary?: boolean
}

const primary: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Spring Security'],
    primary: true,
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'Terraform', 'AWS CDK', 'Docker', 'ECS/Fargate', 'Lambda', 'S3', 'CloudFront', 'API Gateway', 'EC2'],
    primary: true,
  },
]

const secondary: SkillCategory[] = [
  {
    name: 'Data & Search',
    skills: ['DynamoDB', 'MySQL', 'OpenSearch', 'SQLAlchemy'],
  },
  {
    name: 'Frontend',
    skills: ['TypeScript', 'JavaScript', 'Vue.js', 'Nuxt.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    name: 'Automation & Tooling',
    skills: ['Python', 'Shell scripting', 'CI/CD', 'AWS automation', 'API integrations'],
  },
]
</script>

<template>
  <section id="skills" class="py-16 lg:py-24 border-t border-slate-800/60" aria-labelledby="skills-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-slate-800">
        <h2 id="skills-heading" class="text-2xl sm:text-3xl font-bold text-slate-100 mb-1.5">
          Technical Skills
        </h2>
        <p class="text-slate-500 text-sm">
          Applied across real projects — no arbitrary proficiency scores.
        </p>
      </div>

      <!-- Primary categories: Backend + Cloud -->
      <div class="grid sm:grid-cols-2 gap-5 mb-5">
        <div
          v-for="category in primary"
          :key="category.name"
          class="rounded-lg border border-slate-700/50 bg-slate-900/50 p-6"
        >
          <h3 class="text-sm font-semibold text-slate-200 mb-4">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700/60 rounded px-2 py-0.5"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Secondary categories: Data, Frontend, Automation -->
      <div class="grid sm:grid-cols-3 gap-5">
        <div
          v-for="category in secondary"
          :key="category.name"
          class="rounded-lg border border-slate-800 bg-slate-900/30 p-5"
        >
          <h3 class="text-sm font-semibold text-slate-300 mb-3">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="text-xs font-mono text-slate-500 bg-slate-800/60 border border-slate-800 rounded px-2 py-0.5"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

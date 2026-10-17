<script setup lang="ts">
interface SkillCategory {
  name: string
  skills: string[]
}

const categories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Spring Security'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'Terraform', 'AWS CDK', 'Docker', 'ECS/Fargate', 'Lambda', 'S3', 'CloudFront', 'API Gateway', 'EC2'],
  },
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
  <section id="skills" class="py-24 lg:py-32 bg-slate-900/20" aria-labelledby="skills-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mb-16">
        <p class="text-blue-400 text-xs font-mono mb-3 tracking-widest uppercase">Capabilities</p>
        <h2 id="skills-heading" class="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          Technical Skills
        </h2>
        <p class="text-slate-400 max-w-xl">
          Skills applied across real projects — no arbitrary proficiency scores.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in categories"
          :key="category.name"
          class="rounded-lg border border-slate-800 bg-slate-900/40 p-6"
        >
          <h3 class="text-sm font-semibold text-slate-200 mb-4">{{ category.name }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60 rounded px-2 py-0.5"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

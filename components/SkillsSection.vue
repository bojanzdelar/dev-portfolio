<script setup lang="ts">
const categories = [
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

const iconMap: Record<string, string> = {
  'Java': 'openjdk',
  'Spring Boot': 'springboot',
  'Docker': 'docker',
  'Terraform': 'terraform',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'Vue.js': 'vuedotjs',
  'Nuxt.js': 'nuxt',
  'HTML': 'html5',
  'CSS': 'css',
  'Tailwind CSS': 'tailwindcss',
  'Python': 'python',
  'MySQL': 'mysql',
  'OpenSearch': 'opensearch',
  'SQLAlchemy': 'sqlalchemy',
}

function iconUrl(skill: string): string | null {
  const slug = iconMap[skill]
  return slug ? `https://cdn.simpleicons.org/${slug}/9AA79E` : null
}
</script>

<template>
  <section id="skills" class="py-16 lg:py-24 border-t border-brand-border/75" aria-labelledby="skills-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-brand-border">
        <h2 id="skills-heading" class="text-2xl sm:text-3xl font-bold text-brand-text">
          Technical Skills
        </h2>
      </div>

      <div class="divide-y divide-brand-border/60">
        <div
          v-for="category in categories"
          :key="category.name"
          class="py-5 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
        >
          <span class="text-xs font-mono text-brand-dim uppercase tracking-widest sm:w-48 sm:shrink-0 sm:pt-1.5">
            {{ category.name }}
          </span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="inline-flex items-center gap-1.5 text-sm font-mono text-brand-muted bg-brand-surface/65 border border-brand-border rounded-md px-3 py-1.5 hover:border-brand-hi hover:text-brand-text/80 transition-colors"
            >
              <img
                v-if="iconUrl(skill)"
                :src="iconUrl(skill)!"
                :alt="skill"
                class="w-4 h-4 shrink-0"
                aria-hidden="true"
              />
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

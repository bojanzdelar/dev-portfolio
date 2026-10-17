<script setup lang="ts">
useSeoMeta({
  title: 'Bojan Zdelar — Software Engineer',
  ogTitle: 'Bojan Zdelar — Software Engineer',
  description: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development. Based in Serbia.',
  ogDescription: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development. Based in Serbia.',
  ogUrl: 'https://dev.zdelar.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Bojan Zdelar — Software Engineer',
  twitterDescription: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://dev.zdelar.com' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <AppHeader />
    <main id="main-content">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

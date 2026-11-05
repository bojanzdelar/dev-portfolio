<script setup lang="ts">
useSeoMeta({
  title: 'Bojan Zdelar | Software Engineer',
  ogTitle: 'Bojan Zdelar | Software Engineer',
  description: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development. Based in Serbia.',
  ogDescription: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development. Based in Serbia.',
  ogUrl: 'https://dev.zdelar.com',
  ogType: 'website',
  ogImage: 'https://dev.zdelar.com/og-image.png',
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Bojan Zdelar logo',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://dev.zdelar.com/og-image.png',
  twitterTitle: 'Bojan Zdelar | Software Engineer',
  twitterDescription: 'Software engineer specializing in Java, Spring Boot, AWS cloud architecture, and full-stack development.',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://dev.zdelar.com' },
  ],
})
</script>

<template>
  <div class="page-bg min-h-screen text-brand-text font-sans antialiased">
    <AppHeader />
    <main id="main-content">
      <HeroSection />
      <ServicesSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const today = new Date().toISOString().slice(0, 10)
</script>

<template>
  <section
    id="hero"
    class="relative pt-28 lg:pt-32 pb-20 lg:pb-28"
    aria-label="Introduction"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-10">

      <!-- Masthead strip -->
      <div class="flex items-center justify-between border-b border-brand-border pb-4 mb-14 lg:mb-20 text-[11px] font-mono text-brand-dim uppercase tracking-[0.18em]">
        <span class="flex items-center gap-2">
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full rounded-full bg-brand-accent/60 animate-ping"></span>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-accent"></span>
          </span>
          <span class="text-brand-accent/90">Available · Q4 2026</span>
        </span>
        <span class="hidden sm:inline tabular-nums">{{ today }} · Novi Sad, RS</span>
        <span class="sm:hidden tabular-nums">RS</span>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        <!-- Headline column -->
        <div class="lg:col-span-8">
          <h1 class="font-display font-normal text-brand-text leading-[0.98] tracking-display text-[2.75rem] sm:text-6xl lg:text-[5.25rem] xl:text-[6rem]">
            Backend &amp; cloud<br class="hidden sm:block" />
            engineer who likes<br class="hidden sm:block" />
            <span class="italic font-light text-brand-accent">systems that don&rsquo;t surprise anyone at 3&nbsp;a.m.</span>
          </h1>

          <div class="mt-10 lg:mt-14 grid sm:grid-cols-[auto,1fr] gap-x-10 gap-y-4 max-w-2xl">
            <p class="eyebrow pt-1">The pitch</p>
            <p class="text-brand-muted text-base lg:text-lg leading-relaxed">
              I build Java/Spring Boot services, deploy them on AWS with Terraform and CDK,
              and keep the pipeline from upload to CloudFront boring enough to sleep on.
              Lately: an HLS video platform on ECS/Fargate with S3 + MediaConvert + DynamoDB + OpenSearch.
            </p>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#projects"
              class="group inline-flex items-center gap-2 text-sm font-medium text-brand-bg bg-brand-accent hover:bg-brand-accent/90 px-5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Read the Nexa case study
              <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-text transition-colors border-b border-brand-border hover:border-brand-accent pb-0.5"
            >
              Or just email me
            </a>
          </div>
        </div>

        <!-- Side column: photo + metadata -->
        <aside class="lg:col-span-4 lg:pt-2">
          <figure class="relative">
            <img
              src="/profile.jpg"
              alt="Portrait of Bojan Zdelar"
              class="w-full max-w-xs lg:max-w-none aspect-[4/5] object-cover object-top grayscale contrast-[1.05]"
            />
            <figcaption class="mt-3 eyebrow flex items-center justify-between">
              <span>Bojan Zdelar</span>
              <span class="text-brand-dim/70">01</span>
            </figcaption>
          </figure>

          <dl class="mt-8 pt-6 border-t border-brand-border text-sm">
            <div class="flex items-baseline justify-between py-2 border-b border-brand-border/60">
              <dt class="eyebrow">Focus</dt>
              <dd class="text-brand-text/85 font-mono text-xs">Backend · AWS</dd>
            </div>
            <div class="flex items-baseline justify-between py-2 border-b border-brand-border/60">
              <dt class="eyebrow">Primary</dt>
              <dd class="text-brand-text/85 font-mono text-xs">Java · Spring Boot</dd>
            </div>
            <div class="flex items-baseline justify-between py-2 border-b border-brand-border/60">
              <dt class="eyebrow">Cloud</dt>
              <dd class="text-brand-text/85 font-mono text-xs">ECS · Lambda · S3</dd>
            </div>
            <div class="flex items-baseline justify-between py-2 border-b border-brand-border/60">
              <dt class="eyebrow">IaC</dt>
              <dd class="text-brand-text/85 font-mono text-xs">Terraform · CDK</dd>
            </div>
            <div class="flex items-baseline justify-between py-2">
              <dt class="eyebrow">Working from</dt>
              <dd class="text-brand-text/85 font-mono text-xs">Serbia · UTC+1</dd>
            </div>
          </dl>
        </aside>

      </div>
    </div>
  </section>
</template>

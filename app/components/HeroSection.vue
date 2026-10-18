<template>
  <section
    id="hero"
    class="relative pt-28 lg:pt-32 pb-20 lg:pb-28"
    aria-label="Introduction"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <!-- Headline column -->
        <div class="lg:col-span-8">
          <h1
            class="font-display font-normal text-brand-text leading-[0.98] tracking-display text-[2.75rem] sm:text-6xl lg:text-[5.25rem] xl:text-[6rem]"
          >
            Backend &amp; cloud<br class="hidden sm:block" />
            engineer who likes<br class="hidden sm:block" />
            <span class="italic font-light text-brand-accent"
              >systems that don&rsquo;t surprise anyone at 3&nbsp;a.m.</span
            >
          </h1>

          <div
            class="mt-10 lg:mt-14 grid sm:grid-cols-[auto,1fr] gap-x-10 gap-y-4 max-w-2xl"
          >
            <p class="eyebrow pt-1">The pitch</p>
            <p class="text-brand-muted text-base lg:text-lg leading-relaxed">
              I build backend services with Java and Spring Boot, design cloud
              infrastructure on AWS, and automate deployments with Terraform. I
              care about clean architecture, reliable systems, and understanding
              how the pieces fit together. Nexa, my cloud-native video streaming
              platform, is one example of that work.
            </p>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#work"
              class="group inline-flex items-center gap-2 text-sm font-medium text-brand-bg bg-brand-accent hover:bg-brand-accent/90 px-5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Read the Nexa case study
              <span
                aria-hidden="true"
                class="transition-transform group-hover:translate-x-0.5"
                >&rarr;</span
              >
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
              class="w-full max-w-xs lg:max-w-none aspect-[4/5] object-cover object-top"
            />
          </figure>

          <dl class="mt-8 pt-6 border-t border-brand-border space-y-3">
            <div class="pb-3 border-b border-brand-border/60">
              <dt class="eyebrow mb-1">Specialty</dt>
              <dd class="text-brand-text/85 font-mono text-xs leading-snug">
                Backend engineering · Cloud architecture
              </dd>
            </div>
            <div class="pb-3 border-b border-brand-border/60">
              <dt class="eyebrow mb-1">Backend</dt>
              <dd class="text-brand-text/85 font-mono text-xs leading-snug">
                Java · Spring Boot · Hibernate · REST APIs
              </dd>
            </div>
            <div class="pb-3 border-b border-brand-border/60">
              <dt class="eyebrow mb-1">Frontend</dt>
              <dd class="text-brand-text/85 font-mono text-xs leading-snug">
                TypeScript · Vue.js · Nuxt.js · Angular
              </dd>
            </div>
            <div class="pb-3 border-b border-brand-border/60">
              <dt class="eyebrow mb-1">AWS</dt>
              <dd class="text-brand-text/85 font-mono text-xs leading-snug">
                ECS / Fargate · Lambda · S3 · DynamoDB · RDS · OpenSearch
              </dd>
            </div>
            <div>
              <dt class="eyebrow mb-1">Infrastructure</dt>
              <dd class="text-brand-text/85 font-mono text-xs leading-snug">
                Terraform · Docker · CI/CD
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

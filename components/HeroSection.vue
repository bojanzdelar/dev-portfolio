<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-16"
    aria-label="Introduction"
  >
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:56px_56px] opacity-20"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28 w-full">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <!-- Left: Headline and CTAs -->
        <div class="lg:col-span-3">
          <p
            class="text-brand-accent text-xs font-mono mb-5 tracking-widest uppercase"
          >
            Software Engineer · Serbia
          </p>

          <h1
            class="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-brand-text leading-[1.08] mb-6"
          >
            Building reliable software,
            <span class="text-brand-accent"
              >from APIs to cloud infrastructure.</span
            >
          </h1>

          <p class="text-lg text-brand-muted mb-10 leading-relaxed max-w-lg">
            I build backend systems, cloud-native applications, and API
            integrations using Java, Spring Boot, and AWS — focused on
            architecture that's maintainable and built for real-world use.
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              class="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent/85 text-white text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="inline-flex items-center px-6 py-3 border border-brand-hi hover:border-brand-muted/55 text-brand-text/80 hover:text-brand-text text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Right: Profile card (desktop only) -->
        <div class="hidden lg:block lg:col-span-2">
          <div
            class="rounded-xl border border-brand-border bg-brand-surface/65 overflow-hidden"
          >
            <img
              src="/profile.jpg"
              alt="Bojan Zdelar"
              class="w-full aspect-square object-cover object-top"
            />
            <div
              class="px-5 py-3.5 border-b border-brand-border flex items-center gap-2.5"
            >
              <span
                class="w-2 h-2 rounded-full bg-brand-accent ring-4 ring-brand-accent/10"
                aria-hidden="true"
              />
              <span class="text-xs font-mono text-brand-muted"
                >Available for freelance work</span
              >
            </div>

            <dl class="p-6 space-y-6 font-mono text-sm">
              <div>
                <dt
                  class="text-brand-dim text-[10px] uppercase tracking-widest mb-3"
                >
                  Specialization
                </dt>
                <dd class="space-y-1.5">
                  <p class="text-brand-text/80">Backend Systems &amp; APIs</p>
                  <p class="text-brand-text/80">Cloud Architecture (AWS)</p>
                  <p class="text-brand-text/80">Infrastructure as Code</p>
                  <p class="text-brand-text/80">Full-Stack Development</p>
                </dd>
              </div>

              <div class="border-t border-brand-border pt-6">
                <dt
                  class="text-brand-dim text-[10px] uppercase tracking-widest mb-3"
                >
                  Location
                </dt>
                <dd class="text-brand-text/80">Serbia · Remote-friendly</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techBadges = [
  'Java', 'Spring Boot', 'AWS', 'Docker', 'Terraform',
  'TypeScript', 'Vue.js', 'Python',
]
</script>

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
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" aria-hidden="true" />

    <div class="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28 w-full">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <!-- Left: Headline and CTAs -->
        <div class="lg:col-span-3">
          <p class="text-blue-400 text-xs font-mono mb-5 tracking-widest uppercase">
            Software Engineer · Serbia
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-slate-100 leading-[1.08] mb-6">
            Building reliable software,
            <span class="text-blue-400">from APIs to cloud infrastructure.</span>
          </h1>

          <p class="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
            I build backend systems, cloud-native applications, and API integrations
            using Java, Spring Boot, and AWS — focused on architecture that's
            maintainable and built for real-world use.
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="inline-flex items-center px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get in Touch
            </a>
          </div>

          <div class="flex flex-wrap gap-2" aria-label="Core technologies">
            <span
              v-for="tech in techBadges"
              :key="tech"
              class="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 hover:text-slate-300 hover:border-slate-700 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right: Profile card (desktop only) -->
        <div class="hidden lg:block lg:col-span-2">
          <div class="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Bojan Zdelar"
              class="w-full aspect-square object-cover object-top"
            />
            <div class="px-5 py-3.5 border-b border-slate-800 flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-green-400 ring-4 ring-green-400/10" aria-hidden="true" />
              <span class="text-xs font-mono text-slate-400">Available for freelance work</span>
            </div>

            <dl class="p-6 space-y-6 font-mono text-sm">
              <div>
                <dt class="text-slate-600 text-[10px] uppercase tracking-widest mb-3">Specialization</dt>
                <dd class="space-y-1.5">
                  <p class="text-slate-300">Backend Systems &amp; APIs</p>
                  <p class="text-slate-300">Cloud Architecture (AWS)</p>
                  <p class="text-slate-300">Infrastructure as Code</p>
                  <p class="text-slate-300">Full-Stack Development</p>
                </dd>
              </div>

              <div class="border-t border-slate-800/80 pt-6">
                <dt class="text-slate-600 text-[10px] uppercase tracking-widest mb-3">Education</dt>
                <dd class="space-y-4">
                  <div>
                    <p class="text-slate-300">B.Sc. Software Engineering</p>
                    <p class="text-slate-500 text-xs mt-1">
                      University Singidunum
                      <span class="text-blue-500 ml-1">10.0 / 10.0</span>
                    </p>
                  </div>
                  <div>
                    <p class="text-slate-300">
                      M.Sc. Cloud Architecture
                      <span class="text-slate-600 font-sans text-xs ml-1">(in progress)</span>
                    </p>
                    <p class="text-slate-500 text-xs mt-1">Thesis: Nexa streaming platform</p>
                  </div>
                </dd>
              </div>

              <div class="border-t border-slate-800/80 pt-6">
                <dt class="text-slate-600 text-[10px] uppercase tracking-widest mb-3">Location</dt>
                <dd class="text-slate-300">Serbia · Remote-friendly</dd>
              </div>
            </dl>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

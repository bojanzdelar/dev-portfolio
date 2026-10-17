<template>
  <section id="about" class="py-24 lg:py-32" aria-labelledby="about-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mb-16">
        <p class="text-blue-400 text-xs font-mono mb-3 tracking-widest uppercase">Background</p>
        <h2 id="about-heading" class="text-3xl sm:text-4xl font-bold text-slate-100">
          About
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div class="space-y-6">
          <p class="text-slate-300 leading-relaxed">
            I'm a software engineer based in Serbia, focused on building backend systems and
            cloud infrastructure. My work spans REST API development, containerized microservices,
            AWS architecture, and full-stack application engineering.
          </p>
          <p class="text-slate-400 leading-relaxed">
            I approach engineering problems practically — understanding the system first,
            writing maintainable code second, and avoiding unnecessary complexity throughout.
            I'm particularly interested in the intersection of application architecture and
            cloud infrastructure: how software is designed to run, scale, and be maintained
            over time.
          </p>
          <p class="text-slate-400 leading-relaxed">
            My master's thesis project, Nexa, gave me the opportunity to design a full
            cloud-native platform from scratch — working across microservice design,
            AWS service composition, infrastructure as code, and video delivery pipelines
            as a coherent system.
          </p>
        </div>

        <div class="space-y-8">
          <div class="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
            <h3 class="text-sm font-semibold text-slate-200 mb-4 font-mono">Education</h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-start justify-between gap-4 mb-1">
                  <p class="text-slate-300 text-sm font-medium">Software and Information Engineering</p>
                  <span class="text-xs text-blue-400 font-mono shrink-0">10/10</span>
                </div>
                <p class="text-slate-500 text-sm">University Singidunum — Technical Faculty</p>
                <p class="text-slate-600 text-xs mt-1">Bachelor's degree · Diploma thesis grade: 10/10</p>
              </div>
              <div class="border-t border-slate-800 pt-4">
                <div class="flex items-start justify-between gap-4 mb-1">
                  <p class="text-slate-300 text-sm font-medium">Master's Degree <span class="text-slate-500 font-normal">(in progress)</span></p>
                </div>
                <p class="text-slate-500 text-sm">Cloud-native architecture and video streaming</p>
                <p class="text-slate-600 text-xs mt-1">Thesis: Nexa — a cloud-native video streaming platform on AWS</p>
              </div>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
            <h3 class="text-sm font-semibold text-slate-200 mb-4 font-mono">Engineering Interests</h3>
            <ul class="space-y-2">
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-blue-500 shrink-0">→</span>
                Cloud-native application design and AWS service composition
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-blue-500 shrink-0">→</span>
                Infrastructure as code and reproducible environments
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-blue-500 shrink-0">→</span>
                API design, microservice boundaries, and system integration
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-blue-500 shrink-0">→</span>
                Backend engineering with Java and Spring Boot
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

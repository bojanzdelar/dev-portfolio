<template>
  <section id="about" class="py-16 lg:py-24" aria-labelledby="about-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-slate-800">
        <h2 id="about-heading" class="text-2xl sm:text-3xl font-bold text-slate-100 mb-1.5">
          About
        </h2>
        <p class="text-slate-500 text-sm">Background, education, and what I care about in engineering.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">

        <!-- Text -->
        <div>
          <p class="text-slate-300 leading-relaxed mb-5">
            I'm a software engineer based in Serbia with a focus on backend systems and cloud
            infrastructure. My work spans REST API development, containerized microservices on
            AWS, and full-stack application engineering.
          </p>
          <p class="text-slate-500 leading-relaxed mb-5">
            I approach engineering problems practically — understanding the system first,
            writing maintainable code second, and avoiding unnecessary complexity throughout.
            I'm particularly interested in the intersection of application architecture and
            cloud infrastructure: how software is designed to run, scale, and be operated
            over time.
          </p>
          <p class="text-slate-500 leading-relaxed">
            My master's thesis project, Nexa, was an opportunity to design a full cloud-native
            platform from scratch — microservice decomposition, AWS service composition,
            infrastructure as code, and a video delivery pipeline treated as one coherent system.
          </p>
        </div>

        <!-- Sidebar -->
        <div class="space-y-5">

          <div class="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
            <h3 class="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">Education</h3>
            <div class="space-y-5">
              <div>
                <div class="flex items-baseline justify-between gap-4 mb-1">
                  <p class="text-slate-200 text-sm font-semibold">Software and Information Engineering</p>
                  <span class="text-xs text-green-400 font-mono shrink-0 tabular-nums">10.0 / 10.0</span>
                </div>
                <p class="text-slate-500 text-sm">University Singidunum — Technical Faculty</p>
                <p class="text-slate-600 text-xs mt-1">Bachelor's degree · Diploma thesis: 10.0 / 10.0</p>
              </div>
              <div class="border-t border-slate-800 pt-5">
                <div class="flex items-baseline justify-between gap-4 mb-1">
                  <p class="text-slate-200 text-sm font-semibold">Software and Information Engineering</p>
                  <span class="text-xs text-green-400 font-mono shrink-0 tabular-nums">10.0 / 10.0</span>
                </div>
                <p class="text-slate-500 text-sm">University Singidunum — Technical Faculty</p>
                <p class="text-slate-600 text-xs mt-1">Master's degree · Thesis: Nexa — cloud-native video streaming platform on AWS</p>
              </div>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
            <h3 class="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">Engineering Interests</h3>
            <ul class="space-y-3">
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-slate-700 shrink-0 mt-0.5 text-xs">—</span>
                Cloud-native application design and AWS service composition
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-slate-700 shrink-0 mt-0.5 text-xs">—</span>
                Infrastructure as code and reproducible environments
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-slate-700 shrink-0 mt-0.5 text-xs">—</span>
                API design, microservice boundaries, and system integration
              </li>
              <li class="text-slate-400 text-sm flex gap-3">
                <span class="text-slate-700 shrink-0 mt-0.5 text-xs">—</span>
                Backend engineering with Java and Spring Boot
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

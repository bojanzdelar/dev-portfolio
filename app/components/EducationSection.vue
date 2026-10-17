<template>
  <section id="education" class="py-16 lg:py-24 border-t border-brand-border/75" aria-labelledby="education-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="mb-10 pb-8 border-b border-brand-border">
        <h2 id="education-heading" class="text-2xl sm:text-3xl font-bold text-brand-text">
          Education & Certifications
        </h2>
      </div>

      <div class="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

        <!-- Timeline: degrees -->
        <div class="lg:col-span-3">
          <div class="relative">
            <div class="absolute left-[7px] top-3 bottom-3 w-px bg-brand-border" aria-hidden="true" />

            <!-- B.Sc. -->
            <div class="relative pl-10 pb-12">
              <div class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-brand-accent/60 bg-brand-bg ring-4 ring-brand-accent/8" aria-hidden="true" />
              <p class="text-xs font-mono text-brand-dim uppercase tracking-widest mb-2">Bachelor's Degree</p>
              <h3 class="text-xl font-bold text-brand-text mb-1.5">Software and Information Engineering</h3>
              <p class="text-brand-muted/70 text-sm mb-5">University Singidunum — Technical Faculty</p>
              <div class="inline-flex items-center gap-2.5 bg-brand-accent/8 border border-brand-accent/15 rounded-lg px-4 py-2">
                <span class="text-xs font-mono text-brand-dim uppercase tracking-wider">GPA</span>
                <span class="text-brand-accent font-mono font-bold">10.0 / 10.0</span>
              </div>
            </div>

            <!-- M.Sc. -->
            <div class="relative pl-10">
              <div class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-brand-accent/60 bg-brand-bg ring-4 ring-brand-accent/8" aria-hidden="true" />
              <p class="text-xs font-mono text-brand-dim uppercase tracking-widest mb-2">Master's Degree</p>
              <h3 class="text-xl font-bold text-brand-text mb-1.5">Software and Information Engineering</h3>
              <p class="text-brand-muted/70 text-sm mb-1.5">University Singidunum — Technical Faculty</p>
              <p class="text-brand-dim text-sm mb-5">Thesis: Nexa — cloud-native video streaming platform on AWS</p>
              <div class="inline-flex items-center gap-2.5 bg-brand-accent/8 border border-brand-accent/15 rounded-lg px-4 py-2">
                <span class="text-xs font-mono text-brand-dim uppercase tracking-wider">GPA</span>
                <span class="text-brand-accent font-mono font-bold">10.0 / 10.0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certification featured card -->
        <div class="lg:col-span-2">
          <div class="relative rounded-xl overflow-hidden border border-brand-accent/20 bg-brand-surface/65 p-7">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/8 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
            <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-brand-accent/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

            <p class="text-xs font-mono text-brand-accent/80 uppercase tracking-widest mb-7">Certification</p>

            <div class="flex items-start gap-4 mb-7">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                alt="Amazon Web Services"
                class="w-14 h-14 shrink-0"
              />
              <div>
                <h3 class="text-xl font-bold text-brand-text leading-snug">AWS Solutions Architect</h3>
                <p class="text-brand-muted/70 text-sm mt-1.5">Associate · Amazon Web Services</p>
              </div>
            </div>

            <div class="flex items-center gap-2.5 pt-5 border-t border-brand-border/60">
              <div class="w-2 h-2 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
              <span class="text-sm font-mono text-brand-accent font-semibold">Certified</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

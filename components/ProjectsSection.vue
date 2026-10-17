<template>
  <section id="projects" class="py-16 lg:py-24" aria-labelledby="projects-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-8 border-b border-slate-800">
        <div>
          <h2 id="projects-heading" class="text-2xl sm:text-3xl font-bold text-slate-100 mb-1.5">
            Projects
          </h2>
          <p class="text-slate-500 text-sm">
            Engineering work across backend services, cloud infrastructure, and full-stack applications.
          </p>
        </div>
        <a
          href="https://github.com/bojanzdelar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-mono text-slate-600 hover:text-blue-400 transition-colors shrink-0"
        >
          github.com/bojanzdelar →
        </a>
      </div>

      <div class="space-y-6">
        <NexaCaseStudy />

        <ProjectCard
          title="Supplement Shop"
          subtitle="Full-Stack E-Commerce"
          overview="A complete e-commerce application demonstrating end-to-end integration across a Vue.js frontend, Python Flask REST API backend, and MySQL relational database. Each layer is cleanly separated — the frontend communicates exclusively through the API, JWT handles auth, and SQLAlchemy manages the schema."
          :tech-stack="['Vue.js', 'Python Flask', 'MySQL', 'SQLAlchemy', 'JWT', 'REST API']"
          github-url="https://github.com/bojanzdelar/Supplement-shop"
          :features="[
            'Product catalog with categories and filtering',
            'Shopping cart with session management',
            'JWT authentication with role-based authorization',
            'Admin dashboard for inventory and order management',
            'SQLAlchemy ORM with relational data modeling',
          ]"
        />

        <div class="rounded-lg border border-slate-800 border-dashed px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p class="text-slate-400 text-sm font-medium mb-1">More projects in progress</p>
            <p class="text-slate-600 text-xs">
              AWS automation tooling, API integrations, and infrastructure work — added as it ships.
            </p>
          </div>
          <a
            href="https://github.com/bojanzdelar"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 text-xs font-mono text-slate-600 hover:text-blue-400 transition-colors"
          >
            View all repositories →
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

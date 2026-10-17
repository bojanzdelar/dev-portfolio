<template>
  <section id="projects" class="py-24 lg:py-32" aria-labelledby="projects-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="mb-16">
        <p class="text-blue-400 text-xs font-mono mb-3 tracking-widest uppercase">Work</p>
        <h2 id="projects-heading" class="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
          Featured Projects
        </h2>
        <p class="text-slate-400 max-w-xl">
          Engineering work across backend services, cloud infrastructure, and full-stack applications.
        </p>
      </div>

      <div class="space-y-8">
        <NexaCaseStudy />

        <ProjectCard
          title="Supplement Shop"
          subtitle="Full-Stack E-Commerce Application"
          description="A complete e-commerce application with a Vue.js frontend, Python Flask REST API backend, and MySQL database. Built to demonstrate full-stack integration including authentication, product management, and an admin interface."
          :tech-stack="['Vue.js', 'Python Flask', 'MySQL', 'SQLAlchemy', 'JWT', 'REST API']"
          github-url="https://github.com/bojanzdelar/Supplement-shop"
          :features="[
            'Product catalog with categories and filtering',
            'Shopping cart with session management',
            'JWT-based authentication and authorization',
            'Admin dashboard for inventory and order management',
            'SQLAlchemy ORM with relational data modeling',
            'RESTful API with clear separation of frontend and backend',
          ]"
          :objective="'Demonstrate full-stack development across frontend, REST API, authentication, and relational database — each layer cleanly separated and independently testable.'"
        />

        <div class="rounded-xl border border-slate-800 border-dashed p-8 text-center">
          <p class="text-slate-500 text-sm font-mono mb-2">// More projects</p>
          <p class="text-slate-400 text-sm">
            Additional work in AWS automation, API tooling, and infrastructure engineering — coming soon.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

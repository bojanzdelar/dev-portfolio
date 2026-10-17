<template>
  <section id="projects" class="py-16 lg:py-24" aria-labelledby="projects-heading">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">

      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-8 border-b border-brand-border">
        <div>
          <h2 id="projects-heading" class="text-2xl sm:text-3xl font-bold text-brand-text">
            Projects
          </h2>
        </div>
        <a
          href="https://github.com/bojanzdelar"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-mono text-brand-dim hover:text-brand-accent transition-colors shrink-0"
        >
          github.com/bojanzdelar →
        </a>
      </div>

      <div class="space-y-6">
        <NexaCaseStudy />

        <ProjectCard
          title="Software Designer"
          subtitle="Bachelor's Thesis · Requirements & Modeling Tool"
          overview="A tool for defining software requirements and creating UML models, with role-based access control and code generation from UML class diagrams. Microservice backend using Spring Boot and Spring Cloud, Vue.js frontend, and Amazon Cognito for authentication."
          :tech-stack="['Java', 'Spring Boot', 'Spring Cloud', 'Vue.js', 'Vuetify', 'Python Flask', 'MySQL', 'Amazon Cognito', 'Docker']"
          github-url="https://github.com/bojanzdelar/Software-designer"
          :features="[
            'Requirements and UML diagram creation within projects',
            'Role-based access control — full access vs. read-only per privilege level',
            'Code generation from UML class diagrams',
            'Microservice backend with Spring Boot and Spring Cloud',
            'Amazon Cognito authentication and authorization',
          ]"
        />

        <ProjectCard
          title="Learning Management System"
          subtitle="Full-Stack · University Platform"
          overview="University LMS with four user roles — guests, students, teachers, and administrators — built on a microservice architecture with database-per-service pattern. Students track subjects and study history, teachers manage exam realizations, administrators manage the university."
          :tech-stack="['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Angular', 'Angular Material', 'TypeScript', 'MySQL', 'Docker']"
          github-url="https://github.com/bojanzdelar/Learning-management-system"
          :features="[
            'Four user roles with distinct capabilities and views',
            'Students track enrolled subjects and previous study records',
            'Teachers manage subject and exam realizations',
            'Microservice architecture with database-per-service pattern',
            'JWT authentication with access and refresh tokens',
          ]"
        />

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
      </div>

    </div>
  </section>
</template>

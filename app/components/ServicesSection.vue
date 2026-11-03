<script setup lang="ts">
interface Offering {
  title: string;
  body: string;
}

interface Group {
  heading: string;
  items: Offering[];
}

const groups: Group[] = [
  {
    heading: "Backend & modernization",
    items: [
      {
        title: "APIs and services in Java / Spring Boot",
        body: "Service design with explicit contracts, clear error semantics, and a versioning strategy. Clean domain boundaries, so the code stays easy to change as the product grows.",
      },
      {
        title: "Java & Spring modernization",
        body: "Upgrading Spring Boot 2 and 3 apps to Spring Boot 4 and older Java versions to Java 25 LTS, untangling legacy code, and moving services into containers. Done incrementally, so production keeps running throughout.",
      },
    ],
  },
  {
    heading: "AWS & infrastructure",
    items: [
      {
        title: "AWS architecture & cost optimization",
        body: "Picking the right primitives (EC2, ECS, Lambda, RDS, DynamoDB) based on actual access patterns, then right-sizing what is already running so the bill matches the traffic.",
      },
      {
        title: "Infrastructure as code & CI/CD",
        body: "Terraform and GitHub Actions for reproducible environments and safe, reviewable deploys. No more console drift or hand-built servers.",
      },
    ],
  },
  {
    heading: "Product & AI",
    items: [
      {
        title: "MVPs, end to end",
        body: "From API design to UI to AWS deploy: a Vue/Nuxt or Angular front end on a Spring Boot or Flask backend. One person owning the whole product, shipped fast and built to keep growing.",
      },
      {
        title: "AI features in existing products",
        body: "LLM-powered search, chat, and summarization added to the backend you already have, using AWS Bedrock and retrieval over your own data. Practical features, not demos.",
      },
    ],
  },
];
</script>

<template>
  <section
    id="services"
    class="section-band pt-20 lg:pt-28 pb-20 lg:pb-28 border-t border-brand-border"
    aria-labelledby="services-heading"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <!-- Section header -->
      <header
        class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 pb-5 border-b border-brand-border"
      >
        <div class="lg:col-span-9">
          <p class="eyebrow mb-4">Working together</p>
          <h2
            id="services-heading"
            class="font-display text-4xl sm:text-5xl text-brand-text tracking-display leading-[1.02]"
          >
            Short-list of
            <span class="italic font-light text-brand-muted">
              things worth hiring me for.</span
            >
          </h2>
        </div>
        <p
          class="lg:col-span-3 lg:text-right text-brand-muted text-sm leading-relaxed lg:pt-3"
        >
          Freelance &amp; project-based engagements. Remote-friendly, UTC+1.
        </p>
      </header>

      <!-- Groups -->
      <div class="space-y-16 lg:space-y-20">
        <section
          v-for="group in groups"
          :key="group.heading"
          class="grid lg:grid-cols-12 gap-6 lg:gap-10"
        >
          <header class="lg:col-span-3">
            <div class="flex items-baseline gap-3 lg:sticky lg:top-20">
              <h3
                class="font-display text-2xl lg:text-3xl text-brand-text leading-tight"
              >
                {{ group.heading }}
              </h3>
            </div>
          </header>

          <ol class="lg:col-span-9 divide-y divide-brand-border">
            <li
              v-for="item in group.items"
              :key="item.title"
              class="py-6 first:pt-0 last:pb-0"
            >
              <h4
                class="font-display text-xl text-brand-text leading-snug mb-2"
              >
                {{ item.title }}
              </h4>
              <p class="text-brand-muted leading-relaxed">
                {{ item.body }}
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  </section>
</template>

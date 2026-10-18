<script setup lang="ts">
import { Github, ArrowUpRight } from 'lucide-vue-next'

const openDecisions = ref<string[]>([])

function toggleDecision(n: string) {
  const idx = openDecisions.value.indexOf(n)
  if (idx === -1) {
    openDecisions.value.push(n)
  } else {
    openDecisions.value.splice(idx, 1)
  }
}

const implemented = [
  'Spring Boot microservices on ECS/Fargate: catalog (DynamoDB), search (OpenSearch), user (DynamoDB)',
  'Event-driven video pipeline: S3 upload triggers Lambda, which submits a MediaConvert job',
  'MediaConvert encodes HLS at three renditions (1080p, 720p, 480p) with AES-128 encryption',
  'Playback protected with CloudFront signed cookies, short-lived playlist JWTs, and AES-128 key delivery',
  'Adaptive bitrate streaming in the browser via hls.js',
  'Two CloudFront distributions: application delivery (nexa.zdelar.com) and media CDN (cdn.nexa.zdelar.com)',
  'Nuxt 3 SSR running on Lambda with S3 static asset serving and pre-rendered snapshot fallback',
  'Amazon Cognito for authentication, integrated via AWS Amplify on the frontend',
  'Terraform manages all AWS resources: ECS, ALB, CloudFront, S3, Lambda, API Gateway, DynamoDB, OpenSearch, Cognito, Route 53, and SSM',
]

const planned = [
  'Subscription + payment processing',
  'Content recommendations',
  'Admin analytics + upload dashboard',
]

const techStack = [
  'Java', 'Spring Boot', 'Maven', 'Lombok', 'MapStruct', 'AWS SDK v2',
  'Nuxt 3', 'Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'AWS Amplify', 'hls.js',
  'AWS ECS/Fargate', 'Amazon S3', 'CloudFront', 'ALB', 'API Gateway',
  'AWS Lambda', 'MediaConvert', 'DynamoDB', 'OpenSearch',
  'Amazon Cognito', 'Route 53', 'Terraform', 'Docker',
]

const decisions = [
  {
    n: '01',
    title: 'Microservice boundaries drawn around data ownership, not endpoints',
    body: 'Catalog, search, and user are three independent services. Catalog serves title metadata and category lists from DynamoDB. Search runs full-text queries against an OpenSearch index and handles reindexing by reading from the same DynamoDB catalog table, keeping the two stores consistent without service-to-service calls. User manages watchlists and viewing progress in a separate DynamoDB table. Each service can be redeployed or rewritten without touching the others.',
  },
  {
    n: '02',
    title: 'Transcoding is strictly asynchronous',
    body: 'An .mp4 upload to the S3 ingest bucket fires an ObjectCreated event. A Lambda function picks it up and submits a MediaConvert job that encodes three HLS renditions at 1080p, 720p, and 480p with AES-128 encryption. The output lands in S3 and is served through the media CDN. No HTTP request waits on encoding; the slowest step is fully decoupled from the user-facing path.',
  },
  {
    n: '03',
    title: 'Application delivery and media CDN run as separate distributions',
    body: 'The application distribution at nexa.zdelar.com serves the Nuxt SSR frontend from a Lambda function, routes static assets from S3, forwards API calls to backend services through the ALB, and handles playback requests through API Gateway. A separate CDN distribution at cdn.nexa.zdelar.com delivers HLS segments and protected content from dedicated S3 origins. Keeping them separate gives each its own origin policies, signing configuration, and cache behavior.',
  },
  {
    n: '04',
    title: 'DynamoDB for the catalog, OpenSearch for the search box',
    body: 'DynamoDB handles the "give me title 42" path in single-digit milliseconds. OpenSearch handles fuzzy full-text queries across title names and descriptions, with the index rebuilt on demand from the DynamoDB catalog. The split was intentional: the two access patterns have nothing in common and should not live in the same store pretending otherwise.',
  },
  {
    n: '05',
    title: 'The whole environment is reproducible from source',
    body: 'Terraform manages every AWS resource: ECS clusters and task definitions, ECR repositories, ALB, both CloudFront distributions, S3 buckets, Lambda functions, API Gateway, DynamoDB tables, OpenSearch, Cognito, Route 53 records, ACM certificates, and SSM secrets. The infrastructure attaches to the AWS default VPC rather than provisioning a custom one, which avoids quota overhead for a project that does not need network-level isolation between services. A fresh account can be stood up with a single apply.',
  },
]
</script>

<template>
  <article aria-labelledby="nexa-title" class="relative">
    <!-- Case study masthead -->
    <header class="grid lg:grid-cols-12 gap-6 lg:gap-10 pb-8 mb-10 border-b border-brand-border">
      <div class="lg:col-span-9">
        <div class="flex items-center gap-3 mb-5">
          <span class="eyebrow text-brand-accent">Case Study</span>
          <span class="w-6 h-px bg-brand-border" aria-hidden="true"></span>
          <span class="eyebrow">Master's Thesis, 2025-2026</span>
        </div>
        <h3 id="nexa-title" class="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-[1.02] tracking-display mb-4">
          Nexa<span class="text-brand-muted/60">: </span><span class="italic font-light text-brand-muted">a cloud-native video streaming platform on AWS.</span>
        </h3>
      </div>
      <div class="lg:col-span-3 lg:pt-3 flex lg:justify-end">
        <a
          href="https://github.com/bojanzdelar/nexa"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-2 text-sm font-mono text-brand-muted hover:text-brand-accent border border-brand-border hover:border-brand-accent px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent self-start"
          aria-label="View Nexa on GitHub"
        >
          <Github :size="14" />
          <span>github.com/bojanzdelar/nexa</span>
          <ArrowUpRight :size="12" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>

    <!-- Brief + Architecture -->
    <div class="grid md:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20 items-start">

      <!-- Objective / Approach -->
      <div class="md:col-span-5 space-y-5">
        <p class="eyebrow">The brief</p>
        <div class="space-y-5 text-brand-text/90 text-lg leading-relaxed">
          <p>
            Design and build an on-demand video platform end-to-end (upload path,
            encoding pipeline, catalog, search, playback) using AWS primitives and
            a modern Spring Boot backend. Treat the infrastructure and the
            application as one deliverable, both version-controlled.
          </p>
          <p class="text-brand-muted">
            The scope wasn't "deploy a Spring Boot app to EC2 and call it cloud-native." The scope was
            to decide, defend, and implement every service choice in the chain: why S3 and
            MediaConvert instead of ffmpeg on a worker, why DynamoDB <em class="font-display italic text-brand-text/80">and</em> OpenSearch
            instead of one of them, why Fargate instead of Lambda for the long-running services.
            Then write it all down in Terraform so the next engineer can rebuild it from
            <code class="font-mono text-brand-text/80 text-base">main</code>.
          </p>
        </div>
      </div>

      <!-- Architecture diagram -->
      <figure class="md:col-span-7">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-brand-border">
          <p class="eyebrow">Fig. 1: System architecture</p>
          <p class="eyebrow">AWS composition</p>
        </div>
        <img
          src="/nexa-architecture.jpg"
          alt="Nexa platform architecture: Nuxt 3 SSR on Lambda, two CloudFront distributions, ALB, API Gateway, Cognito, three ECS/Fargate microservices (catalog, search, user), S3 buckets, MediaConvert transcoding pipeline, DynamoDB, and OpenSearch."
          class="w-full border border-brand-border"
        />
      </figure>

    </div>

    <!-- Decisions -->
    <section class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
      <header class="lg:col-span-3">
        <p class="eyebrow mb-3">Key engineering decisions</p>
        <p class="text-brand-muted text-sm leading-relaxed">
          Five choices that shape the architecture. Each one is the kind of
          thing I'd defend in a design review.
        </p>
      </header>
      <ol class="lg:col-span-9 divide-y divide-brand-border">
        <li
          v-for="d in decisions"
          :key="d.n"
          class="py-6 first:pt-0 last:pb-0"
        >
          <div class="grid grid-cols-[auto,1fr,auto] gap-x-6 items-start">
            <span class="font-mono text-xs text-brand-dim tabular-nums pt-2">{{ d.n }}</span>
            <h4 class="font-display text-xl text-brand-text leading-snug">{{ d.title }}</h4>
            <button
              class="font-mono text-sm text-brand-dim hover:text-brand-text transition-colors pt-0.5 focus-visible:outline-none focus-visible:text-brand-accent select-none"
              :aria-expanded="openDecisions.includes(d.n)"
              :aria-label="`${openDecisions.includes(d.n) ? 'Collapse' : 'Expand'} decision ${d.n}`"
              @click="toggleDecision(d.n)"
            >{{ openDecisions.includes(d.n) ? '−' : '+' }}</button>
          </div>
          <div v-if="openDecisions.includes(d.n)" class="grid grid-cols-[auto,1fr] gap-x-6 mt-4">
            <span aria-hidden="true"></span>
            <p class="text-brand-muted leading-relaxed">{{ d.body }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Status: implemented / planned side-by-side -->
    <section class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
      <header class="lg:col-span-3">
        <p class="eyebrow mb-3">What's built</p>
        <p class="text-brand-muted text-sm leading-relaxed">
          The thesis scope ended at the pipeline being end-to-end functional.
          Everything to the right of this list is honest about what's still open.
        </p>
      </header>
      <div class="lg:col-span-9 grid sm:grid-cols-2 gap-10">
        <div>
          <p class="eyebrow text-brand-accent mb-4">Shipped</p>
          <ul class="space-y-3">
            <li
              v-for="item in implemented"
              :key="item"
              class="grid grid-cols-[auto,1fr] gap-3 items-baseline"
            >
              <span class="font-mono text-brand-accent text-xs" aria-hidden="true">+</span>
              <span class="text-brand-text/85 text-sm leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
        <div>
          <p class="eyebrow mb-4">Out of scope / next</p>
          <ul class="space-y-3">
            <li
              v-for="item in planned"
              :key="item"
              class="grid grid-cols-[auto,1fr] gap-3 items-baseline"
            >
              <span class="font-mono text-brand-dim text-xs" aria-hidden="true">·</span>
              <span class="text-brand-muted text-sm leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section class="grid lg:grid-cols-12 gap-6 lg:gap-10">
      <header class="lg:col-span-3">
        <p class="eyebrow">Stack in full</p>
      </header>
      <div class="lg:col-span-9">
        <ul class="flex flex-wrap gap-x-5 gap-y-2.5 font-mono text-sm text-brand-muted">
          <li
            v-for="(tech, i) in techStack"
            :key="tech"
            class="flex items-baseline gap-5"
          >
            <span>{{ tech }}</span>
            <span v-if="i < techStack.length - 1" class="text-brand-border select-none" aria-hidden="true">/</span>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

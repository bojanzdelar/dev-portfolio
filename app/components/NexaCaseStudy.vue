<script setup lang="ts">
import { Github, ArrowUpRight } from 'lucide-vue-next'

const implemented = [
  'Spring Boot microservices on ECS/Fargate (video, catalog, user)',
  'Upload path: pre-signed S3 PUT → S3 event → Lambda → MediaConvert',
  'HLS output written back to S3, served through CloudFront',
  'Adaptive bitrate playback in the browser (hls.js on Nuxt front end)',
  'DynamoDB for catalog lookups by id',
  'OpenSearch for full-text search and faceted filtering',
  'API Gateway in front of Lambda + ECS services',
  'Amazon Cognito for auth (user pools, hosted UI)',
  'Terraform for VPC, IAM, ECS, and data stores',
]

const planned = [
  'Subscription + payment processing',
  'Content recommendations',
  'Admin analytics + upload dashboard',
]

const techStack = [
  'Java', 'Spring Boot', 'Nuxt.js', 'Vue.js', 'TypeScript',
  'AWS ECS/Fargate', 'Amazon S3', 'CloudFront', 'API Gateway',
  'AWS Lambda', 'MediaConvert', 'DynamoDB', 'OpenSearch',
  'Amazon Cognito', 'Terraform', 'Docker', 'HLS',
]

const decisions = [
  {
    n: '01',
    title: 'Microservice boundaries drawn around data ownership, not endpoints',
    body: 'Ingestion, catalog, and user management are separate services, each with its own data store. The ingestion service never queries the catalog table directly; it emits events and lets the catalog service react. The upside is that any one of them can be rewritten in a different language or torn out entirely without rewriting the API gateway in front of it.',
  },
  {
    n: '02',
    title: 'Transcoding is strictly asynchronous',
    body: 'A client gets a pre-signed URL, PUTs the raw file directly to S3, and gets 202 back. S3 fires an event, Lambda submits a MediaConvert job, and the service writes the new HLS asset back to S3 when the job completes. The HTTP path never waits on encoding; the slowest step is decoupled from the user-visible one.',
  },
  {
    n: '03',
    title: 'One CloudFront distribution, two origins',
    body: 'The Nuxt static front end and the HLS segments share a distribution with different origin behaviors and cache policies. Signed URLs for premium content, long-TTL for segments, short-TTL for manifests. All configured in one place instead of two parallel CDN setups.',
  },
  {
    n: '04',
    title: 'DynamoDB for the catalog, OpenSearch for the search box',
    body: 'DynamoDB handles the "give me video 42" path in single-digit milliseconds. OpenSearch handles "action films under 90 minutes released after 2020." The split was intentional: the two access patterns have nothing in common and should not live in the same store pretending otherwise.',
  },
  {
    n: '05',
    title: 'The whole environment is reproducible from source',
    body: 'Terraform owns everything: VPCs, subnets, IAM roles, ECS clusters, data stores, app configuration. A fresh account can be stood up with a single command; a torn-down one leaves no console artifacts behind. No "someone clicked something in the console that one time."',
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
          <span class="eyebrow">Master's Thesis, 2024/25</span>
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

    <!-- Objective / Approach -->
    <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-14 lg:mb-20">
      <div class="lg:col-span-3">
        <p class="eyebrow">The brief</p>
      </div>
      <div class="lg:col-span-9 space-y-5 text-brand-text/90 text-lg leading-relaxed">
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
    <figure class="mb-14 lg:mb-20">
      <div class="flex items-center justify-between pb-3 mb-3 border-b border-brand-border">
        <p class="eyebrow">Fig. 1: System architecture</p>
        <p class="eyebrow">AWS composition</p>
      </div>
      <img
        src="/nexa-architecture.jpg"
        alt="Nexa platform architecture: Nuxt client, CloudFront, API Gateway, Cognito, ECS/Fargate services, S3 upload bucket, Lambda, MediaConvert, DynamoDB, and OpenSearch."
        class="w-full border border-brand-border"
      />
    </figure>

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
          class="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 py-6 first:pt-0 last:pb-0"
        >
          <span class="font-mono text-xs text-brand-dim tabular-nums pt-1.5">{{ d.n }}</span>
          <div>
            <h4 class="font-display text-xl text-brand-text leading-snug mb-2">{{ d.title }}</h4>
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

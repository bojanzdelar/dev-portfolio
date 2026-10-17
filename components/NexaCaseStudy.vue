<script setup lang="ts">
import { Github } from 'lucide-vue-next'

const implemented = [
  'Java and Spring Boot microservices running on ECS/Fargate',
  'Nuxt.js frontend deployed to S3 and served via CloudFront',
  'Video upload to S3 with MediaConvert transcoding to HLS',
  'Amazon Cognito authentication and authorization',
  'API Gateway routing to Lambda and containerized services',
  'DynamoDB for video catalog metadata',
  'OpenSearch for full-text search and filtering',
  'Terraform and AWS CDK infrastructure definitions',
  'HLS video playback in the browser',
]

const planned = [
  'Subscription and payment processing integration',
  'Adaptive bitrate streaming based on client bandwidth',
  'Content recommendation and personalization',
  'Admin analytics and upload dashboard',
]

const techStack = [
  'Java', 'Spring Boot', 'Nuxt.js', 'Vue.js', 'TypeScript',
  'AWS ECS/Fargate', 'Amazon S3', 'CloudFront', 'API Gateway',
  'AWS Lambda', 'MediaConvert', 'DynamoDB', 'OpenSearch',
  'Amazon Cognito', 'Terraform', 'AWS CDK', 'Docker', 'HLS',
]

const decisions = [
  {
    title: 'Microservice decomposition',
    body: 'Separated video ingestion, catalog management, and user handling into independent services. Each owns its data and exposes a REST API, so any service can be deployed, scaled, or rewritten without touching the others.',
  },
  {
    title: 'Asynchronous transcoding pipeline',
    body: 'Raw uploads land in S3, which triggers a MediaConvert job via Lambda — the API response returns immediately. Encoding runs out-of-band, decoupling upload latency from processing time entirely.',
  },
  {
    title: 'CloudFront for all delivery paths',
    body: 'Both the static frontend and HLS video segments are served through the same CloudFront distribution with different origin configurations. No separate CDN setup: cache policies, signed URLs, and geographic distribution handled in one place.',
  },
  {
    title: 'Everything in infrastructure as code',
    body: 'Terraform manages VPCs, IAM roles, ECS clusters, and RDS configurations. AWS CDK handles higher-level constructs. The entire environment can be torn down and recreated from a single apply — no manual console state.',
  },
  {
    title: 'DynamoDB for catalog, OpenSearch for search',
    body: 'Catalog metadata is in DynamoDB for fast key-value lookups by ID. OpenSearch handles full-text queries and faceted filtering, letting each store do what it is actually designed for.',
  },
]
</script>

<template>
  <article
    class="rounded-xl border border-slate-700/60 bg-slate-900/40 overflow-hidden"
    aria-labelledby="nexa-title"
  >
    <!-- Header -->
    <div class="bg-slate-900/60 border-b border-slate-800 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <div class="flex items-center gap-3 mb-2.5">
          <span class="text-xs font-mono text-green-400 bg-green-950/60 border border-green-900/50 rounded px-2 py-0.5 tracking-wide">
            Featured
          </span>
          <span class="text-xs text-slate-500 font-mono">Master's Thesis · 2024–2025</span>
        </div>
        <h3 id="nexa-title" class="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
          Nexa — Cloud-Native Video Streaming Platform
        </h3>
      </div>
      <a
        href="https://github.com/bojanzdelar/nexa"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-green-700 text-slate-400 hover:text-green-400 text-sm rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 font-mono"
        aria-label="View Nexa on GitHub"
      >
        <Github :size="14" />
        GitHub
      </a>
    </div>

    <div class="px-8 py-8 space-y-10">

      <!-- Overview: Objective + Approach -->
      <div class="grid lg:grid-cols-2 gap-6">
        <div class="space-y-2">
          <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Objective</h4>
          <p class="text-slate-300 text-sm leading-relaxed">
            Design and implement a cloud-native video streaming platform as a master's thesis project,
            exploring how modern AWS services can be composed into a scalable architecture for
            on-demand video delivery — from raw upload through encoding, storage, and HLS playback.
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Approach</h4>
          <p class="text-slate-300 text-sm leading-relaxed">
            Decomposed the platform into discrete microservices on ECS/Fargate, each owning its
            data and communicating over REST APIs. Infrastructure is defined entirely in Terraform
            and AWS CDK — the environment is reproducible, version-controlled, and audit-able.
          </p>
        </div>
      </div>

      <!-- Architecture Diagram -->
      <div>
        <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4">Architecture</h4>
        <div class="rounded-lg overflow-hidden border border-slate-800">
          <img
            src="/nexa-architecture.jpg"
            alt="Nexa platform architecture diagram"
            class="w-full"
          />
        </div>
      </div>

      <!-- Engineering decisions + Status -->
      <div class="grid lg:grid-cols-2 gap-8">

        <!-- Decisions -->
        <div>
          <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-5">Key Engineering Decisions</h4>
          <ul class="space-y-5">
            <li v-for="d in decisions" :key="d.title" class="border-l border-slate-800 pl-4">
              <p class="text-slate-200 text-sm font-semibold leading-snug mb-1">{{ d.title }}</p>
              <p class="text-slate-500 text-sm leading-relaxed">{{ d.body }}</p>
            </li>
          </ul>
        </div>

        <!-- Implementation status -->
        <div class="space-y-5">
          <div class="rounded-lg bg-emerald-950/20 border border-emerald-900/25 p-5">
            <h4 class="text-[10px] font-mono text-emerald-600/80 uppercase tracking-widest mb-4">Implemented</h4>
            <ul class="space-y-2.5">
              <li v-for="item in implemented" :key="item" class="flex gap-3 text-sm">
                <span class="text-emerald-600 shrink-0 text-xs mt-0.5 font-bold">✓</span>
                <span class="text-slate-400">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-lg bg-slate-900/60 border border-slate-800 p-5">
            <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4">
              Planned <span class="text-slate-700 normal-case font-sans font-normal text-xs">(thesis scope)</span>
            </h4>
            <ul class="space-y-2.5">
              <li v-for="item in planned" :key="item" class="flex gap-3 text-sm">
                <span class="text-slate-700 shrink-0 mt-0.5">○</span>
                <span class="text-slate-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tech stack -->
      <div>
        <h4 class="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-4">Technology Stack</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="text-xs font-mono text-green-300/80 bg-green-950/30 border border-green-900/30 rounded px-2.5 py-1"
          >
            {{ tech }}
          </span>
        </div>
      </div>

    </div>
  </article>
</template>

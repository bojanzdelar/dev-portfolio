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
          <span class="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-900/50 rounded px-2 py-0.5 tracking-wide">
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
        class="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-blue-700 text-slate-400 hover:text-blue-400 text-sm rounded-lg transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 font-mono"
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
          <svg
            viewBox="0 0 720 440"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Nexa platform architecture diagram"
            class="w-full"
          >
            <title>Nexa Architecture Diagram</title>
            <desc>User browser connects to CloudFront CDN, which serves the frontend from S3. Auth runs through Cognito. API Gateway routes to Lambda and ECS/Fargate microservices. Services read and write DynamoDB, OpenSearch, and S3. Video uploads are transcoded by MediaConvert and delivered as HLS streams back through CloudFront.</desc>

            <defs>
              <marker id="arr-blue" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                <polygon points="0 0, 7 2.5, 0 5" fill="#3b82f6" />
              </marker>
              <marker id="arr-gray" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                <polygon points="0 0, 7 2.5, 0 5" fill="#475569" />
              </marker>
            </defs>

            <rect width="720" height="440" fill="#080e1a" />

            <!-- Layer labels -->
            <text x="8" y="44" fill="#1e293b" font-size="9" font-family="monospace">CLIENT</text>
            <line x1="68" y1="36" x2="712" y2="36" stroke="#1e293b" stroke-width="1" />
            <text x="8" y="118" fill="#1e293b" font-size="9" font-family="monospace">EDGE</text>
            <line x1="68" y1="110" x2="712" y2="110" stroke="#1e293b" stroke-width="1" />
            <text x="8" y="208" fill="#1e293b" font-size="9" font-family="monospace">API</text>
            <line x1="68" y1="200" x2="712" y2="200" stroke="#1e293b" stroke-width="1" />
            <text x="8" y="298" fill="#1e293b" font-size="9" font-family="monospace">SERVICES</text>
            <line x1="68" y1="290" x2="712" y2="290" stroke="#1e293b" stroke-width="1" />
            <text x="8" y="388" fill="#1e293b" font-size="9" font-family="monospace">DATA</text>

            <!-- Browser -->
            <g transform="translate(290,16)">
              <rect width="140" height="36" rx="5" fill="#0f172a" stroke="#2d3748" stroke-width="1" />
              <text x="70" y="22" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="system-ui">User Browser</text>
            </g>

            <line x1="360" y1="52" x2="360" y2="118" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-blue)" />

            <!-- CloudFront -->
            <g transform="translate(185,118)">
              <rect width="350" height="36" rx="5" fill="#1e3a5f" stroke="#2563eb" stroke-width="1.5" />
              <text x="175" y="22" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="600" font-family="system-ui">Amazon CloudFront CDN</text>
            </g>

            <line x1="250" y1="154" x2="100" y2="208" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />
            <line x1="315" y1="154" x2="247" y2="208" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />
            <line x1="415" y1="154" x2="400" y2="208" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-blue)" />

            <!-- S3 Frontend -->
            <g transform="translate(28,208)">
              <rect width="135" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="67" y="22" text-anchor="middle" fill="#475569" font-size="11" font-family="system-ui">S3 Frontend</text>
            </g>
            <!-- Cognito -->
            <g transform="translate(175,208)">
              <rect width="125" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="62" y="22" text-anchor="middle" fill="#475569" font-size="11" font-family="system-ui">Cognito Auth</text>
            </g>
            <!-- API Gateway -->
            <g transform="translate(322,208)">
              <rect width="148" height="36" rx="5" fill="#1e3a5f" stroke="#2563eb" stroke-width="1" />
              <text x="74" y="22" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui">API Gateway</text>
            </g>
            <!-- Lambda -->
            <g transform="translate(482,208)">
              <rect width="110" height="36" rx="5" fill="#1e3a5f" stroke="#2563eb" stroke-width="1" />
              <text x="55" y="22" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="system-ui">Lambda</text>
            </g>

            <line x1="396" y1="244" x2="370" y2="298" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-blue)" />
            <line x1="537" y1="244" x2="500" y2="298" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-blue)" />

            <!-- ECS/Fargate -->
            <g transform="translate(188,298)">
              <rect width="370" height="56" rx="5" fill="#162033" stroke="#1d4ed8" stroke-width="1.5" />
              <text x="185" y="20" text-anchor="middle" fill="#60a5fa" font-size="12" font-weight="600" font-family="system-ui">ECS / Fargate (Microservices)</text>
              <text x="80" y="40" text-anchor="middle" fill="#334155" font-size="10" font-family="monospace">video-service</text>
              <text x="185" y="40" text-anchor="middle" fill="#334155" font-size="10" font-family="monospace">catalog-service</text>
              <text x="300" y="40" text-anchor="middle" fill="#334155" font-size="10" font-family="monospace">user-service</text>
            </g>

            <line x1="280" y1="354" x2="150" y2="388" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />
            <line x1="370" y1="354" x2="318" y2="388" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />
            <line x1="460" y1="354" x2="468" y2="388" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />

            <!-- DynamoDB -->
            <g transform="translate(70,388)">
              <rect width="120" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="60" y="22" text-anchor="middle" fill="#64748b" font-size="11" font-family="system-ui">DynamoDB</text>
            </g>
            <!-- OpenSearch -->
            <g transform="translate(206,388)">
              <rect width="120" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="60" y="22" text-anchor="middle" fill="#64748b" font-size="11" font-family="system-ui">OpenSearch</text>
            </g>
            <!-- S3 Videos -->
            <g transform="translate(342,388)">
              <rect width="105" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="52" y="22" text-anchor="middle" fill="#64748b" font-size="11" font-family="system-ui">S3 Videos</text>
            </g>
            <line x1="447" y1="406" x2="461" y2="406" stroke="#334155" stroke-width="1" marker-end="url(#arr-gray)" />
            <!-- MediaConvert -->
            <g transform="translate(461,388)">
              <rect width="130" height="36" rx="5" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
              <text x="65" y="22" text-anchor="middle" fill="#64748b" font-size="11" font-family="system-ui">MediaConvert</text>
            </g>
            <!-- HLS return path -->
            <path d="M 591 388 Q 660 300 540 154" stroke="#3b82f6" stroke-width="1" stroke-dasharray="5 3" fill="none" marker-end="url(#arr-blue)" />
            <text x="648" y="278" fill="#2563eb" font-size="9" font-family="monospace" text-anchor="middle">HLS</text>

            <text x="360" y="432" text-anchor="middle" fill="#1e293b" font-size="9" font-family="monospace">Infrastructure managed by Terraform + AWS CDK</text>
          </svg>
        </div>
        <p class="text-xs text-slate-700 mt-2 font-mono">
          Dashed line — HLS segments delivered from MediaConvert output through CloudFront back to the user.
        </p>
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
            class="text-xs font-mono text-blue-300/80 bg-blue-950/30 border border-blue-900/30 rounded px-2.5 py-1"
          >
            {{ tech }}
          </span>
        </div>
      </div>

    </div>
  </article>
</template>

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      '#0B0F0E',
          surface: '#141A17',
          accent:  '#0BDA51',
          text:    '#F0F5F1',
          muted:   '#9AA79E',
          dim:     '#546058',
          border:  '#1E2822',
          hi:      '#273229',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Fraunces"', '"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.025em',
      },
    },
  },
  plugins: [],
}

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
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
    },
  },
  plugins: [],
}

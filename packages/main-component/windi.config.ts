import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./index.html', './src/**/*.vue', './src/**/*.ts']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  plugins: []
})

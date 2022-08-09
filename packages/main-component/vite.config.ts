import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@zeral/component-lib-a': '@zeral/component-lib-a/src/index.ts',
      '@zeral/component-lib-b': '@zeral/component-lib-b/src/index.ts'
    },
    dedupe: ['vue']
  }
})

import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    tsgo: true,
  },
  exports: true,
  platform: 'node',
  format: 'cjs',
  // ...config options
})

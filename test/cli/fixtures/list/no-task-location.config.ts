import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['basic.test.ts', 'math.test.ts'],
    name: 'no task location',
    includeTaskLocation: false,
  },
})


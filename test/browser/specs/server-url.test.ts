import { afterEach, expect, test } from 'vitest'
import { provider, runBrowserTests } from './utils'

afterEach(() => {
  delete process.env.TEST_HTTPS
})

test('server-url http', async () => {
  const { stdout, stderr } = await runBrowserTests({
    root: './fixtures/server-url',
  })
  expect(stderr).toBe('')
  expect(stdout).toContain(`Browser runner started by ${provider} at http://localhost:51133/`)
})

test('server-url https', async () => {
  process.env.TEST_HTTPS = '1'
  const { stdout, stderr } = await runBrowserTests({
    root: './fixtures/server-url',
  })
  expect(stderr).toBe('')
  expect(stdout).toContain(`Browser runner started by ${provider} at https://localhost:51122/`)
  expect(stdout).toContain('Test Files  1 passed')
})

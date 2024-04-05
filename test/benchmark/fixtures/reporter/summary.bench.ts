import { bench, describe } from 'vitest'

describe('suite-a', () => {
  bench('good', async () => {
    await sleep(25)
  }, options)

  bench('bad', async () => {
    await sleep(50)
  }, options)
})

describe('suite-b', () => {
  bench('good', async () => {
    await sleep(25)
  }, options)

  describe('suite-b-nested', () => {
    bench('good', async () => {
      await sleep(50)
    }, options)
  })
})

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const options = {
  time: 0,
  iterations: 3,
  warmupIterations: 0,
  warmupTime: 0,
}

import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock({
  url: '/api/territory',
  body: Mock.mock({
    'fundingRounds|100-800': 100,
    'totalFundings|1-200.1': 135.7,
    'acquisitionsRecorded|100-500': 300,
    'acquisitionsAmount|1-90.1': 34.8
  })
})
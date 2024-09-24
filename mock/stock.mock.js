import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock({
  url: '/api/stock',
  body: () => Mock.mock({
    'ticket': Mock.mock('@string("upper", 4)'),
    'name': '@name',
    'currency': 'USD',
    'price|1-90.2': 34.8,
    'day_low|40-90.2': 34.8,
    'day_high|1-90.2': 34.8,
    'day_change': Mock.Random.pick([-1, 1]) * Mock.Random.float(0, 10, 2, 2),
  })
})
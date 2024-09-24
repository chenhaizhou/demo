import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock({
  url: '/api/auth/login',
  body: Mock.mock({
    'user': {
      'name': '@name',
      'firstName': '@first',
      'lastName': '@last',
      'email': '@email',
      'avatar': '@image(200x200)'
    },
    'list|1-10': [{
      'id|+1': 1
    }]
  })
})

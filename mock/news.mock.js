import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

const list = Mock.mock({
  'list|1-20': Mock.mock({
    title: Mock.Random.title(),
    owner: Mock.Random.first(),
    url: 'http://' + Mock.Random.domain()
})
})

export default defineMock({
  url: '/api/news',
  body: Mock.mock({
    'list|1-20': [() => Mock.mock({
      name: Mock.Random.word(),
      investor: 'US Department of Energy',
        title: Mock.Random.word() + ' raised $' + Mock.Random.integer(100, 900) + 'M in Grant',
        img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/k3tiutaosez6tz0nuanp',
        link: 'http://' + Mock.Random.domain(),
        type: Mock.Random.pick(['news', 'funding']),
        tags: ['Carbon Capture', 'Environmental Consulting', 'Environmental Engineering'],
        'list|1-5':  [() => Mock.mock({
          title: Mock.Random.title(),
          owner: Mock.Random.first(),
          url: 'http://' + Mock.Random.domain()
      })]
    })]
  }).list
})
import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

const mockData = [
  {
    name: 'WIZ',
    url: 'https://openai.com/',
    img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/xedeqkigob0f6cteez6j'
},
{
    name: 'UBS',
    url: 'https://stripe.com/',
    img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/ztkevgrmluxzily4gs8e'
},
{
    name: 'OpenAI',
    url: 'https://stripe.com/',
    img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/jjykwqqhsscreywea4gb'
},
{
    name: 'Vana',
    url: 'https://stripe.com/',
    img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/ubactzl8bhp54ddsou0d'
},
{
  name: 'Cuure',
  url: 'https://openai.com/',
  img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/lrzxj4cibf62kgvguqd0'
},
{
  name: 'Cogonsys',
  url: 'https://stripe.com/',
  img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/e858f25e9001421a95af34a413b43dc5'
},
{
  name: 'Hexaware',
  url: 'https://stripe.com/',
  img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/79d7764f618d40bcb1a8b1e4e41c56b7'
},
{
  name: 'ByteDance',
  url: 'https://stripe.com/',
  img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/cglezonqxgqqeirc0nsj'
},
{
name: 'Ticket9',
url: 'https://openai.com/',
img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/wgojharniurf7xlajt3i'
},
{
name: 'Machaao',
url: 'https://stripe.com/',
img: 'https://images.crunchbase.com/image/upload/c_pad,h_25,w_25,f_auto,b_white,q_auto:eco,dpr_1/zaeczbcggeesozg8ufbg'
}
]

export default defineMock([
  {
    url: '/api/trending',
    body: Mock.mock(
      mockData
    )
  },
  {
    url: '/api/recent-view',
    body: Mock.mock(
      mockData
    )
  }
])

import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock({
  url: '/api/recommend',
  body: Mock.mock(
    [
        {
            title: 'NEXTDC',
            description: 'Because you\'re interested in trending companies.',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/k3tiutaosez6tz0nuanp',
            link: 'https://www.a16z.com/'
        },
        {
            title: 'VidLab 7',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/4646e7bace744203914e5d9afe79ceb1',
            description: 'Because you\'re interested in trending companies.',
        },
        {
            title: 'Beebop',
            description: 'Because you\'re interested in trending companies.',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/44ab467980ce4c718c71d69637fb2255',
            link: 'https://www.a16z.com/'
        },
        {
            title: 'Veea',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/ewwsxiubxmajqmac6bqf',
            description: 'Because you\'re interested in trending companies.',
        },
        {
            title: 'Aucctus',
            description: 'Because you\'re interested in trending companies.',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/626ee92437c44c66858413cb5826a03c',
            link: 'https://www.a16z.com/'
        },
        {
            title: '1PointFive',
            img: 'https://images.crunchbase.com/image/upload/c_pad,h_40,w_40,f_auto,b_white,q_auto:eco,dpr_1/jl9mid9qvatwxwnjdhet',
            description: 'Because you\'re interested in trending companies.',
        },
    ]
  )
})

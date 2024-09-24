import { defineMock } from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock({
  url: '/api/company/:name',
  body: (request) => {
    const name = request.params.name
    const color = () => Mock.Random.color()

    return Mock.mock({
        'overview': {
          'name': name || '@first',
          'logo': 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/jl9mid9qvatwxwnjdhet',
          'description': '@sentence',
          'crm_link': 'https://crm.com'
        },
        'summary': {
          'name': name,
          'canonical_name': '@first',
          'headquarters_location': '@address',
          'industry': '@word',
          'sector': '@word',
          'public_or_private': Mock.Random.pick(['public', 'private']),
          'stock_symbol': Mock.Random.string('upper', 4),
          'founding_year': Mock.Random.date('yyyy'),
          'number_of_employees|2-1000': 20,
          'market_position': '@title',
          'revenue': '20M',
          'website': '@url',
          'description': '@sentence',
        },
        'financials': {
            'revenue_growth|1-200': 50,
            'profit_margin|1-100': 30,
            'cash_flow': '500M',
            'operating_expense': '10M',
            'net_income': '200M',
            'ebitda': '300M',
            'pe_ratio|1-100': 20,
            'funding_rounds|1-10': [
                () => Mock.mock(
                    {
                        'round_type': Mock.Random.pick(['Seed', 'Series A', 'Series B', 'Series C']),
                        'amount|10000-999999': 12312,
                        'date': '@date',
                        'lead_investor': '@word',
                        'participating_investors|1-5': ['@first'],
                    }
                )
            ],
            'investments|1-10': [
                () => Mock.mock(
                    {
                        'investor': '@first',
                        'amount|100000-9999999': 123123,
                        'date': '@date',
                    }
                )
            ],
            'key_financial_events': Mock.Random.pick(['IPO', 'Acquisition', 'Merger', 'Divestment', 'Bankruptcy']),
        },
        'people': {
            'founders|1-5': [
                () => Mock.mock(
                    {
                        'full_name': '@name',
                        'title': '@word',
                        'avatar': Mock.Random.image('200x200', color(), '#FFF', 'png', '@first'),
                        'linkedin_url': '@url',
                    }
                )
            ],
            'cxos_and_executives|2-10': [
                () => Mock.mock(
                    {
                        'full_name': '@name',
                        'title': '@word',
                        'avatar': Mock.Random.image('200x200', color(), '#FFF', 'png', '@first'),
                        'linkedin_url': '@url',
                    }
                )
            ],
            'employees|2-10': [
                () => Mock.mock(
                    {
                        'full_name': '@name',
                        'title': '@word',
                        'avatar': Mock.Random.image('200x200', color(), '#FFF', 'png', '@first'),
                        'linkedin_url': '@url',
                    }
                )
            ],
            'board_members|5-20': [
                () => Mock.mock(
                    {
                        'full_name': '@name',
                        'title': '@word',
                        'avatar': Mock.Random.image('200x200', color(), '#FFF', 'png', '@first'),
                        'linkedin_url': '@url',
                    }
                )
            ],
            'employee_count_trends': ['@integer']
        },
        'technology': {
            'products_and_services|1-5': [
                {
                    'name': '@name',
                    'category': () => Mock.Random.pick(['product', 'service']),
                    'business_model': () => Mock.Random.pick(['subscription', 'one-time-purchase', 'freemium']),
                    'lifecycle_stage': () => Mock.Random.pick(['introduction', 'growth', 'maturity', 'decline']),
                }
            ],
            'technology_stack|1-5': [
                {
                    'product_name': '@word',
                    'uses_technologies': ['Java', 'Python', 'JavaScript', 'C++', 'C#', 'Ruby', 'PHP', 'Go', 'Swift', 'Kotlin'],
                }
            ],
            'patents|1-10': [
                {
                    'title': '@title',
                    'parent_number': '@id',
                    'filing_date': '@date',
                    'grant_date': '@date',
                    'abstract': '@sentence'
                }
            ],
            'innovation_metrics': {
                'patent_count': '@integer',
                'patent_grant_rate': '@integer',
                'patent_grant_rate_change': '@integer'
            }
        },
        'signals_news': {
            'news_articles|3-10': [
                {
                    'title': '@title',
                    'link': '@url',
                    'source': '@word',
                    'news_type': Mock.Random.pick(['financial', 'strategic', 'product update']),
                    'publication_date': '@date'
                }
            ],
            'recent_developments|2-6': [
                {
                    title: '@title',
                    link: '@url',
                    date: '@date'
                }
            ],
            'market_signals': ['@word'],
            'social_media_mentions|1-5': [{
                'source': '@word',
                'mentions': '@integer'
            }]
        },
        'similar_companies|1-10': [
            {
                'name': '@name',
                'logo': '@image(200x200)',
                'industry': '@word',
                'sector': '@word',
                'revenue': Mock.Random.natural(100000,9999999999),
                'number_of_employees': Mock.Random.natural(1, 5) + '-' + Mock.Random.natural(5, 10000),
                'market_position': '@sentence',
            }
        ]
      })
  }
})

import { useState, useEffect } from 'react'
import { Affix, Button } from 'antd'
import { HomeOutlined, PlusCircleOutlined, LinkOutlined } from '@ant-design/icons'
import { useParams, Link } from 'react-router-dom'
import ScrollView from '../components/ScrollView'
import Service from '../components/Service'
import { companyService } from '../service/company'
import Summary from '../components/Summary'
import Financials from '../components/Financials'
import People from '../components/People'
import Technology from '../components/Technology'
import News from '../components/News'
import SimilarCompanies from '../components/SimilarCompanies'

const tabs = [
  {
    label: 'Summary',
    key: 'summary'
  },
  {
    label: 'Financials',
    key: 'financials'
  },
  {
    label: 'People',
    key: 'people'
  },
  {
    label: 'Technology',
    key: 'technology'
  },
  {
    label: 'Signals & News',
    key: 'news'
  },
  {
    label: 'Similar Companies',
    key: 'similar'
  }
]

const Company = () => {
  const { companyName, tabName = 'summary' } = useParams()
  const [data, setData] = useState({})
  const [tabFixed, setTabFixed] = useState(false)
  const { overview = {} } = data || {}

  const tabsView = {
    summary: <Summary data={data.summary} />,
    financials: <Financials data={data.financials} />,
    people: <People data={data.people} />,
    technology: <Technology data={data.technology} />,
    news: (
      <News
        data={data.signals_news}
        stockTicket={data.summary && data.summary.stock_symbol}
      />
    ),
    similar: <SimilarCompanies data={data.similar_companies} />
  }

  const getData = () => {
    companyService.getData(companyName).then((res) => setData(res))
  }

  const handleChangeAffix = (fixed) => {
    setTabFixed(fixed)
  }

  useEffect(() => {
    getData()
  }, [companyName])

  return (
    <div className="mt-8">
      <div className="container1 w-full flex gap-8">
        <Affix
          onChange={handleChangeAffix}
          offsetTop={76}
          className="bg-slate-100 w-full"
        >
          <div
            className={`w-full ${tabFixed ? 'bg-slate-100' : ''}`}
          >
            <div className="container">
              <div
                className={`flex gap-8 max-w-full container ${tabFixed ? 'py-4 relative z-10 pb-16' : ''}`}
              >
                <div
                  className={`${tabFixed ? 'w-16 h-16' : 'w-48 h-48 translate-y-2'} rounded-md shadow-md overflow-hidden`}
                >
                  <img
                    src={overview.logo}
                    alt={overview.name}
                  />
                </div>
                <div
                  className={`flex flex-col flex-1 max-w-full ${tabFixed ? 'justify-center' : ''}`}
                >
                  <div className='flex gap-8 justify-between items-center'>
                    <div>
                        <p
                        className={`${tabFixed ? 'hidden' : 'flex'} my-2 gap-2 text-gray-500`}
                    >
                        <HomeOutlined />
                        <span>Organization</span>
                    </p>
                    <h2 className="text-4xl font-bold text-black first-letter:uppercase">
                        {companyName || 'Company'}
                    </h2>
                    </div>
                    <div className='flex gap-4'>
                        <Button icon={<LinkOutlined />} type='primary' ghost size='large'>CONNECT TO CRM</Button>
                        <Button icon={<PlusCircleOutlined />} type="primary" size='large'>SAVE</Button>
                    </div>
                  </div>
                  <div
                    className={`mt-auto text-xl flex gap-4 ${tabFixed ? 'absolute bottom-0 left-0' : ''}`}
                  >
                    <ScrollView>
                      {tabs.map((tab) => (
                        <div
                          key={tab.key}
                          className={`${tabName === tab.key ? 'bg-white shadow-top rounded-t-lg' : ''} "item whitespace-nowrap py-3 px-6 font-bold"`}
                        >
                          <Link
                            relative="path"
                            to={`/company/${companyName}/${tab.key}`}
                            className={`${tabName === tab.key ? 'text-blue-500' : 'text-black/80'}`}
                          >
                            {tab.label}
                          </Link>
                        </div>
                      ))}
                    </ScrollView>
                  </div>

                  <ul className="hidden self-end mt-auto text-2xl flex gap-4 -translate-y-2">
                    <li className="py-2 pb-4 px-4 bg-white shadow-top rounded-t-lg">
                      <Link>Summary</Link>
                    </li>
                    <li className="py-2 pb-4 px-4">
                      <Link>Financials</Link>
                    </li>
                    <li className="py-2 pb-4 px-4">
                      <Link>People</Link>
                    </li>
                    <li className="py-2 pb-4 px-4">
                      <Link>Technology</Link>
                    </li>
                    <li className="py-2 pb-4 px-4">
                      <Link>Signals & News</Link>
                    </li>
                    <li className="py-2 pb-4 px-4">
                      <Link>Similar Companies</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Affix>
      </div>
      <div className="bg-white shadow-top -mt-2 pt-4">
        <div className="container py-8">{tabsView[tabName]}</div>
      </div>
      <Service />
    </div>
  )
}

export default Company

import { useState, useEffect } from 'react'
import { EditOutlined, RocketOutlined, TrophyOutlined, BookOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Card, Space, Button, Avatar, Menu, Radio, List, Affix} from 'antd'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Panel from '../components/Panel'
import RecCard from '../components/RecCard'
import RecCarousel from '../components/RecCarousel'
import RecList from '../components/RecList'
import Service from "../components/Service"
import Territory from '../components/Territory'
import TrendingList from '../components/TrendingList'
import { recommendService } from '../service/recommend'
import RecentView from '../components/RecentView'

const Home = () => {

    const [recData, setRecData] = useState([])
    const [newsData, setNewsData] = useState([])

    const getRecData = () => {
        recommendService.getData().then(res => {
            setRecData(res)
        })
    }

    const getNewsData = () => {
        recommendService.getNewsData().then(res => {
            setNewsData(res)
        })
    }

    const onClick = (e) => {
        console.log('click ', e);
      };

      const onChange = (e) => {
        console.log('click ', e);
      };
    
      const ListTypeChoose = () => {
        return (
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">First List</Radio.Button>
                <Radio.Button value="b">Like Recomments</Radio.Button>
            </Radio.Group>
        )
      }

      useEffect(() => {
          getRecData()
          getNewsData()
      }, [])

  return (
    <div className="container flex flex-col lg:flex-row gap-8 mt-8">
      <aside className="w-72">
            <Affix offsetTop={110}>
        <Space direction="vertical" size={16} className="w-full">
          <div className="flex flex-col gap-4 bg-white justify-center items-center py-8 rounded-md">
            <Avatar
              style={{
                backgroundColor: '#1890ff',
                verticalAlign: 'middle',
                fontSize: '2em'
              }}
              size={80}
            >
              HC
            </Avatar>
            <strong>Haizhou Chen</strong>
          </div>
          <Card
            title={<div><RocketOutlined className='mr-2' style={{fontSize: '20px'}} />My Crunchbase</div>}
            className='card-body-8'
            style={{boxShadow: 'none'}}
            bordered={false}
          >
            <Menu onClick={onClick} items={[
                {
                    label: 'My Recommendations',
                    key: 'm1',
                  },
                  {
                    label: 'My Lists',
                    key: 'm2',
                  },
                  {
                    label: 'My Saved Searches',
                    key: 'm3',
                  },
                  {
                    label: 'Import Lists',
                    key: 'm4',
                  },
            ]} />
          </Card>
        </Space>
        </Affix>
      </aside>
      <div className="mx-auto flex-1 max-w-full overflow-hidden">
        <Space direction='vertical' size={32} className="w-full">
            <Hero />
            <Panel title="Recommendations" icon={<TrophyOutlined style={{fontSize: '20px'}} />} extra={<Link to='' className='text-blue-500'>View All</Link>}>
                <RecCarousel data={recData} />
            </Panel>
            <Panel title='Viewing Activity From:' icon={<BookOutlined style={{fontSize: '20px'}} />} extra={<ListTypeChoose />}>
                <RecList data={newsData} />
            </Panel>
        </Space>
      </div>
      <div className="w-90">
        <Space direction="vertical" size={16} className="w-full">
          <Territory />
          <RecentView />
          <Card title="Trending Profiles" className='shadow-md card-body-0'>
            <TrendingList />
          </Card>
        </Space>
      </div>
      <Service />
    </div>
  )
}

export default Home

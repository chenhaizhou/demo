import { useState, useEffect } from 'react'
import { Card, List, Button } from 'antd'
import { PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { trendingService } from '../service/trending'

const RecentView = () => {

    const [data, setData] = useState([])

    const getData = () => {
        trendingService.getRecentData().then((res) => {
            setData(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Card title="Rencently Viewed" className='shadow-md card-body-0'>
            <List
                itemLayout="horizontal"
                className='py-2 px-4'
                dataSource={data.slice(0, 3)}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    style={{alignItems: 'center'}}
                    avatar={<img src={item.img} width={40} className='border border-gray-300 rounded-lg' />}
                    title={<a href={item.url} className='text-lg'>{item.name}</a>}
                    />
                    <Button type='text' size='large' className='!text-blue-500 hover:!bg-white' icon={<PlusCircleOutlined />}>SAVE</Button>
                </List.Item>
                )}
            />
            {
                data.length > 3 && (
                    <div className="p-4 mx-auto text-center text-blue-500 border-t border-gray-100">
                        <Link to='' className='text-lg text-blue-500'>View All</Link>
                        <RightOutlined className="ml-2" />
                    </div>
                )
            }
          </Card>
    )
}

export default RecentView

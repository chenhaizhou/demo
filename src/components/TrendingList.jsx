import { useState, useEffect } from 'react'
import { List, Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { trendingService } from '../service/trending'

const TrendingList = () => {

    const [data, setData] = useState([])

    const getData = () => {
        trendingService.getData().then(res => {
            setData(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <List
            className='py-2 px-4'
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
            <List.Item>
                <div className='w-8 text-lg text-black/50'>{index + 1}.</div>
                <List.Item.Meta
                style={{alignItems: 'center'}}
                avatar={<img src={item.img} width={32} className='border border-gray-300 rounded-lg' />}
                title={<a href={item.url} className='text-base'>{item.name}</a>}
                />
                <Button type='text' size='large' className='!text-blue-500 hover:!bg-white' icon={<PlusCircleOutlined />}>SAVE</Button>
            </List.Item>
            )}
        />
    )
}

export default TrendingList

import { Card, Space, Avatar, List } from 'antd'
import RecentView from './RecentView'
import { UserOutlined, UsergroupAddOutlined, UserAddOutlined, TeamOutlined } from '@ant-design/icons'

const People = ({data}) => {
    const {founders = [], cxos_and_executives = [], employees = [], board_members = [], employee_count_trends = []} = data || {}

    return (
        <div className='flex gap-8'>
            <div className='flex-1'>
            <Space direction='vertical' className='w-full' size={16}>
                <Card title={<><UserOutlined style={{marginRight: 8}} />Founders</>} className='w-full shadow-sm'>
                    <ul className='flex flex-wrap gap-8'>
                        {
                            founders.map((founder, index) => (
                                <li key={index} className='flex gap-4 items-center  w-[calc(25%-12px)]'>
                                    <a href={founder.linkedin_url}><Avatar src={founder.avatar} size={80} /></a>
                                    <div>
                                        <strong className='block text-xl'>
                                            <a href={founder.linkedin_url} className='text-black'>{founder.full_name}</a>
                                        </strong>
                                        <span className='text-lg text-black/60'>{founder.title}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Card>
                <Card title={<><UserAddOutlined style={{marginRight: 8}} />CXOs and Executives</>} className='w-full shadow-sm'>
                    <ul className='flex flex-wrap gap-4'>
                        {
                            cxos_and_executives.map((founder, index) => (
                                <li key={index} className='flex gap-4 items-center w-[calc(25%-12px)] bg-slate-50 p-4 rounded-lg'>
                                    <a href={founder.linkedin_url}><Avatar src={founder.avatar} size={60} /></a>
                                    <div>
                                        <strong className='block text-lg'>
                                            <a href={founder.linkedin_url} className='text-black'>{founder.full_name}</a>
                                        </strong>
                                        <span className='text-lg text-black/60'>{founder.title}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Card>
                <Card title={<><UsergroupAddOutlined style={{marginRight: 8}} />Employees</>} className='w-full shadow-sm'>
                    <ul className='flex flex-wrap gap-y-8'>
                        {
                            employees.map((founder, index) => (
                                <li key={index} className='w-1/4 text-center'>
                                    <a href={founder.linkedin_url}><Avatar src={founder.avatar} size={60} /></a>
                                    <div className='mt-2'>
                                        <strong className='block text-base'>
                                            <a href={founder.linkedin_url} className='text-black'>{founder.full_name}</a>
                                        </strong>
                                        <span className='text-md text-black/60'>{founder.title}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Card>
                <Card title={<><TeamOutlined style={{marginRight: 8}} />Board Members</>} className='w-full shadow-sm'>
                    <List
                        itemLayout="horizontal"
                        dataSource={board_members}
                        renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src={item.avatar} size={48} />}
                            title={<a href={item.linkedin_url}>{item.full_name}</a>}
                            description={item.title}
                            />
                        </List.Item>
                        )}
                    />
                </Card>
            </Space>
            </div>
            <div className='w-90'>
                <Space direction='vertical' size={16} className='w-full'>
                    <RecentView />
                </Space>
            </div>
        </div>
    )
}

export default People

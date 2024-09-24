import { Space, Card, Table, Tag } from 'antd'
import {ProductOutlined, ApiOutlined, AuditOutlined} from '@ant-design/icons'
import RecentView from './RecentView'

const Model = ({model}) => {
    const tMap = {
        'subscription': 'cyan',
        'one-time-purchase': 'purple',
        'freemium': 'green'
    }
    return <Tag color={tMap[model]}>{model}</Tag>
}

const Technology = ({data}) => {

    const {products_and_services = [], technology_stack = [], patents = []} = data || {}
    const parentColumns = [
        {
            title: 'Title',
            dataIndex: 'title',
            className: 'font-bold',
        },
        {
            title: 'No.',
            dataIndex: 'parent_number',
            render: (text) => <strong className='text-blue-500 text-lg font-bold'>{text}</strong>,
        },
        {
            title: 'Filing Date',
            dataIndex: 'filing_date',
            className: 'text-black/60',
            width: 150
        },
        {
            title: 'Grant Date',
            dataIndex: 'grant_date',
            className: 'text-black/60',
            width: 150
        },
        {
            title: 'Abstract',
            dataIndex: 'abstract',
            className: 'text-black/60',
        },
    ]

    return (
        <div className="flex gap-8">
            <div className="flex-1">
                <Space direction='vertical' className='w-full' size={16}>
                    <Card title={<><ProductOutlined style={{marginRight: 8}} />Products & Services</>} className="shadow-sm">
                        <ul>
                            {
                                products_and_services.map((item, index) => (
                                    <li key={index} className="flex gap-8 my-4 first:border-none first:mt-0 first:pt-0 last:mb-0 border-t border-gray-200 pt-4">
                                        <div className="flex items-center text-lg text-black/60">{index + 1}</div>
                                        <div className="w-1/6">
                                            <span className="block text-black/60">Product</span>
                                            <strong className="text-xl">{item.name}</strong>
                                        </div>
                                        <div className="w-1/6">
                                            <span className="block text-black/60">Category</span>
                                            <strong className={`text-lg font-normal ${item.category === 'product' ? 'text-blue-500' : ' text-purple-500'}`}>{item.category}</strong>
                                        </div>
                                        <div className="w-2/6">
                                            <span className="block text-black/60">Model</span>
                                            <Model model={item.business_model} />
                                        </div>

                                        <div className="flex-1">
                                            <span className="block text-black/60">Stage</span>
                                            <strong className="text-lg font-normal uppercase">{item.lifecycle_stage}</strong>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                    <Card title={<><ApiOutlined style={{marginRight: 8}} />Technology Stack</>} className="shadow-sm card-body-0">
                        <ul>
                            {technology_stack.map((item, index) => (
                                <li key={index} className='p-4 border-t border-gray-200'>
                                    <h4 className='mb-4 text-2xl font-bold'>
                                        <ProductOutlined style={{fontSize: '1.5rem', color: 'rgba(0,0,0,.5)', marginRight: '8px'}} />
                                        <span className='first-letter:uppercase'>
                                            {item.product_name}
                                        </span>
                                    </h4>
                                    <div>
                                        {
                                            item.uses_technologies.map((tec, idx) => (
                                                <Tag key={idx} style={{fontSize: '1rem', padding: '4px 8px', marginBottom: '8px'}} color="blue">{tec}</Tag>
                                            ))
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                    <Card title={<><AuditOutlined style={{marginRight: 8}} />Patents</>} className="shadow-sm card-body-0">
                        <Table columns={parentColumns} dataSource={patents} pagination={false} rowKey={(record) => record.parent_number} />
                    </Card>
                </Space>
            </div>
            <div className='w-90'>
                <RecentView />
            </div>
        </div>
    )
}

export default Technology

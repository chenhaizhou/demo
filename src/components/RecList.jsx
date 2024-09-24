import { Link} from 'react-router-dom'
import { FileTextOutlined, MoreOutlined,WarningOutlined,SaveOutlined, RightOutlined, DollarOutlined } from '@ant-design/icons'
import { Dropdown, Button, Divider, Space, Watermark } from 'antd';

const FundCard = ({data}) => {
    const {title, investor} = data || {}
    return (
        <div className='m-4 rounded-lg overflow-hidden'>
            <Watermark content="$" className='bg-green-500' gap={[10, 10]}>
                <div className='h-28 flex items-center justify-center text-3xl font-bold text-white drop-shadow-lg shadow-black bg-gradient-to-t from-black/40 to-black/0'>{title}</div>
            </Watermark>
            <div className='border border-gray-200 p-4 rounded-b-lg'>
                <span>Investor:</span>
                <Link to='' className='ml-2 text-blue-500 hover:underline'>{investor}</Link>
            </div>
        </div>
    )
}

const handleButtonClick = (e) => {
    console.log('click left button', e);
  };
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      label: 'Saved',
      key: '1',
      icon:<SaveOutlined />,
    },
    {
      label: 'Report',
      key: '2',
      icon: <WarningOutlined />,
    },
  ];

const menuProps = {
    items,
    onClick: handleMenuClick,
}

const RecListItem = ({ data }) => {
    const {img, name, link, list = [], tags, type} = data
    return (
        <li className='mb-4'>
            <div className='bg-white rounded-lg shadow-sm p-4'>
                <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-sm">
                        <img src={img} alt={name} className="w-full h-full rounded-sm border border-gray-200" />
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-xl font-bold'><Link to={link} className='text-blue-500 font-bold hover:underline'>{name}</Link></h3>
                        <div className='text-black/60'>
                            {
                                type === 'news' ? (
                                    <>
                                        <FileTextOutlined />
                                        <span className='ml-2'>News</span>
                                    </>
                                ) : (
                                    <>
                                        <DollarOutlined />
                                        <span className='ml-2'>Funding Round</span>
                                    </>
                                )
                            }
                            <span className="mx-2 text-xl font-bold">·</span>
                            <span>Sep 17</span>
                        </div>
                    </div>
                    <div>
                    <Dropdown menu={menuProps} onClick={handleButtonClick} size='large'>
                        <Button type='text' icon={<MoreOutlined />} className='rounded-full' size='large'></Button>
                    </Dropdown>
                    </div>
                </div>
                {
                    type === 'news' ? (
                        <>
                                <ul className='mx-20'>
                            {
                                list.map((item, i) => {
                                    return (
                                        <li key={i} className='mt-4 text-black/60 border-b border-gray-200 pb-4 last:border-0'>
                                            <h4><a href="" className='text-lg font-bold text-black/80 hover:underline'>{item.title}</a> - <span>{item.owner}</span></h4>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                        {
                            list.length > 3 && (
                                <div className='mb-4 mx-20'>
                                    <Divider className='my-0' />
                                    <div className='mt-4'>
                                    <Link to={link} className='text-blue-500 font-bold hover:underline'>
                                        View more 1PointFive news
                                        <RightOutlined className='inline-block ml-2 align-middle' />
                                    </Link>
                                    </div>
                                </div>
                            )
                        }
                        </>
                    ) : <FundCard data={data} />
                }
                
                
                {
                    tags.length > 0 && <Space size={16} className='w-full my-4'>
                        {
                            tags.map((item, i) => {
                                return (
                                    <Link key={i} to={link} className='px-4 py-2 text-sm rounded-xl text-blue-500 bg-sky-100'>
                                        {item}
                                    </Link>
                                )
                            })
                        }
                    </Space>
                }
            </div>
        </li>
    )
}

const RecList = ({ data }) => {
    return (
        <ul>
            {
                data.map((item, i) => {
                    return <RecListItem key={i} data={item} />
                })
            }
        </ul>
    )
}

export default RecList

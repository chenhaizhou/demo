import { useState } from "react"
import { FloatButton, Affix, Button, Input, Space, Avatar } from "antd"
import { CloseOutlined, CustomerServiceOutlined, SendOutlined } from "@ant-design/icons"

const msgs = [
    {
        type: 'server',
        msg: 'Lorem ipsum dolor sit amet.'
    },
    {
        type: 'client',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi similique repellendus, voluptas optio iusto repellat voluptatibus. Repudiandae omnis, et sed iusto quidem at ipsum exercitationem. Porro culpa expedita incidunt. Maxime!'
    },
    {
        type: 'server',
        msg: 'Lorem ipsum dolor sit amet.'
    }, {
        type: 'client',
        msg: '???'
    }
]


const Server = ({msg}) => {
    return (
        <div className="flex gap-4">
            <Avatar size='large' style={{backgroundColor: '#1890ff'}}><CustomerServiceOutlined style={{fontSize: '20px'}} /></Avatar>
            <div className="flex-1 mr-14">
                <p className="py-2 px-4 w-fit rounded-lg text-base text-black/60 bg-gray-100">{msg}</p>
            </div>
        </div>
    )
}

const Client = ({msg}) => {
    return (
        <div className="flex gap-4">
            <div className="flex-1 ml-14">
                <p className="py-2 px-4 w-fit ml-auto rounded-lg bg-sky-100 text-base text-blue-500">{msg}</p>
            </div>
            <Avatar size='large'>HC</Avatar>
        </div>
    )
}

const Service = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <FloatButton type={show ? 'default' : "primary"} style={{width: '60px', height: '60px'}} icon={show ? (<CloseOutlined style={{fontSize: '24px'}} />) : (<CustomerServiceOutlined style={{fontSize: '24px'}} />)} onClick={handleClick} />
            <Affix offsetBottom={120} className={show ? 'block absolute' : 'hidden'}>
                <div className="w-120 fixed right-8 rounded-lg shadow-2xl bg-white bottom-32 overflow-hidden">
                    <div className="py-2 px-4 flex items-center justify-between gap-2 bg-blue-500">
                        <CustomerServiceOutlined style={{color: 'white', fontSize: '20px'}} />
                        <h4 className="mr-auto text-white text-lg font-bold">Service</h4>
                        <Button type="text" icon={<CloseOutlined style={{color: 'white'}} />} onClick={handleClick}></Button>
                    </div>
                    <Space className="min-h-80 max-h-120 w-full py-8 px-4 overflow-auto" size={16} direction="vertical">
                        {
                            msgs.map((msg, index) => {
                                return msg.type === 'server' ? <Server key={index} msg={msg.msg} /> : <Client key={index} msg={msg.msg} />
                            })
                        }
                    </Space>
                    <Space className="w-full p-4" direction="vertical">
                        <Input.TextArea rows={2} placeholder="Write a replay..." className="!resize-none"></Input.TextArea>
                        <Button type="primary" icon={<SendOutlined />}>Send</Button>
                    </Space>
                </div>
            </Affix>
        </>
    )
}

export default Service

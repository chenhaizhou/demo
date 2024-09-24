import {useState} from 'react'
import { Space, Card, Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload, Avatar, Form, Input, Switch, List, Affix } from 'antd'
import { GoogleIcon, LinkedinIcon } from '../components/Icons'
const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

const authData = [
    {
        icon: <GoogleIcon size={36} />,
        name: 'Google',
        link: 'https://www.google.com'
    },
    {
        icon: <LinkedinIcon size={36} />,
        name: 'Linkedin',
        link: 'https://www.linkedin.com'
    }
]

const Account = () => {
    const [showPwd, setShowPwd] = useState(false)

  const onClick = (e) => {
    console.log('click ', e)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onChangeSwitchPwd = (checked) => {
    setShowPwd(checked)
  };

  return (
    <div className="container mt-8 flex gap-8">
      <div className="w-72">
      <Affix offsetTop={110}>
        <Space direction="vertical" size={16} className='w-full'>
          <Card
            title={
              <>
                <SettingOutlined style={{ marginRight: '8px' }} />
                Account Settings
              </>
            }
            className="card-body-8"
            size="large"
          >
            <Menu
              selectedKeys={'info'}
              onClick={onClick}
              items={[
                {
                  label: 'Your Info',
                  key: 'info'
                },
                {
                  label: 'My Lists',
                  key: 'm2'
                },
                {
                  label: 'My Saved Searches',
                  key: 'm3'
                },
                {
                  label: 'Import Lists',
                  key: 'm4'
                }
              ]}
            />
          </Card>
        </Space>
        </Affix>
      </div>
      <div className="flex-1">
        <Space direction="vertical" size={16} className='w-full'>

       
        <Card title="Personal Information">
          <div className="flex gap-8">
            <div className="w-60 flex flex-col gap-4 items-center">
              <Avatar
                style={{
                  backgroundColor: '#1890ff',
                  verticalAlign: 'middle',
                  fontSize: '4em'
                }}
                size={160}
              >
                HC
              </Avatar>
              <Upload {...props}>
                <Button type='primary' ghost icon={<UploadOutlined />}>Upload Photo</Button>
              </Upload>
            </div>
            <div className="flex-1 ml-12 mr-12">
            <Form
              name="basic"
              layout='vertical'
              size='large'
              labelCol={{
                span: 8
              }}
              wrapperCol={{
                span: 24
              }}
              
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
                <div className='flex gap-4'>
                <Form.Item
                label="First Name"
                name="firstName"
                className='flex-1'
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!'
                  }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                className='flex-1'
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
                </div>
              
              <Form.Item label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your email!'
                  }
                ]}>
                <div className='flex gap-4'>
                    <div className='flex-1'>
                        <Input />
                    </div>
                    <Button type='primary' ghost style={{ width: 160 }} >Verify Email</Button>
                </div>
                </Form.Item>
                <Form.Item label="Change Password" layout='horizontal' labelCol={{span: 4}}>
                    <Switch defaultChecked={showPwd} onChange={onChangeSwitchPwd} />
                </Form.Item>
                
                {
                    showPwd && (
                        <>
                        <Form.Item
        label="Old Password"
        name="oldPassword"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
                <Form.Item
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* Field */}
      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
                        </>
                    )
                }

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16
                }}
              >
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
              </Form.Item>
              
            </Form>
          </div>
          </div>
          
        </Card>
        <Card title="Notifications">
            <label className='flex gap-4 items-center'>

            <Switch defaultChecked />
            <span className='text-lg'>

             Email Alerts for Saved Lists/Searches 
            </span>
            </label>
        </Card>
        <Card title="Social Authentication">
        <List
          dataSource={authData}
          renderItem={(item) => (
            <List.Item key={item.name}>
              <List.Item.Meta
                avatar={item.icon}
                title={<strong className='text-lg'>{item.name}</strong>}
                description={item.email}
                 className='flex items-center text-2xl'
                 style={{alignItems: 'center'}}
              />
              <Button type='primary' ghost href={item.link}>CONNECT</Button>
            </List.Item>
          )}
        />
        </Card>
        <Card className='bg-blue-200' bordered={false}>
            <h3 className='text-lg font-bold'>My Verified Companies</h3>
            <div className='flex justify-between items-center gap-8 my-6'>
                <img src="https://images.crunchbase.com/image/upload/c_pad,h_150,w_150,f_auto,q_auto:eco,dpr_2/v1652717934/clientapp/verify_icon_bluebg.png" className='w-40 h-40' alt="" />
                <div className='flex-1'>
                    <h4 className='mb-3 text-2xl font-bold'>Dont see your company?</h4>
                    <p>
                    You dont have any verified companies yet. Add your first company now.</p>
                </div>
                <Button type='primary' size='large'>VERIFY COMPONY</Button>
            </div>
        </Card>
        </Space>
      </div>
    </div>
  )
}

export default Account

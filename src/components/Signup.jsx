import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Flex } from 'antd';
import {GoogleIcon, LinkedinIcon} from './Icons'

const Signup = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        margin: '8px',
      }}
      onFinish={onFinish}
      size='large'
    >
      <h2 className='mb-4 text-center font-bold text-lg'>Register Using Social Authentication
        </h2>
            
      <Form.Item>
        
        <Button block type="default" icon={<GoogleIcon />}>
          Log in with Google
        </Button>
      </Form.Item>
      <Form.Item>
        <Button block type="default" icon={<LinkedinIcon />}>
          Log in with Linkedin
        </Button>
      </Form.Item>
      <Divider>OR</Divider>
      <h2 className='mb-4 text-center font-bold text-lg'>Register Using Your Email Address
        </h2>
      
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="E-mail Address" />
      </Form.Item>
      <Form.Item
        name="fistName"
        rules={[
          {
            required: true,
            message: 'Please input your first name',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} type="password" placeholder="New Password" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item>
         By clicking on Register, you agree to <a href="">Terms of Service</a>&nbsp;and&nbsp;<a href="">Privacy Policy</a>
      </Form.Item>

    </Form>
  );
};
export default Signup;
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Flex } from 'antd';
import {GoogleIcon, LinkedinIcon} from './Icons'
import { useAuthDispatch, useAuth } from '../context/auth';
import { userService } from '../service/user';

const Signin = () => {

    const dispatch = useAuthDispatch()
    const auth = useAuth()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch({type: 'update', payload: {user: values.email}})


    userService.login(values.email, values.password).then((res) => {
        console.log('Login response:', res)
    }).catch((err) => {
        console.log('error:', err)
    })

    setTimeout(() => {
        console.log('auth context:', auth)
    },1000)
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
        <Input prefix={<MailOutlined />} placeholder="Email Address" />
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
        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Flex justify="center" align="center">
          <a href="">Forgot password?</a>
        </Flex>
      </Form.Item>
      <Divider>OR</Divider>
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
    </Form>
  );
};
export default Signin;
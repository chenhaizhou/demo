import { Tabs } from 'antd';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: 'signin',
    label: 'Login',
    children: <Signin />,
  },
  {
    key: 'signup',
    label: 'Register',
    children: <Signup />,
  },
];
const Login = () => {
  return (
    <div className='h-full mt-8 flex items-center justify-center'>
      <div className='max-w-lg w-full mx-auto bg-white shadow-md p-4 rounded-lg'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabBarStyle={{fontSize: '20px'}} />
      </div>
    </div>
  )
};
export default Login;

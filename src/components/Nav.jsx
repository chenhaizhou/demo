import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {useNavigate, useLocation} from 'react-router-dom';
import { SettingOutlined, InboxOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../context/auth';

const items = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Companies',
    key: 'company',
  },
  {
    label: 'Account',
    key: 'account',
    children: [
      {
        label: 'Account Settings',
        icon: <SettingOutlined />,
        key: 'account/setting',
      },
      {
        label: 'Manage My Company',
        icon: <InboxOutlined />,
        key: 'account/mycompany',
      },
      {
        label: 'Logout',
        icon: <LogoutOutlined />,
        key: 'account/logout',
      },
    ],
  },
  {
    label: 'Login',
    key: 'login',
  },
];
const Nav = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();
  const location = useLocation()
  const auth = useAuth()

  const onClick = (e) => {
    navigate(`/${e.key}`)
    setCurrent(e.key);
    
  };

  useEffect(() => {
    const crtPath = location.pathname.split('/')[1]
    setCurrent(crtPath)

    console.log('+++', auth)
  }, [])

  return (
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: 'transparent', fontSize: '18px', gap: '16px' }} theme='dark' />
  );
};
export default Nav;
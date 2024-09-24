import { Input } from 'antd'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="bg-slate-600 p-4 header fixed w-full z-50">
      <div className="container flex gap-4 items-center">
        <h1 className="text-3xl text-white font-bold">Logo</h1>
        
        <div className="flex-1 flex justify-end items-center">
            <div className='w-90 mr-10'>
                <Input.Search size='large' placeholder='Company name' />
            </div>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header

import {
  Outlet,
} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <div className='h-full flex flex-col'>
      <Header />
      <main className='mt-20 flex-1 max-w-full'>
        <Outlet />
      </main>
      <Footer />
      
    </div>
  )
}

export default App

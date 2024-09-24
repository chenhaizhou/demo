import {useState, useEffect } from 'react'
import { stockService } from '../service/stock'
import { Card } from 'antd'

const Stock = ({ticket}) => {

    const [stock, setStock] = useState({})
    
    const getData = () => {
        stockService.getData(ticket).then(res => {
         setStock(res)   
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Card className='bg-sky-50 !shadow-none' bordered={false}>
            <div className='flex flex-col'>
                <em className='text-2xl text-black font-bold not-italic'>{stock.ticket}</em>
                <h4 className='text-md text-slate-500'>{stock.name}</h4>   
                <div className='w-full mt-4 flex justify-between items-center'>
                    <strong className={`text-4xl ${stock.day_change >=0 ? 'text-red-500' : 'text-green-500'}`}>
                        <span className='mr-1 text-lg text-gray-400'>{stock.currency}</span>
                        {stock.price}
                    </strong>
                    <span className={`text-xl ${stock.day_change >=0 ? 'text-red-500' : 'text-green-500'}`}>{stock.day_change >=0 ? '+' : ''}{stock.day_change}</span>
                </div>
            </div> 
        </Card>
    )
}

export default Stock

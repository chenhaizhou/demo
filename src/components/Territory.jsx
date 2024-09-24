import { useState, useEffect } from 'react'
import { Card, Button } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import {territoryService} from '../service/territory'

const gridStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    itemsAlign: 'center',
    textAlign: 'center'
  }

const Territory = () => {
    const [data, setData] = useState({})
    const {fundingRounds, totalFundings, acquisitionsRecorded, acquisitionsAmount} = data

    const getData = () => {
        territoryService.getData().then(res => {
            setData(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Card title="This Week" className='shadow-md rounded-lg'>
            <Card.Grid style={gridStyle}>
              <strong className="text-3xl text-blue-500">{fundingRounds}</strong>
              <span className="text-sm">FUNDING ROUNDS</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <strong className="text-3xl text-blue-500">${totalFundings}B</strong>
              <span className="text-sm">TOTAL FUNDINGS</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <strong className="text-3xl text-blue-500">{acquisitionsRecorded}</strong>
              <span className="text-sm">ACQUISITIONS RECORDED</span>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <strong className="text-3xl text-blue-500">{acquisitionsAmount}B</strong>
              <span className="text-sm">ACQUISITIONS AMOUNT</span>
            </Card.Grid>
            <div className="p-4 mx-auto text-center">
              <Button type="link" icon={<EditOutlined />}>
                EDIT TERRITORY
              </Button>
            </div>
          </Card>
    )
}

export default Territory

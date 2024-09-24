import { DollarOutlined, PlusCircleOutlined, TeamOutlined, ApartmentOutlined, ProjectOutlined } from "@ant-design/icons"
import { Card, Button, Tag } from "antd"
import RecentView from "./RecentView"

const CampanyItem = ({data}) => {
    const {name, industry, sector, revenue, number_of_employees, market_position, logo} = data || {}
    return (
        <li className="flex gap-4 p-4 items-center  justify-between border-b border-gray-200 last:border-0">
            <div className="flex-1">
                <div className="flex gap-4 mb-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                        <img src={logo} alt={name} />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-2xl"><a href="" className="text-blue-500">{name}</a></h3>
                        <p className="text-lg mb-4">{market_position}</p>
                    </div>
                </div>
                <ul className="flex gap-8 bg-slate-50 p-4 rounded-lg">
                    <li className="flex-1">
                        <div className="text-gray-500">
                            <ProjectOutlined style={{marginRight: 4}} />
                            <span>Sector</span>
                        </div>
                        <strong className="text-xl font-normal">{sector}</strong>
                    </li>
                    <li className="flex-1">
                        <div className="text-gray-500">
                            <ApartmentOutlined style={{marginRight: 4}} />
                            <span>Industry</span>
                        </div>
                        <strong className="text-xl font-normal">{industry}</strong>
                    </li>
                    <li className="flex-1">
                        <div className="text-gray-500">
                            <TeamOutlined style={{marginRight: 4}} />
                            <span>Number of Employees</span>
                        </div>
                        <strong className="text-lg font-normal">{number_of_employees}</strong>
                    </li>
                    <li className="flex-1">
                        <div className="text-gray-500">
                            <DollarOutlined style={{marginRight: 4}} />
                            <span>Market Postion</span>
                        </div>
                        <strong className="text-xl text-green-500">$ {(revenue / 1000000).toFixed(2)} M</strong>
                    </li>
                    
                </ul>
            </div>
            <div>
                <Button type="primary" icon={<PlusCircleOutlined />}>SAVE</Button>
            </div>
        </li>
    )
}

const SimilarCompanies = ({data = []}) => {
    return (
        <div className="flex gap-8">
            <div className="flex-1">
                <Card>
                    <ul>
                        {
                            data.map((item , index) => (
                                <CampanyItem key={index} data={item} />
                            ))
                        }
                    </ul>
                </Card>
            </div>
            <div className="w-90">
                <RecentView />
            </div>
        </div>
    )
}

export default SimilarCompanies

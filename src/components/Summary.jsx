import { Descriptions, Card } from "antd"

const Summary = ({data}) => {
    const {name, canonical_name, headquarters_location, industry, sector, public_or_private, stock_symbol, founding_year, number_of_employees,revenue, website, description} = data || {}
    return (
        <div className="flex gap-8">
            <div className="flex-1">
                <Descriptions column={{xs:1, sm: 1, md:2, lg: 2, xl: 2, xxl:2}} bordered={false} layout="vertical" labelStyle={{fontSize: "1rem"}} contentStyle={{fontSize: "1.2rem", paddingBottom: '32px'}}>
                    <Descriptions.Item label="Name" className="!pb-0">{name}</Descriptions.Item>
                    <Descriptions.Item label="Canonical Name" className="!pb-0">{canonical_name}</Descriptions.Item>
                    <Descriptions.Item label="Headquarters Location" className="!pb-0">{headquarters_location}</Descriptions.Item>
                    <Descriptions.Item label="Industry" className="!pb-0">{industry}</Descriptions.Item>
                    <Descriptions.Item label="Public or Private" className="!pb-0">{public_or_private}</Descriptions.Item>
                    <Descriptions.Item label="Stock Symbol" className="!pb-0">{stock_symbol}</Descriptions.Item>
                    <Descriptions.Item label="Revenue" className="!pb-0">{revenue}</Descriptions.Item>
                    <Descriptions.Item label="Website" className="!pb-0">{website}</Descriptions.Item>
                    <Descriptions.Item label="Founding Year" className="!pb-0">{founding_year}</Descriptions.Item>
                    <Descriptions.Item label="Number of Employees" className="!pb-0">{number_of_employees}</Descriptions.Item>
                    <Descriptions.Item label="Sector" className="!pb-0">
                        {sector}
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <div className="w-90">
                <Card title='About' className="shadow-sm">
                    <p className="text-lg">{description}</p>
                </Card>
            </div>
        </div>
    )
}

export default Summary

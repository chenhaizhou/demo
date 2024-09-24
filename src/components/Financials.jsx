import { Statistic, Space, Card, Progress } from "antd"
import { FundOutlined, DollarOutlined, ArrowUpOutlined } from '@ant-design/icons';

const Financials = ({data}) => {
    const {revenue_growth, profit_margin, cash_flow, operating_expense, net_income, ebitda, pe_ratio, funding_rounds = [], investments = [], key_financial_events} = data || {}
    return (
        <div>
            <Space className="w-full" direction="vertical" size={16}>
                <ul className="flex gap-8 rounded-lg p-4 shadow-sm border border-gray-100">
                    <li className="flex-1 text-center">
                        <Statistic title="Revenue Growth" valueStyle={{fontSize: '3rem', fontWeight: 'bold', color: '#61c600',}} value={revenue_growth} prefix={<ArrowUpOutlined style={{fontSize: '2rem'}} />} suffix={<span className="text-lg opacity-50">%</span>} />
                    </li>
                    <li className="flex-1 text-center">
                        <Statistic title="Profit Margin" valueStyle={{fontSize: '3rem', fontWeight: 'bold', color: '#4096ff'}} value={profit_margin} suffix={<span className="text-lg opacity-50">%</span>} />
                    </li>
                    <li className="flex-1 text-center">
                        <h4 className="mb-4 text-sm text-black/40">Price-to-Earnings Ratio</h4>
                        <Progress type="circle" percent={pe_ratio} size={80} />
                    </li>
                </ul>
                <ul className="flex gap-8 mb-4 bg-sky-50 p-4 rounded-lg">
                    <li className="flex-1 text-center">
                        <Statistic title="Cash Flow" valueStyle={{fontSize: '2rem', fontWeight: 'bold'}} value={cash_flow} />
                    </li>
                    <li className="flex-1 text-center">
                        <Statistic title="Operating Expense" valueStyle={{fontSize: '2rem', fontWeight: 'bold'}} value={operating_expense} />
                    </li>
                    <li className="flex-1 text-center">
                        <Statistic title="Net income in USD" valueStyle={{fontSize: '2rem', fontWeight: 'bold'}} value={net_income} />
                    </li>
                    <li className="flex-1 text-center">
                        <Statistic title=" Earnings Before Interest" valueStyle={{fontSize: '2rem', fontWeight: 'bold'}} value={ebitda} />
                    </li>
                </ul>
            </Space>
            <div>
                <div className="w-3/3">
                    <Space direction="vertical" className="w-full" size={16}>
                        <Card title={<><FundOutlined style={{marginRight: 8}} />Funding Rounds</>} className="shadow-sm">
                            <ul>
                                {
                                    funding_rounds.map((round, index) => (
                                        <li key={index} className="flex gap-8 my-4 first:border-none first:mt-0 first:pt-0 last:mb-0 border-t border-gray-200 pt-4">
                                            <div className="w-1/6">
                                                <span className="block text-black/60">Round Type</span>
                                                <strong className="text-lg">{round.round_type}</strong>
                                            </div>
                                            <div className="w-1/6">
                                                <span className="block text-black/60">Amount</span>
                                                <strong className="text-lg text-blue-500">$ {round.amount}</strong>
                                            </div>
                                            <div className="w-1/6">
                                                <span className="block text-black/60">Date</span>
                                                <strong className="text-lg font-normal">{round.date}</strong>
                                            </div>
                                            <div className="w-1/6">
                                                <span className="block text-black/60">Lead Investor</span>
                                                <strong className="text-lg font-normal">{round.lead_investor}</strong>
                                            </div>
                                            <div className="w-2/6">
                                                <span className="block text-black/60">Participating Investors</span>
                                                <strong className="text-md font-normal">{round.participating_investors.join(', ')}</strong>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                        <Card title={<><DollarOutlined style={{marginRight: 8}} />Investments</>} className="shadow-sm">
                            <ul>
                                {
                                    investments.map((round, index) => (
                                        <li key={index} className="flex gap-8 my-4 first:border-none first:mt-0 first:pt-0 last:mb-0 border-t border-gray-200 pt-4">
                                            <div className="flex items-center text-lg text-black/60">{index + 1}</div>
                                            <div className="w-1/6">
                                                <span className="block text-black/60">Date</span>
                                                <strong className="text-lg font-normal">{round.date}</strong>
                                            </div>
                                            <div className="w-2/6">
                                                <span className="block text-black/60">Amount</span>
                                                <strong className="text-xl text-blue-500">$ {round.amount}</strong>
                                            </div>

                                            <div className="flex-1">
                                                <span className="block text-black/60">Investor</span>
                                                <strong className="text-lg font-normal">{round.investor}</strong>
                                            </div>
                                           
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Financials

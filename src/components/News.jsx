import { Card, Space } from "antd"
import { FileTextOutlined, FileProtectOutlined } from "@ant-design/icons"
import Stock from "./Stock"
import RecentView from "./RecentView"

const News = ({data, stock_ticket}) => {
    const {news_articles = [], recent_developments = [], markket_signals, social_media_mentions = []} = data || {}
    return (
        <div className="flex gap-8">
            <div className="flex-1">
                <Space className="w-full" direction="vertical" size={16}>
                    <Card title={<div><FileTextOutlined style={{marginRight: 8}} />News Articles</div>} className="shadow-sm">
                        <ul>
                            {
                                news_articles.map((article, index) => (
                                    <li key={index} className="border-t border-gray-200 py-4 first:border-none first:pt-0 last:pb-0">
                                        <div className="flex gap-2 text-base text-black/30">
                                            <span className="text-gray-500">{article.source}</span>|
                                            <span className="text-blue-500">{article.news_type}</span>|
                                            <span className="text-black/50">{article.publication_date}</span>
                                        </div>
                                        <h4 className="my-1 text-xl font-bold"><a href={article.link} className="text-black hover:underline">{article.title}</a></h4>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                    <Card title={<div><FileProtectOutlined style={{marginRight: 8}} />Recent Development</div>} className="shadow-sm">
                        <ul>
                            {
                                recent_developments.map((item, index) => (
                                    <li key={index} className="flex gap-8  justify-between items-center border-t border-gray-200 py-4 first:border-none first:pt-0 last:pb-0">
                                        <h4 className="my-1 text-lg font-bold"><a href={item.link} className="text-black hover:underline">{item.title}</a></h4>
                                        <span className="text-black/50">{item.date}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                </Space> 
            </div>
            <div className="w-90">
                <Space className="w-full" size={16} direction="vertical">
                    <Stock ticket={stock_ticket} />
                    <RecentView />
                </Space>
            </div>
        </div>
    )
}

export default News

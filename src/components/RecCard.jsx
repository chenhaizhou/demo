import { PlusCircleOutlined, HeartOutlined, CloseOutlined } from "@ant-design/icons"
import { Divider, Button } from "antd"

const RecCord = ({ title, description, img, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-4 mb-4">
            <img src={img} alt="" className="w-16 h-16 border border-gray-200" />
            <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-base text-black/60">{description}</p>
        <Divider />
        <div className="flex gap-4 justify-between">
            <Button type="primary" icon={<PlusCircleOutlined />}>SAVE</Button>
            <ul className="flex gap-4">
                <li>
                    <Button icon={<HeartOutlined />} className="rounded-full"></Button>
                </li>
                <li>
                    <Button icon={<CloseOutlined />} className="rounded-full"></Button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default RecCord

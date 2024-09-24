import { useState } from "react"
import { CloseOutlined } from "@ant-design/icons"
import {Button} from "antd"

const Hero = () => {
    const [hide, setHide] = useState(false)
    const handleClose = () => {
        setHide(true)
    }
    return !hide ? (
        <div className="bg-yellow-100 shadow-sm rounded-lg relative h-72">
            <Button onClick={handleClose} type='text' className="absolute top-2 right-2"><CloseOutlined /></Button>
        </div>
    ) : null
}
export default Hero

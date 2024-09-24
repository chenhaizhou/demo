import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { memo, useEffect, useRef, useState } from 'react'

const ScrollViewWapper = ({children}) => {
    return (
        <div className='flex items-center justify-between'>{children}</div>
    )
}

const ScrollView = memo((
  {
    children,
    gap = 16
  }
) => {
  const contentRef = useRef(null)

  const [maxoffset, setMaxOffset] = useState(0) // 两者最大的偏移量 可滚动距离
  const [currentOffsetIndex, setCurrentOffsetIndex] = useState(0)
  const [isContinueScroll, setisContinueScroll] = useState(true)
  const handelIconClick = (isRight) => {
    const newIndex = isRight ? currentOffsetIndex + 1 : currentOffsetIndex - 1

    // 边界处理
    if (newIndex < 0 || (!isContinueScroll && isRight)) {
        
        return 
    }
    const TabAllList = getAllElements('item', 'class') // 获取conntentRef 下面的 所有 item 子节点
    console.log(TabAllList, 'rrr', newIndex)

    const TabItem = TabAllList[newIndex] // 获取下一个 准备滚动元素

    const TabItemOffsetLeft = TabItem.offsetLeft

    contentRef.current.style.transform = `translateX(${-TabItemOffsetLeft}px)`

    setisContinueScroll(maxoffset > TabItemOffsetLeft) // 是否能继续滚动 如果 你的 offsetLeft 都
    // 比我可滚动距离大了 ， 则肯定是不能滚动的

    setCurrentOffsetIndex(newIndex)
    
  }

  const getAllElements = (querySelectorName, type = 'class') => {
    let seletorName = null
    if (type === 'id') { // 对选择器 做不同类型处理
      seletorName = `#${querySelectorName.replace(/\^#/, '')}`
    } else if (type == 'class') {
      seletorName = `.${querySelectorName.replace(/\^./, '')}`
    } else {
      seletorName = `${querySelectorName.replace(/\^(.|#)/, '')}`
    }
    return contentRef.current.querySelectorAll(seletorName)
  }

  function getScrollOffset() {
    const scrollWidth = contentRef.current.scrollWidth
    const clientWidth = contentRef.current.clientWidth
    setMaxOffset(scrollWidth - clientWidth)
  }
  useEffect(() => {
    getScrollOffset()
  }, [])

  return (
    <ScrollViewWapper>
    {maxoffset > 0 && currentOffsetIndex !==0 && <div className='cursor-pointer' onClick={() => handelIconClick(false)}><LeftOutlined style={{fontSize: 24}} /></div>}
      
      <div className='flex-1 overflow-scroll'>
        <div className='flex pt-2 px-2' style={{gap}} ref={contentRef}>
          {children}
        </div>
      </div>
      {
        maxoffset > 0 && isContinueScroll && <div className='cursor-pointer' onClick={() => handelIconClick(true)}><RightOutlined style={{fontSize: 24}} /></div>
      }
    </ScrollViewWapper>
  )
})

export default ScrollView
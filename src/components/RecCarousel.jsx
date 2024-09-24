import { useRef, useState } from 'react';
import { Carousel, Button } from 'antd';
import RecCard from './RecCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const RecCarousel = ({data}) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
    setCrt(currentSlide);
  };
  const [crt, setCrt] = useState(0);
  const carouselRef = useRef(null);

  return (
    <div className='max-w-full overflow-hidden'>
        <Carousel afterChange={onChange} ref={carouselRef} slidesToShow={2} slidesToScroll={2} dots={false}>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='px-2'>
                <RecCard {...item} />
            </div>
          )
        })
      }
    </Carousel>
    <div className='mt-4 mx-2 flex justify-between items-center'>
        <Button type='primary' ghost onClick={() => carouselRef.current.prev()} disabled={crt === 0} icon={<LeftOutlined />}>Prev</Button>
        <Button type='primary' ghost onClick={() => carouselRef.current.next()} disabled={crt === data.length - 2} icon={<RightOutlined />} iconPosition='right'>Next</Button>
    </div>
    </div>
  );
};

export default RecCarousel;
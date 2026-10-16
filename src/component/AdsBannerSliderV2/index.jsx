import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, FreeMode } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSliderV2 = (props) => {
    return (
        <div className='!py-5 !pb-0 w-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, FreeMode]}
                spaceBetween={50}
                slidesPerView={props.items}
                
                    freeMode={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='smBtn'
            >
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'} link={'/'}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AdsBannerSliderV2;
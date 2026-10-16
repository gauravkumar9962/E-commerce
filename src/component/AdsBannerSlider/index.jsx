import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, FreeMode } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
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
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox img={'https://cdn1.jiomartjcp.com/v2/jiomart-fynd/jio-pd/t.resize(w:450)/company/1/applications/685945f46c8c7aee3f3af605/theme/pictures/free/original/Ganesh-chaturthi-banner-V3-1788532648098.png.png'} link={'/'}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AdsBannerSlider
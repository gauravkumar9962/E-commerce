import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

const Homeslider = () => {
    return (
        <div className='homeSlider !py-4'>
            <div className='container'>
                <Swiper
                    modules={[Navigation, Autoplay, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='sliderHome'
                >

                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='!w-full'>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png' alt='Banner slider' className='w-full' />
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    )
}

export default Homeslider;
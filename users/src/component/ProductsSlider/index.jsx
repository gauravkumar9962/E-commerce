import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, FreeMode } from 'swiper/modules';
import ProductItems from '../ProductsItems';

const ProductsSlider = (props) => {
    return (
        <div className='prodectsSlider !py-5'>
              <Swiper
                    modules={[ Navigation, FreeMode ]}
                    slidesPerView={props.items}
                    spaceBetween={30}
                    freeMode={true}
                    navigation
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductItems/>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}

export default ProductsSlider;
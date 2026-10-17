import React from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ProductZoom = () => {

    const MyDiv = () => (
        <Zoom>
            <div
                aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
                role="img"
                style={{
                    backgroundColor: '#ff00',
                    backgroundImage: `url("https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")`,
                    backgroundPosition: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '0',
                    paddingBottom: '76%',
                    width: '100%',
                }}
            />
        </Zoom>

    )

    return (
        <>
    <div className="!gap-3">

          <div className="zoomContainer">
            <MyDiv />
          </div>

        <div className="slider !pt-5">
            <Swiper
                        // direction={'vertical'}
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        modules={[ Navigation ]}
                        className="homeSliderV2"
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
                            </div>
                        </SwiperSlide>
            </Swiper>
        </div>

           
    </div>
        </>
    )
}

export default ProductZoom;
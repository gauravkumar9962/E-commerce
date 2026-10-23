import React, { useState, useRef } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const MyDiv = ({imgUrl}) => (
        <Zoom>
            <div
                aria-label="Product Image"
                role="img"
                style={{
                    backgroundColor: '#fff',
                    backgroundImage: `url("${imgUrl}")`,
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

const ProductZoom = () => {

    const images = [
        "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        "https://teamtsb.com/portfolio/shave-butter-creative.jpg",
        "https://teamtsb.com/portfolio/item-12.jpg",
        "https://teamtsb.com/portfolio/dalyla-coffee-lifestyle.jpg",
        "https://teamtsb.com/portfolio/item-2.jpg",
        "https://i.pinimg.com/1200x/3e/3e/ca/3e3eca427faee7069c7c1c538e0490be.jpg",
    ];
    const [slideIndex, setSliderIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSliderIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <>
    <div className="!gap-3">

          <div className="zoomContainer w-[120%]">
            <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                    >                    
                {images.map((url, index) => (
                <SwiperSlide key={index}> 
                    <MyDiv imgUrl={url} /> 
                </SwiperSlide> ))}
                    </Swiper>
          </div>

        <div className="slider !pt-5 w-[120%]">
            <Swiper
                        ref={zoomSliderSml}
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation={true}
                        modules={[ Navigation ]}
                        className="zoomProductSliderThumb"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(0)}>
                                <img src="https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                                className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group h-full ${slideIndex===1 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(1)}>
                                <img src="https://teamtsb.com/portfolio/shave-butter-creative.jpg"
                                className="w-full transition-all group-hover:scale-105 h-full"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group h-full ${slideIndex===2 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(2)}>
                                <img src="https://teamtsb.com/portfolio/item-12.jpg"
                                className="w-full transition-all group-hover:scale-105 h-full"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group h-full ${slideIndex===3 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(3)}>
                                <img src="https://teamtsb.com/portfolio/dalyla-coffee-lifestyle.jpg"
                                className="w-full transition-all group-hover:scale-105 h-full"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group h-full ${slideIndex===4 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(4)}>
                                <img src="https://teamtsb.com/portfolio/item-2.jpg"
                                className="w-full transition-all group-hover:scale-105 h-full"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md aspect-[4/3] overflow-hidden cursor-pointer group ${slideIndex===5 ? 'opacity-100' : 'opacity-50'}`} onClick={() => goto(5)}>
                                <img src="https://i.pinimg.com/1200x/3e/3e/ca/3e3eca427faee7069c7c1c538e0490be.jpg"
                                className="w-full h-full object-cover transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide ></SwiperSlide>
                        
            </Swiper>
        </div>

           
    </div>
        </>
    )
}

export default ProductZoom;
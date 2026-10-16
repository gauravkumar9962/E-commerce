import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from "@mui/material/Button"

const HomeBannerV2 = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
            navigation={true}
             pagination={{
                        dynamicBullets: true,
                    }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="homeSliderV2"
        >
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden relative">
                    <img
                        src="https://teamtsb.com/portfolio/item-2.jpg"
                        className="w-full h-auto object-cover"
                    />

                    <div
                        className="
                            info absolute top-25 left-128 -translate-y-1/2
                            w-[45%] p-8
                            backdrop-blur-sm rounded-md
                            border-none
                            shadow-xl shadow-emerald-500/20
                            z-50
                            flex flex-col justify-center
                            "
                    >
                        <h4 className="subtitle text-[17px] font-medium !mb-3 text-emerald-600 flex">
                            Big Saving Days Sale
                        </h4>

                        <h2 className="title text-[25px] font-bold text-gray-900 leading-tight">
                            Food and Cold Drinks
                        </h2>

                        <h3 className="price flex items-center gap-3 text-[17px] font-medium mt-4 mb-4 text-gray-700">
                            Starting At Only
                            <span className="text-red-500 text-[30px] font-bold">
                                $9.00
                            </span>
                        </h3>

                        <div>
                            <Button className="btb !bg-[#ff5252] !text-white !rounded-md !text-[15px] left-1">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden relative'>
                    <img src="https://teamtsb.com/portfolio/shave-butter-creative.jpg" className="w-full h-auto object-cover"/>
                     <div
                        className="
                            info absolute top-135 left-5 -translate-y-1/2
                            w-[45%] p-8
                            backdrop-blur-sm rounded-md                           
                            shadow-xl shadow-emerald-500/20
                            z-50
                            flex flex-col justify-center
                            "
                    >
                        <h4 className="subtitle text-[17px] font-medium !mb-3 text-emerald-600 flex">
                            Big Saving Days Sale
                        </h4>

                        <h2 className="title text-[25px] font-bold text-gray-900 leading-tight">
                            Frash Cold IceCream
                        </h2>

                        <h3 className="price flex items-center gap-3 text-[17px] font-medium mt-4 mb-4 text-gray-700">
                            Starting At Only
                            <span className="text-red-500 text-[30px] font-bold">
                                $1.50
                            </span>
                        </h3>

                        <div>
                            <Button className="btb !bg-[#ff5252] !text-white !rounded-md !text-[15px] left-1">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden relative'>
                    <img src="https://teamtsb.com/portfolio/item-12.jpg" className="w-full h-auto object-cover"/>
                     <div
                        className="
                            info absolute top-25 left-70 -translate-y-1/2
                            w-[45%] p-8
                            backdrop-blur-sm rounded-md
                            shadow-xl shadow-emerald-500/20
                            z-50
                            flex flex-col justify-center
                            "
                    >
                        <h4 className="subtitle text-[17px] font-medium !mb-3 text-emerald-600 flex">
                            Big Saving Days Sale
                        </h4>

                        <h2 className="title text-[25px] font-bold text-gray-900 leading-tight">
                            Bed Sheet and Pillows
                        </h2>

                        <h3 className="price flex items-center gap-3 text-[17px] font-medium mt-4 mb-4 text-gray-700">
                            Starting At Only
                            <span className="text-red-500 text-[30px] font-bold">
                                $4.10
                            </span>
                        </h3>

                        <div>
                            <Button className="btb !bg-[#ff5252] !text-white !rounded-md !text-[15px] left-1">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden relative'>
                    <img src="https://teamtsb.com/portfolio/dalyla-coffee-lifestyle.jpg" className="w-full h-auto object-cover"/>
                     <div
                        className="
                            info absolute top-25 left-5 -translate-y-1/2
                            w-[45%] p-8
                            backdrop-blur-sm rounded-md
                            shadow-xl shadow-emerald-500/20
                            z-50
                            flex flex-col justify-center
                            "
                    >
                        <h4 className="subtitle text-[17px] font-medium !mb-3 text-emerald-600 flex">
                            Big Saving Days Sale
                        </h4>

                        <h2 className="title text-[25px] font-bold text-gray-900 leading-tight">
                            New Branded Coffee Power
                        </h2>

                        <h3 className="price flex items-center gap-3 text-[17px] font-medium mt-4 mb-4 text-gray-700">
                            Starting At Only
                            <span className="text-red-500 text-[30px] font-bold">
                                $1.90
                            </span>
                        </h3>

                        <div>
                            <Button className="btb !bg-[#ff5252] !text-white !rounded-md !text-[15px] left-1">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBannerV2;
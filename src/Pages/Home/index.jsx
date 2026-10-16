import React from "react";
import HomeSlider from "../../component/HomeSlider";
import HomeCatSlider from "../../component/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from "../../component/ProductsSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import BlogItem from "../../component/BlogItem";
import HomeBannerV2 from "../../component/HomeSliderV2";
import BannerBoxV2 from "../../component/BannerBoxV2";
import AdsBannerSliderV2 from "../../component/AdsBannerSliderV2";
import AdsBannerSlider from "../../component/AdsBannerSlider";


const Home = () => {

     const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
     <>
        <HomeSlider/>

        <section className="!py-6">
            <div className="container flex gap-10">
            <div className="part1 w-239 h-64">
                <HomeBannerV2/>
            </div>

            <div className="part2 w-[30%] flex items-center gap-8 justify-between flex-col">
                <BannerBoxV2 info="left" image={'https://www.shutterstock.com/image-photo/set-cleaning-robot-vacuum-cleaner-260nw-2311299831.jpg'}/>
                 <BannerBoxV2 info="right" image={'	https://t3.ftcdn.net/jpg/03/35/30/96/360_F_335309642_UNwXtkopdaDiBvzvGWs7l18Tu723MRZh.jpg'}/>
            </div>
            </div>
        </section>
        <HomeCatSlider/>

        <section className="bg-white !py-8">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="leftSec">
                        <h3 className="text-[20px] font-[600]">Popular Products</h3>
                        <p className="text-[15px] font-[400]">Do not miss the current offers unit the end of march</p>
                    </div>


                    <div className="rightSec w-[35%]">
                         <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
       sx={{
    "& .MuiTab-root": {
      color: "#000",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#ff5252",
    },
  }}
      >
        <Tab label="Fashion" />
        <Tab label="Electronics" />
        <Tab label="Bags" />
        <Tab label="Footware" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewellery" />
      </Tabs>
                    </div>

                </div>

                <ProductsSlider items={6}/>

            </div>
        </section>

        <section className="!py-4 !pt-2 bg-white">
            <div className="container">
                <div className="freeShipping w-full !py-4 !p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-[15px] !mb-10">
                    <div className="col1 flex items-center gap-4">
                        <FaShippingFast className="text-[50px]"/>
                        <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
                    </div>

                    <div className="col2">
                        <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
                    </div>
                    
                    <p className="font-bold text-[25px]">- Only $200*</p>
                </div>

                <AdsBannerSliderV2 items={4}/>
            </div>
        </section>

        <section className="py-5 pt-0 bg-white">
            <div className="container">
                 <h3 className="text-[20px] font-[600]">Latest Products</h3>
                <ProductsSlider items={6}/>
                <AdsBannerSlider items={3}/>
            </div>
        </section>

         <section className="py-5 pt-0 bg-white">
            <div className="container">
                 <h3 className="text-[20px] font-[600]">Featured Products</h3>
                <ProductsSlider items={6}/>
                <AdsBannerSlider items={3}/>
            </div>
        </section>

         <section className="!py-5 !pb-8 pt-0 bg-white">
            <div className="container">
                <h3 className="text-[20px] font-[600] !mb-4">From The Blog</h3>
                 <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Autoplay, Scrollbar]}
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className='blogSlider'
                                >
                
                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <BlogItem/>
                                    </SwiperSlide>

                                    
                                    </Swiper>
                                   
            </div>

         </section>

     </>

     
    )
}

export default Home;
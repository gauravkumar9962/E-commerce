import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import { AiTwotoneGift } from 'react-icons/ai';
import { IoStatsChartSharp } from 'react-icons/io5';
import { AiTwotonePieChart } from 'react-icons/ai';
import { BsBank } from 'react-icons/bs';
import { RiProductHuntLine } from 'react-icons/ri';

const DashboardBoxes=()=>{
    return (
        <>
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        mousewheel={true}
        modules={[Navigation, Mousewheel]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
            <div className='box p-5! cursor-pointer bg-white hover:bg-[#f9f7f7] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                <AiTwotoneGift className='text-[40px] text-[#3872fa]'/>
                <div className='info w-[70%]'>
                    <h3>Total Images</h3>
                    <b>$1,390</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#3872fa]'/>
            </div>
        </SwiperSlide>
        
         <SwiperSlide>
            <div className='box p-5! cursor-pointer bg-white hover:bg-[#f9f7f7] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                <AiTwotonePieChart className='text-[40px] text-[#10b981]'/>
                <div className='info w-[70%]'>
                    <h3>Sales</h3>
                    <b>$11,390</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#10b981]'/>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='box p-5! cursor-pointer bg-white hover:bg-[#f9f7f7] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                <BsBank className='text-[35px] text-[#7928ca]'/>
                <div className='info w-[70%]'>
                    <h3>Revenue</h3>
                    <b>$31.90</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[#7928ca]'/>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='box p-5! cursor-pointer bg-white hover:bg-[#f9f7f7] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                <RiProductHuntLine className='text-[40px] text-[hsl(0,92%,58%)]'/>
                <div className='info w-[70%]'>
                    <h3>Total Product</h3>
                    <b>1,390</b>
                </div>
                <IoStatsChartSharp className='text-[50px] text-[hsl(0,92%,58%)]'/>
            </div>
        </SwiperSlide>

      </Swiper>
        </>
    )
}
export default DashboardBoxes;
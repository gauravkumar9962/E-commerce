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

const DashboardBoxes = () => {
    return (
        <>
            <div className='shadow-lg'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={true}
                    mousewheel={true}
                    modules={[Navigation, Mousewheel]}
                    className="dashboardBoxesSlider"
                >
                    <SwiperSlide>
                        <div className='box p-5! cursor-pointer bg-[#3872fa] hover:bg-[#5584f4] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                            <AiTwotoneGift className='text-[40px] text-white' />
                            <div className='info w-[70%]'>
                                <h3 className='text-white'>Total Images</h3>
                                <b className='text-white'>$1,390</b>
                            </div>
                            <IoStatsChartSharp className='text-[50px] text-white' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box p-5! cursor-pointer bg-[#10b981] hover:bg-[#40bb92] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                            <AiTwotonePieChart className='text-[40px] text-white' />
                            <div className='info w-[70%]'>
                                <h3 className='text-white'>Sales</h3>
                                <b className='text-white'>$11,390</b>
                            </div>
                            <IoStatsChartSharp className='text-[50px] text-white' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box p-5! cursor-pointer bg-[#7928ca] hover:bg-[#8d4dcd] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                            <BsBank className='text-[35px] text-[#fcfaff]' />
                            <div className='info w-[70%]'>
                                <h3>Revenue</h3>
                                <b>$31.90</b>
                            </div>
                            <IoStatsChartSharp className='text-[50px] text-[#fefefe]' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='box p-5! cursor-pointer bg-[hsl(0,92%,58%)] hover:bg-[hsl(0,83%,67%)] rounded-md border border-[rgba(0,0,0,0.2)] flex items-center gap-4'>
                            <RiProductHuntLine className='text-[40px] text-white' />
                            <div className='info w-[70%]'>
                                <h3>Total Product</h3>
                                <b>1,390</b>
                            </div>
                            <IoStatsChartSharp className='text-[50px] text-white' />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
export default DashboardBoxes;
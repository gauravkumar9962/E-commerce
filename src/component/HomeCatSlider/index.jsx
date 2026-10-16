import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
    return (
        <div className='homeCatSlider !pt-4 !py-8'>
            <div className='container'>
                <Swiper
                    modules={[Pagination, FreeMode]}
                    slidesPerView={7}
                    spaceBetween={30}
                    

                    freeMode={true}
                    pagination={{
                        dynamicBullets: true,
                    }}


                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/a49df561-69d5-46bd-8474-ab472e81197b.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                     <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1474793c-a59c-4ce6-8f32-7b13f8e9ca8c.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                     <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/43929b24-995e-4cd0-bd60-6ea8a271286e.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                     <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1781075086335-4.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                     <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1786977877773-712.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                     <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1785873510735-51.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/92077089-b1a8-422a-ae62-89dc8ec76d24.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/902132bf-d838-4123-a956-fd8b4cf7f98c.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/88fcc584-2959-4478-8cc7-fda5f360e9e3.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1781609377241-3.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/faf99f29-454b-41fe-8b7b-b306e4dbd20b.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1cee2986-d5e1-4d7a-91f1-cc2ba40e7b6b.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/afdf62cc-3758-4254-8706-795a2089f828.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1771828139315-298.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1771841412291-319.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item !py-7 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/db0e1509-bc92-4831-ac36-b86f09fade47.png" className='transition-all' />
                                <h3 className='text-[17px] font-[550] !mt-3'>Ladies clothes</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default HomeCatSlider;
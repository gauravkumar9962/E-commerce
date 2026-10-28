
import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../component/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProductsSlider from "../../component/ProductsSlider";
import { ProductDetailsComponent } from '../../component/ProductDetail';

const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
        <div className="!py-5">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" className="link transition">
                        Home
                    </Link>

                    <Link to="/" className="link transition">
                        Fashion
                    </Link>

                     <Link className="link transition">
                        Cropped Satin Bomber Jacket
                    </Link>
                </Breadcrumbs>
            </div>
        </div>

        <section className='bg-white !py-5'>
            <div className="container flex items-center !gap-50">
                <div className="productZoomContainer w-[30%]">
                    <ProductZoom />
                </div>

                <div className='productContent w-[70%] !pr-10'>
                    <ProductDetailsComponent/>    
                </div>
            </div>

            <div className='container !pt-10'>
            <div className='flex items-center !gap-8 !mb-5'>
                <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===0 && 'text-[#ff5252]'}`} onClick={()=>setActiveTab(0)}>Description</span>

                <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===1 && 'text-[#ff5252]'}`} onClick={()=>setActiveTab(1)}>Product Details</span>

                <span className={`link text-[18px] cursor-pointer font-[500] ${activeTab===2 && 'text-[#ff5252]'}`} onClick={()=>setActiveTab(2)}>Review (5)</span>
            </div>

            {
                activeTab===0 && (
                    <div className='shadow-md w-full !py-5 !px-8 rounded-md'>
                <h4>Powerful Processor</h4>
                
                <p>Segment's fastest phone with 1.03Mn+ AnTuTu score: MediaTek Dimensity 7400 Apex Processor with enhanced performance, an advanced power-efficient chip, delivering smoother multitasking, faster app launches, and a lag-free everyday experience.</p>

                <h4>7000mAh Battery</h4>

                <p>Massive 7000mAh Battery: More Power, Less Charging. Power that lasts up to 2 days with a massive 7000mAh battery, backed by 45W SUPERVOOC fast charging for quick top-ups. Enjoy up to 81.7 hours of music playback, 26.2 hours of YouTube streaming, and 11.7 hours of video calls on a full charge. Even a quick 10-minute charge gives you up to 7.5 hours of calls, 2.2 hours of YouTube, and 1.4 hours of gaming.</p>

                <h4>Upto 144FPS</h4>

                <p>Segment's highest FPS for gaming: Experience the segment’s highest FPS for gaming with up to 144 FPS support for ultra-smooth, responsive gameplay and up to 90 FPS for top-rated shooters. Stay ahead with faster reactions and seamless performance. Plus, a category-leading 5,300 mm² VC cooling system and 5G++ network to keep your intense gaming cool and smooth, ensuring stable performance so you can play longer and win more.</p>

                <h4>Highest 144Hz refresh rate</h4>

                <p>Segment's highest 144Hz refresh rate display: Enjoy a super-smooth 144Hz display that delivers fast, fluid visuals in every swipe. Experience clear viewing even in bright sunlight with up to 1000 nits peak brightness for an immersive experience. With Aqua Touch for precise control, even with wet or oil fingers, everything feels fast, clear, and effortless.</p>

                <h4>4K video recording</h4>

                <p>4K video recording. Triple Camera. Made for Every Moment: 50MP main camera, 8MP front camera, and 2MP depth-assist camera, built to capture every moment with clarity. Capture every moment in 4K at 30 FPS with sharper detail and smoother motion. Bring memories to life with 4K Motion Photos, rich, vivid, and ready to replay.</p>

                <h4>Fast and smooth for 5 years</h4>

                <p>Smoothness for 5 Years, Built for You: Real-world toughness meets military-grade durability, built to stay fast and smooth for 5 years.</p>
                    </div>
                )}

                {
                    activeTab===1 && (
                        <div className='shadow-md w-full !py-5 !px-8 rounded-md'>
                        <div class="relative overflow-x-auto  shadow-xs rounded-base border border-default">
                        <table class="table-fixed w-full text-sm text-left rtl:text-right text-body">
                            <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                                <tr>
                                    <th scope="col" class="!px-6 !py-4 font-medium">
                                        Additional details
                                    </th>
                                    <th scope="col" class="!px-6 !py-4 font-medium">
                                        
                                    </th>
                                    <th scope="col" class="!px-6 !py-4 font-medium">
                                        Display
                                    </th>
                                     <th scope="col" class="!px-6 !py-4 font-medium">
                                        
                                    </th>
                                     <th scope="col" class="!px-6 !py-4 font-medium">
                                        Item details
                                    </th>
                                     <th scope="col" class="!px-6 !py-4 font-medium">
                                        
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-neutral-primary border-b border-default">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Operating System
                                    </th>
                                    <td class="!px-6 !py-4">
                                        OxygenOS 16
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Screen Size Unit of Measure
                                    </td>
                                    <td class="!px-6 !py-4">
                                        	6.72 Inches
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Brand Name
                                    </td>
                                    <td class="!px-6 !py-4">
                                        OnePlus
                                    </td>
                                   
                                </tr>
                                <tr class="bg-neutral-primary border-b border-default">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        RAM Memory Installed
                                    </th>
                                    <td class="!px-6 !py-4">
                                        8 GB
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Resolution
                                    </td>
                                    <td class="!px-6 !py-4">
                                        2400 x 1080
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Box Contents
                                    </td>
                                    <td class="!px-6 !py-4">
                                         Phone Case, Power Adapter, Quick Start Guide, SIM Tray Ejector, USB Cable
                                    </td>
                                   
                                </tr>
                                <tr class="bg-neutral-primary border-b border-default">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Processor Series
                                    </th>
                                    <td class="!px-6 !py-4">
                                        Mediatek Dimensity 7400
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Refresh Rate
                                    </td>
                                    <td class="!px-6 !py-4">
                                       144HZ
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Manufacturer
                                    </td>
                                    <td class="!px-6 !py-4">
                                       DBG TECHNOLOGY (INDIA) PRIVATE LIMITED Address:PLOT NO 10, SECTOR-5, HSIIDC INDUSTRIAL MODEL TOWNSHIP, BAWAL,REWARI, HARYANA -123501, OnePlus
                                    </td>
                                </tr>
                                
                                <tr class="bg-neutral-primary border-b border-default">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Memory Storage Capacity
                                    </th>
                                    <td class="!px-6 !py-4">
                                        128 GB
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Maximum Display Resolution
                                    </td>
                                    <td class="!px-6 !py-4">
                                        2400 x 1080 Pixels
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Item Type Name
                                    </td>
                                    <td class="!px-6 !py-4">
                                         SmartPhone
                                    </td>
                                   
                                </tr>

                                <tr class="bg-neutral-primary border-b border-default">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Connector Type
                                    </th>
                                    <td class="!px-6 !py-4">
                                        USB Type c
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Display Pixel Density
                                    </td>
                                    <td class="!px-6 !py-4">
                                        392 Pixels Per Inch (PPI)
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Best Sellers Rank
                                    </td>
                                    <td class="!px-6 !py-4">
                                        #46 in Electronics (See Top 100 in Electronics)
                                    </td>
                                   
                                </tr>

                                <tr class="bg-neutral-primary">
                                    <th scope="row" class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Biometric Security Feature
                                    </th>
                                    <td class="!px-6 !py-4">
                                        Fingerprint Recognition
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        Display Type
                                    </td>
                                    <td class="!px-6 !py-4">
                                        LCD
                                    </td>
                                    <td class="!px-6 !py-4 font-medium text-heading whitespace-nowrap">
                                        ASIN
                                    </td>
                                    <td class="!px-6 !py-4">
                                        B0GVYXPZBS
                                    </td>
                                   
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    </div>
                    )
                }

                {
                    activeTab===2 && (
                        <div className='shadow-md w-full !py-5 !px-8 rounded-md'>
                        <div className='w-full productReviewContainer'>
                            <h2 className='text-[20px]'>Customers Review</h2>

                            <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5 !pr-5'>
                                <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.5)] w-full flex items-center justify-between'>
                                    <div className='info w-full flex items-center !gap-3'>
                                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                            <img src="https://i.pinimg.com/736x/53/6e/ff/536efff82f343938c1fe8ea60f2136ef.jpg" className='w-full' />
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[17px]'>Gaurav Kumar</h4>
                                            <h5 className='text-[14px] !mb-0'>2026-12-10</h5>
                                            <p className='!mt-0 !mb-0'>Grand Blue Dreaming Season 03 is now available to stream and download on RareAnimesIndia. This popular Animation, Comedy anime series, produced by Amazon Prime, offers a thrilling experience with high-quality animation and storyline.

                                            Get the complete season in Dual Audio Hindi-English along with multi-language subtitles. Available in WEB-DL HD 480p, 720p, 1080p formats for the best viewing experience.</p>
                                            
                                        </div>
                                    </div>

                                    <Rating name="size-small" defaultValue={5} readOnly/>

                                </div>

                                <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.5)] w-full flex items-center justify-between'>
                                    <div className='info w-full flex items-center !gap-3'>
                                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                            <img src="https://i.pinimg.com/736x/37/89/37/37893709dcf60ffe2b5865f20e5d2fe4.jpg" className='w-full' />
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[17px]'>Gaurav Kumar</h4>
                                            <h5 className='text-[14px] !mb-0'>2026-12-10</h5>
                                            <p className='!mt-0 !mb-0'>Grand Blue Dreaming Season 03 is now available to stream and download on RareAnimesIndia. This popular Animation, Comedy anime series, produced by Amazon Prime, offers a thrilling experience with high-quality animation and storyline.

                                            Get the complete season in Dual Audio Hindi-English along with multi-language subtitles. Available in WEB-DL HD 480p, 720p, 1080p formats for the best viewing experience.</p>
                                            
                                        </div>
                                    </div>

                                    <Rating name="size-small" defaultValue={5} readOnly/>

                                </div>

                                <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.5)] w-full flex items-center justify-between'>
                                    <div className='info w-full flex items-center !gap-3'>
                                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                            <img src="https://i.pinimg.com/236x/9e/89/4e/9e894e84cc340c7822a228e6e9577cd6.jpg" className='w-full' />
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[17px]'>Gaurav Kumar</h4>
                                            <h5 className='text-[14px] !mb-0'>2026-12-10</h5>
                                            <p className='!mt-0 !mb-0'>Grand Blue Dreaming Season 03 is now available to stream and download on RareAnimesIndia. This popular Animation, Comedy anime series, produced by Amazon Prime, offers a thrilling experience with high-quality animation and storyline.

                                            Get the complete season in Dual Audio Hindi-English along with multi-language subtitles. Available in WEB-DL HD 480p, 720p, 1080p formats for the best viewing experience.</p>
                                            
                                        </div>
                                    </div>

                                    <Rating name="size-small" defaultValue={5} readOnly/>

                                </div>

                                <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.5)] w-full flex items-center justify-between'>
                                    <div className='info w-full flex items-center !gap-3'>
                                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                            <img src="https://i.pinimg.com/236x/9e/89/4e/9e894e84cc340c7822a228e6e9577cd6.jpg" className='w-full' />
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[17px]'>Gaurav Kumar</h4>
                                            <h5 className='text-[14px] !mb-0'>2026-12-10</h5>
                                            <p className='!mt-0 !mb-0'>Grand Blue Dreaming Season 03 is now available to stream and download on RareAnimesIndia. This popular Animation, Comedy anime series, produced by Amazon Prime, offers a thrilling experience with high-quality animation and storyline.

                                            Get the complete season in Dual Audio Hindi-English along with multi-language subtitles. Available in WEB-DL HD 480p, 720p, 1080p formats for the best viewing experience.</p>
                                            
                                        </div>
                                    </div>

                                    <Rating name="size-small" defaultValue={5} readOnly/>

                                </div>

                                <div className='review !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.5)] w-full flex items-center justify-between'>
                                    <div className='info w-full flex items-center !gap-3'>
                                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                            <img src="https://i.pinimg.com/236x/9e/89/4e/9e894e84cc340c7822a228e6e9577cd6.jpg" className='w-full' />
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[17px]'>Gaurav Kumar</h4>
                                            <h5 className='text-[14px] !mb-0'>2026-12-10</h5>
                                            <p className='!mt-0 !mb-0'>Grand Blue Dreaming Season 03 is now available to stream and download on RareAnimesIndia. This popular Animation, Comedy anime series, produced by Amazon Prime, offers a thrilling experience with high-quality animation and storyline.

                                            Get the complete season in Dual Audio Hindi-English along with multi-language subtitles. Available in WEB-DL HD 480p, 720p, 1080p formats for the best viewing experience.</p>
                                            
                                        </div>
                                    </div>

                                    <Rating name="size-small" defaultValue={5} readOnly/>

                                </div>
                                
                            </div>

                            <br />

                            <div className='reviewForm bg-[#f6f6f6] !p-4 rounded-md'>
                                <h2 className='text-[18px]'>Add a review</h2>

                                <form className='w-full !mt-5'>
                                            <TextField
                                            id="outlined-multiline-static"
                                            label="Write a review"
                                            multiline
                                            rows={5}
                                            className='w-full !mb-5'
                                            />
                                     <Rating name="size-small" defaultValue={0}/>

                                     <div className='flex items-center !mt-5'>
                                        <Button className='btn-org'>Submit Review</Button>
                                     </div>

                                </form>
                            </div>
                        </div>
                        </div>
                    )
                }


            </div>

                <div className='container !pt-8'>
                <h3 className="text-[20px] font-[600]">Related Products</h3>
                <ProductsSlider items={6}/>
                </div>

        </section>
        </>
    );
};

export default ProductDetails;

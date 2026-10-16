import React from 'react'
import "../BannerBoxV2/style.css"
import { Link } from 'react-router-dom';

const BannerBoxV2 = (props) => {
    return (
        <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
            <img src={props.image} className="w-full transition-all duration-150 group-hover:scale-105" />

            <div className={`info absolute !p-5 top-45 ${props.info==="left" ? 'left-0': 'right-0'} w-[60%] h-[37%] z-50 flex items-center justify-center flex-col gap-2 ${props.info==="left" ? '': '!pl-1'} backdrop-blur-sm text-bold rounded-md border-none shadow-xl shadow-emerald-500/20`}>
                <h2 className='text-[20px] font-[700] w-full'>Samsung Vecume</h2>
                <span className='text-[25px] text-[#ff5252] w-full'>$129.00</span>
                <div className='w-full text-[#00ff51]'>
                    <Link to="/" className='text-[16px] font-[600] link'>SHOP NOW</Link>
                </div>
            </div>
        // </div>
    )
}

export default BannerBoxV2;
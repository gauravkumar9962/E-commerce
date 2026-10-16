import React from 'react'
import { IoTimerOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
    return (
        <div className='blogItem'>
            <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaDqP7aE2RE-caaTv_nYPDgtfJkEFedoMpVzPkrMn3A&s=10" className='w-full transition-all hover:scale-105' alt='blog image'/>

                <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[12px] font-[600] gap-1'>
                    <IoTimerOutline className='text-[18px]'/> 5 SEPTEMBER, 2026
                </span>
            </div>

            <div className='info py-4'>
                <h2 className='text-[16px] font-[600] text-black'><Link to="/" className='link'>Nullam ullamcorper ornare molestie</Link></h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] !mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

                <Link className='link font-[500] text-[14px] flex items-center gap-1'>Read More<IoIosArrowForward/></Link>
            </div>
        </div>
    )
}

export default BlogItem;